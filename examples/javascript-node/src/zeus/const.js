export const AllTypesProps = {
  SpecialSkills: 'enum',
  Query: {
    cardById: {
      cardId: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  Card: {
    attack: {
      cardID: {
        type: 'String',
        array: true,
        arrayRequired: true,
        required: true,
      },
    },
  },
  Mutation: {
    addCard: {
      card: {
        type: 'createCard',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  createCard: {
    Attack: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: true,
    },
    Defense: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: true,
    },
    skills: {
      type: 'SpecialSkills',
      array: true,
      arrayRequired: false,
      required: true,
    },
    name: {
      type: 'String',
      array: false,
      arrayRequired: false,
      required: true,
    },
    description: {
      type: 'String',
      array: false,
      arrayRequired: false,
      required: true,
    },
    Children: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
};

export const ReturnTypes = {
  SpecialCard: {
    effect: 'String',
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
    '...on SpecialCard': 'SpecialCard',
    '...on Card': 'Card',
    '...on CardStack': 'CardStack',
    '...on EffectCard': 'EffectCard',
    name: 'String',
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
  Mutation: {
    addCard: 'Card',
  },
  ChangeCard: {
    '...on SpecialCard': 'SpecialCard',
    '...on EffectCard': 'EffectCard',
  },
  CardStack: {
    cards: 'Card',
    name: 'String',
  },
  S3Object: {
    bucket: 'String',
    key: 'String',
    region: 'String',
  },
  EffectCard: {
    effectSize: 'Float',
    name: 'String',
  },
};
