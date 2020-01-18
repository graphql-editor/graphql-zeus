import { OperationType } from '../../src/Models';
import { Parser } from '../../src/Parser';
import { TreeToTS } from '../../src/TreeToTS';

describe('Chain tests', () => {
  it('Normal schema Query generation', () => {
    const schema = `
        type Person{ name:String }
        type Query{ people: [Person] }
        schema{
            query: Query
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`${OperationType.query}: ((o: any) =>`);
    expect(typeScriptCode).toContain(`fullChainConstruct(options)('${OperationType.query}', 'Query')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Query"],Query>`);
  });
  it('Normal schema Mutation generation', () => {
    const schema = `
        type Person{ name:String }
        type Query{ people: [Person] }
        type Mutation{ addPerson(name:String):Person  }
        schema{
            query: Query,
            mutation: Mutation
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`${OperationType.mutation}: ((o: any) =>`);
    expect(typeScriptCode).toContain(`fullChainConstruct(options)('${OperationType.mutation}', 'Mutation')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Mutation"],Mutation>`);
  });
  it('Normal schema Subscription generation', () => {
    const schema = `
        type Person{ name:String }
        type Query{ people: [Person] }
        type Subscription{ addPerson(name:String):Person  }
        schema{
            query: Query,
            subscription: Subscription
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`${OperationType.subscription}: ((o: any) =>`);
    expect(typeScriptCode).toContain(`fullChainConstruct(options)('${OperationType.subscription}', 'Subscription')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Subscription"],Subscription>`);
  });
  it('Custom schema Query generation', () => {
    const schema = `
        type Person{ name:String }
        type MQuery{ people: [Person] }
        schema{
            query: MQuery
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`${OperationType.query}: ((o: any) =>`);
    expect(typeScriptCode).toContain(`fullChainConstruct(options)('${OperationType.query}', 'MQuery')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["MQuery"],MQuery>`);
  });
  it('Custom schema Mutation generation', () => {
    const schema = `
    type Person{ name:String }
    type Query{ people: [Person] }
    type MMutation{ addPerson(name:String):Person  }
    schema{
        query: Query,
        mutation: MMutation
    }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`${OperationType.mutation}: ((o: any) =>`);
    expect(typeScriptCode).toContain(`fullChainConstruct(options)('${OperationType.mutation}', 'MMutation')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["MMutation"],MMutation>`);
  });
});
