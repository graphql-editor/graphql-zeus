import { Parser } from '../../Parser';
import { TreeToTS } from '../../TreeToTS';

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
    const { index } = TreeToTS.resolveTreeSplit(tree);
    expect(index).toContain(`Selectors = {`);
    expect(index).toContain(`query: ZeusSelect<ValueTypes["Query"]>()`);
  });
  it('Javascript: Selectors', () => {
    const tree = Parser.parseAddExtensions(schema);
    const { index } = TreeToTS.javascriptSplit(tree);
    expect(index).toContain(`ZeusSelect = () => (t) => t`);
    expect(index).toContain(`Selectors = {`);
    expect(index).toContain(`query: ZeusSelect()`);
  });
});
