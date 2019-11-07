import { Environment } from '../../../Models/Environment';
import { graphqlErrorJavascript, javascriptFunctions } from './';
const generateOperationChainingJavascript = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: (o) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response) => response
    )`;

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

const generateOperationZeusJavascript = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: (o) => queryConstruct('${t}')(o)`;

const generateOperationsZeusJavascipt = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  allOps.push(generateOperationZeusJavascript('Query'));
  if (mutations && mutations.length) {
    allOps.push(generateOperationZeusJavascript('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationZeusJavascript('Subscription'));
  }
  return allOps;
};

const generateOperationCastJavascript = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: (o) => o`;

const generateOperationsCastJavascipt = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  allOps.push(generateOperationCastJavascript('Query'));
  if (mutations && mutations.length) {
    allOps.push(generateOperationCastJavascript('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationCastJavascript('Subscription'));
  }
  return allOps;
};
export const bodyJavascript = (
  env: Environment,
  {
    queries,
    mutations,
    subscriptions
  }: {
    queries: string[];
    mutations?: string[];
    subscriptions?: string[];
  }
) => `
${graphqlErrorJavascript}
${javascriptFunctions(env)}

  export const Chain = (...options) => ({
    ${generateOperationsChainingJavascipt({ queries, mutations, subscriptions }).join(',\n')}
  });
  export const Zeus = {
    ${generateOperationsZeusJavascipt({ queries, mutations, subscriptions }).join(',\n')}
  };
  export const Cast = {
    ${generateOperationsCastJavascipt({ queries, mutations, subscriptions }).join(',\n')}
  };
    `;
