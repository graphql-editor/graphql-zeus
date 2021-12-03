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
    const apolloResult = pluginApollo({ tree });
    expect(apolloResult.ts).toContain(`import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useQuery, useLazyQuery, useMutation, useSubscription } from '@apollo/client';
import type { QueryHookOptions, LazyQueryHookOptions, MutationHookOptions, SubscriptionHookOptions } from '@apollo/client';`);
    expect(apolloResult.ts).toContain(`export function useTypedQuery<Z, O extends "Query">`);
    expect(apolloResult.ts).toContain(`export function useTypedLazyQuery<Z, O extends "Query">`);
    expect(apolloResult.ts).toContain(`export function useTypedMutation<Z, O extends "Mutation">`);
    expect(apolloResult.ts).toContain(`export function useTypedSubscription<Z, O extends "Subscription">`);
  });
});
