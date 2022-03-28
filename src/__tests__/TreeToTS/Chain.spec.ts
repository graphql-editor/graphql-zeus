import { replSpace } from '@/__tests__/TestUtils';
import { Parser } from 'graphql-js-tree';
import { TreeToTS } from '../../TreeToTS';

describe('Chain tests', () => {
  it('TypeScript: ChainDefinitions', () => {
    const schema = `
        type Person{ name:String }
        type Query{ people: [Person] }
        schema{
            query: Query
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const m = replSpace(TreeToTS.resolveTreeSplit({ tree }).index);
    m(`Chain = (...options: chainOptions) => Thunder(apiFetch(options));`);
  });
});
