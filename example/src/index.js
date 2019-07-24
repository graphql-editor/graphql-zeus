import { Api, Chain } from './graphql-zeus';

// This will return Card object with ID only
const createCards = async () => {
  const chain = Chain('https://faker.graphqleditor.com/aexol/olympus/graphql');
  // Query chaining example
  const listCardsAndDraw = await chain.Query({
    listCards: {
      name: true,
      skills: true
    },
    drawCard: {
      name: true,
      skills: true,
      Attack: true
    }
  });
  console.log(listCardsAndDraw);
};
createCards();
