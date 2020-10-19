import { Parser } from '../../Parser';
import { TreeToTS } from '../../TreeToTS';

describe('Extend tests on parser', () => {
  it('Extends Person type', () => {
    const schema = `
        type Person{ name:String }
        extend type Person {
            age: Int
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`age?:number`);
  });
});
