/* eslint-disable */

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { GraphQLTypes, InputType, ValueTypes, Zeus } from './index';

type Variable<T, Name extends string> = {
  ' __zeus_name': Name;
  ' __zeus_type': T;
};

type QueryInputWithVariables<T> = T extends string | number | Array<any>
  ? Variable<T, any> | T
  : Variable<T, any> | { [K in keyof T]: QueryInputWithVariables<T[K]> } | T;

type QueryWithVariables<T> = T extends [infer Input, infer Output]
  ? [QueryInputWithVariables<Input>, QueryWithVariables<Output>]
  : { [K in keyof T]: QueryWithVariables<T[K]> };

type ExtractVariables<Query> = Query extends Variable<infer VType, infer VName>
  ? { [key in VName]: VType }
  : Query extends [infer Inputs, infer Outputs]
  ? ExtractVariables<Inputs> & ExtractVariables<Outputs>
  : Query extends string | number | boolean
  ? {}
  : UnionToIntersection<{ [K in keyof Query]: ExtractVariables<Query[K]> }[keyof Query]>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export const $ = <Type, Name extends string>(name: Name) => {
  return ('ZEUS_VAR$' + name) as any as Variable<Type, Name>;
};

export function query<Z extends QueryWithVariables<ValueTypes['Query']>>(
  query: Z,
): TypedDocumentNode<InputType<GraphQLTypes['Query'], Z>, ExtractVariables<Z>> {
  return gql(Zeus('query', query as any));
}

export function mutation<Z extends QueryWithVariables<ValueTypes['Mutation']>>(
  mutation: Z,
): TypedDocumentNode<InputType<GraphQLTypes['Mutation'], Z>, ExtractVariables<Z>> {
  return gql(Zeus('mutation', mutation as any));
}

export function subscription<Z extends QueryWithVariables<ValueTypes['Subscription']>>(
  subscription: Z,
): TypedDocumentNode<InputType<GraphQLTypes['Subscription'], Z>, ExtractVariables<Z>> {
  return gql(Zeus('subscription', subscription as any));
}
