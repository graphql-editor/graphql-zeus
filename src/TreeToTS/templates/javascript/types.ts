export const generateOperationsJavascriptDefinitionsChaining = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps = [];
  allOps.push(`Query: OperationToGraphQL<Query>`);
  if (mutations && mutations.length) {
    allOps.push(`Mutation: OperationToGraphQL<Mutation>`);
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(`Subscription: OperationToGraphQL<Subscription>`);
  }
  return allOps;
};
const ApiOperation = (t: string, q: string) => `${q}: ApiFieldToGraphQL<${t}['${q}']>`;
const CreateApiOperations = (t: string, o: string[]) =>
  `${t}: {\n${o.map((q) => ApiOperation(t, q)).join(',\n\t')}\n}`;
export const generateOperationsJavascriptDefinitionsApi = ({
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
