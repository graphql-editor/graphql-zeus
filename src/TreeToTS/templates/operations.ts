import { constantTypes, graphqlError, graphqlErrorJavascript } from './constantTypes';
import { javascriptFunctions, typescriptFunctions } from './functions';

const generateOperationChainingJavascript = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: (o) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response) => response
    )`;
const generateOperationChaining = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: ((o: any) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response: any) => response as ResolveReturned<${t}>
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
    `;
