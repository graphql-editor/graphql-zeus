import { Environment } from 'Models/Environment';
import { OperationName, ResolvedOperations } from 'TreeToTS';
import { VALUETYPES } from '../resolveValueTypes';
import { constantTypesTypescript, graphqlErrorTypeScript, typescriptFunctions } from './';

const generateOperationChaining = (t: OperationName): string =>
  `${t.name}: ((o: any) =>
    fullChainConstruct(options)('${t.name}')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<${VALUETYPES}["${t.name}"],${t.name}>`;

const generateOperationsChaining = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationChaining(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationChaining(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationChaining(subscription.operationName));
  }
  return allOps;
};

const generateOperationZeus = (t: OperationName): string =>
  `${t.name}: (o:${VALUETYPES}["${t.name}"]) => queryConstruct('${t.name}')(o)`;

const generateOperationsZeusTypeScript = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationZeus(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationZeus(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationZeus(subscription.operationName));
  }
  return allOps;
};

const generateSelectorZeus = (t: OperationName): string => `${t.name}: ZeusSelect<${VALUETYPES}["${t.name}"]>()`;

const generateSelectorsZeusTypeScript = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateSelectorZeus(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateSelectorZeus(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateSelectorZeus(subscription.operationName));
  }
  return allOps;
};

const generateOperationCast = (t: OperationName): string =>
  `${t.name}: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["${t.name}"],
  ${t.name}
>`;

const generateOperationsCastTypeScript = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(generateOperationCast(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(generateOperationCast(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(generateOperationCast(subscription.operationName));
  }
  return allOps;
};

export const bodyTypeScript = (env: Environment, resolvedOperations: ResolvedOperations): string => `
${graphqlErrorTypeScript}
${constantTypesTypescript}
${typescriptFunctions(
  env,
  resolvedOperations.query.operationName,
  resolvedOperations.mutation.operationName,
  resolvedOperations.subscription.operationName,
)}

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
