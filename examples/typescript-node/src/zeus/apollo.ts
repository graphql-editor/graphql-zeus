/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes, OperationOptions } from './index';
import { gql, useQuery, useLazyQuery, useMutation, useSubscription } from '@apollo/client';
import type { QueryHookOptions, LazyQueryHookOptions, MutationHookOptions, SubscriptionHookOptions } from '@apollo/client';


export function useTypedQuery<Z extends ValueTypes[O], O extends "Query">(
  query: Z | ValueTypes[O],
  options?: QueryHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationOptions?: OperationOptions,
) {
  return useQuery<InputType<GraphQLTypes[O], Z>>(gql(Zeus("query",query, operationOptions)), options);
}
export function useTypedLazyQuery<Z extends ValueTypes[O], O extends "Query">(
  LazyQuery: Z | ValueTypes[O],
  options?: LazyQueryHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationOptions?: OperationOptions,
) {
  return useLazyQuery<InputType<GraphQLTypes[O], Z>>(gql(Zeus("query",LazyQuery, operationOptions)), options);
}
export function useTypedMutation<Z extends ValueTypes[O], O extends "Mutation">(
  mutation: Z | ValueTypes[O],
  options?: MutationHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationOptions?: OperationOptions,
) {
  return useMutation<InputType<GraphQLTypes[O], Z>>(gql(Zeus("mutation",mutation, operationOptions)), options);
}
export function useTypedSubscription<Z extends ValueTypes[O], O extends "Subscription">(
  subscription: Z | ValueTypes[O],
  options?: SubscriptionHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationOptions?: OperationOptions,
) {
  return useSubscription<InputType<GraphQLTypes[O], Z>>(gql(Zeus("subscription",subscription, operationOptions)), options);
}
