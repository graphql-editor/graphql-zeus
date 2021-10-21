/* eslint-disable */
import { SubscriptionToGraphQL, GraphQLTypes, ValueTypes } from './index';

export declare const stuccoSubscriptions: <R extends keyof ValueTypes>(
  extractPayload: (result: unknown) => chainOptions,
  ...options: chainOptions
) => SubscriptionToGraphQL<ValueTypes[R], GraphQLTypes[R]>;
