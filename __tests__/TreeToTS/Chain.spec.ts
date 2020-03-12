import { OperationType } from '../../src/Models';
import { Parser } from '../../src/Parser';
import { TreeToTS } from '../../src/TreeToTS';

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
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`Chain = (...options: fetchOptions)`);
  });
  it('Javascript: ChainDefinitions', () => {
    const schema = `
        type Person{ name:String }
        type Query{ people: [Person] }
        schema{
            query: Query
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const { javascript } = TreeToTS.javascript(tree);
    expect(javascript).toContain(`Chain = (...options)`);
  });
  it('TypeScript: Normal schema Query generation', () => {
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
    expect(typeScriptCode).toContain(`fullChainConstruct(apiFetch(options))('${OperationType.query}', 'Query')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Query"],Query>`);
  });
  it('Javascript: Normal schema Query generation', () => {
    const schema = `
        type Person{ name:String }
        type Query{ people: [Person] }
        schema{
            query: Query
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const { javascript, definitions } = TreeToTS.javascript(tree);
    expect(javascript).toContain(`${OperationType.query}: (o) =>`);
    expect(javascript).toContain(`fullChainConstruct(apiFetch(options))('${OperationType.query}', 'Query')`);
    expect(definitions).toContain(`OperationToGraphQL<ValueTypes["Query"],Query>`);
  });

  it('TypeScript: Normal schema Mutation generation', () => {
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
    expect(typeScriptCode).toContain(`fullChainConstruct(apiFetch(options))('${OperationType.mutation}', 'Mutation')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Mutation"],Mutation>`);
  });
  it('TypeScript: Normal schema Subscription generation', () => {
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
    expect(typeScriptCode).toContain(
      `fullChainConstruct(apiFetch(options))('${OperationType.subscription}', 'Subscription')`,
    );
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Subscription"],Subscription>`);
  });
  it('TypeScript: Custom schema Query generation', () => {
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
    expect(typeScriptCode).toContain(`fullChainConstruct(apiFetch(options))('${OperationType.query}', 'MQuery')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["MQuery"],MQuery>`);
  });
  it('TypeScript: Custom schema Mutation generation', () => {
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
    expect(typeScriptCode).toContain(`fullChainConstruct(apiFetch(options))('${OperationType.mutation}', 'MMutation')`);
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["MMutation"],MMutation>`);
  });
});
