import { resolveInterfaces } from '@/TreeToTS/templates/returnedTypes/interfaces';
import { TYPES, ZEUS_INTERFACES } from '@/TreeToTS/templates/returnedTypes/models';
import { createParserField, Options, TypeDefinition } from 'graphql-js-tree';

describe('Test interface => ZEUS_INTERFACES generation', () => {
  test('Single interface generation', () => {
    const interfaceString = resolveInterfaces([
      createParserField({
        type: {
          fieldType: {
            type: Options.name,
            name: 'interface',
          },
        },
        args: [],
        data: {
          type: TypeDefinition.InterfaceTypeDefinition,
        },
        directives: [],
        interfaces: [],
        name: 'WithId',
      }),
    ]);
    expect(interfaceString).toEqual(`type ${ZEUS_INTERFACES} = ${TYPES}["WithId"]`);
  });
  test('No interface generation', () => {
    const interfaceString = resolveInterfaces([]);
    expect(interfaceString).toEqual(`type ${ZEUS_INTERFACES} = never`);
  });
  test('Multiple interface generation', () => {
    const interfaceString = resolveInterfaces([
      createParserField({
        type: {
          fieldType: {
            type: Options.name,
            name: 'interface',
          },
        },
        args: [],
        data: {
          type: TypeDefinition.InterfaceTypeDefinition,
        },
        directives: [],
        interfaces: [],
        name: 'WithId',
      }),
      createParserField({
        type: {
          fieldType: {
            type: Options.name,
            name: 'interface',
          },
        },
        args: [],
        data: {
          type: TypeDefinition.InterfaceTypeDefinition,
        },
        directives: [],
        interfaces: [],
        name: 'WithName',
      }),
    ]);
    expect(interfaceString).toEqual(`type ${ZEUS_INTERFACES} = ${TYPES}["WithId"] | ${TYPES}["WithName"]`);
  });
});
