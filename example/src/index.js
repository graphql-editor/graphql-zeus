import { Api } from './graphql-zeus';

// This will return Card object with ID only
const createCards = async () => {
  const api = Api('https://faker.graphqleditor.com/aexol/olympus/graphql', {});
  let ZeusCard = api.Mutation.addCard({
    card: {
      name: 'Zeus',
      description:
        "Sky and Thunder god, rules olympus. Hasn't devoured any children. Zeus' father, Cronus ate all of his children except for Zeus.",
      Attack: 10,
      Defense: 5,
      Children: 92 // YES!
    }
  })({
    id: true
  });
  let DionysusCard = api.addCard({
    card: {
      name: 'Dionysus',
      description:
        'Dionysus is the Greek god of wine, has the power to bring the dead back to life.',
      Attack: 1,
      Defense: 15,
      Children: 9
    }
  })({
    id: true,
    name: true
  });
  // How to call graphql functions on objects
  const [UpdatedDionysusCard, UpdatedZeusCard] = api.Query.cardById({
    cardId: DionysusCard.id
  })({
    attack: [
      {
        cardID: [ZeusCard.id]
      },
      {
        id: true,
        Attack: true,
        Children: true,
        Defense: true,
        description: true,
        name: true
      }
    ]
  }).attack;
  console.log(UpdatedDionysusCard);
  console.log(UpdatedZeusCard);
};
createCards();
