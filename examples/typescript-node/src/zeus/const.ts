/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
  SpecialSkills: true,
  JSON: 'String',
  createCard: {
    skills: 'SpecialSkills',
  },
  Query: {
    cardById: {},
  },
  Mutation: {
    addCard: {
      card: 'createCard',
    },
  },
  Card: {
    attack: {},
  },
};

export const ReturnTypes: Record<string, any> = {
  CardStack: {
    cards: 'Card',
    name: 'String',
  },
  Query: {
    cardById: 'Card',
    drawCard: 'Card',
    drawChangeCard: 'ChangeCard',
    listCards: 'Card',
    myStacks: 'CardStack',
    nameables: 'Nameable',
  },
  Nameable: {
    '...on CardStack': 'CardStack',
    '...on SpecialCard': 'SpecialCard',
    '...on Card': 'Card',
    '...on EffectCard': 'EffectCard',
    name: 'String',
  },
  S3Object: {
    bucket: 'String',
    key: 'String',
    region: 'String',
  },
  SpecialCard: {
    effect: 'String',
    name: 'String',
  },
  Mutation: {
    addCard: 'Card',
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
    info: 'JSON',
    name: 'String',
    skills: 'SpecialSkills',
  },
  ChangeCard: {
    '...on SpecialCard': 'SpecialCard',
    '...on EffectCard': 'EffectCard',
  },
  EffectCard: {
    effectSize: 'Float',
    name: 'String',
  },
};

export const Ops = {
  query: 'Query' as const,
  mutation: 'Mutation' as const,
  subscription: 'Subscription' as const,
};
