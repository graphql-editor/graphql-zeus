import { Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
import { PrepareScalarPaths } from '@/TreeToTS/functions/new/prepareScalarPaths';

const builder = PrepareScalarPaths({ returns: ReturnTypes, ops: Ops });

describe('Test generated function buildQuery', () => {
  test('Simple query', () => {
    const matchExact = builder('query', 'Query', {
      cards: {
        name: true,
        age: true,
        info: true,
        bio: true,
      },
    });
    const o = {
      'Query|cards|info': 'scalar.JSON',
    };
    expect(o).toEqual(matchExact);
  });
});
