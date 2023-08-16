import { resolveOperations } from '@/TreeToTS/templates/operations';
import { replSpace } from '@/__tests__/TestUtils';
import { createParserField, createSchemaDefinition, Options, TypeDefinition } from 'graphql-js-tree';

describe('Test operations string generation', () => {
  it('Generates correct query string', () => {
    const matchExact = replSpace(
      resolveOperations({
        nodes: [
          createParserField({
            args: [],
            data: {
              type: TypeDefinition.ObjectTypeDefinition,
            },
            directives: [],
            interfaces: [],
            name: 'Queryy',
            type: {
              fieldType: {
                type: Options.name,
                name: 'type',
              },
            },
          }),
          createSchemaDefinition({
            operations: {
              query: 'Queryy',
            },
          }),
        ],
      }),
    );
    matchExact(`query: "Queryy" as const`);
  });
  it('Generates correct object of Ops', () => {
    const matchExact = replSpace(
      resolveOperations({
        nodes: [
          createParserField({
            args: [],
            data: {
              type: TypeDefinition.ObjectTypeDefinition,
            },
            directives: [],
            interfaces: [],
            name: 'Queryy',
            type: {
              fieldType: {
                type: Options.name,
                name: 'type',
              },
            },
          }),
          createSchemaDefinition({
            operations: {
              query: 'Queryy',
            },
          }),
        ],
      }),
    );
    matchExact(`const Ops = {query: "Queryy" as const}`);
  });
});
