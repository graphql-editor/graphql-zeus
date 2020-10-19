import {
  ParserTree,
  ScalarTypes,
  TypeDefinition,
  TypeDefinitionDisplayStrings,
  TypeExtension,
  TypeSystemDefinition,
} from '../../Models';
import { TreeToGraphQL } from '../../TreeToGraphQL';

describe('Extend tests on TreeToGraphQL', () => {
  it('Extends Person TreeToGraphQL', () => {
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
          description: '',
          interfaces: [],
          directives: [],
          args: [
            {
              name: 'name',
              args: [],
              type: {
                name: ScalarTypes.String,
              },
              directives: [],
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
            },
          ],
        },
        {
          name: 'Person',
          type: {
            name: 'type',
          },
          data: {
            type: TypeExtension.ObjectTypeExtension,
          },
          description: '',
          interfaces: [],
          directives: [],
          args: [
            {
              name: 'age',
              args: [],
              type: {
                name: ScalarTypes.Int,
              },
              directives: [],
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
            },
          ],
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`extend type Person`);
  });
});
