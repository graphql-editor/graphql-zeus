import { replSpace } from '@/__tests__/TestUtils';
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
  it('TypeScript: Selectors', () => {
    const tree = Parser.parseAddExtensions(schema);
    const m = replSpace(TreeToTS.resolveTreeSplit({ tree }).index);
    m(`Selector =`);
  });
});
