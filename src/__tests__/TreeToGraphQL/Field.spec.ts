import {
  Options,
  ParserTree,
  ScalarTypes,
  TypeDefinition,
  TypeDefinitionDisplayStrings,
  TypeSystemDefinition,
} from '../../Models';
import { TreeToGraphQL } from '../../TreeToGraphQL';

describe('Fields tests on parser', () => {
  test(`Built in ScalarTypes - ${Object.keys(ScalarTypes).join(', ')}`, () => {
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
          args: [
            {
              name: 'id',
              type: {
                name: ScalarTypes.ID,
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
            {
              name: 'name',
              type: {
                name: ScalarTypes.String,
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
            {
              name: 'age',
              type: {
                name: ScalarTypes.Int,
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
            {
              name: 'weight',
              type: {
                name: ScalarTypes.Float,
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
            {
              name: 'verified',
              type: {
                name: ScalarTypes.Boolean,
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`id: ${ScalarTypes.ID}`);
    expect(graphql).toContain(`name: ${ScalarTypes.String}`);
    expect(graphql).toContain(`age: ${ScalarTypes.Int}`);
    expect(graphql).toContain(`weight: ${ScalarTypes.Float}`);
    expect(graphql).toContain(`verified: ${ScalarTypes.Boolean}`);
  });
  test('Type objects', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Car',
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
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`car: Car`);
  });
  test('Interface objects', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Car',
          type: {
            name: TypeDefinitionDisplayStrings.interface,
          },
          data: {
            type: TypeDefinition.InterfaceTypeDefinition,
          },
          directives: [],
          args: [],
        },
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
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`car: Car`);
  });
  test('Enum objects', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Car',
          type: {
            name: TypeDefinitionDisplayStrings.enum,
          },
          data: {
            type: TypeDefinition.EnumTypeDefinition,
          },
          directives: [],
          args: [],
        },
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
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`car: Car`);
  });
  test('Custom scalar objects', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Car',
          type: {
            name: TypeDefinitionDisplayStrings.scalar,
          },
          data: {
            type: TypeDefinition.ScalarTypeDefinition,
          },
          directives: [],
        },
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
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`car: Car`);
  });
  test('Union objects', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Car',
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
        {
          name: 'Plane',
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
        {
          name: 'Machine',
          type: {
            name: TypeDefinitionDisplayStrings.union,
          },
          data: {
            type: TypeDefinition.UnionTypeDefinition,
          },
          directives: [],
          args: [
            {
              name: 'Car',
              type: {
                name: 'Car',
              },
              data: {
                type: TypeSystemDefinition.UnionMemberDefinition,
              },
            },
            {
              name: 'Plane',
              type: {
                name: 'Plane',
              },
              data: {
                type: TypeSystemDefinition.UnionMemberDefinition,
              },
            },
          ],
        },
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
          args: [
            {
              name: 'machine',
              type: {
                name: 'Machine',
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`machine: Machine`);
  });
  test(`Required fields`, () => {
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
          args: [
            {
              name: 'id',
              type: {
                name: ScalarTypes.ID,
                options: [Options.required],
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`id: ID!`);
  });
  test(`ListType fields`, () => {
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
          args: [
            {
              name: 'id',
              type: {
                name: ScalarTypes.ID,
                options: [Options.required],
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
            {
              name: 'name',
              type: {
                name: ScalarTypes.String,
                options: [Options.array],
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
            {
              name: 'friends',
              type: {
                name: 'Person',
                options: [Options.array, Options.arrayRequired, Options.required],
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`name: [${ScalarTypes.String}]`);
    expect(graphql).toContain(`friends: [Person!]!`);
  });
});
