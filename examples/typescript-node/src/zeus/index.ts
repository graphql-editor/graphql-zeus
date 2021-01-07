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
mutation: fullChainConstructor(fn,'mutation', 'Mutation')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'Query'),
mutation: fullChainConstructor(apiFetch(options),'mutation', 'Mutation')
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>,
mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  GraphQLTypes["Mutation"]
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  

export const Gql = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql')