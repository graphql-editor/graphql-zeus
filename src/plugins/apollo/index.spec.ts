import { pluginApollo } from '@/plugins/apollo';
import { Parser } from 'graphql-js-tree';

describe('plugin apollo test', () => {
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

    expect(pluginApollo(tree).ts).toContain(`import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useQuery, useMutation, useSubscription } from '@apollo/client';
import type { QueryHookOptions, MutationHookOptions, SubscriptionHookOptions } from '@apollo/client';`);
    expect(pluginApollo(tree).js.code).toContain(`import { Zeus } from './index';
import { gql, useQuery, useMutation, useSubscription } from '@apollo/client';`);
    expect(pluginApollo(tree).js.definitions)
      .toContain(`import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useQuery, useMutation, useSubscription } from '@apollo/client';
import type { QueryHookOptions, MutationHookOptions, SubscriptionHookOptions } from '@apollo/client';`);

    expect(pluginApollo(tree).ts).toContain(`export function useTypedQuery<Z>`);
    expect(pluginApollo(tree).ts).toContain(`export function useTypedMutation<Z>`);
    expect(pluginApollo(tree).ts).toContain(`export function useTypedSubscription<Z>`);

    expect(pluginApollo(tree).js.definitions).toContain(`export declare function useTypedQuery<Z>`);
    expect(pluginApollo(tree).js.definitions).toContain(`export declare function useTypedMutation<Z>`);
    expect(pluginApollo(tree).js.definitions).toContain(`export declare function useTypedSubscription<Z>`);
  });
});
