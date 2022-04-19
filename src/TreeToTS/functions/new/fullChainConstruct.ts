import { InternalsBuildQuery } from '@/TreeToTS/functions/new/buildQuery';
import { AllTypesProps, Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
import { FetchFunction, OperationOptions } from '@/TreeToTS/functions/new/models';

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription') => (
  o: Record<any, any>,
  options?: OperationOptions,
) => {
  const builder = InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, options);
  return fn(builder(t, o), options?.variables?.values);
};
