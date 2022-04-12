import { operationNodeToKV, resolveOperations } from '@/TreeToTS/templates/operations';
import { replSpace } from '@/__tests__/TestUtils';
import { OperationType, Options, TypeDefinition } from 'graphql-js-tree';

describe('Test operations string generation', () => {
  it('Generates correct query string', () => {
    const matchExact = replSpace(
      operationNodeToKV({
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
    );
    matchExact(`query: "Queryy" as const`);
  });
  it('Generates correct object of Ops', () => {
    const matchExact = replSpace(
      resolveOperations({
        nodes: [
          {
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
          },
        ],
      }),
    );
    matchExact(`const Ops = {query: "Queryy" as const}`);
  });
});
