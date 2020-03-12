import { Environment } from '../../../Models';

export const typescriptFunctions = (env: Environment): string => `
export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  \`"\${value.replace(/"/g, '\\\\\\"')}"\`;
    case 'Int':
      return \`\${value}\`;
    case 'Float':
      return \`\${value}\`;
    case 'Boolean':
      return \`\${value}\`;
    case 'ID':
      return \`"\${value}"\`;
    case 'enum':
      return \`\${value}\`;
    case 'scalar':
      return \`\${value}\`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return \`null\`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(\`Cannot resolve \${type} \${name}\${key ? \` \${key}\` : ''}\`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(\`ZEUS_VAR$\`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return \`\\\$\${value.split(\`ZEUS_VAR$\`)[1]}__ZEUS_VAR__\${typeResolved}\${isRequired}\`;
  }
  if (isArray && !blockArrays) {
    return \`[\${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]\`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return \`{\${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => \`\${ak}:\${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}\`
        )}}\`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? \`(\${keyValues
            .map(
              (v) =>
                \`\${v}:\${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}\`
            )
            .join(',')})\${r ? traverseToSeekArrays(parent, r) : ''}\`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? \`(\${keyValues
          .map(
            (v) =>
              \`\${v}:\${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}\`
          )
          .join(',')})\${r ? traverseToSeekArrays(parent, r) : ''}\`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? \`\${k}{\${objectToTree(v)}}\` : \`\${k}\${v}\`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  \`{\${Object.keys(o).map((k) => \`\${resolveKV(k, o[k])}\`).join(' ')}}\`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              \`\${aliasOperationName}__alias__\${aliasKey}: \${aliasOperationName}\`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\\\$\\b\\w*ZEUS_VAR\\w*\\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
  });
  return \`(\${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => \`\${variableName}:\${variableType}\`)
    .join(', ')})\${filteredQuery}\`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  \`\${t.toLowerCase()}\${inspectVariables(buildQuery(tName, o))}\`;
  
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const \$ = (t: TemplateStringsArray): any => \`ZEUS_VAR\$\${t.join('')}\`;

${require(`./${env}/fetchFunction`).default}
`;
