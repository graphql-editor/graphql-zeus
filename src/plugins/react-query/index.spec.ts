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
      `import { ValueTypes, GraphQLTypes, InputType, Gql, OperationOptions } from './index';`,
    );
    expect(pluginResult.ts).toContain(`react-query`);
    expect(pluginResult.ts).toContain(`useMutation`);
    expect(pluginResult.ts).toContain(`useQuery`);
    expect(pluginResult.ts).toContain(`UseQueryOptions`);
    expect(pluginResult.ts).toContain(`UseMutationOptions`);
    expect(pluginResult.ts).toContain(
      `export function useTypedQuery<TData, TResult = InputType<GraphQLTypes['Query'], TData>>`,
    );
    expect(pluginResult.ts).toContain(
      `export function useTypedMutation<TData, TResult = InputType<GraphQLTypes['Mutation'], TData>>`,
    );

    expect(pluginResult.js.code).toContain(`'react-query'`);
    expect(pluginResult.js.code).toContain(`import { Gql } from './index';`);
    expect(pluginResult.js.code).toContain(`useMutation`);
    expect(pluginResult.js.code).toContain(`useQuery`);
    expect(pluginResult.js.definitions).toContain(
      `import type { ValueTypes, GraphQLTypes, InputType, OperationOptions } from './index';`,
    );
    expect(pluginResult.js.definitions).toContain(`UseQueryOptions`);
    expect(pluginResult.js.definitions).toContain(`UseMutationOptions`);
    expect(pluginResult.js.definitions).toContain(`export declare function useTypedQuery`);
    expect(pluginResult.js.definitions).toContain(`export declare function useTypedMutation`);
  });
});
