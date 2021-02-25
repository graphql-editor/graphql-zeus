import { TreeToGraphQL } from '../../TreeToGraphQL';
import {
  ParserTree,
  ScalarTypes,
  TypeDefinition,
  TypeDefinitionDisplayStrings,
  TypeExtension,
  TypeSystemDefinition,
} from '../../Models';
import { Parser, ParserUtils } from '../../Parser';

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
    expect(ParserUtils.compareParserTreesNodes(tree.nodes, treeMock.nodes)).toBe(true);
  });
  it('Extends Person type and correctly join extensions', () => {
    const schema = `
        directive @model on OBJECT
        type Person @model { name:String }
        extend type Person {
            age: Int
        }
    `;
    const extendedSchema = TreeToGraphQL.parse(Parser.parseAddExtensions(schema));
    expect(extendedSchema).toContain('type Person @model');
    expect(extendedSchema).toContain('name: String');
    expect(extendedSchema).toContain('age: Int');
    expect(extendedSchema).not.toContain('extend type Person');
  });
});
