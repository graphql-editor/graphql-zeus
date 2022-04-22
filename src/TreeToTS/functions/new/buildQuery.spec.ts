import { InternalsBuildQuery } from '@/TreeToTS/functions/new/buildQuery';
import { AllTypesProps, Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
import { useZeusVariables } from '@/TreeToTS/functions/new/useZeusVariables';
import { replSpace } from '@/__tests__/TestUtils';

const builder = InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops);

describe('Test generated function buildQuery', () => {
  test('Simple query', () => {
    const matchExact = replSpace(
      builder('query', {
        cards: {
          name: true,
          age: true,
          bio: true,
        },
      }),
    );
    matchExact(`query{
        cards{
            name
            age
            bio
        }
    }`);
  });
  test('Simple query with operation name', () => {
    const builder = InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, { operationName: 'MyQuery' });
    const matchExact = replSpace(
      builder('query', {
        cards: {
          name: true,
          age: true,
          bio: true,
        },
      }),
    );
    matchExact(`query MyQuery{
        cards{
            name
            age
            bio
        }
    }`);
  });
  test('Query with arguments', () => {
    const matchExact = replSpace(
      builder('query', {
        cardById: [
          {
            id: 'a1',
            name: 'blabla',
            age: 123,
            me: true,
          },
          {
            name: true,
            age: true,
            bio: true,
          },
        ],
      }),
    );
    matchExact(`query{
        cardById(id: "a1", name: "blabla", age: 123, me: true){
            name
            age
            bio
        }
    }`);
  });
  test('Query with array and object arguments', () => {
    const matchExact = replSpace(
      builder('query', {
        cards: [
          {
            where: { active: true },
            order_by: [{ date: 'asc' }, { age: 'desc' }],
          },
          {
            name: true,
            age: true,
            bio: true,
          },
        ],
      }),
    );
    matchExact(`query{
        cards(where: {active: true}, order_by: [{date: "asc"}, {age: "desc"}]){
            name
            age
            bio
        }
    }`);
  });
  test('Query with arguments and variables', () => {
    const variables = useZeusVariables({ id: 'String!' })({
      id: 'a1',
    });
    const builder = InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, {
      variables,
    });
    const { $ } = variables;
    const matchExact = replSpace(
      builder('query', {
        cardById: [
          {
            id: $('id'),
            name: 'blabla',
            age: 123,
            me: true,
          },
          {
            name: true,
            age: true,
            bio: true,
          },
        ],
      }),
    );
    matchExact(`query($id: String!){
        cardById(id: $id, name: "blabla", age: 123, me: true){
            name
            age
            bio
        }
    }`);
  });

  test('Query with empty arguments params', () => {
    const matchExact = replSpace(
      builder('query', {
        cards: [
          {},
          {
            name: true,
            age: true,
            bio: true,
          },
        ],
      }),
    );
    matchExact(`query{
        cards {
            name
            age
            bio
        }
    }`);
  });
  test('Mutation with arguments', () => {
    const enum Status {
      CREATED = 'CREATED',
      DELETED = 'DELETED',
    }
    const matchExact = replSpace(
      builder('mutation', {
        createCard: [
          {
            card: {
              name: 'Hello',
              status: Status.CREATED,
            },
          },
          {
            name: true,
          },
        ],
      }),
    );
    matchExact(`mutation{
      createCard(card:{
        name: "Hello",
        status: CREATED
      }){
            name
        }
    }`);
  });
  test('Mutation with complicated string', () => {
    const complicated = 'lorem """ \' ipsum \n lorem ipsum';
    const matchExact = replSpace(
      builder('mutation', {
        createCard: [
          {
            card: {
              name: complicated,
            },
          },
          {
            name: true,
          },
        ],
      }),
    );
    matchExact(`mutation{
      createCard(card:{
        name: ${JSON.stringify(complicated)}
      }){
            name
        }
    }`);
  });

  test('Undefined param', () => {
    const Children = undefined;
    const matchExact = replSpace(
      builder('mutation', {
        addCard: [
          {
            card: {
              Attack: 1,
              Children,
            },
          },
          {
            id: true,
          },
        ],
      }),
    );
    matchExact(`mutation {
      addCard(card: {Attack:1}){id}
    }`);
  });
  test('Undefined getter', () => {
    const Children: boolean | undefined = undefined;
    const matchExact = replSpace(
      builder('mutation', {
        addCard: [
          {
            card: {
              Attack: 1,
            },
          },
          {
            id: true,
            Children,
          },
        ],
      }),
    );
    matchExact(`mutation {
      addCard(card: {Attack:1}){id}
    }`);
  });
  test('Simple query with alias', () => {
    const matchExact = replSpace(
      builder('query', {
        __alias: {
          play: {
            cards: {
              name: true,
              age: true,
              bio: true,
            },
          },
        },
      }),
    );
    matchExact(`query{
        play:cards{
            name
            age
            bio
        }
    }`);
  });
  test('Query with multiple aliases', () => {
    const matchExact = replSpace(
      builder('query', {
        __alias: {
          play: {
            cards: {
              name: true,
              age: true,
              bio: true,
            },
          },
          shuffle: {
            cards: {
              name: true,
              age: true,
              bio: true,
            },
          },
        },
      }),
    );
    matchExact(`query{
        play:cards{
            name
            age
            bio
        }
        shuffle:cards{
            name
            age
            bio
        }
    }`);
  });
  test('Simple query with enums', () => {
    const enum Status {
      CREATED = 'CREATED',
      DELETED = 'DELETED',
    }
    const matchExact = replSpace(
      builder('query', {
        cardByStatus: [
          {
            status: Status.CREATED,
          },
          {
            name: true,
            age: true,
            bio: true,
            attack: [{ by: Status.CREATED }, { name: true }],
          },
        ],
      }),
    );
    matchExact(`query{
      cardByStatus(status:CREATED){
            name
            age
            bio
            attack(by: CREATED){
                name
            }
        }
    }`);
  });
  test('Simple query with alias and enum', () => {
    const enum Status {
      CREATED = 'CREATED',
      DELETED = 'DELETED',
    }
    const matchExact = replSpace(
      builder('query', {
        __alias: {
          play: {
            cardByStatus: [
              {
                status: Status.CREATED,
              },
              {
                name: true,
                age: true,
                bio: true,
                attack: [{ by: Status.CREATED }, { name: true }],
              },
            ],
          },
        },
      }),
    );
    matchExact(`query{
        play:cardByStatus(status:CREATED){
          name
          age
          bio
          attack(by: CREATED){
              name
          }
      }
    }`);
  });
  test('Simple query with  directives', () => {
    const builder = InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, { operationName: 'MyQuery' });
    const matchExact = replSpace(
      builder('query', {
        cards: {
          name: `@skip(if: true)`,
          age: true,
          bio: true,
        },
      }),
    );
    matchExact(`query MyQuery{
        cards{
            name @skip(if: true)
            age
            bio
        }
    }`);
  });
});
