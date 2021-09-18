import { Gql, Zeus, Thunder, Selectors, resolverFor } from './zeus';
import chalk from 'chalk';
import fetch from 'node-fetch';
// This will return Card object with ID only
const createCards = async () => {
  const printQueryResult = (name, result) =>
    console.log(`${chalk.greenBright(name)} result:\n${chalk.cyan(JSON.stringify(result, null, 4))}\n\n`);
  const printGQLString = (name, result) => console.log(`${chalk.blue(name)} query:\n${chalk.magenta(result)}\n\n`);
  // Query Gqling example
  const listCardsAndDraw = await Gql.query({
    cardById: [
      {
        cardId: 'sdsd',
      },
      {
        description: true,
      },
    ],
    listCards: {
      name: true,
      skills: true,
      attack: [
        { cardID: ['s', 'sd'] },
        {
          name: true,
        },
      ],
    },
    drawCard: {
      name: true,
      skills: true,
      Attack: true,
    },
  });
  printQueryResult('Multiple queries', listCardsAndDraw);
  //Thunder example
  const thunder = Thunder(async (query) => {
    const response = await fetch('https://faker.graphqleditor.com/a-team/olympus/graphql', {
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
    return json;
  });
  const listCardsAndDrawThunder = await thunder.query({
    cardById: [
      {
        cardId: 'sdsd',
      },
      {
        description: true,
      },
    ],
    listCards: {
      name: true,
      skills: true,
      attack: [
        { cardID: ['s', 'sd'] },
        {
          name: true,
        },
      ],
    },
    drawCard: {
      name: true,
      skills: true,
      Attack: true,
    },
  });

  printQueryResult('Multiple queries thunder', listCardsAndDrawThunder);
  // mutation example

  const { drawCard: card } = Selectors.query({
    drawCard: {
      name: true,
      id: true,
      description: true,
    },
  });
  const addCard = await Gql.mutation({
    addCard: [
      {
        card: {
          name: 'Zeus',
          description: 'Allmighty',
          skills: ['THUNDER'],
          Attack: 1,
          Defense: 1,
        },
      },
      card,
    ],
  });
  printQueryResult('addCard', addCard);

  const { drawChangeCard } = await Gql.query({
    drawChangeCard: {
      __typename: true,
      '...on EffectCard': {
        effectSize: true,
        name: true,
      },
      '...on SpecialCard': {
        effect: true,
        name: true,
      },
    },
  });
  const resolverTest = resolverFor('Query', 'cardById', ({ args }) => {
    return {
      Attack: 1,
      Defense: 2,
      description: 'Card',
      id: args.cardId,
      image: '13',
      name: 'Cardsuper',
    };
  });
  resolverTest({
    args: {
      cardId: '12',
    },
  });
  printQueryResult('drawChangeCard', drawChangeCard);
  // string example
  const stringGql = Zeus.query(
    {
      listCards: {
        name: true,
        skills: true,
        Attack: true,
      },
    },
    'Zeus',
  );
  // query{listCards{name skills Attack}}

  printGQLString('listCards', stringGql);
};
createCards();
