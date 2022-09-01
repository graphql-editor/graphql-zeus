/* eslint-disable */

import { ValueTypes, GraphQLTypes, InputType, Chain, OperationOptions, chainOptions } from './index';
import { useQuery, useMutation } from 'react-query';
import type { UseQueryOptions, UseMutationOptions } from 'react-query';


export function useTypedQuery<O extends "Query", TData extends ValueTypes[O], TResult = InputType<GraphQLTypes[O], TData>>(
  queryKey: string | unknown[],
  query: TData | ValueTypes[O],
  options?: Omit<UseQueryOptions<TResult, any, any>, 'queryKey' | 'queryFn'>,
  zeusOptions?: OperationOptions,
  host = "https://faker.graphqleditor.com/a-team/olympus/graphql",
  hostOptions: chainOptions[1] = {},
) {
  return useQuery<TResult, any, any>(queryKey, () => Chain(host, hostOptions)("query")(query, zeusOptions) as Promise<TResult>, options);
}
export function useTypedMutation<O extends "Mutation", TData extends ValueTypes[O], TResult = InputType<GraphQLTypes[O], TData>>(
  mutationKey: string | unknown[],
  mutation: TData | ValueTypes[O],
  options?: Omit<UseMutationOptions<TResult, any, any>, 'mutationKey' | 'mutationFn'>,
  zeusOptions?: OperationOptions,
  host = "https://faker.graphqleditor.com/a-team/olympus/graphql",
  hostOptions: chainOptions[1] = {},
) {
  return useMutation<TResult, any, any>(mutationKey, () => Chain(host, hostOptions)("mutation")(mutation, zeusOptions) as Promise<TResult>, options);
}
