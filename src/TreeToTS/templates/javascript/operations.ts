import { ResolvedOperations } from 'TreeToTS';
import { Environment } from '../../../Models/Environment';
import { graphqlErrorJavascript, javascriptFunctions } from './';

export type Operation = 'Query' | 'Mutation' | 'Subscription';

const generateOperationChainingJavascript = (t: Operation): string =>
  `${t}: (o) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response) => response
    )`;

const generateOperationsChainingJavascipt = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (queries && queries.length) {
    allOps.push(generateOperationChainingJavascript('Query'));
  }
  if (mutations && mutations.length) {
    allOps.push(generateOperationChainingJavascript('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationChainingJavascript('Subscription'));
  }
  return allOps;
};

const generateOperationZeusJavascript = (t: Operation): string => `${t}: (o) => queryConstruct('${t}')(o)`;

const generateOperationsZeusJavascipt = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (queries && queries.length) {
    allOps.push(generateOperationZeusJavascript('Query'));
  }
  if (mutations && mutations.length) {
    allOps.push(generateOperationZeusJavascript('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationZeusJavascript('Subscription'));
  }
  return allOps;
};

const generateOperationCastJavascript = (t: Operation): string => `${t}: (o) => (b) => o`;

const generateOperationsCastJavascipt = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (queries && queries.length) {
    allOps.push(generateOperationCastJavascript('Query'));
  }
  if (mutations && mutations.length) {
    allOps.push(generateOperationCastJavascript('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationCastJavascript('Subscription'));
  }
  return allOps;
};
export const bodyJavascript = (env: Environment, resolvedOperations: Partial<ResolvedOperations>): string => `
${graphqlErrorJavascript}
${javascriptFunctions(env)}

  export const Chain = (...options) => ({
    ${generateOperationsChainingJavascipt(resolvedOperations).join(',\n')}
  });
  export const Zeus = {
    ${generateOperationsZeusJavascipt(resolvedOperations).join(',\n')}
  };
  export const Cast = {
    ${generateOperationsCastJavascipt(resolvedOperations).join(',\n')}
  };
    `;
