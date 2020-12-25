import { OperationName, ResolvedOperations } from 'TreeToTS';
import { OperationType, Environment } from '@/Models';
import { VALUETYPES } from '../resolveValueTypes';
import { constantTypesTypescript, graphqlErrorTypeScript, typescriptFunctions } from './';

const generateOperationThunder = (t: OperationName, ot: OperationType): string =>
  `${ot}: ((o: any, variables) =>
    fullChainConstruct(fn)('${ot}', '${t.name}')(o, variables).then(
      (response: any) => response
    )) as ${generateOperationReturnType(t, ot)}`;

const generateOperationChaining = (t: OperationName, ot: OperationType): string =>
  `${ot}: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('${ot}', '${t.name}')(o, variables).then(
      (response: any) => response
    )) as ${generateOperationReturnType(t, ot)}`;

const generateOperationReturnType = (t: OperationName, ot: OperationType): string =>
  `OperationToGraphQL<${VALUETYPES}["${t.name}"],${t.name}>`;

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

const generateOperationTypeParams = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(`${OperationType.query}: ${generateOperationReturnType(query.operationName, OperationType.query)}`);
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(
      `${OperationType.mutation}: ${generateOperationReturnType(mutation.operationName, OperationType.mutation)}`,
    );
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(
      `${OperationType.subscription}: ${generateOperationReturnType(
        subscription.operationName,
        OperationType.subscription,
      )}`,
    );
  }
  return allOps.map((s) => `  ${s}`);
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

const generateOperationZeusReturnType = (t: OperationName, ot: OperationType): string =>
  `(o:${VALUETYPES}["${t.name}"]): string`;

const generateSelectorZeusReturnType = (t: OperationName, ot: OperationType): string =>
  `SelectionFunction<${VALUETYPES}["${t.name}"]>`;

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

const generateSelectorsZeusReturnTypeParams = ({
  query,
  mutation,
  subscription,
}: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(`${OperationType.query}: ${generateSelectorZeusReturnType(query.operationName, OperationType.query)}`);
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(
      `${OperationType.mutation}: ${generateSelectorZeusReturnType(mutation.operationName, OperationType.mutation)}`,
    );
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(
      `${OperationType.subscription}: ${generateSelectorZeusReturnType(
        subscription.operationName,
        OperationType.subscription,
      )}`,
    );
  }
  return allOps;
};

const generateZeusReturnTypeParams = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(`${OperationType.query}${generateOperationZeusReturnType(query.operationName, OperationType.query)}`);
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(
      `${OperationType.mutation}${generateOperationZeusReturnType(mutation.operationName, OperationType.mutation)}`,
    );
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(
      `${OperationType.subscription}${generateOperationZeusReturnType(
        subscription.operationName,
        OperationType.subscription,
      )}`,
    );
  }
  return allOps;
};
const generateOperationCastParameterType = (t: OperationName) => `CastToGraphQL<ValueTypes["${t.name}"], ${t.name}>`;

const generateOperationCast = (t: OperationName, ot: OperationType): string =>
  `${ot}: ((o: any) => (_: any) => o) as ${generateOperationCastParameterType(t)}`;

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

const generateOperationsCastTypeParameters = ({
  query,
  mutation,
  subscription,
}: Partial<ResolvedOperations>): string[] => {
  const allOps: string[] = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(`${OperationType.query}: ${generateOperationCastParameterType(query.operationName)}`);
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(`${OperationType.mutation}: ${generateOperationCastParameterType(mutation.operationName)}`);
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(`${OperationType.subscription}: ${generateOperationCastParameterType(subscription.operationName)}`);
  }
  return allOps;
};

export const bodyTypeScript = (env: Environment, resolvedOperations: ResolvedOperations): string => `
${graphqlErrorTypeScript}
${constantTypesTypescript}
${typescriptFunctions(env)}
type ThunderRootOperations = {
  ${generateOperationTypeParams(resolvedOperations).join(',\n  ')}
}
type ChainRootOperations = {
  ${generateOperationTypeParams(resolvedOperations).join(',\n  ')}
}
type ZeusRootOperations = {
  ${generateZeusReturnTypeParams(resolvedOperations).join(',\n  ')}
}
type CastRootOperations = {
  ${generateOperationsCastTypeParameters(resolvedOperations).join(',\n  ')}
}
type SelectorsRootType = {
  ${generateSelectorsZeusReturnTypeParams(resolvedOperations).join(',\n  ')}
}
export const Thunder = (fn: FetchFunction): ThunderRootOperations => ({
  ${generateOperationsThunder(resolvedOperations).join(',\n  ')}
});
export const Chain = (...options: fetchOptions): ChainRootOperations => ({
  ${generateOperationsChaining(resolvedOperations).join(',\n  ')}
});
export const Zeus: ZeusRootOperations = {
  ${generateOperationsZeusTypeScript(resolvedOperations).join(',\n  ')}
};
export const Cast: CastRootOperations = {
  ${generateOperationsCastTypeScript(resolvedOperations).join(',\n  ')}
};
export const Selectors: SelectorsRootType = {
  ${generateSelectorsZeusTypeScript(resolvedOperations).join(',\n  ')}
};`;
