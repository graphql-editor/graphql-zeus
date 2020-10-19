import { ParserTree, TypeDefinition, TypeDefinitionDisplayStrings } from '../../Models';
import { TreeToGraphQL } from '../../TreeToGraphQL';

describe('TypeDefintion declarations tests on TreeToGraphQL', () => {
  test('ObjectTypeDefinition - type keyword', () => {
    const schema = 'type Person';
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.type,
          },
          data: {
            type: TypeDefinition.ObjectTypeDefinition,
          },
          interfaces: [],
          directives: [],
          args: [],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(schema);
  });
  test('InterfaceTypeDefinition - interface keyword', () => {
    const schema = 'interface Person';
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.interface,
          },
          data: {
            type: TypeDefinition.InterfaceTypeDefinition,
          },
          directives: [],
          args: [],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(schema);
  });
  test('InputObjectTypeDefinition - input keyword', () => {
    const schema = 'input Person';
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          directives: [],
          args: [],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(schema);
  });
  test('EnumTypeDefinition - enum keyword', () => {
    const schema = 'enum Person';
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.enum,
          },
          data: {
            type: TypeDefinition.EnumTypeDefinition,
          },
          directives: [],
          args: [],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(schema);
  });
  test('UnionTypeDefinition - union keyword', () => {
    const schema = 'union Person';
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.union,
          },
          data: {
            type: TypeDefinition.UnionTypeDefinition,
          },
          directives: [],
          args: [],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(schema);
  });
  test('ScalarTypeDefinition - scalar keyword', () => {
    const schema = 'scalar Person';
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.scalar,
          },
          data: {
            type: TypeDefinition.ScalarTypeDefinition,
          },
          directives: [],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(schema);
  });
});
