/* eslint-disable */
export const AllTypesProps = {
  Card: {
    attack: {
      cardID: {
        type: '[String!]!',
      },
    },
  },
  Mutation: {
    addCard: {
      card: {
        type: 'createCard!',
      },
    },
  },
  Query: {
    cardById: {
      cardId: {
        type: 'String',
      },
    },
  },
  createCard: {
    skills: {
      type: '[SpecialSkills]!',
    },
    name: {
      type: 'String!',
    },
    description: {
      type: 'String!',
    },
    Children: {
      type: 'Int',
    },
    Attack: {
      type: 'Int!',
    },
    Defense: {
      type: 'Int!',
    },
  },
  SpecialSkills: 'enum',
} as const;

export const ReturnTypes: Record<string, any> = {
  S3Object: {
    bucket: 'String',
    key: 'String',
    region: 'String',
  },
  Subscription: {
    deck: 'Card',
  },
  Card: {
    Attack: 'Int',
    Children: 'Int',
    Defense: 'Int',
    attack: 'Card',
    cardImage: 'S3Object',
    description: 'String',
    id: 'ID',
    image: 'String',
    name: 'String',
    skills: 'SpecialSkills',
  },
  Nameable: {
    '...on Card': 'Card',
    '...on SpecialCard': 'SpecialCard',
    '...on EffectCard': 'EffectCard',
    '...on CardStack': 'CardStack',
    name: 'String',
  },
  SpecialCard: {
    effect: 'String',
    name: 'String',
  },
  EffectCard: {
    effectSize: 'Float',
    name: 'String',
  },
  Mutation: {
    addCard: 'Card',
  },
  Query: {
    cardById: 'Card',
    drawCard: 'Card',
    drawChangeCard: 'ChangeCard',
    listCards: 'Card',
    myStacks: 'CardStack',
    nameables: 'Nameable',
  },
  CardStack: {
    cards: 'Card',
    name: 'String',
  },
  ChangeCard: {
    '...on SpecialCard': 'SpecialCard',
    '...on EffectCard': 'EffectCard',
  },
};
