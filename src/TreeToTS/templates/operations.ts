import { constantTypes, graphqlError, graphqlErrorJavascript } from './constantTypes';
import { javascriptFunctions, typescriptFunctions } from './functions';

const generateOperation = (
  t: 'Query' | 'Mutation' | 'Subscription',
  schemaType: string,
  name: string
) => `\t${name}: ((props:any = {}) => (o:any) =>
  \t\tfullConstruct(options)('${t}', '${name}')(props)(o).then(
  \t\t\t(response:any) => response as GraphQLDictReturnType<${schemaType}['${name}']>
  \t\t)) as FunctionToGraphQL<${schemaType}['${name}']>`;

const generateOperationJavascript = (
  t: 'Query' | 'Mutation' | 'Subscription',
  name: string
) => `\t${name}: ((props = {}) => (o) =>
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
  if (mutations && mutations.length) {
    allOps.push(
      `Mutation: {${mutations
        .map((q) => generateOperation('Mutation', 'Mutation', q))
        .join(',\n')}}`
    );
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(
      `Subscription: {${subscriptions
        .map((q) => generateOperation('Subscription', 'Subscription', q))
        .join(',\n')}}`
    );
  }
  return allOps;
};
const generateOperationChainingJavascript = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: (o) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response) => response
    )`;
const generateOperationChaining = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: ((o: any) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response: any) => response as GraphQLDictReturnType<${t}>
    )) as OperationToGraphQL<${t}>`;

const generateOperationsChainingJavascipt = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  allOps.push(generateOperationChainingJavascript('Query'));
  if (mutations && mutations.length) {
    allOps.push(generateOperationChainingJavascript('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationChainingJavascript('Subscription'));
  }
  return allOps;
};
const generateOperationsChaining = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  allOps.push(generateOperationChaining('Query'));
  if (mutations && mutations.length) {
    allOps.push(generateOperationChaining('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationChaining('Subscription'));
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
  if (mutations && mutations.length) {
    allOps.push(
      `Mutation: {${mutations.map((q) => generateOperationJavascript('Mutation', q)).join(',\n')}}`
    );
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(
      `Subscription: {${subscriptions
        .map((q) => generateOperationJavascript('Subscription', q))
        .join(',\n')}}`
    );
  }
  return allOps;
};

export const generateOperationsJavascriptDefinitionsChaining = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(`Query: OperationToGraphQL<Query>`);
  if (mutations && mutations.length) {
    allOps.push(`Mutation: OperationToGraphQL<Mutation>`);
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(`Subscription: OperationToGraphQL<Subscription>`);
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
  if (mutations && mutations.length) {
    allOps.push(
      `Mutation: {${mutations
        .map((q) => generateOperationJavascriptDefinition('Mutation', q))
        .join(',\n')}}`
    );
  }
  if (subscriptions && subscriptions.length) {
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
${typescriptFunctions}

export const Chain = (...options: fetchOptions) => ({
  ${generateOperationsChaining({ queries, mutations, subscriptions }).join(',\n')}
});

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
${javascriptFunctions}

  export const Chain = (...options) => ({
    ${generateOperationsChainingJavascipt({ queries, mutations, subscriptions }).join(',\n')}
  });

  export const Api = (...options) => ({
      ${generateOperationsJavascript({ queries, mutations, subscriptions }).join(',\n')}
  });
    `;
