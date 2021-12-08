/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useQuery, useLazyQuery, useSubscription, useMutation } from '@apollo/client';
import type { QueryHookOptions, LazyQueryHookOptions, SubscriptionHookOptions, MutationHookOptions } from '@apollo/client';


export function useTypedQuery<Z, O extends "Query">(
  query: Z | ValueTypes[O],
  options?: QueryHookOptions<InputType<GraphQLTypes[O], Z>>,
) {
  return useQuery<InputType<GraphQLTypes[O], Z>>(gql(Zeus("query",query)), options);
}
export function useTypedLazyQuery<Z, O extends "Query">(
  LazyQuery: Z | ValueTypes[O],
  options?: LazyQueryHookOptions<InputType<GraphQLTypes[O], Z>>,
) {
  return useLazyQuery<InputType<GraphQLTypes[O], Z>>(gql(Zeus("query",LazyQuery)), options);
}
export function useTypedSubscription<Z, O extends "Subscription">(
  subscription: Z | ValueTypes[O],
  options?: SubscriptionHookOptions<InputType<GraphQLTypes[O], Z>>,
) {
  return useSubscription<InputType<GraphQLTypes[O], Z>>(gql(Zeus("subscription",subscription)), options);
}
export function useTypedMutation<Z, O extends "Mutation">(
  mutation: Z | ValueTypes[O],
  options?: MutationHookOptions<InputType<GraphQLTypes[O], Z>>,
) {
  return useMutation<InputType<GraphQLTypes[O], Z>>(gql(Zeus("mutation",mutation)), options);
}
