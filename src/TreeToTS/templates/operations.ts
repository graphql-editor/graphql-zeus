import { constantTypes, graphqlError, graphqlErrorJavascript } from './constantTypes';

const generateOperation = (
  t: 'Query' | 'Mutation' | 'Subscription',
  schemaType: string,
  name: string
) => `\t${name}: ((props:any) => (o:any) =>
  \t\tfullConstruct(options)('${t}', '${name}')(props)(o).then(
  \t\t\t(response:any) => response as GraphQLDictReturnType<${schemaType}['${name}']>
  \t\t)) as FunctionToGraphQL<${schemaType}['${name}']>`;

const generateOperationJavascript = (
  t: 'Query' | 'Mutation' | 'Subscription',
  name: string
) => `\t${name}: ((props) => (o) =>
    \t\tfullConstruct(options)('${t}', '${name}')(props)(o).then(
    \t\t\t(response) => response
    \t\t))`;

const generateOperationJavascriptDefinition = (
  t: 'Query' | 'Mutation' | 'Subscription',
  name: string
) => `\t${name}: FunctionToGraphQL<${t}['${name}']>`;

const generateOperations = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(`Query: {${queries.map((q) => generateOperation('Query', 'Query', q)).join(',\n')}}`);
  if (mutations) {
    allOps.push(
      `Mutation: {${mutations
        .map((q) => generateOperation('Mutation', 'Mutation', q))
        .join(',\n')}}`
    );
  }
  if (subscriptions) {
    allOps.push(
      `Subscription: {${subscriptions
        .map((q) => generateOperation('Subscription', 'Subscription', q))
        .join(',\n')}}`
    );
  }
  return allOps;
};
const generateOperationsJavascript = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(
    `Query: {${queries.map((q) => generateOperationJavascript('Query', q)).join(',\n')}}`
  );
  if (mutations) {
    allOps.push(
      `Mutation: {${mutations.map((q) => generateOperationJavascript('Mutation', q)).join(',\n')}}`
    );
  }
  if (subscriptions) {
    allOps.push(
      `Subscription: {${subscriptions
        .map((q) => generateOperationJavascript('Subscription', q))
        .join(',\n')}}`
    );
  }
  return allOps;
};

export const generateOperationsJavascriptDefinitions = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(
    `Query: {${queries.map((q) => generateOperationJavascriptDefinition('Query', q)).join(',\n')}}`
  );
  if (mutations) {
    allOps.push(
      `Mutation: {${mutations
        .map((q) => generateOperationJavascriptDefinition('Mutation', q))
        .join(',\n')}}`
    );
  }
  if (subscriptions) {
    allOps.push(
      `Subscription: {${subscriptions
        .map((q) => generateOperationJavascriptDefinition('Subscription', q))
        .join(',\n')}}`
    );
  }
  return allOps;
};
export const body = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}) => `
${graphqlError}
${constantTypes}
const joinArgs = (q: Dict): string => {
  return Array.isArray(q)
    ? \`[\${q.map(joinArgs).join(',')}]\`
    : typeof q === 'object'
    ? \`{\${Object.keys(q)
        .map((k) => \`\${k}:\${joinArgs(q[k])}\`)
        .join(',')}}\`
    : typeof q === 'string'
    ? \`"\${q}"\`
    : q;
};

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

export const ReturnGraphQLTypeOfArgument = (type: string, name: string, key: string) => {
  return AllTypesProps[type][name][key].type as string;
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

const resolveArgs = (q: Dict, t: 'Query' | 'Mutation' | 'Subscription', name: string): string => {
  const argsKeys = Object.keys(q);
  if (argsKeys.length === 0) {
    return '';
  }
  return \`(\${argsKeys
    .map((k) => \`\${k}:\${TypesPropsResolver({ value: q[k], type: t, name, key: k })}\`)
    .join(',')})\`;
};

const isArrayFunction = <T extends [Record<any, any>, Record<any, any>]>(
  parent: string[],
  a: T
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const keyValues = Object.keys(values);
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

const buildQuery = <T extends Record<any, any>>(type: string, name: string, a?: T) =>
  traverseToSeekArrays([type, name], a).replace(/\\"([^{^,^\\n^\\"]*)\\":([^{^,^\\n^\\"]*)/g, '$1:$2');

const construct = (t: 'Query' | 'Mutation' | 'Subscription', name: string, args: Dict = {}) => (
  returnedQuery?: string
) => \`
        \${t.toLowerCase()}{
          \${name}\${resolveArgs(args, t, name)}\${returnedQuery}
        }
  \`;

const fullConstruct = (options: fetchOptions) => (
  t: 'Query' | 'Mutation' | 'Subscription',
  name: string
) => (props?: Dict) => (o?: Record<any, any>) =>
  apiFetch(options, construct(t, name, props)(buildQuery(t, name, o)), name);

const apiFetch = (options: fetchOptions, query: string, name: string) => {
  let queryString = query;
  if (typeof encodeURIComponent !== 'undefined') {
    queryString = encodeURIComponent(query);
  }else{
    queryString = require("querystring").stringify(query);
  }
  let fetchFunction;
  if (typeof fetch !== 'undefined') {
    fetchFunction = fetch;
  } else {
    fetchFunction = require('node-fetch');
  }
  return fetchFunction(\`\${options[0]}?query=\${queryString}\`, options[1] || {})
    .then((response:any) => response.json() as Promise<GraphQLResponse>)
    .then((response:GraphQLResponse) => {
      if (response.errors) {
        throw new GraphQLError(response);
      }
      return response.data && response.data[name];
    });
};

export const Api = (...options: fetchOptions) => ({
    ${generateOperations({ queries, mutations, subscriptions }).join(',\n')}
});
  `;

export const javascriptBody = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}) => `
${graphqlErrorJavascript}
const joinArgs = (q) => {
    return Array.isArray(q)
      ? \`[\${q.map(joinArgs).join(',')}]\`
      : typeof q === 'object'
      ? \`{\${Object.keys(q)
          .map((k) => \`\${k}:\${joinArgs(q[k])}\`)
          .join(',')}}\`
      : typeof q === 'string'
      ? \`"\${q}"\`
      : q;
  };

  export const ScalarResolver = (scalar, value) => {
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

  export const ReturnGraphQLTypeOfArgument = (type, name, key) => {
    return AllTypesProps[type][name][key].type;
  };

  export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
  }) => {
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
      resolvedValue = resolvedValue[key];
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    if (isArray && !blockArrays) {
      return \`[\${value
        .map((v) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
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
      return ScalarResolver(AllTypesProps[typeResolved], value);
    }
    return reslovedScalar;
  };

  const resolveArgs = (q, t, name) => {
    const argsKeys = Object.keys(q);
    if (argsKeys.length === 0) {
      return '';
    }
    return \`(\${argsKeys
      .map((k) => \`\${k}:\${TypesPropsResolver({ value: q[k], type: t, name, key: k })}\`)
      .join(',')})\`;
  };

  const isArrayFunction = (
    parent,
    a
  ) => {
    const [values, r] = a;
    const [mainKey, key, ...keys] = parent;
    const [typeResolverKey] = keys.splice(keys.length - 1, 1);
    let valueToResolve = ReturnTypes[mainKey][key];
    for (const k of keys) {
      valueToResolve = ReturnTypes[valueToResolve][k];
    }

    const keyValues = Object.keys(values);
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

  const resolveKV = (k, v) =>
    typeof v === 'boolean' ? k : typeof v === 'object' ? \`\${k}{\${objectToTree(v)}}\` : \`\${k}\${v}\`;

  const objectToTree = (o) =>
    \`{\${Object.keys(o).map((k) => \`\${resolveKV(k, o[k])}\`).join(' ')}}\`;

  const traverseToSeekArrays = (parent, a) => {
    if (!a) return '';
    if (Object.keys(a).length === 0) {
      return '';
    }
    let b = {};
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

  const buildQuery = (type, name, a) =>
    traverseToSeekArrays([type, name], a).replace(/\\"([^{^,^\\n^\\"]*)\\":([^{^,^\\n^\\"]*)/g, '$1:$2');

  const construct = (t, name, args) => (
    returnedQuery
  ) => \`
          \${t.toLowerCase()}{
            \${name}\${resolveArgs(args, t, name)}\${returnedQuery}
          }
    \`;

  const fullConstruct = (options) => (
    t,
    name
  ) => (props) => (o) =>
    apiFetch(options, construct(t, name, props)(buildQuery(t, name, o)), name);

  const apiFetch = (options, query, name) => {
    let queryString = query;
    if (typeof encodeURIComponent !== 'undefined') {
      queryString = encodeURIComponent(query);
    }else{
      queryString = require("querystring").stringify(query);
    }
    let fetchFunction;
    if (typeof fetch !== 'undefined') {
      fetchFunction = fetch;
    } else {
      fetchFunction = require('node-fetch');
    }
    return fetchFunction(\`\${options[0]}?query=\${queryString}\`, options[1] || {})
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data && response.data[name];
      });
  };

  export const Api = (...options) => ({
      ${generateOperationsJavascript({ queries, mutations, subscriptions }).join(',\n')}
  });
    `;
