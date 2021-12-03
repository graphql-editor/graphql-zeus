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
    const typeScriptCode = TreeToTS.resolveTreeSplit({ tree });
    expect(typeScriptCode.index).toContain(`Chain = (...options: chainOptions) => Thunder(apiFetch(options));`);
  });
});
