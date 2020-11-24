import { OperationName, ResolvedOperations } from 'TreeToTS';
import { OperationType, Environment } from '@/Models';
import { VALUETYPES } from '../resolveValueTypes';
import { constantTypesTypescript, graphqlErrorTypeScript, typescriptFunctions } from './';
import { TYPES } from '../returnedTypes';

const generateOperationThunder = (t: OperationName, ot: OperationType): string =>
  `${ot}: ((o: any, variables) =>
    fullChainConstruct(fn)('${ot}', '${t.name}')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<${VALUETYPES}["${t.name}"],${TYPES}["${t.name}"]>`;

const generateOperationChaining = (t: OperationName, ot: OperationType): string =>
  `${ot}: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('${ot}', '${t.name}')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<${VALUETYPES}["${t.name}"],${TYPES}["${t.name}"]>`;

const generateOperationsThunder = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
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

const generateOperationsChaining = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationChaining(query.operationName, OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationChaining(mutation.operationName, OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationChaining(subscription.operationName, OperationType.subscription));
  }
  return allOps;
};

const generateOperationZeus = (t: OperationName, ot: OperationType): string =>
  `${ot}: (o:${VALUETYPES}["${t.name}"]) => queryConstruct('${ot}', '${t.name}')(o)`;

const generateOperationsZeusTypeScript = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationZeus(query.operationName, OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationZeus(mutation.operationName, OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationZeus(subscription.operationName, OperationType.subscription));
  }
  return allOps;
};

const generateSelectorZeus = (t: OperationName, ot: OperationType): string =>
  `${ot}: ZeusSelect<${VALUETYPES}["${t.name}"]>()`;

const generateSelectorsZeusTypeScript = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateSelectorZeus(query.operationName, OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateSelectorZeus(mutation.operationName, OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateSelectorZeus(subscription.operationName, OperationType.subscription));
  }
  return allOps;
};

const generateOperationCast = (t: OperationName, ot: OperationType): string =>
  `${ot}: ((o: any) => (_: any) => o) as CastToGraphQL<
  ${VALUETYPES}["${t.name}"],
  ${TYPES}["${t.name}"]
>`;

const generateOperationsCastTypeScript = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationCast(query.operationName, OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationCast(mutation.operationName, OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationCast(subscription.operationName, OperationType.subscription));
  }
  return allOps;
};

export const bodyTypeScript = (env: Environment, resolvedOperations: ResolvedOperations): string => `
${graphqlErrorTypeScript}
${constantTypesTypescript}
${typescriptFunctions(env)}

export const Thunder = (fn: FetchFunction) => ({
  ${generateOperationsThunder(resolvedOperations).join(',\n')}
});

export const Chain = (...options: fetchOptions) => ({
  ${generateOperationsChaining(resolvedOperations).join(',\n')}
});
export const Zeus = {
  ${generateOperationsZeusTypeScript(resolvedOperations).join(',\n')}
};
export const Cast = {
  ${generateOperationsCastTypeScript(resolvedOperations).join(',\n')}
};
export const Selectors = {
  ${generateSelectorsZeusTypeScript(resolvedOperations).join(',\n')}
};
  `;
