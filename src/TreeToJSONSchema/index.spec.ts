import { JSONSchema7 } from 'json-schema';
import { Parser } from 'graphql-js-tree';
import { TreeToJSONSchema } from '@/TreeToJSONSchema';
describe('TreeToJSONSchema tests', () => {
  it('creates correct input field', () => {
    const schema = `
        input CreatePerson{
            firstName: String
            lastName: String
        }
        type Person{ name:String friends: [Person!]! }
        type Query{ people: [Person] }
        type Mutation{ createPerson(person: CreatePerson): String}
        schema{
            query: Query
            mutation: Mutation
        }
        `;
    const tree = Parser.parseAddExtensions(schema);
    const schemaCode = TreeToJSONSchema.parse(tree);

    expect(schemaCode).toHaveProperty('inputs');
    expect(schemaCode).toHaveProperty('types');
    expect(schemaCode.inputs).toHaveProperty('CreatePerson');
    expect(schemaCode.types).toHaveProperty('Mutation');
    expect(schemaCode.types['Mutation']).toHaveProperty('createPerson');
    expect(schemaCode.types['Mutation']['createPerson']['type']).toEqual('object');
    expect(schemaCode.types['Mutation']['createPerson']['properties']).toMatchObject({
      person: {
        $ref: '#/inputs/CreatePerson',
      },
    } as JSONSchema7);

    expect(schemaCode.types).not.toHaveProperty('Query');
    expect(schemaCode.types).not.toHaveProperty('Person');
  });
});
