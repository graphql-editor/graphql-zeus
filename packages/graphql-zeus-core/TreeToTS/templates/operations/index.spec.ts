import { operationNodeToKV, resolveOperations } from '@//TreeToTS/templates/operations';
import { replSpace } from '@//__tests__/TestUtils';
import { createParserField, OperationType, Options, TypeDefinition } from 'graphql-js-tree';

describe('Test operations string generation', () => {
  it('Generates correct query string', () => {
    const matchExact = replSpace(
      operationNodeToKV(
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
            operations: [OperationType.query],
          },
        }),
      ),
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
              operations: [OperationType.query],
            },
          }),
        ],
      }),
    );
    matchExact(`const Ops = {query: "Queryy" as const}`);
  });
});
