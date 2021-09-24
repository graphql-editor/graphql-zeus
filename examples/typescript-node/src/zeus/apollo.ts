/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useMutation, useQuery, useLazyQuery, useSubscription } from '@apollo/client';
import type { MutationHookOptions, QueryHookOptions, LazyQueryHookOptions, SubscriptionHookOptions } from '@apollo/client';


export function useTypedMutation<Z>(
  mutation: Z | ValueTypes['Mutation'],
  options?: MutationHookOptions<InputType<GraphQLTypes['Mutation'], Z>>,
) {
  return useMutation<InputType<GraphQLTypes['Mutation'], Z>>(gql(Zeus.mutation(mutation)), options);
}
export function useTypedQuery<Z>(
  query: Z | ValueTypes['Query'],
  options?: QueryHookOptions<InputType<GraphQLTypes['Query'], Z>>,
) {
  return useQuery<InputType<GraphQLTypes['Query'], Z>>(gql(Zeus.query(query)), options);
}
export function useTypedLazyQuery<Z>(
  LazyQuery: Z | ValueTypes['Query'],
  options?: LazyQueryHookOptions<InputType<GraphQLTypes['Query'], Z>>,
) {
  return useLazyQuery<InputType<GraphQLTypes['Query'], Z>>(gql(Zeus.query(LazyQuery)), options);
}
export function useTypedSubscription<Z>(
  subscription: Z | ValueTypes['Subscription'],
  options?: SubscriptionHookOptions<InputType<GraphQLTypes['Subscription'], Z>>,
) {
  return useSubscription<InputType<GraphQLTypes['Subscription'], Z>>(gql(Zeus.subscription(subscription)), options);
}
