import { resolvePropTypeFromRoot } from '@/TreeToTS/templates/returnedPropTypes';
import { replSpace } from '@/__tests__/TestUtils';
import {
  createParserField,
  Options,
  ScalarTypes,
  TypeDefinition,
  TypeSystemDefinition,
  ValueDefinition,
} from 'graphql-js-tree';

describe('Prop types generation test', () => {
  it('Correctly resolves enum type', () => {
    const matchExact = replSpace(
      resolvePropTypeFromRoot(
        createParserField({
          name: 'Status',
          args: [],
          data: {
            type: TypeDefinition.EnumTypeDefinition,
          },
          directives: [],
          interfaces: [],
          type: {
            fieldType: {
              type: Options.name,
              name: 'enum',
            },
          },
        }),
      ),
    );
    matchExact(`Status: "enum" as const`);
  });
  it('Correctly resolves type with fields without enums and inputs', () => {
    const matchExact = replSpace(
      resolvePropTypeFromRoot(
        createParserField({
          name: 'Person',
          args: [
            createParserField({
              args: [],
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              interfaces: [],
              name: 'firstName',
              type: {
                fieldType: {
                  name: 'String',
                  type: Options.name,
                },
              },
            }),
          ],
          data: {
            type: TypeDefinition.ObjectTypeDefinition,
          },
          directives: [],
          interfaces: [],
          type: {
            fieldType: {
              type: Options.name,
              name: 'type',
            },
          },
        }),
      ),
    );
    matchExact(``);
  });
  it('Correctly resolves type with fields with scalars and inputs', () => {
    const matchExact = replSpace(
      resolvePropTypeFromRoot(
        createParserField({
          name: 'Mutation',
          args: [
            createParserField({
              args: [
                createParserField({
                  args: [],
                  data: {
                    type: ValueDefinition.InputValueDefinition,
                  },
                  directives: [],
                  interfaces: [],
                  name: '_id',
                  type: {
                    fieldType: {
                      type: Options.name,
                      name: ScalarTypes.String,
                    },
                  },
                }),
                createParserField({
                  args: [],
                  data: {
                    type: ValueDefinition.InputValueDefinition,
                  },
                  directives: [],
                  interfaces: [],
                  name: 'CreatePerson',
                  type: {
                    fieldType: {
                      type: Options.name,
                      name: 'CreatePerson',
                    },
                  },
                }),
              ],
              data: {
                type: TypeSystemDefinition.FieldDefinition,
              },
              directives: [],
              interfaces: [],
              name: 'addPerson',
              type: {
                fieldType: {
                  name: 'String',
                  type: Options.name,
                },
              },
            }),
          ],
          data: {
            type: TypeDefinition.ObjectTypeDefinition,
          },
          directives: [],
          interfaces: [],
          type: {
            fieldType: {
              type: Options.name,
              name: 'type',
            },
          },
        }),
      ),
    );
    matchExact(`Mutation: { addPerson: { CreatePerson: "CreatePerson" }}`);
  });
});
