import chalk from 'chalk';
import { Gql, PartialObjects, SpecialSkills, Zeus } from './graphql-zeus';
const printQueryResult = (name: string, result: any) =>
  console.log(`${chalk.greenBright(name)} result:\n${chalk.cyan(JSON.stringify(result, null, 4))}\n\n`);
const printGQLString = (name: string, result: string) =>
  console.log(`${chalk.blue(name)} query:\n${chalk.magenta(result)}\n\n`);
const run = async () => {
  const { addCard: ZeusCard } = await Gql.Mutation({
    addCard: [
      {
        card: {
          Attack: 1,
          Defense: 2,
          description: 'aa',
          name: 'SADSD',
          skills: [SpecialSkills.FIRE],
        },
      },
      {
        id: true,
        description: true,
        name: true,
        Attack: true,
        skills: true,
        Children: true,
        Defense: true,
        cardImage: {
          bucket: true,
          region: true,
          key: true,
        },
      },
    ],
  });
  const tryAssignToPlain: PartialObjects['Card'] = {
    ...ZeusCard,
  };
  console.log(tryAssignToPlain.Attack);
  printQueryResult('ZeusCard', ZeusCard);

  const blalba = await Gql.Query({
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
  // const { addCard: ZeusCard } = await chain.Mutation({
  //   addCard: [
  //     {
  //       card: {
  //         Attack: 1,
  //         Defense: 2,
  //         description: "aa",
  //         name: "SADSD",
  //         skills: [SpecialSkills.FIRE],
  //       },
  //     },
  //     {
  //  __alias:{
  //    otherAttack:{
  //
  // }
  //  }
  //       name: true,
  //       Attack: true,
  //       Defense: true,
  //       description: true,
  //     },
  //   ],
  // });
  //
  // The way it should be returned
  // ZeusCard.__alias["myAlias"].Attack
  const { listCards: stack, drawCard: newCard } = await Gql.Query({
    listCards: {
      name: true,
      cardImage: {
        bucket: true,
      },
    },
    drawCard: {
      Attack: true,
    },
  });

  printQueryResult('stack', stack);
  printQueryResult('newCard', newCard);

  const aliasedQuery = Zeus.Query({
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
  const aliasedQueryExecute = await Gql.Query({
    listCards: {
      __alias: {
        atak: {
          attack: [
            { cardID: ['1'] },
            {
              name: true,
              Defense: true,
            },
          ],
        },
      },
      id: true,
    },
  });
  printQueryResult('aliasedQuery', aliasedQueryExecute);

  const interfaceTest = await Gql.Query({
    nameables: {
      __typename: true,
      name: true,
      '...on CardStack': {
        cards: {
          Defense: true,
        },
      },
      '...on Card': {
        Attack: true,
      },
    },
  });
  printQueryResult('interfaceTest', interfaceTest);
};
run();
