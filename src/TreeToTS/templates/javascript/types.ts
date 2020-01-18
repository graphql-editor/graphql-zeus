import { OperationName, ResolvedOperations } from 'TreeToTS';
import { VALUETYPES } from '../resolveValueTypes';

const generateOperationsJavascriptDefinitionsChaining = ({
  query,
  mutation,
  subscription,
}: ResolvedOperations): string[] => {
  const allOps = [];
  if (query.operations.length) {
    const queryOperationName = query.operationName?.name || 'Query';
    allOps.push(`Query: OperationToGraphQL<${VALUETYPES}["${queryOperationName}"],${queryOperationName}>`);
  }
  if (mutation.operations.length) {
    const mutationOperationName = mutation.operationName?.name || 'Mutation';
    allOps.push(`Mutation: OperationToGraphQL<${VALUETYPES}["${mutationOperationName}"],${mutationOperationName}>`);
  }
  if (subscription.operations.length) {
    const subscriptionOperationName = subscription.operationName?.name || 'Subscription';
    allOps.push(
      `Subscription: OperationToGraphQL<${VALUETYPES}["${subscriptionOperationName}"],${subscriptionOperationName}>`,
    );
  }
  return allOps;
};

const ZeusOperations = (t: OperationName): string => `${t.name}: (o: ${VALUETYPES}["${t.name}"]) => string`;

const generateOperationsJavascriptDefinitionsZeus = ({
  query,
  mutation,
  subscription,
}: ResolvedOperations): string[] => {
  const allOps = [];
  if (query?.operationName?.name && query.operations.length) {
    allOps.push(ZeusOperations(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(ZeusOperations(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(ZeusOperations(subscription.operationName));
  }
  return allOps;
};

const CastOperations = (t: OperationName): string => `${t.name}: CastToGraphQL<
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
    allOps.push(CastOperations(query.operationName));
  }
  if (mutation?.operationName?.name && mutation.operations.length) {
    allOps.push(CastOperations(mutation.operationName));
  }
  if (subscription?.operationName?.name && subscription.operations.length) {
    allOps.push(CastOperations(subscription.operationName));
  }
  return allOps;
};

export const generateOperationsJavascript = (operationsBody: ResolvedOperations): string => `
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

export declare const Gql: ReturnType<typeof Chain>
`;
