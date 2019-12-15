import { ResolvedOperations } from 'TreeToTS';
import { VALUETYPES } from '../resolveValueTypes';

const generateOperationsJavascriptDefinitionsChaining = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
  const allOps = [];
  if (queries && queries.length) {
    allOps.push(`Query: OperationToGraphQL<${VALUETYPES}["Query"],Query>`);
  }
  if (mutations && mutations.length) {
    allOps.push(`Mutation: OperationToGraphQL<${VALUETYPES}["Mutation"],Mutation>`);
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(`Subscription: OperationToGraphQL<${VALUETYPES}["Subscription"],Subscription>`);
  }
  return allOps;
};

const ZeusOperations = (t: string): string => `${t}: (o: ${VALUETYPES}["${t}"]) => string`;

const generateOperationsJavascriptDefinitionsZeus = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
  const allOps = [];
  if (queries && queries.length) {
    allOps.push(ZeusOperations('Query'));
  }
  if (mutations && mutations.length) {
    allOps.push(ZeusOperations('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(ZeusOperations('Subscription'));
  }
  return allOps;
};

const CastOperations = (t: string): string => `${t}: CastToGraphQL<
  ValueTypes["${t}"],
  ${t}
>`;

const generateOperationsJavascriptDefinitionsCast = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
  const allOps = [];
  if (queries && queries.length) {
    allOps.push(CastOperations('Query'));
  }
  if (mutations && mutations.length) {
    allOps.push(CastOperations('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(CastOperations('Subscription'));
  }
  return allOps;
};

export const generateOperationsJavascript = (operationsBody: Partial<ResolvedOperations>): string => `
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
