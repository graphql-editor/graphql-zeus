import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { GraphQLTypes, InputType, ValueTypes, Zeus, $ } from './index';

const $$ = new Proxy(
  {},
  {
    get(target, propName, receiver) {
      return 'ZEUS_VAR$' + propName.toString();
    },
  },
);

const $$ = <Name extends string>(name: Name) => {
  return ('ZEUS_VAR$' + name) as any as Variable<any, Name>;
};

type X<K extends string> = { [Key in K]: Variable<any, K> };

type Variable<T, Name extends string> = {
  __zeus_name: Name;
  __zeus_type: T;
};

type VariablizedInput<T> = T extends string | number | Array<any>
  ? T | Variable<T, any>
  : T | Variable<T, any> | { [K in keyof T]: VariablizedInput<T[K]> };

type VariablizedQuery<T> = T extends [infer Input, infer Output]
  ? [VariablizedInput<Input>, VariablizedQuery<Output>]
  : { [K in keyof T]: VariablizedQuery<T[K]> };

type ConnValue = ValueTypes['connection'];
type Test = VariablizedQuery<ConnValue>;
export function tq<ResultType extends ValueTypes['query_root'], VariablesType>(
  query: VariablizedQuery<ResultType>,
): TypedDocumentNode<InputType<GraphQLTypes['query_root'], ResultType>, VariablesType> {
  return gql(Zeus('query', query as any));
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
        bookerName: { _eq: $$('bookerName') },
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
      id: $$('id'),
    },
    {
      memberships: [
        {
          limit: $$('limit'),
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
