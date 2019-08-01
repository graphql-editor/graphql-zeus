import { Api, Card, Chain, SelectionSet, SpecialSkills } from "./graphql-zeus";
const run = async () => {
  const chain = Chain("https://faker.graphqleditor.com/aexol/olympus/graphql");
  const api = Api("https://faker.graphqleditor.com/aexol/olympus/graphql");
  const { addCard: ZeusCard } = await chain.Mutation({
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
  console.log(ZeusCard);
  const { listCards: stack, drawCard: newCard } = await chain.Query({
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
      name: true,
    },
  ]);
  console.log(aa);

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
  const queryWithSelectionSet = await chain.Query({
    drawCard: cardSelectionSet,
    listCards: cardSelectionSet,
  });
  console.log(queryWithSelectionSet);
};
run();
