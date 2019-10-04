import { ParserTree, ScalarTypes, TypeDefinition, TypeSystemDefinition } from '../../src/Models';
import { Parser, ParserUtils } from '../../src/Parser';

describe('Interfaces works as expected', () => {
  it('Implements HasName Person type', () => {
    const schema = `
          type Person implements HasName { name:String }
          interface HasName{
              name:String
          }
          `;
    const tree = Parser.parse(schema);
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: 'type'
          },
          data: {
            type: TypeDefinition.ObjectTypeDefinition
          },
          description: '',
          interfaces: ['HasName'],
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
          name: 'HasName',
          type: {
            name: 'interface'
          },
          data: {
            type: TypeDefinition.InterfaceTypeDefinition
          },
          description: '',
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
        }
      ]
    };
    expect(ParserUtils.compareParserTreesNodes(tree.nodes, treeMock.nodes)).toBe(true);
  });
});
