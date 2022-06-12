import { InternalsBuildQuery } from '@/TreeToTS/functions/new/buildQuery';
import { decodeScalarsInResponse } from '@/TreeToTS/functions/new/decodeScalarsInResponse';
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
  ThunderGraphQLOptions,
  VType,
} from '@/TreeToTS/functions/new/models';
import { ZeusSelect } from '@/TreeToTS/functions/new/selectFunction';
import { InputType, ScalarDefinition, SubscriptionToGraphQL } from '@/TreeToTS/functions/new/types';

export const Thunder =
  (fn: FetchFunction) =>
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
    fn(Zeus(operation, o, ops), ops?.variables).then((data) => {
      if (graphqlOptions?.scalars) {
        return decodeScalarsInResponse({
          response: data,
          initialOp: operation,
          initialZeusQuery: o as VType,
          returns: ReturnTypes,
          scalars: graphqlOptions.scalars,
          ops: Ops,
        });
      }
      return data;
    }) as Promise<InputType<GraphQLTypes[R], Z, SCLR>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));

export const SubscriptionThunder =
  (fn: SubscriptionFunction) =>
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => {
    const returnedFunction = fn(Zeus(operation, o, ops)) as SubscriptionToGraphQL<Z, GraphQLTypes[R], SCLR>;
    if (returnedFunction?.on) {
      returnedFunction.on = (fnToCall: (args: InputType<GraphQLTypes[R], Z, SCLR>) => void) =>
        returnedFunction.on((data: InputType<GraphQLTypes[R], Z, SCLR>) => {
          if (graphqlOptions?.scalars) {
            return fnToCall(
              decodeScalarsInResponse({
                response: data,
                initialOp: operation,
                initialZeusQuery: o as VType,
                returns: ReturnTypes,
                scalars: graphqlOptions.scalars,
                ops: Ops,
              }),
            );
          }
          return fnToCall(data);
        });
    }
    return returnedFunction;
  };

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>,
>(
  operation: O,
  o: Z | ValueTypes[R],
  ops?: OperationOptions,
) => InternalsBuildQuery({ props: AllTypesProps, returns: ReturnTypes, ops: Ops, options: ops })(operation, o as VType);

export const Selector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();

export const Gql = Chain(HOST);
