import { replSpace } from '@/__tests__/TestUtils';
import { Parser } from 'graphql-js-tree';
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
    const m = replSpace(TreeToTS.resolveTree({ tree }));
    m(`age?:number`);
  });
});
