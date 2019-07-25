export const typescriptFunctions = `
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return \`"\${value}"\`;
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
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
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

const isArrayFunction = <T extends [Record<any, any>, Record<any, any>]>(
  parent: string[],
  a: T
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
  \`{\${Object.keys(o).map((k) => \`\${resolveKV(k, o[k])}\`).join('')}}\`;

const traverseToSeekArrays = <T extends Record<any, any>>(parent: string[], a?: T) => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string,any> = {};
  Object.keys(a).map((k) => {
    if (Array.isArray(a[k])) {
      b[k] = isArrayFunction([...parent, k], a[k]);
    } else {
      if (typeof a[k] === 'object') {
        b[k] = traverseToSeekArrays([...parent, k], a[k]);
      } else {
        b[k] = a[k];
      }
    }
  });
  return objectToTree(b);
};

const buildQuery = <T extends Record<any, any>>(type: string, a?: T) =>
  traverseToSeekArrays([type], a).replace(/\\"([^{^,^\\n^\\"]*)\\":([^{^,^\\n^\\"]*)/g, '$1:$2');

const fullChainConstruct = (options: fetchOptions) => (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) =>
  apiFetch(options, \`\${t.toLowerCase()}\${buildQuery(t, o)}\`);

const apiFetch = (options: fetchOptions, query: string, name?: string) => {
  let fetchFunction;
  let queryString = query;
  let fetchOptions = options[1] || {};
  if (typeof fetch !== 'undefined') {
    fetchFunction = fetch;
  } else {
    try {
      fetchFunction = require('node-fetch');
    } catch (error) {
      throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
    }
  }
  if (fetchOptions.method && fetchOptions.method === 'GET') {
    if (typeof encodeURIComponent !== 'undefined') {
      queryString = encodeURIComponent(query);
    } else {
      queryString = require('querystring').stringify(query);
    }
    return fetchFunction(\`\${options[0]}?query=\${queryString}\`, fetchOptions)
      .then((response: any) => response.json() as Promise<GraphQLResponse>)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        if (!name) {
          return response.data;
        }
        return response.data && response.data[name];
      });
  }
  return fetchFunction(\`\${options[0]}\`, {
    body: JSON.stringify({ query: queryString }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    ...fetchOptions
  })
    .then((response: any) => response.json() as Promise<GraphQLResponse>)
    .then((response: GraphQLResponse) => {
      if (response.errors) {
        throw new GraphQLError(response);
      }
      if (!name) {
        return response.data;
      }
      return response.data && response.data[name];
    });
};
  `;
