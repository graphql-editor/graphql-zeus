import { TYPES } from '@/TreeToTS/templates/returnedTypes';
import { OperationType } from '../../Models';
import { Parser } from '../../Parser';
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
    const { javascript, definitions } = TreeToTS.javascript(tree);
    expect(javascript).toContain(`Chain = (...options)`);
    expect(definitions).toContain(`export declare function Chain`);
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
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Query"],${TYPES}["Query"]>`);
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
    expect(definitions).toContain(`OperationToGraphQL<ValueTypes["Query"],${TYPES}["Query"]>`);
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
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Mutation"],${TYPES}["Mutation"]>`);
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
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["Subscription"],${TYPES}["Subscription"]>`);
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
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["MQuery"],${TYPES}["MQuery"]>`);
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
    expect(typeScriptCode).toContain(`OperationToGraphQL<ValueTypes["MMutation"],${TYPES}["MMutation"]>`);
  });
});
