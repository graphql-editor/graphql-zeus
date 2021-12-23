import { pluginReactQuery } from '@/plugins/react-query';
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
schema{
	query: Query
	mutation: Mutation
}
`;
    const tree = Parser.parse(schema);
    const pluginResult = pluginReactQuery({ tree });
    expect(pluginResult.ts).toContain(
      `import { ValueTypes, GraphQLTypes, InputType, Chain, OperationOptions, chainOptions } from './index';`,
    );
    expect(pluginResult.ts).toContain(`react-query`);
    expect(pluginResult.ts).toContain(`useMutation`);
    expect(pluginResult.ts).toContain(`useQuery`);
    expect(pluginResult.ts).toContain(`UseQueryOptions`);
    expect(pluginResult.ts).toContain(`UseMutationOptions`);
    expect(pluginResult.ts).toContain(
      `export function useTypedQuery<O extends "Query", TData extends ValueTypes[O], TResult = InputType<GraphQLTypes[O], TData>>`,
    );
    expect(pluginResult.ts).toContain(
      `export function useTypedMutation<O extends "Mutation", TData extends ValueTypes[O], TResult = InputType<GraphQLTypes[O], TData>>`,
    );
  });
});
