import { pluginStucco } from '@/plugins/stuccoSubscriptions';
import { Parser } from 'graphql-js-tree';

describe('plugin react-query test', () => {
  it('generates correct react-query plugin from the schema', () => {
    const schema = `
type Query{
	people: [String!]!
}
type Mutation{
	register(name: String!): String!
}
type Subscription{
	register(name: String!): String!
}
schema{
	query: Query
	mutation: Mutation
  subscription: Subscription
}
`;
    const tree = Parser.parse(schema);
    const pluginResult = pluginStucco({ tree });
    expect(pluginResult.ts).toBeTruthy();
  });
});
