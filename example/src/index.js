import { Api, Chain, SpecialSkills } from './graphql-zeus';

// This will return Card object with ID only
const createCards = async () => {
  const chain = Chain('https://faker.graphqleditor.com/aexol/olympus/graphql');
  const api = Api('https://faker.graphqleditor.com/aexol/olympus/graphql');

  // one Query example
  const drawedCard = await api.Query.drawCard({
    Attack: true,
    name: true
  });
  console.log(JSON.stringify(drawedCard, null, 4));
  // Query chaining example
  const listCardsAndDraw = await chain.Query({
    cardById: [
      {
        cardId: 'sdsd'
      },
      {
        description: true
      }
    ],
    listCards: {
      name: true,
      skills: true,
      attack: [
        { cardID: ['s', 'sd'] },
        {
          name: true
        }
      ]
    },
    drawCard: {
      name: true,
      skills: true,
      Attack: true
    }
  });
  console.log(JSON.stringify(listCardsAndDraw, null, 4));
  const addCard = await chain.Mutation({
    addCard: [
      {
        card: {
          name: 'Zeus',
          description: 'Allmighty',
          skills: ['THUNDER'],
          Attack: 1,
          Defense: 1
        }
      },
      {
        name: true,
        description: true,
        skills: true
      }
    ]
  });
  console.log(JSON.stringify(addCard, null, 4));
};
createCards();
