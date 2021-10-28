/* eslint-disable */
import type { ValueTypes, GraphQLTypes, InputType, OperationOptions } from './index';
import type { UseQueryOptions, UseQueryResult, UseMutationOptions, UseMutationResult } from 'react-query';

export declare function useTypedQuery<TData, TResult = InputType<GraphQLTypes['Query'], TData>>(
  queryKey: string,
  query: TData | ValueTypes['Query'],
  options?: Omit<UseQueryOptions<TResult>, 'queryKey' | 'queryFn'>,
  zeusOptions?: OperationOptions,
): UseQueryResult<TResult>
export declare function useTypedMutation<TData, TResult = InputType<GraphQLTypes['Mutation'], TData>>(
  mutationKey: string,
  mutation: TData | ValueTypes['Mutation'],
  options?: Omit<UseMutationOptions<TResult>, 'mutationKey' | 'mutationFn'>,
  zeusOptions?: OperationOptions,
): UseMutationResult<TResult>
