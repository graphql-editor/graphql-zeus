import { Api } from './graphql-zeus';

// This will return Card object with ID only
const ZeusCard = Api('https://faker.graphqleditor.com/aexol/olympus/graphql').Mutation.addCard({
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
const DionysusCard = Api('https://faker.graphqleditor.com/aexol/olympus/graphql').Mutation.addCard({
  card: {
    name: 'Dionysus',
    description: 'Dionysus is the Greek god of wine, has the power to bring the dead back to life.',
    Attack: 1,
    Defense: 15,
    Children: 9
  }
})({
  id: true,
  name: true
});
