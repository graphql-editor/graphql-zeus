import { Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
import { PrepareScalarPaths } from '@/TreeToTS/functions/new/prepareScalarPaths';

const builder = PrepareScalarPaths({ returns: ReturnTypes, ops: Ops });

describe('Test PrepareScalarPaths function', () => {
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
  test('Discards inline fragment from path', () => {
    const matchExact = builder('query', 'Query', {
      cards: {
        '... on Card': {
          info: true,
        },
      },
    });
    const o = {
      'Query|cards|info': 'scalar.JSON',
    };
    expect(o).toEqual(matchExact);
  });
});
