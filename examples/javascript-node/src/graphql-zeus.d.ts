export interface Query {
  cardById: (props: { cardId?: string }) => Card;
  /** Draw a card<br> */
  drawCard: Card;
  /** list All Cards availbla<br> */
  listCards: Card[];
}

/** Card used in card game<br> */
export interface Card {
  /** The attack power<br> */
  Attack: number;
  /** <div>How many children the greek god had</div> */
  Children?: number;
  /** The defense power<br> */
  Defense: number;
  /** Attack other cards on the table , returns Cards after attack<br> */
  attack: (props: {
    /** Attacked card/card ids<br> */
    cardID?: string[];
  }) => Card[];
  cardImage?: S3Object;
  /** Description of a card<br> */
  description: string;
  id: string;
  /** The name of a card<br> */
  name: string;
  skills?: SpecialSkills[];
}

/** Aws S3 File */
export interface S3Object {
  bucket: string;
  key: string;
  region: string;
}

export enum SpecialSkills {
  THUNDER = 'THUNDER',
  RAIN = 'RAIN',
  FIRE = 'FIRE'
}

export interface Mutation {
  /** add Card to Cards database<br> */
  addCard: (props: { card: createCard }) => Card;
}

export interface createCard {
  /** The name of a card<br> */
  name: string;
  /** Description of a card<br> */
  description: string;
  /** <div>How many children the greek god had</div> */
  Children?: number;
  /** The attack power<br> */
  Attack: number;
  /** The defense power<br> */
  Defense: number;
  skills?: SpecialSkills[];
}

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsObject<T, Z, L> = IsType<Record<string, unknown>, T, Z, L>;

type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type GetTypeFromArray<T> = T extends Array<infer R> ? R : T;
type FirstArgument<F extends AnyFunc> = GetTypeFromArray<ArgsType<F>>;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type ResolveReturned<T> = {
  [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<ResolveReturned<R>>
    : T[P] extends AnyFunc
    ? ResolveReturned<ReturnType<T[P]>>
    : IsObject<
        T[P],
        ResolveReturned<T[P]>,
        T[P] extends AnyFunc ? ResolveReturned<ReturnType<T[P]>> : T[P]
      >;
};

export type State<T> = ResolveReturned<T>;

type ResolveInternalFunctionReturn<T> = T extends Array<infer R> ? R : T;

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsObject<
      ReturnType<T>,
      [FirstArgument<T>, SelectionSet<ResolveInternalFunctionReturn<ReturnType<T>>>],
      [FirstArgument<T>]
    >
  : IsObject<T, SelectionSet<T>, T extends undefined ? undefined : true>;

export type SelectionSet<T> = IsObject<
  T,
  {
    [P in keyof T]?: ResolveValue<T[P]>;
  },
  T extends undefined ? undefined : true
>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;

type OperationToGraphQL<T> = (o: GraphQLReturner<T>) => Promise<ResolveReturned<T>>;
type ApiFieldToGraphQL<T> = (o: ResolveValue<T>) => Promise<ResolveReturned<T>>;

type fetchOptions = ArgsType<typeof fetch>;

export declare function Chain(
  ...options: fetchOptions
): {
  Query: OperationToGraphQL<Query>;
  Mutation: OperationToGraphQL<Mutation>;
};

export declare function Api(
  ...options: fetchOptions
): {
  Query: {
    cardById: ApiFieldToGraphQL<Query['cardById']>;
    drawCard: ApiFieldToGraphQL<Query['drawCard']>;
    listCards: ApiFieldToGraphQL<Query['listCards']>;
  };
  Mutation: {
    addCard: ApiFieldToGraphQL<Mutation['addCard']>;
  };
};

export declare const Zeus: {
  Query: (o: GraphQLReturner<Query>) => string;
  Mutation: (o: GraphQLReturner<Mutation>) => string;
};

export declare const Cast: {
  Query: (o: any) => ResolveReturned<Query>;
  Mutation: (o: any) => ResolveReturned<Mutation>;
};
