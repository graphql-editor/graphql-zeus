/* eslint-disable */

import { ValueTypes, GraphQLTypes, InputType, Chain, OperationOptions } from './index';
import { useMutation, useQuery } from 'react-query';
import type { UseMutationOptions, UseQueryOptions } from 'react-query';


export function useTypedMutation<O extends "mutation_root", TData, TResult = InputType<GraphQLTypes[O], TData>>(
  mutationKey: string,
  mutation: TData | ValueTypes[O],
  options?: Omit<UseMutationOptions<TResult>, 'mutationKey' | 'mutationFn'>,
  zeusOptions?: OperationOptions,
  host = ""
) {
  return useMutation<TResult>(mutationKey, () => Chain(host)("mutation")(mutation, zeusOptions) as Promise<TResult>, options);
}
export function useTypedQuery<O extends "query_root", TData, TResult = InputType<GraphQLTypes[O], TData>>(
  queryKey: string,
  query: TData | ValueTypes[O],
  options?: Omit<UseQueryOptions<TResult>, 'queryKey' | 'queryFn'>,
  zeusOptions?: OperationOptions,
  host = ""
) {
  return useQuery<TResult>(queryKey, () => Chain(host)("query")(query, zeusOptions) as Promise<TResult>, options);
}
