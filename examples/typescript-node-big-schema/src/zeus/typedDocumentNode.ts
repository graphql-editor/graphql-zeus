import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { GraphQLTypes, InputType, ValueTypes, Zeus } from './index';

export function tq<Z extends ValueTypes['query_root']>(
  query: Z | ValueTypes['query_root'],
): TypedDocumentNode<InputType<GraphQLTypes['query_root'], Z>, {}> {
  return gql(Zeus('query', query));
}

export function tm<Z extends ValueTypes['mutation_root']>(
  mutation: Z,
): TypedDocumentNode<InputType<GraphQLTypes['mutation_root'], Z>, {}> {
  return gql(Zeus('mutation', mutation));
}

export function ts<Z extends ValueTypes['subscription_root']>(
  mutation: Z,
): TypedDocumentNode<InputType<GraphQLTypes['subscription_root'], Z>, {}> {
  return gql(Zeus('mutation', mutation));
}

tq({
  aggregateBookings: [
    {
      where: {
        bookerName: { _eq: '5' },
      },
    },
    {
      aggregate: {
        avg: {
          nights: true,
        },
      },
    },
  ],
});
// Example
const userMemberships = tq({
  user: [
    {
      id: 'x',
    },
    {
      memberships: [
        {
          limit: 5,
        },
        {
          role: true,
        },
      ],
    },
  ],
});

const mutate = tm({
  insertBooking: [
    {
      object: {},
    },
    {
      bookerName: true,
    },
  ],
});
