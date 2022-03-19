import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { GraphQLTypes, InputType, ValueTypes, Zeus } from './index';

// Note: turns out the generated query does NOT have any params :|
// type ParamsType<SRC> = SRC extends [infer Params, infer Result] ? Params : { [K in keyof SRC]: ParamsType<SRC[K]> };

// type PayloadType<SRC, DST> = MapType<SRC, IsPayload<DST>>;

export function createTypedQuery<Z extends ValueTypes['query_root']>(
  query: Z,
): TypedDocumentNode<InputType<GraphQLTypes['query_root'], Z>, {}> {
  const zeusQuery = Zeus('query', query);
  const gqlQuery = gql(zeusQuery);

  return gqlQuery;
}

// Example
const userMemberships = createTypedQuery({
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
