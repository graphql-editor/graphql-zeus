import { Environment } from 'Models/Environment';
import { ResolvedOperations } from 'TreeToTS';
import { Operation } from '../javascript';
import { VALUETYPES } from '../resolveValueTypes';
import { constantTypesTypescript, graphqlErrorTypeScript, typescriptFunctions } from './';

const generateOperationChaining = (t: Operation): string =>
  `${t}: ((o: any) =>
    fullChainConstruct(options)('${t}')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<${VALUETYPES}["${t}"],${t}>`;

const generateOperationsChaining = ({ queries, mutations, subscriptions }: Partial<ResolvedOperations>): string[] => {
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

const generateOperationZeus = (t: Operation): string => `${t}: (o:${VALUETYPES}["${t}"]) => queryConstruct('${t}')(o)`;

const generateOperationsZeusTypeScript = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
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

const generateSelectorZeus = (t: Operation): string => `${t}: ZeusSelect<${VALUETYPES}["${t}"]>()`;

const generateSelectorsZeusTypeScript = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
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

const generateOperationCast = (t: Operation): string =>
  `${t}: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["${t}"],
  ${t}
>`;

const generateOperationsCastTypeScript = ({
  queries,
  mutations,
  subscriptions,
}: Partial<ResolvedOperations>): string[] => {
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

export const bodyTypeScript = (env: Environment, resolvedOperations: Partial<ResolvedOperations>): string => `
${graphqlErrorTypeScript}
${constantTypesTypescript}
${typescriptFunctions(env)}

export const Chain = (...options: fetchOptions) => ({
  ${generateOperationsChaining(resolvedOperations).join(',\n')}
});
export const Zeus = {
  ${generateOperationsZeusTypeScript(resolvedOperations).join(',\n')}
};
export const Cast = {
  ${generateOperationsCastTypeScript(resolvedOperations).join(',\n')}
};
export const Selectors = {
  ${generateSelectorsZeusTypeScript(resolvedOperations).join(',\n')}
};
  `;
