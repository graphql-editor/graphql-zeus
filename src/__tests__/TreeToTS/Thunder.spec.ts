import { Parser } from 'graphql-js-tree';
import { TreeToTS } from '../../TreeToTS';

const schema = `
type Person{ name:String }
type Query{ people: [Person] }
schema{
    query: Query
}
`;
describe('Thunder tests', () => {
  it('TypeScript: ThunderDefinitions', () => {
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree({ tree });
    expect(typeScriptCode).toContain(`export const Thunder = (fn: FetchFunction) => <
  O extends 'query',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;
`);
  });
});
