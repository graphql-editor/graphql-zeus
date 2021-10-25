/* eslint-disable */

import { ValueTypes, GraphQLTypes, InputType, Gql, OperationOptions } from './index';
import { useQuery, useMutation } from 'react-query';
import type { UseQueryOptions, UseMutationOptions } from 'react-query';


export function useTypedQuery<TData, TResult = InputType<GraphQLTypes['Query'], TData>>(
  queryKey: string,
  query: TData | ValueTypes['Query'],
  options?: Omit<UseQueryOptions<TResult>, 'queryKey' | 'queryFn'>,
  zeusOptions?: OperationOptions,
) {
  return useQuery<TResult>(queryKey, () => Gql.query(query, zeusOptions) as Promise<TResult>, options);
}
export function useTypedMutation<TData, TResult = InputType<GraphQLTypes['Mutation'], TData>>(
  mutationKey: string,
  mutation: TData | ValueTypes['Mutation'],
  options?: Omit<UseMutationOptions<TResult>, 'mutationKey' | 'mutationFn'>,
  zeusOptions?: OperationOptions,
) {
  return useMutation<TResult>(mutationKey, () => Gql.mutation(mutation, zeusOptions) as Promise<TResult>, options);
}
