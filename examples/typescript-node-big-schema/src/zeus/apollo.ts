/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useMutation, useQuery, useLazyQuery, useSubscription } from '@apollo/client';
import type { MutationHookOptions, QueryHookOptions, LazyQueryHookOptions, SubscriptionHookOptions } from '@apollo/client';


export function useTypedMutation<Z, O extends "mutation_root">(
  mutation: Z | ValueTypes[O],
  options?: MutationHookOptions<InputType<GraphQLTypes[O], Z>>,
) {
  return useMutation<InputType<GraphQLTypes[O], Z>>(gql(Zeus("mutation",mutation)), options);
}
export function useTypedQuery<Z, O extends "query_root">(
  query: Z | ValueTypes[O],
  options?: QueryHookOptions<InputType<GraphQLTypes[O], Z>>,
) {
  return useQuery<InputType<GraphQLTypes[O], Z>>(gql(Zeus("query",query)), options);
}
export function useTypedLazyQuery<Z, O extends "query_root">(
  LazyQuery: Z | ValueTypes[O],
  options?: LazyQueryHookOptions<InputType<GraphQLTypes[O], Z>>,
) {
  return useLazyQuery<InputType<GraphQLTypes[O], Z>>(gql(Zeus("query",LazyQuery)), options);
}
export function useTypedSubscription<Z, O extends "subscription_root">(
  subscription: Z | ValueTypes[O],
  options?: SubscriptionHookOptions<InputType<GraphQLTypes[O], Z>>,
) {
  return useSubscription<InputType<GraphQLTypes[O], Z>>(gql(Zeus("subscription",subscription)), options);
}
