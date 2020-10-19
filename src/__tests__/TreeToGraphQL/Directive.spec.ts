import {
  Directive,
  Instances,
  ParserTree,
  ScalarTypes,
  TypeDefinition,
  TypeDefinitionDisplayStrings,
  TypeSystemDefinition,
  TypeSystemDefinitionDisplayStrings,
  Value,
  ValueDefinition,
} from '../../Models';
import { TreeToGraphQL } from '../../TreeToGraphQL';
import { trimGraphQL } from '../TestUtils';

// TODO: Add schema directive test
// TODO: Add directive with arguments test

describe('Directive tests on TreeToGraphQL', () => {
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.OBJECT}`, () => {
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
          directives: [
            {
              name: 'model',
              data: {
                type: Instances.Directive,
              },
              type: {
                name: 'model',
              },
              args: [],
            },
          ],
          args: [],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.OBJECT],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.OBJECT}`);
    expect(graphql).toContain(`type Person @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.FIELD_DEFINITION}`, () => {
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
          args: [
            {
              name: 'name',
              type: {
                name: ScalarTypes.String,
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              args: [],
              directives: [
                {
                  name: 'model',
                  data: {
                    type: Instances.Directive,
                  },
                  type: {
                    name: 'model',
                  },
                  args: [],
                },
              ],
            },
          ],
          directives: [],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.FIELD_DEFINITION],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.FIELD_DEFINITION}`);
    expect(graphql).toContain(`name: String @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.ARGUMENT_DEFINITION}`, () => {
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
          args: [
            {
              name: 'name',
              args: [
                {
                  name: 'override',
                  type: {
                    name: ScalarTypes.String,
                  },
                  data: {
                    type: ValueDefinition.InputValueDefinition,
                  },
                  args: [],
                  directives: [
                    {
                      name: 'model',
                      data: {
                        type: Instances.Directive,
                      },
                      type: {
                        name: 'model',
                      },
                      args: [],
                    },
                  ],
                },
              ],
              type: {
                name: ScalarTypes.String,
              },
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
            },
          ],
          directives: [],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.ARGUMENT_DEFINITION],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.ARGUMENT_DEFINITION}`);
    expect(graphql).toContain(`override: String @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.INTERFACE}`, () => {
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
          interfaces: [],
          args: [],
          directives: [
            {
              name: 'model',
              data: {
                type: Instances.Directive,
              },
              type: {
                name: 'model',
              },
              args: [],
            },
          ],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.INTERFACE],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.INTERFACE}`);
    expect(graphql).toContain(`interface Person @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.UNION}`, () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.UNION],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
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
          directives: [
            {
              name: 'model',
              data: {
                type: Instances.Directive,
              },
              type: {
                name: 'model',
              },
              args: [],
            },
          ],
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
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.UNION}`);
    expect(graphql).toContain(`union Machine @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.ENUM}`, () => {
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
          args: [],
          directives: [
            {
              name: 'model',
              data: {
                type: Instances.Directive,
              },
              type: {
                name: 'model',
              },
              args: [],
            },
          ],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.ENUM],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.ENUM}`);
    expect(graphql).toContain(`enum Person @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.ENUM_VALUE}`, () => {
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
          args: [
            {
              name: 'SMART',
              type: {
                name: ValueDefinition.EnumValueDefinition,
              },
              data: {
                type: ValueDefinition.EnumValueDefinition,
              },
              directives: [
                {
                  name: 'model',
                  data: {
                    type: Instances.Directive,
                  },
                  type: {
                    name: 'model',
                  },
                  args: [],
                },
              ],
            },
            {
              name: 'DUMB',
              type: {
                name: ValueDefinition.EnumValueDefinition,
              },
              data: {
                type: ValueDefinition.EnumValueDefinition,
              },
              directives: [],
            },
          ],
          directives: [],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.ENUM_VALUE],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.ENUM_VALUE}`);
    expect(graphql).toContain(`SMART @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.INPUT_OBJECT}`, () => {
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
          args: [],
          directives: [
            {
              name: 'model',
              data: {
                type: Instances.Directive,
              },
              type: {
                name: 'model',
              },
              args: [],
            },
          ],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.INPUT_OBJECT],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.INPUT_OBJECT}`);
    expect(graphql).toContain(`input Person @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.INPUT_FIELD_DEFINITION}`, () => {
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
          args: [
            {
              name: 'name',
              type: {
                name: ScalarTypes.String,
              },
              data: {
                type: ValueDefinition.InputValueDefinition,
              },
              args: [],
              directives: [
                {
                  name: 'model',
                  data: {
                    type: Instances.Directive,
                  },
                  type: {
                    name: 'model',
                  },
                  args: [],
                },
              ],
            },
          ],
          directives: [],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.INPUT_FIELD_DEFINITION],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.INPUT_FIELD_DEFINITION}`);
    expect(graphql).toContain(`name: String @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.SCALAR}`, () => {
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
          directives: [
            {
              name: 'model',
              data: {
                type: Instances.Directive,
              },
              type: {
                name: 'model',
              },
              args: [],
            },
          ],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.SCALAR],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
        },
      ],
    };

    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`directive @model on ${Directive.SCALAR}`);
    expect(graphql).toContain(`scalar Person @model`);
  });
  test(`${TypeSystemDefinition.DirectiveDefinition} - directive keyword on ${Directive.OBJECT} with input arguments`, () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Address',
          type: {
            name: TypeDefinitionDisplayStrings.input,
          },
          data: {
            type: TypeDefinition.InputObjectTypeDefinition,
          },
          args: [
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
          ],
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
          directives: [
            {
              name: 'model',
              data: {
                type: Instances.Directive,
              },
              type: {
                name: 'model',
              },
              args: [
                {
                  name: 'address',
                  type: {
                    name: 'address',
                    options: [],
                  },
                  data: {
                    type: Instances.Argument,
                  },
                  args: [
                    {
                      name: Value.ObjectValue,
                      args: [
                        {
                          name: 'name',
                          type: {
                            name: 'name',
                            options: [],
                          },
                          data: {
                            type: Instances.Argument,
                          },
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
                          name: 'weight',
                          type: {
                            name: 'weight',
                            options: [],
                          },
                          data: {
                            type: Instances.Argument,
                          },
                          args: [
                            {
                              name: '22.3',
                              type: {
                                name: Value.FloatValue,
                              },
                              data: {
                                type: Value.FloatValue,
                              },
                            },
                          ],
                        },
                      ],
                      data: {
                        type: Value.ObjectValue,
                      },
                      type: {
                        name: Value.ObjectValue,
                      },
                    },
                  ],
                },
              ],
            },
          ],
          args: [],
        },
        {
          name: 'model',
          type: {
            name: TypeSystemDefinitionDisplayStrings.directive,
            directiveOptions: [Directive.OBJECT],
          },
          data: {
            type: TypeSystemDefinition.DirectiveDefinition,
          },
          args: [
            {
              name: 'address',
              type: {
                name: 'Address',
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
                      name: 'age',
                      type: {
                        name: 'age',
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

    const graphql = trimGraphQL(TreeToGraphQL.parse(treeMock));
    expect(graphql).toContain(`@model( address: Address = { age: 2010})`);
    expect(graphql).toContain(`@model( address: { name: \"Artur\",weight: 22.3})`);
  });
});
