import { OperationType } from '../../Models';
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
    const typeScriptCode = TreeToTS.resolveTreeSplit(tree);
    expect(typeScriptCode.index).toContain(`Chain = (...options: chainOptions)`);
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
    const { index, definitions } = TreeToTS.javascriptSplit(tree);
    expect(index).toContain(`Chain = (...options)`);
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
    const { index } = TreeToTS.resolveTreeSplit(tree);
    expect(index).toContain(`fullChainConstructor(apiFetch(options),'${OperationType.query}', 'Query')`);
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
    const { index } = TreeToTS.javascriptSplit(tree);
    expect(index).toContain(`fullChainConstructor(apiFetch(options),'${OperationType.query}', 'Query')`);
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
    const { index } = TreeToTS.resolveTreeSplit(tree);
    expect(index).toContain(`fullChainConstructor(apiFetch(options),'${OperationType.mutation}', 'Mutation')`);
    expect(index).toContain(`fullChainConstructor(apiFetch(options),'${OperationType.query}', 'Query')`);
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
    const { index } = TreeToTS.resolveTreeSplit(tree);
    expect(index).toContain(
      `fullSubscriptionConstructor(apiSubscription(options),'${OperationType.subscription}', 'Subscription')`,
    );
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
    const { index } = TreeToTS.resolveTreeSplit(tree);
    expect(index).toContain(`fullChainConstructor(apiFetch(options),'${OperationType.query}', 'MQuery')`);
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
    const { index } = TreeToTS.resolveTreeSplit(tree);
    expect(index).toContain(`fullChainConstructor(apiFetch(options),'${OperationType.mutation}', 'MMutation')`);
  });
});
