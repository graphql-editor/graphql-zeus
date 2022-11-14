import { Chain, ZeusScalars, Selector } from '@/TreeToTS/functions/new/clientFunctions';
import { FromSelector } from '@/TreeToTS/functions/new/types';
import { $ } from '@/TreeToTS/functions/new/variableExtract';

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
export const test2 = async () => {
  const sel = Selector('Card')({
    name: $('name', 'String!'),
  });
  const ch = await Chain('')('query', {
    scalars,
  })({
    drawCard: sel,
  });
  return ch;
};

describe('empty test', () => {
  test('should pass', () => {
    return;
  });
});
