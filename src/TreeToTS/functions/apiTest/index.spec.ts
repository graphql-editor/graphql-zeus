import { Chain } from '@/TreeToTS/functions/new/clientFunctions';

export const test1 = async () => {
  const ch = await Chain('')('query', {
    scalars: {
      JSON: {
        decode: (e: unknown) => {
          if (typeof e === 'string') {
            return parseInt(e);
          }
          return undefined;
        },
      },
    },
  })({
    drawCard: {
      info: true,
      name: true,
    },
  });
  return ch;
};

describe('empty test', () => {
  test('should pass', () => {
    return;
  });
});
