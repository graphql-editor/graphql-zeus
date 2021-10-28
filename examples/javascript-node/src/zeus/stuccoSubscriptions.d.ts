/* eslint-disable */
import { SubscriptionToGraphQL, GraphQLTypes, ValueTypes, chainOptions } from './index';

export type WebsocketSubscription = {
  ws: WebSocket;
  on: (...args: unknown[]) => void;
  off: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  open: (...args: unknown[]) => void;
};

export declare const stuccoSubscriptions: <R extends keyof ValueTypes>(
  subscriptionConnectionFunction: (params: { result: unknown; query: string }) => Promise<WebsocketSubscription>,
  ...options: chainOptions
) => SubscriptionToGraphQL<ValueTypes[R], GraphQLTypes[R]>;