import chalk from 'chalk';
import fetch from 'node-fetch';
import { $, Gql, SpecialSkills, Thunder, Zeus } from './zeus';

const printQueryResult = (name: string, result: any) =>
  console.log(`${chalk.greenBright(name)} result:\n${chalk.cyan(JSON.stringify(result, null, 4))}\n\n`);
const printGQLString = (name: string, result: string) =>
  console.log(`${chalk.blue(name)} query:\n${chalk.magenta(result)}\n\n`);
const run = async () => {
  const { addCard: ZeusCard } = await Gql.mutation(
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

  const blalba = await Gql.query({
    drawChangeCard: {
      __typename: true,
      '...on EffectCard': {
        effectSize: true,
        name: true,
      },
      '...on SpecialCard': {
        name: true,
      },
    },
  });
  printQueryResult('drawChangeCard', blalba.drawChangeCard);

  // Thunder example
  const thunder = Thunder(
    async (query) => {
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
    },
    (query) => {
      console.log(query);
    },
  );
  const blalbaThunder = await thunder.query({
    drawCard: {
      Attack: true,
    },
    drawChangeCard: {
      __typename: true,
      '...on EffectCard': {
        effectSize: true,
        name: true,
      },
      '...on SpecialCard': {
        name: true,
      },
    },
  });
  printQueryResult('drawChangeCard thunder', blalbaThunder.drawChangeCard);

  const { listCards: stack, drawCard: newCard, drawChangeCard } = await Gql.query({
    listCards: {
      name: true,
      cardImage: {
        bucket: true,
      },
    },
    drawCard: {
      Attack: true,
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

  const aliasedQuery = Zeus.query({
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
  const operationName = Zeus.query(
    {
      listCards: {
        Attack: true,
      },
    },
    'ListCards',
  );
  printGQLString('operationName ListCards', operationName);
  const aliasedQueryExecute = await Gql.query(
    {
      listCards: {
        __alias: {
          atak: {
            attack: [
              { cardID: $`cardIds` },
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
      variables: { cardIds: ['1', '2'] },
    },
  );
  printQueryResult('aliasedQuery', aliasedQueryExecute);
  const Children = undefined;
  const emptyTestMutation = Zeus.mutation({
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

  const interfaceTest = await Gql.query({
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
  const test = await Gql.mutation(
    {
      addCard: [
        {
          card: {
            Attack: $`Attack`,
            Defense: $`Attack`,
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
      variables: {
        Attack: 4,
      },
    },
  );
  printQueryResult('variable Test', test);
};
run();
