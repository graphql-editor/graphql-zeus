import { purifyGraphQLKey } from '@/TreeToTS/functions/new/purifyGraphQLKey';

describe('Test purify graphql keys', () => {
  test('Remove parentheses', () => {
    const t = purifyGraphQLKey('addPerson(name:"Joe")');
    expect(t).toEqual('addPerson');
  });
  test('Remove GraphQL alias', () => {
    const t = purifyGraphQLKey('friends:getMyPeople');
    expect(t).toEqual('getMyPeople');
  });
});
