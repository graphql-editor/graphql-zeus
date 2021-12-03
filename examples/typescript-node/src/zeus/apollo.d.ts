import { GraphQLTypes, InputType, ValueTypes } from './index';
import type { QueryHookOptions, LazyQueryHookOptions, MutationHookOptions, SubscriptionHookOptions } from '@apollo/client';
export declare function useTypedQuery<Z, O extends "Query">(query: Z | ValueTypes[O], options?: QueryHookOptions<InputType<GraphQLTypes[O], Z>>): import("@apollo/client").QueryResult<InputType<GraphQLTypes[O], Z>, import("@apollo/client").OperationVariables>;
export declare function useTypedLazyQuery<Z, O extends "Query">(LazyQuery: Z | ValueTypes[O], options?: LazyQueryHookOptions<InputType<GraphQLTypes[O], Z>>): import("@apollo/client").QueryTuple<InputType<GraphQLTypes[O], Z>, import("@apollo/client").OperationVariables>;
export declare function useTypedMutation<Z, O extends "Mutation">(mutation: Z | ValueTypes[O], options?: MutationHookOptions<InputType<GraphQLTypes[O], Z>>): import("@apollo/client").MutationTuple<InputType<GraphQLTypes[O], Z>, import("@apollo/client").OperationVariables, import("@apollo/client").DefaultContext, import("@apollo/client").ApolloCache<any>>;
export declare function useTypedSubscription<Z, O extends "Subscription">(subscription: Z | ValueTypes[O], options?: SubscriptionHookOptions<InputType<GraphQLTypes[O], Z>>): {
    variables: import("@apollo/client").OperationVariables;
    loading: boolean;
    data?: InputType<GraphQLTypes[O], Z>;
    error?: import("@apollo/client").ApolloError;
};
