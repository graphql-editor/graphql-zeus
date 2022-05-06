import { InternalsBuildQuery } from '@/TreeToTS/functions/new/buildQuery';
import { AllTypesProps, Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
import { OperationOptions, SubscriptionFunction } from '@/TreeToTS/functions/new/models';

export const fullSubscriptionConstruct =
  (fn: SubscriptionFunction) =>
  (t: 'query' | 'mutation' | 'subscription') =>
  (o: Record<any, any>, options?: OperationOptions) => {
    const builder = InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, options);
    return fn(builder(t, o));
  };
