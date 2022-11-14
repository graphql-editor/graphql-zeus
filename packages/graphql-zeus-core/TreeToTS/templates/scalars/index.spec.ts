import { generateScalars, SCALAR_TYPES } from '@/TreeToTS/templates/scalars';
import { replSpace } from '@/__tests__/TestUtils';
import { createParserField, Options, TypeDefinition } from 'graphql-js-tree';
describe('Tests scalars object generation', () => {
  test('Generate empty objects if no scalars', () => {
    const result = generateScalars([]);
    expect(result).toEqual(`export type ${SCALAR_TYPES} = {\n}`);
  });
  test('Generate empty objects if no scalars', () => {
    const result = replSpace(
      generateScalars([
        createParserField({
          args: [],
          data: {
            type: TypeDefinition.ScalarTypeDefinition,
          },
          directives: [],
          interfaces: [],
          name: 'JSON',
          type: {
            fieldType: {
              name: 'scalar',
              type: Options.name,
            },
          },
        }),
        createParserField({
          args: [],
          data: {
            type: TypeDefinition.ScalarTypeDefinition,
          },
          directives: [],
          interfaces: [],
          name: 'Date',
          type: {
            fieldType: {
              name: 'scalar',
              type: Options.name,
            },
          },
        }),
      ]),
    );
    result(`export type ${SCALAR_TYPES} = {
      JSON?: ScalarResolver;
      Date?: ScalarResolver;
    }`);
  });
});
