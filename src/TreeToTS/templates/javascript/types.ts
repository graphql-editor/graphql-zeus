import { VALUETYPES } from '../resolveValueTypes';

const generateOperationsJavascriptDefinitionsChaining = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(`Query: OperationToGraphQL<${VALUETYPES}["Query"],Query>`);
  if (mutations && mutations.length) {
    allOps.push(`Mutation: OperationToGraphQL<${VALUETYPES}["Mutation"],Mutation>`);
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(`Subscription: OperationToGraphQL<${VALUETYPES}["Subscription"],Subscription>`);
  }
  return allOps;
};
const ApiOperation = (t: string, q: string) =>
  `${q}: ApiFieldToGraphQL<${VALUETYPES}["${t}"]['${q}'],${t}['${q}']>`;
const CreateApiOperations = (t: string, o: string[]) =>
  `${t}: {\n${o.map((q) => ApiOperation(t, q)).join(',\n\t')}\n}`;
const generateOperationsJavascriptDefinitionsApi = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(CreateApiOperations('Query', queries));
  if (mutations && mutations.length) {
    allOps.push(CreateApiOperations('Mutation', mutations));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(CreateApiOperations('Subscription', subscriptions));
  }
  return allOps;
};

const ZeusOperations = (t: string) => `${t}: (o: GraphQLReturner<${VALUETYPES}["${t}"]>) => string`;
const generateOperationsJavascriptDefinitionsZeus = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(ZeusOperations('Query'));
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
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(CastOperations('Query'));
  if (mutations && mutations.length) {
    allOps.push(CastOperations('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(CastOperations('Subscription'));
  }
  return allOps;
};

export const generateOperationsJavascript = (operationsBody: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}) => `
export declare function Chain(
  ...options: fetchOptions
):{
  ${generateOperationsJavascriptDefinitionsChaining(operationsBody)}
}

export declare function Api(
  ...options: fetchOptions
):{
  ${generateOperationsJavascriptDefinitionsApi(operationsBody)}
}

export declare const Zeus: {
  ${generateOperationsJavascriptDefinitionsZeus(operationsBody)}
}

export declare const Cast: {
  ${generateOperationsJavascriptDefinitionsCast(operationsBody)}
}
`;
