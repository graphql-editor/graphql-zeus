import { chainOptions, GraphQLTypes, OperationOptions, SubscriptionToGraphQL, ValueTypes } from './index';
export declare type WebsocketSubscription = {
    ws: WebSocket;
    on: (...args: unknown[]) => void;
    off: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    open: (...args: unknown[]) => void;
};
export declare const stuccoSubscriptions: <S extends "Subscription">(subscriptionConnectionFunction: (params: {
    result: unknown;
    query: string;
}) => Promise<WebsocketSubscription>, ...options: chainOptions) => <Z extends ValueTypes[S]>(o: Z | ValueTypes[S], ops?: OperationOptions) => SubscriptionToGraphQL<Z, GraphQLTypes[S]>;
