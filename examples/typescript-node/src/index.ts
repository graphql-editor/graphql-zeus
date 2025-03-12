import chalk from 'chalk';
import fetch from 'node-fetch';
import {
  Gql,
  SpecialSkills,
  Thunder,
  Zeus,
  InputType,
  Selector,
  GraphQLTypes,
  ZeusScalars,
  ValueTypes,
  $,
  FromSelector,
  fields,
} from './zeus/index.js';
import { typedGql } from './zeus/typedDocumentNode.js';

export const testApollo = async () => {
  const { ApolloClient, InMemoryCache, useMutation } = await import('@apollo/client');

  const client = new ApolloClient({
    cache: new InMemoryCache(),
  });

  const useMyMutation = () => {
    return ({ card }: { card: ValueTypes['createCard'] }) =>
      client.mutate({
        mutation: typedGql('mutation')({
          addCard: [{ card }, { id: true }],
        }),
      });
  };

  const testMutate = () => {
    const [mutate] = useMutation(
      typedGql('mutation')({
        addCard: [
          { card: { Attack: $('attt', 'Int'), Defense: 2, name: $('name', 'String!'), description: 'Stronk' } },
          { id: true },
        ],
      }),
    );

    mutate({
      variables: {
        name: 'DDD',
        attt: 1,
      },
    });
  };
  return {
    useMyMutation,
    testMutate,
  };
};
const sel = Selector('Query')({
  drawCard: {
    Children: true,
    Attack: true,
    info: true,
    attack: [{ cardID: ['sss'] }, { Attack: true }],
  },
  cardById: [{ cardId: '' }, { Attack: true }],
});

const decoders = ZeusScalars({
  JSON: {
    encode: (e: unknown) => JSON.stringify(e),
    decode: (e: unknown) => {
      if (!e) return;
      return e as { power: number };
    },
  },
  ID: {
    decode: (e: unknown) => e as number,
  },
});

export type IRT = InputType<GraphQLTypes['Query'], typeof sel, typeof decoders>;

const printQueryResult = (name: string, result: unknown) =>
  console.log(`${chalk.greenBright(name)} result:\n${chalk.cyan(JSON.stringify(result, null, 4))}\n\n`);
const printGQLString = (name: string, result: string) =>
  console.log(`${chalk.blue(name)} query:\n${chalk.magenta(result)}\n\n`);
const run = async () => {
  const { addCard: ZeusCard } = await Gql('mutation')(
    {
      addCard: [
        {
          card: {
            Attack: 1,
            Defense: 1,
            description: 'lorem """ \' ipsum \n lorem ipsum',
            name: 'SADSD',
            skills: [SpecialSkills.FIRE],
          },
        },
        {
          info: true,
          cardImage: {
            bucket: true,
            region: true,
            key: true,
          },
        },
      ],
    },
    { operationName: 'ZausCard' },
  );
  printQueryResult('ZeusCard', ZeusCard);

  const bbb = await Gql('query')({
    drawCard: {
      ...fields('Card'),
    },
  });
  printQueryResult('scalarsSelector', bbb.drawCard);

  const blalba = await Gql('query')({
    drawChangeCard: {
      __typename: true,
      '...on EffectCard': {
        effectSize: true,
        name: true,
      },
    },
  });
  printQueryResult('drawChangeCard', blalba.drawChangeCard);
  const blalbaScalars = await Gql('query', { scalars: decoders })({
    drawCard: {
      info: true,
      id: true,
    },
  });
  console.log({ blalbaScalars });
  if (typeof blalbaScalars.drawCard.info?.power !== 'number') {
    throw new Error('Invalid scalar decoder');
  }
  printQueryResult('blalbaScalars', blalbaScalars.drawCard.info.power);

  // Thunder example
  const thunder = Thunder(async (query) => {
    const response = await fetch('https://faker.prod.graphqleditor.com/a-team/olympus/graphql', {
      body: JSON.stringify({ query }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      return new Promise((resolve, reject) => {
        response
          .text()
          .then((text) => {
            try {
              reject(JSON.parse(text));
            } catch (err) {
              reject(text);
            }
          })
          .catch(reject);
      });
    }
    const json = await response.json();
    return json.data;
  });
  const blalbaThunder = await thunder('query', {
    scalars: decoders,
  })({
    drawCard: {
      Attack: true,
      info: true,
    },
    drawChangeCard: {
      __typename: true,
      '...on EffectCard': {
        effectSize: true,
        name: true,
      },
    },
  });
  printQueryResult('drawChangeCard thunder', blalbaThunder.drawChangeCard);

  const resPowerups = await Gql('query')(
    {
      public: {
        powerups: [{ filter: 'dupa' }, { name: true }],
      },
    },
    { operationName: 'Powerups' },
  );
  printQueryResult('Powerups', resPowerups?.public?.powerups);

  const {
    listCards: stack,
    drawCard: newCard,
    drawChangeCard,
  } = await Gql('query')({
    listCards: {
      name: true,
      cardImage: {
        bucket: true,
      },
    },
    drawCard: {
      Attack: true,
      name: `@skip(if:true)`,
    },
    drawChangeCard: {
      '...on SpecialCard': {
        name: true,
      },
      '...on EffectCard': {
        effectSize: true,
      },
    },
  });

  printQueryResult('stack', stack);
  printQueryResult('newCard', newCard);
  printQueryResult('changeCard', drawChangeCard);

  const aliasedQuery = Zeus('query', {
    __alias: {
      myCards: {
        listCards: {
          name: true,
        },
      },
    },
    listCards: {
      __alias: {
        atak: {
          attack: [
            { cardID: ['aaa'] },
            {
              name: true,
              description: true,
              __alias: {
                bbb: {
                  Defense: true,
                },
              },
            },
          ],
        },
      },
    },
  });
  printGQLString('aliasedQuery', aliasedQuery);
  const operationName = Zeus(
    'query',
    {
      listCards: {
        Attack: true,
      },
    },
    {
      operationOptions: {
        operationName: 'ListCards',
      },
    },
  );
  printGQLString('operationName ListCards', operationName);
  const aliasedQueryExecute = await Gql('query')(
    {
      listCards: {
        __alias: {
          namy: {
            name: true,
          },
          atak: {
            attack: [
              { cardID: $('cardIds', '[String!]!') },
              {
                name: true,
                __alias: {
                  bbb: {
                    Defense: true,
                  },
                  ccc: {
                    Children: true,
                  },
                },
              },
            ],
          },
        },
        id: true,
      },
    },
    {
      variables: {
        cardIds: ['aaa'],
      },
    },
  );
  printQueryResult('aliasedQuery', aliasedQueryExecute);
  const Children = undefined;
  const emptyTestMutation = Zeus('mutation', {
    addCard: [
      {
        card: {
          Attack: 1,
          Defense: 2,
          description: 'lorem ipsum \n lorem ipsum',
          name: 'SADSD',
          Children,
          skills: [SpecialSkills.FIRE],
        },
      },
      {
        id: true,
        description: true,
        name: true,
        Attack: true,
        // // skills: true,
        Children,
        Defense: true,
        cardImage: {
          bucket: true,
          region: true,
          key: true,
        },
      },
    ],
  });
  printQueryResult('emptyTestMutation', emptyTestMutation);

  const interfaceTest = await Gql('query')({
    nameables: {
      __typename: true,
      name: true,
      '...on Card': {
        Attack: true,
      },
      '...on SpecialCard': {
        effect: true,
      },
      '...on CardStack': {
        cards: {
          name: true,
        },
      },
    },
  });

  printQueryResult('interfaceTest', interfaceTest);
  // Variable test

  const test = await Gql('mutation')(
    {
      addCard: [
        {
          card: {
            Attack: $('Attack', 'Int!'),
            Defense: $('Defense', 'Int!'),
            name: 'aa',
            description: 'aa',
          },
        },
        {
          id: true,
          description: true,
          name: true,
          Attack: true,
          // skills: true,
          Children: true,
          Defense: true,
          cardImage: {
            bucket: true,
            region: true,
            key: true,
          },
        },
      ],
    },
    {
      variables: { Attack: 1, Defense: 1 },
    },
  );
  printQueryResult('variable Test', test);

  const selectorTDD = Selector('Query')({
    drawCard: {
      id: true,
      Attack: true,
      Defense: true,
      attacks: true,
    },
    cardById: [{ cardId: $('cardId', 'String!') }, { id: true }],
  });

  //interface selector
  const inSelector = Selector('Nameable')({
    name: true,
  });

  type aa = FromSelector<typeof inSelector, 'Nameable'>;
  const ab: aa = {} as any;
  if (ab.__typename === 'Card') {
    ab.name;
  } else if (ab.__typename === 'EffectCard') {
    ab.name;
  } else if (ab.__typename === 'CardStack') {
    ab.name;
  }
  //interface selector
  const inSelector2 = Selector('Nameable')({
    __typename: true,
    name: true,
    '...on Card': {
      description: true,
    },
    '...on EffectCard': {
      effectSize: true,
    },
    '...on CardStack': {
      cards: {
        info: true,
      },
    },
  });

  type bb = FromSelector<typeof inSelector2, 'Nameable'>;
  const bc: bb = {} as any;
  if (bc.__typename === 'Card') {
    bc.name;
    bc.description;
  } else if (bc.__typename === 'EffectCard') {
    bc.name;
    bc.effectSize;
  } else if (bc.__typename === 'CardStack') {
    bc.name;
    bc.cards;
  }

  const generatedTypedDocumentNode = typedGql('query')(selectorTDD);
  printQueryResult('Generated TypedDocumentNode Test', generatedTypedDocumentNode);
};
run();
