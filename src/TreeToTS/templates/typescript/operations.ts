import { Environment } from 'Models/Environment';
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

const generateOperationZeus = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: (o:GraphQLReturner<${t}>) => queryConstruct('${t}')(o)`;

const generateOperationsZeusTypeScript = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  allOps.push(generateOperationZeus('Query'));
  if (mutations && mutations.length) {
    allOps.push(generateOperationZeus('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationZeus('Subscription'));
  }
  return allOps;
};

const generateOperationCast = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: (o:any) => o as ResolveReturned<Query>`;

const generateOperationsCastTypeScript = ({
  queries,
  mutations,
  subscriptions
}: {
  queries: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  allOps.push(generateOperationCast('Query'));
  if (mutations && mutations.length) {
    allOps.push(generateOperationCast('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationCast('Subscription'));
  }
  return allOps;
};

export const bodyTypeScript = (
  env: Environment,
  {
    queries,
    mutations,
    subscriptions
  }: {
    queries: string[];
    mutations?: string[];
    subscriptions?: string[];
  }
) => `
${graphqlErrorTypeScript}
${constantTypesTypescript}
${typescriptFunctions(env)}

export const Chain = (...options: fetchOptions) => ({
  ${generateOperationsChaining({ queries, mutations, subscriptions }).join(',\n')}
});
export const Api = (...options: fetchOptions) => ({
  ${generateOperationsApiTypeScript({ queries, mutations, subscriptions }).join(',\n')}
});
export const Zeus = {
  ${generateOperationsZeusTypeScript({ queries, mutations, subscriptions }).join(',\n')}
};
export const Cast = {
  ${generateOperationsCastTypeScript({ queries, mutations, subscriptions }).join(',\n')}
};
  `;
