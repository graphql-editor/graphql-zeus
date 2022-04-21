import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { GraphQLTypes, InputType, ValueTypes, Zeus } from './index';

const $$ = <Type, Name extends string>(name: Name) => {
  return ('ZEUS_VAR$' + name) as any as Variable<Type, Name>;
};

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

type ExtractVariables<Query> = Query extends Variable<infer VType, infer VName>
  ? { [key in VName]: VType }
  : Query extends [infer Inputs, infer Outputs]
  ? Intersectionize<{ inputs: ExtractVariables<Inputs>; outputs: ExtractVariables<Outputs> }>
  : Query extends string | number | boolean
  ? {}
  : Intersectionize<{ [K in keyof Query]: ExtractVariables<Query[K]> }>;

type Intersectionize<ObjectKeys> = UnionToIntersection<ObjectKeys[keyof ObjectKeys]>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

// Unit testing:
// type TestExtractor = ExtractVariables<{
//   cardById: [{ cardId: Variable<any, 'test'> }, { attack: true; defense: true }];
// }>;

export function tq<ResultType extends VariablizedQuery<ValueTypes['Query']>>(
  query: ResultType,
): TypedDocumentNode<InputType<GraphQLTypes['Query'], ResultType>, ExtractVariables<ResultType>> {
  return gql(Zeus('query', query as any));
}

export function tm<Z extends ValueTypes['Mutation']>(
  mutation: Z,
): TypedDocumentNode<InputType<GraphQLTypes['Mutation'], Z>, {}> {
  return gql(Zeus('mutation', mutation));
}

export function ts<Z extends ValueTypes['Subscription']>(
  mutation: Z,
): TypedDocumentNode<InputType<GraphQLTypes['Subscription'], Z>, {}> {
  return gql(Zeus('mutation', mutation));
}

const q = tq({
  cardById: [
    {
      cardId: $$('test'),
    },
    {
      Attack: true,
      Defense: true,
    },
  ],
});

// Example
// const userMemberships = tq({
//   user: [
//     {
//       id: $$('id'),
//     },
//     {
//       memberships: [
//         {
//           limit: $$('limit'),
//         },
//         {
//           role: true,
//         },
//       ],
//     },
//   ],
// });

// const mutate = tm({
//   insertBooking: [
//     {
//       object: {},
//     },
//     {
//       bookerName: true,
//     },
//   ],
// });
