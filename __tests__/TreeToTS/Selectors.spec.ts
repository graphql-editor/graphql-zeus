import { Parser } from '../../src/Parser';
import { TreeToTS } from '../../src/TreeToTS';

const schema = `
type Person{ name:String }
type Query{ people: [Person] }
schema{
    query: Query
}
`;
describe('Thunder tests', () => {
  it('TypeScript: Selectors', () => {
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`Selectors = {`);
    expect(typeScriptCode).toContain(`query: ZeusSelect<ValueTypes["Query"]>()`);
  });
  it('Javascript: Selectors', () => {
    const tree = Parser.parseAddExtensions(schema);
    const { javascript, definitions } = TreeToTS.javascript(tree);
    expect(javascript).toContain(`ZeusSelect = () => (t) => t`);
    expect(javascript).toContain(`Selectors = {`);
    expect(javascript).toContain(`query: ZeusSelect()`);
    expect(definitions).toContain(`export declare const Selectors`);
    expect(definitions).toContain(`query: SelectionFunction<ValueTypes["Query"]>`);
  });
});
