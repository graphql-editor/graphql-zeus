import { Environment } from 'Models/Environment';
import { VALUETYPES } from '../resolveValueTypes';
import { constantTypesTypescript, graphqlErrorTypeScript, typescriptFunctions } from './';

const generateOperationChaining = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: ((o: any) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<${VALUETYPES}["${t}"],${t}>`;

const generateOperationsChaining = ({
  queries,
  mutations,
  subscriptions,
}: {
  queries?: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  if (queries && queries.length) {
    allOps.push(generateOperationChaining('Query'));
  }
  if (mutations && mutations.length) {
    allOps.push(generateOperationChaining('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationChaining('Subscription'));
  }
  return allOps;
};

const generateOperationZeus = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: (o:${VALUETYPES}["${t}"]) => queryConstruct('${t}')(o)`;

const generateOperationsZeusTypeScript = ({
  queries,
  mutations,
  subscriptions,
}: {
  queries?: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  if (queries && queries.length) {
    allOps.push(generateOperationZeus('Query'));
  }
  if (mutations && mutations.length) {
    allOps.push(generateOperationZeus('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateOperationZeus('Subscription'));
  }
  return allOps;
};

const generateSelectorZeus = (t: 'Query' | 'Mutation' | 'Subscription') => `${t}: ZeusSelect<${VALUETYPES}["${t}"]>()`;

const generateSelectorsZeusTypeScript = ({
  queries,
  mutations,
  subscriptions,
}: {
  queries?: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  if (queries && queries.length) {
    allOps.push(generateSelectorZeus('Query'));
  }
  if (mutations && mutations.length) {
    allOps.push(generateSelectorZeus('Mutation'));
  }
  if (subscriptions && subscriptions.length) {
    allOps.push(generateSelectorZeus('Subscription'));
  }
  return allOps;
};

const generateOperationCast = (t: 'Query' | 'Mutation' | 'Subscription') =>
  `${t}: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["${t}"],
  ${t}
>`;

const generateOperationsCastTypeScript = ({
  queries,
  mutations,
  subscriptions,
}: {
  queries?: string[];
  mutations?: string[];
  subscriptions?: string[];
}): string[] => {
  const allOps: string[] = [];
  if (queries && queries.length) {
    allOps.push(generateOperationCast('Query'));
  }
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
    subscriptions,
  }: {
    queries?: string[];
    mutations?: string[];
    subscriptions?: string[];
  },
) => `
${graphqlErrorTypeScript}
${constantTypesTypescript}
${typescriptFunctions(env)}

export const Chain = (...options: fetchOptions) => ({
  ${generateOperationsChaining({ queries, mutations, subscriptions }).join(',\n')}
});
export const Zeus = {
  ${generateOperationsZeusTypeScript({
    queries,
    mutations,
    subscriptions,
  }).join(',\n')}
};
export const Cast = {
  ${generateOperationsCastTypeScript({
    queries,
    mutations,
    subscriptions,
  }).join(',\n')}
};
export const Selectors = {
  ${generateSelectorsZeusTypeScript({ queries, mutations, subscriptions }).join(',\n')}
};
  `;
