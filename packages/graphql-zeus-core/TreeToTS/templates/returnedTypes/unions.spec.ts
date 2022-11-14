import { TYPES, ZEUS_UNIONS } from '@/TreeToTS/templates/returnedTypes/models';
import { resolveUnions } from '@/TreeToTS/templates/returnedTypes/unions';
import { createParserField, Options, TypeDefinition } from 'graphql-js-tree';

describe('Test union => ZEUS_UNIONS generation', () => {
  test('Single type generation', () => {
    const interfaceString = resolveUnions([
      createParserField({
        type: {
          fieldType: {
            type: Options.name,
            name: 'union',
          },
        },
        args: [],
        data: {
          type: TypeDefinition.UnionTypeDefinition,
        },
        directives: [],
        interfaces: [],
        name: 'WithId',
      }),
    ]);
    expect(interfaceString).toEqual(`type ${ZEUS_UNIONS} = ${TYPES}["WithId"]`);
  });
  test('No union generation', () => {
    const interfaceString = resolveUnions([]);
    expect(interfaceString).toEqual(`type ${ZEUS_UNIONS} = never`);
  });
  test('Multiple union generation', () => {
    const interfaceString = resolveUnions([
      createParserField({
        type: {
          fieldType: {
            type: Options.name,
            name: 'union',
          },
        },
        args: [],
        data: {
          type: TypeDefinition.UnionTypeDefinition,
        },
        directives: [],
        interfaces: [],
        name: 'WithId',
      }),
      createParserField({
        type: {
          fieldType: {
            type: Options.name,
            name: 'union',
          },
        },
        args: [],
        data: {
          type: TypeDefinition.UnionTypeDefinition,
        },
        directives: [],
        interfaces: [],
        name: 'WithName',
      }),
    ]);
    expect(interfaceString).toEqual(`type ${ZEUS_UNIONS} = ${TYPES}["WithId"] | ${TYPES}["WithName"]`);
  });
});
