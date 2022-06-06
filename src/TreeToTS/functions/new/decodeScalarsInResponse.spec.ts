import { decodeScalarsInResponse } from '@/TreeToTS/functions/new/decodeScalarsInResponse';
import { Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';

describe('Scalars in response get decoded', () => {
  test('JSON scalar decoded in response', () => {
    const cardInfo = {
      power: 9000,
      speed: 100,
    };
    const response = {
      drawCard: {
        name: 'Adanos',
        info: JSON.stringify(cardInfo),
      },
    };
    const decodedResponse = decodeScalarsInResponse({
      ops: Ops,
      response,
      returns: ReturnTypes,
      initialOp: 'query',
      initialZeusQuery: {
        drawCard: {
          name: true,
          info: true,
        },
      },
      scalars: {
        JSON: {
          decode: (e) => {
            return JSON.parse(e as string) as typeof cardInfo;
          },
        },
      },
    });
    expect(decodedResponse['drawCard']?.['info']).toEqual(cardInfo);
  });
});
