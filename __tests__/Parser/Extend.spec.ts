import {
  ParserTree,
  ScalarTypes,
  TypeDefinition,
  TypeDefinitionDisplayStrings,
  TypeExtension,
  TypeSystemDefinition
} from '../../src/Models';
import { Parser, ParserUtils } from '../../src/Parser';

describe('Extend tests on parser', () => {
  it('Extends Person type', () => {
    const schema = `
        type Person{ name:String }
        extend type Person {
            age: Int
        }
        `;
    const tree = Parser.parse(schema);
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: TypeDefinitionDisplayStrings.type
          },
          data: {
            type: TypeDefinition.ObjectTypeDefinition
          },
          description: '',
          interfaces: [],
          directives: [],
          args: [
            {
              name: 'name',
              args: [],
              type: {
                name: ScalarTypes.String
              },
              directives: [],
              data: {
                type: TypeSystemDefinition.FieldDefinition
              }
            }
          ]
        },
        {
          name: 'Person',
          type: {
            name: 'type'
          },
          data: {
            type: TypeExtension.ObjectTypeExtension
          },
          description: '',
          interfaces: [],
          directives: [],
          args: [
            {
              name: 'age',
              args: [],
              type: {
                name: ScalarTypes.Int
              },
              directives: [],
              data: {
                type: TypeSystemDefinition.FieldDefinition
              }
            }
          ]
        }
      ]
    };
    expect(ParserUtils.compareParserTreesNodes(tree.nodes, treeMock.nodes)).toBe(true);
  });
});
