import { ResolvedOperations } from 'TreeToTS';
import { OperationType, Environment } from '@/Models';
import { VALUETYPES } from '../resolveValueTypes';
import { TYPES } from '@/TreeToTS/templates/returnedTypes';

export const generateOperationsChaining = ({ query, mutation, subscription }: Partial<ResolvedOperations>) => {
  const allOps: Record<OperationType, string | undefined> = {
    query: query?.operationName?.name && query.operations.length ? query.operationName.name : undefined,
    mutation: mutation?.operationName?.name && mutation.operations.length ? mutation.operationName.name : undefined,
    subscription:
      subscription?.operationName?.name && subscription.operations.length ? subscription.operationName.name : undefined,
  };
  const orOpsType = [
    query?.operationName?.name ? `'query'` : undefined,
    mutation?.operationName?.name ? `'mutation'` : undefined,
    subscription?.operationName?.name ? `'subscription'` : undefined,
  ]
    .filter((o) => !!o)
    .join(' | ');
  return `
const allOperations = ${JSON.stringify(allOps, null, 4)}

export type GenericOperation<O> = O extends 'query'
  ? ${allOps.query ? `"${allOps.query}"` : 'never'}
  : O extends 'mutation'
  ? ${allOps.mutation ? `"${allOps.mutation}"` : 'never'}
  : ${allOps.subscription ? `"${allOps.subscription}"` : 'never'}

export const Thunder = (fn: FetchFunction) => <
  O extends ${orOpsType},
  R extends keyof ${VALUETYPES} = GenericOperation<O>
>(
  operation: O,
) => <Z extends ${VALUETYPES}[R]>(o: Z | ${VALUETYPES}[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<${TYPES}[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends ${orOpsType},
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ${VALUETYPES}[R]>(
  o: Z | ${VALUETYPES}[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, ${TYPES}[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));`;
};

const generateOperationsZeusTypeScript = ({ query, mutation, subscription }: Partial<ResolvedOperations>): string => {
  const orOpsType = [
    query?.operationName?.name ? `'query'` : undefined,
    mutation?.operationName?.name ? `'mutation'` : undefined,
    subscription?.operationName?.name ? `'subscription'` : undefined,
  ]
    .filter((o) => !!o)
    .join(' | ');
  return `export const Zeus = <
  Z extends ${VALUETYPES}[R],
  O extends ${orOpsType},
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ${VALUETYPES}[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);`;
};

const generateSelectorsZeusTypeScript = () => {
  return `export const Selector = <T extends keyof ${VALUETYPES}>(key: T) => ZeusSelect<${VALUETYPES}[T]>();`;
};

export const bodyTypeScript = (env: Environment, resolvedOperations: ResolvedOperations): string => `
${generateOperationsChaining(resolvedOperations)}
${generateOperationsZeusTypeScript(resolvedOperations)}
${generateSelectorsZeusTypeScript()}
  `;
