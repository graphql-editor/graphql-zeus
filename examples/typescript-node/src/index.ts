import { Api, Card, Gql, SelectionSet, SpecialSkills, Zeus, Query,ResolverArgumentsType } from "./graphql-zeus";
const run = async () => {
  const api = Api("https://faker.graphqleditor.com/aexol/olympus/graphql");
  const { addCard: ZeusCard } = await Gql.Mutation({
    addCard: [
      {
        card: {
          Attack: 1,
          Defense: 2,
          description: "aa",
          name: "SADSD",
          skills: [SpecialSkills.FIRE],
        },
      },
      {
        name: true,
        Attack: true,
        Defense: true,
        description: true,
      },
    ],
  });
  const blalba = await Gql.Query({
    drawChangeCard: {
      "__typename": true,
      "...on EffectCard": {
        effectSize: true,
        name: true,
      },
      "...on SpecialCard": {
        effect: true,
        name: true,
      },
    },
  });
  console.log(blalba);
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
  console.log(ZeusCard);
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
  console.log(stack, newCard);
  const aa = await api.Query.cardById([
    {
      cardId: "aaa",
    },
    {
      __alias: {
        myDesc: {
          description: true,
        },
      },
      name: true,
    },
  ]);
  console.log(aa);
  const bb: ResolverArgumentsType<Query["drawCard"]>
  const cardSelectionSet: SelectionSet<Card> = {
    name: true,
    description: true,
    Attack: true,
    skills: true,
    Defense: true,
    cardImage: {
      key: true,
      bucket: true,
    },
  };
  const queryWithSelectionSet = await Gql.Query({
    drawCard: cardSelectionSet,
    listCards: cardSelectionSet,
  });
  console.log(queryWithSelectionSet);
  // This is how aliasing should work
  // console.log(queryWithSelectionSet.aaa.listCards.map(aa => aa.dd.name));
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
            { cardID: ["1"] },
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
  console.log(aliasedQuery);
  const aliasedQueryExecute = await Gql.Query({
    listCards: {
      __alias: {
        atak: {
          attack: [
            { cardID: ["1"] },
            {
              name: true,
              description: true,
            },
          ],
        },
      },
    },
  });

  console.log(JSON.stringify(aliasedQueryExecute, null, 4));
  console.log(
    JSON.stringify(aliasedQueryExecute.listCards!.map((card) => card.atak!.attack!), null, 4),
  );
};
run();
