import { chainOptions, FetchFunction, SubscriptionFunction } from '@/TreeToTS/functions/new/models';
import { AliasType, ScalarResolver } from '@/TreeToTS/functions/new/types';

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
    settings: 'JSON',
  },
  Status: 'enum' as const,
  TypeOfAttack: 'enum' as const,
  JSON: 'scalar.JSON' as const,
};

export const ReturnTypes = {
  Query: {
    cardByStatus: 'Card',
    drawCard: 'Card',
    cards: 'Card',
  },
  Card: {
    attack: 'Card',
    info: 'JSON',
  },
  JSON: 'scalar.JSON' as const,
};

export const Ops = {
  query: 'Query' as const,
  mutation: 'Mutation' as const,
};

export type ZEUS_INTERFACES = GraphQLTypes['Nameable'];
export type ZEUS_UNIONS = GraphQLTypes['ChangeCard'];

export type ValueTypes = {
  ['Nameable']: AliasType<{
    name?: boolean;
    ['...on EffectCard']?: Omit<ValueTypes['EffectCard'], keyof ValueTypes['Nameable']>;
    ['...on Card']?: Omit<ValueTypes['Card'], keyof ValueTypes['Nameable']>;
    ['...on SpecialCard']?: Omit<ValueTypes['SpecialCard'], keyof ValueTypes['Nameable']>;
    ['...on CardStack']?: Omit<ValueTypes['CardStack'], keyof ValueTypes['Nameable']>;
    __typename?: boolean;
  }>;
  /** Aws S3 File */
  ['S3Object']: AliasType<{
    bucket?: boolean;
    key?: boolean;
    region?: boolean;
    __typename?: boolean;
  }>;
  ['ChangeCard']: AliasType<{
    ['...on SpecialCard']: ValueTypes['SpecialCard'];
    ['...on EffectCard']: ValueTypes['EffectCard'];
    __typename?: boolean;
  }>;
  ['EffectCard']: AliasType<{
    effectSize?: boolean;
    name?: boolean;
    __typename?: boolean;
  }>;
  ['Subscription']: AliasType<{
    deck?: ValueTypes['Card'];
    __typename?: boolean;
  }>;
  ['Query']: AliasType<{
    cardById?: [{ cardId?: string | undefined | null }, ValueTypes['Card']];
    /** Draw a card<br> */
    drawCard?: ValueTypes['Card'];
    drawChangeCard?: ValueTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards?: ValueTypes['Card'];
    myStacks?: ValueTypes['CardStack'];
    nameables?: ValueTypes['Nameable'];
    __typename?: boolean;
  }>;
  /** Card used in card game<br> */
  ['Card']: AliasType<{
    /** The attack power<br> */
    Attack?: boolean;
    /** <div>How many children the greek god had</div> */
    Children?: boolean;
    /** The defense power<br> */
    Defense?: boolean;
    attack?: [
      {
        /** Attacked card/card ids<br> */ cardID: string[] | undefined | null;
      },
      ValueTypes['Card'],
    ];
    /** Put your description here */
    cardImage?: ValueTypes['S3Object'];
    /** Description of a card<br> */
    description?: boolean;
    id?: boolean;
    image?: boolean;
    info?: boolean;
    /** The name of a card<br> */
    name?: boolean;
    skills?: boolean;
    __typename?: boolean;
  }>;
  ['SpecialSkills']: SpecialSkills;
  ['SpecialCard']: AliasType<{
    effect?: boolean;
    name?: boolean;
    __typename?: boolean;
  }>;
  ['Mutation']: AliasType<{
    addCard?: [{ card: ValueTypes['createCard'] }, ValueTypes['Card']];
    __typename?: boolean;
  }>;
  /** Stack of cards */
  ['CardStack']: AliasType<{
    cards?: ValueTypes['Card'];
    name?: boolean;
    __typename?: boolean;
  }>;
  /** create card inputs<br> */
  ['createCard']: {
    /** The defense power<br> */
    Defense: number;
    /** input skills */
    skills?: ValueTypes['SpecialSkills'][];
    /** The name of a card<br> */
    name: string;
    /** Description of a card<br> */
    description: string;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined | null;
    /** The attack power<br> */
    Attack: number;
  };
};

export type ModelTypes = {
  ['Nameable']: ModelTypes['EffectCard'] | ModelTypes['Card'] | ModelTypes['SpecialCard'] | ModelTypes['CardStack'];
  /** Aws S3 File */
  ['S3Object']: {
    bucket: string;
    key: string;
    region: string;
  };
  ['ChangeCard']: ModelTypes['SpecialCard'] | ModelTypes['EffectCard'];
  ['EffectCard']: {
    effectSize: number;
    name: string;
  };
  ['Subscription']: {
    deck?: Array<GraphQLTypes['Card']> | undefined;
  };
  ['Query']: {
    cardById?: GraphQLTypes['Card'] | undefined;
    /** Draw a card<br> */
    drawCard: GraphQLTypes['Card'];
    drawChangeCard: GraphQLTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards: Array<GraphQLTypes['Card']>;
    myStacks?: Array<GraphQLTypes['CardStack']> | undefined;
    nameables: Array<GraphQLTypes['Nameable']>;
  };
  /** Card used in card game<br> */
  ['Card']: {
    /** The attack power<br> */
    Attack: number;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined;
    /** The defense power<br> */
    Defense: number;
    /** Attack other cards on the table , returns Cards after attack<br> */
    attack?: Array<GraphQLTypes['Card']> | undefined;
    /** Put your description here */
    cardImage?: GraphQLTypes['S3Object'] | undefined;
    /** Description of a card<br> */
    description: string;
    id: string;
    image: string;
    info?: GraphQLTypes['JSON'] | undefined;
    /** The name of a card<br> */
    name: string;
    skills?: Array<GraphQLTypes['SpecialSkills']> | undefined;
  };
  ['JSON']: unknown;
  ['SpecialSkills']: GraphQLTypes['SpecialSkills'];
  ['SpecialCard']: {
    effect: string;
    name: string;
  };
  ['Mutation']: {
    /** add Card to Cards database<br> */
    addCard: GraphQLTypes['Card'];
  };
  /** Stack of cards */
  ['CardStack']: {
    cards?: Array<GraphQLTypes['Card']> | undefined;
    name: string;
  };
  /** create card inputs<br> */
  ['createCard']: GraphQLTypes['createCard'];
};

export type GraphQLTypes = {
  ['Nameable']: {
    __typename: 'EffectCard' | 'Card' | 'SpecialCard' | 'CardStack';
    name: string;
    ['...on EffectCard']: '__union' & GraphQLTypes['EffectCard'];
    ['...on Card']: '__union' & GraphQLTypes['Card'];
    ['...on SpecialCard']: '__union' & GraphQLTypes['SpecialCard'];
    ['...on CardStack']: '__union' & GraphQLTypes['CardStack'];
  };
  /** Aws S3 File */
  ['S3Object']: {
    __typename: 'S3Object';
    bucket: string;
    key: string;
    region: string;
  };
  ['JSON']: 'scalar' & { name: 'JSON' };
  ['ChangeCard']: {
    __typename: 'SpecialCard' | 'EffectCard';
    ['...on SpecialCard']: '__union' & GraphQLTypes['SpecialCard'];
    ['...on EffectCard']: '__union' & GraphQLTypes['EffectCard'];
  };
  ['EffectCard']: {
    __typename: 'EffectCard';
    effectSize: number;
    name: string;
  };
  ['Subscription']: {
    __typename: 'Subscription';
    deck?: Array<GraphQLTypes['Card']> | undefined;
  };
  ['Query']: {
    __typename: 'Query';
    cardById?: GraphQLTypes['Card'] | undefined;
    /** Draw a card<br> */
    drawCard: GraphQLTypes['Card'];
    drawChangeCard: GraphQLTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards: Array<GraphQLTypes['Card']>;
    myStacks?: Array<GraphQLTypes['CardStack']> | undefined;
    nameables: Array<GraphQLTypes['Nameable']>;
  };
  /** Card used in card game<br> */
  ['Card']: {
    __typename: 'Card';
    /** The attack power<br> */
    Attack: number;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined;
    /** The defense power<br> */
    Defense: number;
    /** Attack other cards on the table , returns Cards after attack<br> */
    attack?: Array<GraphQLTypes['Card']> | undefined;
    /** Put your description here */
    cardImage?: GraphQLTypes['S3Object'] | undefined;
    /** Description of a card<br> */
    description: string;
    id: string;
    image: string;
    info?: GraphQLTypes['JSON'] | undefined;
    /** The name of a card<br> */
    name: string;
    skills?: Array<GraphQLTypes['SpecialSkills']> | undefined;
  };
  ['SpecialSkills']: SpecialSkills;
  ['SpecialCard']: {
    __typename: 'SpecialCard';
    effect: string;
    name: string;
  };
  ['Mutation']: {
    __typename: 'Mutation';
    /** add Card to Cards database<br> */
    addCard: GraphQLTypes['Card'];
  };
  /** Stack of cards */
  ['CardStack']: {
    __typename: 'CardStack';
    cards?: Array<GraphQLTypes['Card']> | undefined;
    name: string;
  };
  /** create card inputs<br> */
  ['createCard']: {
    /** The defense power<br> */
    Defense: number;
    /** input skills */
    skills?: Array<GraphQLTypes['SpecialSkills']> | undefined;
    /** The name of a card<br> */
    name: string;
    /** Description of a card<br> */
    description: string;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined;
    /** The attack power<br> */
    Attack: number;
  };
};
export const enum SpecialSkills {
  THUNDER = 'THUNDER',
  RAIN = 'RAIN',
  FIRE = 'FIRE',
}

export type ScalarCoders = {
  JSON?: ScalarResolver;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const apiSubscription = (opts: chainOptions) => ((q: string) => 1) as unknown as SubscriptionFunction;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const apiFetch = (options: chainOptions) => ((q: string, vars?: unknown) => 1) as unknown as FetchFunction;
export const HOST = 'https://faker.graphqleditor.com/a-team/olympus/graphql';
