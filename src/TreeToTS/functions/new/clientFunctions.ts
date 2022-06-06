import { InternalsBuildQuery } from '@/TreeToTS/functions/new/buildQuery';
import { fullChainConstruct } from '@/TreeToTS/functions/new/fullChainConstruct';
import { fullSubscriptionConstruct } from '@/TreeToTS/functions/new/fullSubscriptionConstruct';
import {
  AllTypesProps,
  GraphQLTypes,
  Ops,
  ReturnTypes,
  ValueTypes,
  apiFetch,
  apiSubscription,
  HOST,
} from '@/TreeToTS/functions/new/mocks';
import {
  chainOptions,
  FetchFunction,
  GenericOperation,
  OperationOptions,
  SubscriptionFunction,
} from '@/TreeToTS/functions/new/models';
import { ZeusSelect } from '@/TreeToTS/functions/new/selectFunction';
import { InputType, ScalarDefinition, SubscriptionToGraphQL } from '@/TreeToTS/functions/new/types';

export const Thunder =
  (fn: FetchFunction) =>
  <O extends keyof typeof Ops, R extends keyof ValueTypes = GenericOperation<O>>(operation: O) =>
  <Z extends ValueTypes[R], SCLR extends ScalarDefinition>(
    o: Z | ValueTypes[R],
    ops?: OperationOptions & {
      scalars?: SCLR;
    },
  ) =>
    fullChainConstruct(fn)(operation)(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z, SCLR>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));

export const SubscriptionThunder =
  (fn: SubscriptionFunction) =>
  <O extends keyof typeof Ops, R extends keyof ValueTypes = GenericOperation<O>>(operation: O) =>
  <Z extends ValueTypes[R], SCLR extends ScalarDefinition>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
    fullSubscriptionConstruct(fn)(operation)(o as any, ops) as SubscriptionToGraphQL<Z, GraphQLTypes[R], SCLR>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>,
>(
  operation: O,
  o: Z | ValueTypes[R],
  ops?: OperationOptions,
) => InternalsBuildQuery({ props: AllTypesProps, returns: ReturnTypes, ops: Ops, options: ops })(operation, o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();

export const Gql = Chain(HOST);
