import { resolveEnum } from '@/TreeToTS/templates/returnedTypes/enum';
import { createParserField, Options, TypeDefinition, ValueDefinition } from 'graphql-js-tree';

describe('It creates correct TypeScript const enums', () => {
  test('Simple enum with 2 fields', () => {
    const enumString = resolveEnum(
      createParserField({
        args: [
          createParserField({
            type: {
              fieldType: {
                name: ValueDefinition.EnumValueDefinition,
                type: Options.name,
              },
            },
            args: [],
            directives: [],
            interfaces: [],
            name: 'CREATED',
            data: {
              type: ValueDefinition.EnumValueDefinition,
            },
          }),
          createParserField({
            type: {
              fieldType: {
                name: ValueDefinition.EnumValueDefinition,
                type: Options.name,
              },
            },
            args: [],
            directives: [],
            interfaces: [],
            name: 'DELETED',
            data: {
              type: ValueDefinition.EnumValueDefinition,
            },
          }),
        ],
        data: {
          type: TypeDefinition.EnumTypeDefinition,
        },
        directives: [],
        interfaces: [],
        name: 'Status',
        type: {
          fieldType: {
            name: 'enum',
            type: Options.name,
          },
        },
      }),
    );
    expect(enumString).toEqual(`export const enum Status {
\tCREATED = "CREATED",
\tDELETED = "DELETED"
}`);
  });
});
