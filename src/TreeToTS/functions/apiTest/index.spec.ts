import { Chain } from '@/TreeToTS/functions/new/clientFunctions';

export const test1 = async () => {
  const ch = await Chain('')('query')(
    {
      drawCard: {
        info: true,
        name: true,
      },
    },
    {
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
    },
  );
  return ch;
};

describe('empty test', () => {
  test('should pass', () => {
    return;
  });
});
