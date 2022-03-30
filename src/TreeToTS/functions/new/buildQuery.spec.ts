import { InternalsBuildQuery } from '@/TreeToTS/functions/new/buildQuery';
import { AllTypesProps, Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
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
});
