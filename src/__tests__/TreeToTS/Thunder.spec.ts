import { OperationType } from '../../Models';
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
  it('TypeScript: ThunderDefinitions', () => {
    const schema = `
        type Person{ name:String }
        type Query{ people: [Person] }
        schema{
            query: Query
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction)`);
  });
  it('Javascript: ThunderDefinitions', () => {
    const schema = `
        type Person{ name:String }
        type Query{ people: [Person] }
        schema{
            query: Query
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const { index, definitions } = TreeToTS.javascriptSplit(tree);
    expect(index).toContain(`Thunder = (fn, subscriptionFn)`);
    expect(definitions).toContain(`export declare function Thunder`);
  });
  it('TypeScript: Normal schema Query generation', () => {
    const tree = Parser.parseAddExtensions(schema);
    const { index } = TreeToTS.resolveTreeSplit(tree);
    expect(index).toContain(`fullChainConstructor(fn,'${OperationType.query}', 'Query')`);
  });
  it('Javascript: Normal schema Query generation', () => {
    const tree = Parser.parseAddExtensions(schema);
    const { index } = TreeToTS.javascriptSplit(tree);
    expect(index).toContain(`fullChainConstructor(fn,'${OperationType.query}', 'Query')`);
  });
});
