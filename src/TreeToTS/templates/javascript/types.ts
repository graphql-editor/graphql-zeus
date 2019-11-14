import { VALUETYPES } from '../resolveValueTypes';

const generateOperationsJavascriptDefinitionsChaining = ({
  queries,
  mutations,
  subscriptions
}: {
  queries?: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
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

const ZeusOperations = (t: string) => `${t}: (o: GraphQLReturner<${VALUETYPES}["${t}"]>) => string`;
const generateOperationsJavascriptDefinitionsZeus = ({
  queries,
  mutations,
  subscriptions
}: {
  queries?: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
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
const CastOperations = (t: string) => `${t}: (o:any) => State<${t}>`;
const generateOperationsJavascriptDefinitionsCast = ({
  queries,
  mutations,
  subscriptions
}: {
  queries?: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
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

export const generateOperationsJavascript = (operationsBody: {
  queries?: string[];
  mutations?: string[];
  subscriptions?: string[];
}) => `
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
