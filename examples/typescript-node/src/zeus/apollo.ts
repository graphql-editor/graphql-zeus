/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes, OperationOptions, ScalarDefinition } from './index';
import { gql, useMutation, useQuery, useLazyQuery, useSubscription } from '@apollo/client';
import type { MutationHookOptions, QueryHookOptions, LazyQueryHookOptions, SubscriptionHookOptions } from '@apollo/client';


export function useTypedMutation<Z extends ValueTypes[O], O extends "Mutation", SCLR extends ScalarDefinition>(
  mutation: Z | ValueTypes[O],
  options?:{
    apolloOptions?: MutationHookOptions<InputType<GraphQLTypes[O], Z, SCLR>>,
    operationOptions?: OperationOptions,
    scalars?: SCLR
  }
) {
  return useMutation<InputType<GraphQLTypes[O], Z, SCLR>>(gql(Zeus("mutation",mutation, {
    operationOptions: options?.operationOptions,
    scalars: options?.scalars
  })), options?.apolloOptions);
}
export function useTypedQuery<Z extends ValueTypes[O], O extends "Query", SCLR extends ScalarDefinition>(
  query: Z | ValueTypes[O],
  options?:{
    apolloOptions?: QueryHookOptions<InputType<GraphQLTypes[O], Z, SCLR>>,
    operationOptions?: OperationOptions,
    scalars?: SCLR
  }
) {
  return useQuery<InputType<GraphQLTypes[O], Z, SCLR>>(gql(Zeus("query",query, {
    operationOptions: options?.operationOptions,
    scalars: options?.scalars
  })), options?.apolloOptions);
}
export function useTypedLazyQuery<Z extends ValueTypes[O], O extends "Query", SCLR extends ScalarDefinition>(
  LazyQuery: Z | ValueTypes[O],
  options?:{
    apolloOptions?: LazyQueryHookOptions<InputType<GraphQLTypes[O], Z, SCLR>>,
    operationOptions?: OperationOptions,
    scalars?: SCLR
  }
) {
  return useLazyQuery<InputType<GraphQLTypes[O], Z, SCLR>>(gql(Zeus("query",LazyQuery, {
    operationOptions: options?.operationOptions,
    scalars: options?.scalars
  })), options?.apolloOptions);
}
export function useTypedSubscription<Z extends ValueTypes[O], O extends "Subscription", SCLR extends ScalarDefinition>(
  subscription: Z | ValueTypes[O],
  options?:{
    apolloOptions?: SubscriptionHookOptions<InputType<GraphQLTypes[O], Z, SCLR>>,
    operationOptions?: OperationOptions,
    scalars?: SCLR
  }
) {
  return useSubscription<InputType<GraphQLTypes[O], Z, SCLR>>(gql(Zeus("subscription",subscription, {
    operationOptions: options?.operationOptions,
    scalars: options?.scalars
  })), options?.apolloOptions);
}
