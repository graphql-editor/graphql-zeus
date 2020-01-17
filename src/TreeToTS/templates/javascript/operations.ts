import { OperationName, ResolvedOperations } from 'TreeToTS';
import { Environment } from '../../../Models';
import { graphqlErrorJavascript, javascriptFunctions } from './';

const generateOperationChainingJavascript = (t: OperationName): string =>
  `${t}: (o) =>
    fullChainConstruct(options)('${t.name}')(o).then(
      (response) => response
    )`;

const generateOperationsChainingJavascipt = ({ query, mutation, subscription }: ResolvedOperations): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationChainingJavascript(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationChainingJavascript(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationChainingJavascript(subscription.operationName));
  }
  return allOps;
};

const generateOperationZeusJavascript = (t: OperationName): string =>
  `${t.name}: (o) => queryConstruct('${t.name}')(o)`;

const generateOperationsZeusJavascipt = ({ query, mutation, subscription }: ResolvedOperations): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationZeusJavascript(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationZeusJavascript(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationZeusJavascript(subscription.operationName));
  }
  return allOps;
};

const generateOperationCastJavascript = (t: OperationName): string => `${t}: (o) => (b) => o`;

const generateOperationsCastJavascipt = ({ query, mutation, subscription }: ResolvedOperations): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationCastJavascript(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationCastJavascript(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationCastJavascript(subscription.operationName));
  }
  return allOps;
};
export const bodyJavascript = (env: Environment, resolvedOperations: ResolvedOperations): string => `
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
