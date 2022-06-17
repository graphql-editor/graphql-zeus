import { Chain, ZeusScalars, Selector } from '@/TreeToTS/functions/new/clientFunctions';
import { FromSelector } from '@/TreeToTS/functions/new/types';

const cardSelector = Selector('Card')({ name: true, id: true });

export type CardType = FromSelector<typeof cardSelector, 'Card'>;

const scalars = ZeusScalars({
  JSON: {
    decode: (e: unknown) => {
      if (typeof e === 'string') {
        return parseInt(e);
      }
      return undefined;
    },
  },
});

export const test1 = async () => {
  const ch = await Chain('')('query', {
    scalars,
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
