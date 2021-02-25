/* eslint-disable */

import {
  fullChainConstructor,
  /* @ts-ignore */
  fullSubscriptionConstructor,
  /* @ts-ignore */
  apiSubscription,
  apiFetch,
  ZeusSelect,
  queryConstruct,
} from './builtInFunctions';
import { FetchFunction, SubscriptionFunction, chainOptions, ValueTypes, CastToGraphQL, GraphQLTypes } from './typings';
export * from './typings';
export * from './builtInFunctions';

export const Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction) => ({
  query: fullChainConstructor(fn,'query', 'Query'),
mutation: fullChainConstructor(fn,'mutation', 'Mutation'),
subscription: fullSubscriptionConstructor(subscriptionFn,'subscription', 'Subscription')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'Query'),
mutation: fullChainConstructor(apiFetch(options),'mutation', 'Mutation'),
subscription: fullSubscriptionConstructor(apiSubscription(options),'subscription', 'Subscription')
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o),
subscription: (o:ValueTypes["Subscription"]) => queryConstruct('subscription', 'Subscription')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>,
mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  GraphQLTypes["Mutation"]
>,
subscription: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Subscription"],
  GraphQLTypes["Subscription"]
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>(),
subscription: ZeusSelect<ValueTypes["Subscription"]>()
};
  

export const Gql = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql')