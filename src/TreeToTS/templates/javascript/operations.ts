import { OperationName, ResolvedOperations } from 'TreeToTS';
import { Environment, OperationType } from '@/Models';
import { graphqlErrorJavascript, javascriptFunctions } from './';

const generateOperationChainingJavascript = (ot: OperationType, on: OperationName): string =>
  `${ot}: (o, variables) =>
    fullChainConstruct(apiFetch(options))('${ot}', '${on.name}')(o, variables).then(
      (response) => response
    )`;

const generateOperationThunder = (t: OperationName, ot: OperationType): string =>
  `${ot}: ((o, variables) =>
      fullChainConstruct(fn)('${ot}', '${t.name}')(o, variables).then(
        (response) => response
      ))`;

const generateOperationsThunderJavascript = ({
  query,
  mutation,
  subscription,
}: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationThunder(query.operationName, OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationThunder(mutation.operationName, OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationThunder(subscription.operationName, OperationType.subscription));
  }
  return allOps;
};

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

const generateSelectorZeus = (ot: OperationType): string => `${ot}: ZeusSelect()`;

const generateSelectorsZeusJavascript = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateSelectorZeus(OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateSelectorZeus(OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateSelectorZeus(OperationType.subscription));
  }
  return allOps;
};

export const bodyJavascript = (env: Environment, resolvedOperations: ResolvedOperations): string => `
${graphqlErrorJavascript}
${javascriptFunctions(env)}
export const Thunder = (fn) => ({
  ${generateOperationsThunderJavascript(resolvedOperations).join(',\n')}
});

export const Chain = (...options) => ({
  ${generateOperationsChainingJavascipt(resolvedOperations).join(',\n')}
});
export const Zeus = {
  ${generateOperationsZeusJavascipt(resolvedOperations).join(',\n')}
};
export const Cast = {
  ${generateOperationsCastJavascipt(resolvedOperations).join(',\n')}
};
export const Selectors = {
  ${generateSelectorsZeusJavascript(resolvedOperations).join(',\n')}
};
    `;
