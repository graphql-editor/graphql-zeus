import {
  OperationType,
  ParserTree,
  ScalarTypes,
  TypeDefinition,
  TypeDefinitionDisplayStrings,
  TypeSystemDefinition,
} from '../../Models';
import { TreeToGraphQL } from '../../TreeToGraphQL';
import { trimGraphQL } from '../TestUtils';

describe('Schema base operations in TreeToGraphQL', () => {
  test(`query`, () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Query',
          type: {
            name: TypeDefinitionDisplayStrings.type,
            operations: [OperationType.query],
          },
          data: {
            type: TypeDefinition.ObjectTypeDefinition,
          },
          interfaces: [],
          directives: [],
          args: [
            {
              name: 'status',
              type: {
                name: ScalarTypes.String,
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

    const graphql = trimGraphQL(TreeToGraphQL.parse(treeMock));
    expect(graphql).toContain(`schema{ query: Query}`);
  });
  test(`empty query`, () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Query',
          type: {
            name: TypeDefinitionDisplayStrings.type,
            operations: [OperationType.query],
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

    const graphql = trimGraphQL(TreeToGraphQL.parse(treeMock));
    expect(graphql).toContain(`schema{ query: Query}`);
  });
});
