import { OperationName, ResolvedOperations } from 'TreeToTS';
import { Environment, OperationType } from '../../../Models';
import { graphqlErrorJavascript, javascriptFunctions } from './';

const generateOperationChainingJavascript = (ot: OperationType, on: OperationName): string =>
  `${ot}: (o) =>
    fullChainConstruct(options)('${ot}', '${on.name}')(o).then(
      (response) => response
    )`;

const generateOperationsChainingJavascipt = ({ query, mutation, subscription }: ResolvedOperations): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationChainingJavascript(OperationType.query, query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationChainingJavascript(OperationType.mutation, mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationChainingJavascript(OperationType.subscription, subscription.operationName));
  }
  return allOps;
};

const generateOperationZeusJavascript = (ot: OperationType, on: OperationName): string =>
  `${ot}: (o) => queryConstruct('${ot}', '${on.name}')(o)`;

const generateOperationsZeusJavascipt = ({ query, mutation, subscription }: ResolvedOperations): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationZeusJavascript(OperationType.query, query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationZeusJavascript(OperationType.mutation, mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationZeusJavascript(OperationType.subscription, subscription.operationName));
  }
  return allOps;
};

const generateOperationCastJavascript = (t: OperationType): string => `${t}: (o) => (b) => o`;

const generateOperationsCastJavascipt = ({ query, mutation, subscription }: ResolvedOperations): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationCastJavascript(OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationCastJavascript(OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationCastJavascript(OperationType.subscription));
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
