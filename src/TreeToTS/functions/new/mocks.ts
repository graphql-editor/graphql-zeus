export const AllTypesProps = {
  Query: {
    cardByStatus: {
      status: 'Status',
    },
    cards: {
      attack: 'TypeOfAttack',
    },
  },
  Mutation: {
    createCard: {
      card: 'CreateCard',
    },
  },
  Card: {
    attack: {
      by: 'Status',
    },
  },
  CreateCard: {
    status: 'Status',
  },
  Status: true,
  TypeOfAttack: true,
};

export const ReturnTypes = {
  Query: {
    cardByStatus: 'Card',
    cards: 'Card',
  },
  Card: {
    attack: 'Card',
  },
};

export const Ops = {
  query: 'Query',
  mutation: 'Mutation',
};
