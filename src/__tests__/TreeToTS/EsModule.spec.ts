import { replSpace } from '@/__tests__/TestUtils';
import { Parser } from 'graphql-js-tree';
import { TreeToTS } from '../../TreeToTS';

const schema = `
type Query{ people: [String] }
schema{
    query: Query
}
`;
describe('Esmodule flag tests', () => {
  it('With esModule flag it should contain js import', () => {
    const tree = Parser.parseAddExtensions(schema);
    const m = replSpace(TreeToTS.resolveTreeSplit({ tree, esModule: true }).indexImports);
    m(`'./const.js'`);
  });
  it('Without esModule flag it should not contain js import', () => {
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTreeSplit({ tree, esModule: false });
    expect(typeScriptCode.indexImports).toContain(`'./const'`);
    expect(typeScriptCode.indexImports).not.toContain(`'./const.js'`);
  });
});
