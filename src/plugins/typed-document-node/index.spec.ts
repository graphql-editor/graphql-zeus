import { Parser } from 'graphql-js-tree';
import { pluginTypedDocumentNode } from '.';

describe('plugin typed document node test', () => {
  it('generates correct typed document node plugin from the schema', () => {
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

    expect(tdnResult.ts).toContain(`
export function query<Z extends QueryWithVariables<ValueTypes["Query"]>>(
  query: Z,
):  TypedDocumentNode<InputType<GraphQLTypes["Query"], Z>, ExtractVariables<Z>> {
  return gql(Zeus("query", query as any));
}`);

    expect(tdnResult.ts).toContain(`
export function mutation<Z extends QueryWithVariables<ValueTypes["Mutation"]>>(
  mutation: Z,
):  TypedDocumentNode<InputType<GraphQLTypes["Mutation"], Z>, ExtractVariables<Z>> {
  return gql(Zeus("mutation", mutation as any));
}
`);
    expect(tdnResult.ts).toContain(`
export function subscription<Z extends QueryWithVariables<ValueTypes["Subscription"]>>(
  subscription: Z,
):  TypedDocumentNode<InputType<GraphQLTypes["Subscription"], Z>, ExtractVariables<Z>> {
  return gql(Zeus("subscription", subscription as any));
}
`);
  });
});
