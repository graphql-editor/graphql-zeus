import {
  Instances,
  ParserTree,
  ScalarTypes,
  TypeDefinition,
  TypeDefinitionDisplayStrings,
  Value,
  ValueDefinition,
} from '../../Models';
import { TreeToGraphQL } from '../../TreeToGraphQL';

describe('Input Values tests on TreeToGraphQL', () => {
  test(`Built in ScalarTypes - ${Object.keys(ScalarTypes).join(', ')}`, () => {
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
          args: [
            {
              name: 'id',
              type: {
                name: ScalarTypes.ID,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
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
                type: ValueDefinition.InputValueDefinition,
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
                type: ValueDefinition.InputValueDefinition,
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
                type: ValueDefinition.InputValueDefinition,
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
                type: ValueDefinition.InputValueDefinition,
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
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          directives: [],
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
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
  test('Input objects', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Car',
          type: {
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          directives: [],
          args: [
            {
              name: 'year',
              type: {
                name: ScalarTypes.Int,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          directives: [],
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
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
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          directives: [],
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
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
  test(`Default ScalarTypes values - ${Object.keys(ScalarTypes).join(', ')}`, () => {
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
          args: [
            {
              name: 'id',
              type: {
                name: ScalarTypes.ID,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [
                {
                  name: 'abcdef',
                  type: {
                    name: Value.StringValue,
                  },
                  data: {
                    type: Value.StringValue,
                  },
                },
              ],
            },
            {
              name: 'name',
              type: {
                name: ScalarTypes.String,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [
                {
                  name: 'Artur',
                  type: {
                    name: Value.StringValue,
                  },
                  data: {
                    type: Value.StringValue,
                  },
                },
              ],
            },
            {
              name: 'age',
              type: {
                name: ScalarTypes.Int,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [
                {
                  name: '28',
                  type: {
                    name: Value.IntValue,
                  },
                  data: {
                    type: Value.IntValue,
                  },
                },
              ],
            },
            {
              name: 'weight',
              type: {
                name: ScalarTypes.Float,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [
                {
                  name: '73.0',
                  type: {
                    name: Value.FloatValue,
                  },
                  data: {
                    type: Value.FloatValue,
                  },
                },
              ],
            },
            {
              name: 'verified',
              type: {
                name: ScalarTypes.Boolean,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [
                {
                  name: 'true',
                  type: {
                    name: Value.BooleanValue,
                  },
                  data: {
                    type: Value.BooleanValue,
                  },
                },
              ],
            },
          ],
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`id: ${ScalarTypes.ID} = "abcdef"`);
    expect(graphql).toContain(`name: ${ScalarTypes.String} = "Artur"`);
    expect(graphql).toContain(`age: ${ScalarTypes.Int} = 28`);
    expect(graphql).toContain(`weight: ${ScalarTypes.Float} = 73.0`);
    expect(graphql).toContain(`verified: ${ScalarTypes.Boolean} = true`);
  });

  test('Default Input objects', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Car',
          type: {
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          directives: [],
          args: [
            {
              name: 'year',
              type: {
                name: ScalarTypes.Int,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [],
            },
          ],
        },
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          directives: [],
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [
                {
                  name: Value.ObjectValue,
                  type: {
                    name: Value.ObjectValue,
                  },
                  data: {
                    type: Value.ObjectValue,
                  },
                  args: [
                    {
                      name: 'year',
                      type: {
                        name: 'year',
                        options: [],
                      },
                      data: {
                        type: Instances.Argument,
                      },
                      args: [
                        {
                          name: '2010',
                          type: {
                            name: Value.IntValue,
                          },
                          data: {
                            type: Value.IntValue,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`car: Car = {`);
    expect(graphql).toContain(`year: 2010`);
  });
  test('Default Enum objects', () => {
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
          args: [
            {
              name: 'HONDA',
              data: {
                type: ValueDefinition.EnumValueDefinition,
              },
              type: {
                name: ValueDefinition.EnumValueDefinition,
              },
              directives: [],
            },
            {
              name: 'YAMAHA',
              data: {
                type: ValueDefinition.EnumValueDefinition,
              },
              type: {
                name: ValueDefinition.EnumValueDefinition,
              },
              directives: [],
            },
          ],
        },
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          directives: [],
          args: [
            {
              name: 'car',
              type: {
                name: 'Car',
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              directives: [],
              args: [
                {
                  name: 'HONDA',
                  type: {
                    name: 'HONDA',
                  },
                  data: {
                    type: Value.EnumValue,
                  },
                },
              ],
            },
          ],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`car: Car = HONDA`);
  });
});
