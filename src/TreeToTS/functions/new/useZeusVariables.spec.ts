import { useZeusVariables } from '@/TreeToTS/functions/new/useZeusVariables';
import { replSpace } from '@/__tests__/TestUtils';
const { $params, $ } = useZeusVariables({ name: 'String!', age: 'Int' })({ name: 'dasds', age: 12 });

describe('Test variable parameters', () => {
  it('Creates correct params', () => {
    const m = replSpace($params);
    m(`$name: String!, $age: Int`);
  });
  it('Creates correct variabbles', () => {
    const castedVar = $('name');
    expect(castedVar).toEqual('$name');
  });
});
