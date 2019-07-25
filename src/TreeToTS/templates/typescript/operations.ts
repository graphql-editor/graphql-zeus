import { constantTypesTypescript, graphqlErrorTypeScript, typescriptFunctions } from './';

const generateOperationChaining = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: ((o: any) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response: any) => response as ResolveReturned<${t}>
    )) as OperationToGraphQL<${t}>`;

const generateOperationsChaining = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  allOps.push(generateOperationChaining('Query'));
  if (mutations && mutations.length) {
    allOps.push(generateOperationChaining('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationChaining('Subscription'));
  }
  return allOps;
};

const generateOperationApiTypeScript = (t: 'Query' | 'Mutation' | 'Subscription', o: string[]) =>
  `${t}: {
      ${o
        .map(
          (op) => `${op}: (o:any) =>
      fullChainConstruct(options)('${t}')({
        ${op}: o
      }).then((response:any) => response.${op}) as ApiFieldToGraphQL<${t}['${op}']>`
        )
        .join(',\n')}
  }`;

const generateOperationsApiTypeScript = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  allOps.push(generateOperationApiTypeScript('Query', queries));
  if (mutations && mutations.length) {
    allOps.push(generateOperationApiTypeScript('Mutation', mutations));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationApiTypeScript('Subscription', subscriptions));
  }
  return allOps;
};

export const bodyTypeScript = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}) => `
${graphqlErrorTypeScript}
${constantTypesTypescript}
${typescriptFunctions}

export const Chain = (...options: fetchOptions) => ({
  ${generateOperationsChaining({ queries, mutations, subscriptions }).join(',\n')}
});
export const Api = (...options: fetchOptions) => ({
  ${generateOperationsApiTypeScript({ queries, mutations, subscriptions }).join(',\n')}
});
  `;
