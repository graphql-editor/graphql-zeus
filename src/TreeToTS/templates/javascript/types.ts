import { OperationName, ResolvedOperations } from 'TreeToTS';
import { OperationType } from '../../../Models';
import { VALUETYPES } from '../resolveValueTypes';

const generateOperationsJavascriptDefinitionsChaining = ({
  query,
  mutation,
  subscription,
}: ResolvedOperations): string[] => {
  const allOps = [];
  if (query.operations.length) {
    const queryOperationName = query.operationName?.name || 'Query';
    allOps.push(
      `${OperationType.query}: OperationToGraphQL<${VALUETYPES}["${queryOperationName}"],${queryOperationName}>`,
    );
  }
  if (mutation.operations.length) {
    const mutationOperationName = mutation.operationName?.name || 'Mutation';
    allOps.push(
      `${OperationType.mutation}: OperationToGraphQL<${VALUETYPES}["${mutationOperationName}"],${mutationOperationName}>`,
    );
  }
  if (subscription.operations.length) {
    const subscriptionOperationName = subscription.operationName?.name || 'Subscription';
    allOps.push(
      `${OperationType.subscription}: OperationToGraphQL<${VALUETYPES}["${subscriptionOperationName}"],${subscriptionOperationName}>`,
    );
  }
  return allOps;
};

const ZeusOperations = (t: OperationName, ot: OperationType): string =>
  `${ot}: (o: ${VALUETYPES}["${t.name}"]) => string`;

const generateOperationsJavascriptDefinitionsZeus = ({
  query,
  mutation,
  subscription,
}: ResolvedOperations): string[] => {
  const allOps = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(ZeusOperations(query.operationName, OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(ZeusOperations(mutation.operationName, OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(ZeusOperations(subscription.operationName, OperationType.subscription));
  }
  return allOps;
};

const CastOperations = (t: OperationName, ot: OperationType): string => `${ot}: CastToGraphQL<
  ValueTypes["${t.name}"],
  ${t.name}
>`;

const generateOperationsJavascriptDefinitionsCast = ({
  query,
  mutation,
  subscription,
}: ResolvedOperations): string[] => {
  const allOps = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(CastOperations(query.operationName, OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(CastOperations(mutation.operationName, OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(CastOperations(subscription.operationName, OperationType.subscription));
  }
  return allOps;
};

const ZeusSelector = (t: OperationName, ot: OperationType): string =>
  `${ot}: SelectionFunction<${VALUETYPES}["${t.name}"]>`;

const generateOperationsJavascriptDefinitionsSelector = ({
  query,
  mutation,
  subscription,
}: ResolvedOperations): string[] => {
  const allOps = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(ZeusSelector(query.operationName, OperationType.query));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(ZeusSelector(mutation.operationName, OperationType.mutation));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(ZeusSelector(subscription.operationName, OperationType.subscription));
  }
  return allOps;
};

export const generateOperationsJavascript = (operationsBody: ResolvedOperations): string => `
export declare function Thunder(
  fn: FetchFunction
):{
  ${generateOperationsJavascriptDefinitionsChaining(operationsBody)}
}

export declare function Chain(
  ...options: fetchOptions
):{
  ${generateOperationsJavascriptDefinitionsChaining(operationsBody)}
}

export declare const Zeus: {
  ${generateOperationsJavascriptDefinitionsZeus(operationsBody)}
}

export declare const Cast: {
  ${generateOperationsJavascriptDefinitionsCast(operationsBody)}
}

export declare const Selectors: {
  ${generateOperationsJavascriptDefinitionsSelector(operationsBody)}
}


export declare const Gql: ReturnType<typeof Chain>
`;
