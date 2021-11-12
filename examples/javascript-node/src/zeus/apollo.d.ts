/* eslint-disable */
import type { GraphQLTypes, InputType, ValueTypes } from './index';
import type { QueryTuple, QueryResult, MutationTuple, QueryHookOptions, LazyQueryHookOptions, SubscriptionHookOptions, MutationHookOptions } from '@apollo/client';


export declare function useTypedQuery<TData,
  TVariables = OperationVariables,
  TResult = InputType<GraphQLTypes['Query'], TData>
>(
  query: TData | ValueTypes['Query'],
  options?: QueryHookOptions<TResult>,
): QueryResult<TResult, TVariables>;
export declare function useTypedLazyQuery<TData,
  TVariables = OperationVariables,
  TResult = InputType<GraphQLTypes['Query'], TData>
>(
  LazyQuery: TData | ValueTypes['Query'],
  options?: LazyQueryHookOptions<TResult>,
): QueryTuple<TResult, TVariables>;
export declare function useTypedSubscription<TData,
  TVariables = OperationVariables,
  TResult = InputType<GraphQLTypes['Subscription'], TData>
>(
  subscription: TData | ValueTypes['Subscription'],
  options?: SubscriptionHookOptions<TResult>,
): {
  variables: TVariables | undefined;
  loading: boolean;
  data?: TResult | undefined;
  error?: ApolloError | undefined;
};
export declare function useTypedMutation<TData,
  TVariables = OperationVariables,
  TResult = InputType<GraphQLTypes['Mutation'], TData>
>(
  mutation: TData | ValueTypes['Mutation'],
  options?: MutationHookOptions<TResult>,
): MutationTuple<TResult, TVariables>;
