import { Parser } from 'graphql-js-tree';
import { pluginTypedDocumentNode } from '.';

describe('plugin typed document node test', () => {
  it('generates correct apollo plugin from the schema', () => {
    const schema = `
type Query{
	people: [String!]!
}
type Mutation{
	register(name: String!): String!
}
type Subscription{
	registrations: [String!]!
}
schema{
	query: Query
	mutation: Mutation
	subscription: Subscription
}
`;
    const tree = Parser.parse(schema);
    const tdnResult = pluginTypedDocumentNode({ tree });
    expect(tdnResult.ts).toContain(`
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { GraphQLTypes, InputType, ValueTypes, Zeus } from './index';
`);

    expect(tdnResult.ts).toContain(`export function tq<Z extends ValueTypes["Query"]>(
  query: Z | ValueTypes["Query"],
):  TypedDocumentNode<InputType<GraphQLTypes["Query"], Z>, {}> {
  return gql(Zeus("query", query));
}`);

    expect(tdnResult.ts).toContain(`
export function tm<Z extends ValueTypes["Mutation"]>(
  mutation: Z | ValueTypes["Mutation"],
):  TypedDocumentNode<InputType<GraphQLTypes["Mutation"], Z>, {}> {
  return gql(Zeus("mutation", mutation));
}
`);
    expect(tdnResult.ts).toContain(`
export function ts<Z extends ValueTypes["Subscription"]>(
  subscription: Z | ValueTypes["Subscription"],
):  TypedDocumentNode<InputType<GraphQLTypes["Subscription"], Z>, {}> {
  return gql(Zeus("subscription", subscription));
}
`);
  });
});
