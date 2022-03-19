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
    expect(tdnResult.ts).toContain(`TODO`);
  });
});
