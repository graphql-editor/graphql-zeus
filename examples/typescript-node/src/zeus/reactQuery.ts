/* eslint-disable */

import { ValueTypes, GraphQLTypes, InputType, Chain, OperationOptions } from './index';
import { useQuery, useMutation } from 'react-query';
import type { UseQueryOptions, UseMutationOptions } from 'react-query';


export function useTypedQuery<O extends "Query", TData extends ValueTypes[O], TResult = InputType<GraphQLTypes[O], TData>>(
  queryKey: string,
  query: TData | ValueTypes[O],
  options?: Omit<UseQueryOptions<TResult>, 'queryKey' | 'queryFn'>,
  zeusOptions?: OperationOptions,
  host = "https://faker.graphqleditor.com/a-team/olympus/graphql"
) {
  return useQuery<TResult>(queryKey, () => Chain(host)("query")(query, zeusOptions) as Promise<TResult>, options);
}
export function useTypedMutation<O extends "Mutation", TData extends ValueTypes[O], TResult = InputType<GraphQLTypes[O], TData>>(
  mutationKey: string,
  mutation: TData | ValueTypes[O],
  options?: Omit<UseMutationOptions<TResult>, 'mutationKey' | 'mutationFn'>,
  zeusOptions?: OperationOptions,
  host = "https://faker.graphqleditor.com/a-team/olympus/graphql"
) {
  return useMutation<TResult>(mutationKey, () => Chain(host)("mutation")(mutation, zeusOptions) as Promise<TResult>, options);
}
