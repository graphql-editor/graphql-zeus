export type Query = {
	cardById:(props:{	cardId:string}) => Card,
	/** Draw a card<br> */
	drawCard:Card,
	/** list All Cards availbla<br> */
	listCards:Card[]
}

/** Card used in card game<br> */
export type Card = {
	/** The attack power<br> */
	Attack:number,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The defense power<br> */
	Defense:number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack:(props:{	/** Attacked card/card ids<br> */
	cardID?:string[]}) => Card[],
	/** Description of a card<br> */
	description:string,
	id:string,
	/** The name of a card<br> */
	name:string,
	skills?:SpecialSkills[]
}

export enum SpecialSkills {
	THUNDER = "THUNDER",
	RAIN = "RAIN",
	FIRE = "FIRE"
}

export type Mutation = {
	/** add Card to Cards database<br> */
	addCard:(props:{	card:createCard}) => Card
}

export type createCard = {
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	/** The name of a card<br> */
	name:string
}

type Func<P extends any[], R> = (...args: P) => R;
type ArgsType<F extends Func<any, any>> = F extends Func<infer P, any>
  ? P
  : never;

type GraphQLResponse = {
  data?: {
    [x: string]: any;
  };
  errors?: {
    message: string;
  }[];
};

type Dict = {
  [x: string]: Dict | any | Dict[] | any[];
};

export type ResolveReturned<T> = {
  [P in keyof T]?: T[P] extends (infer R)[]
    ? ResolveReturned<R>[]
    : T[P] extends {
        [x: string]: infer R;
      }
    ? ResolveReturned<T[P]>
    : T[P] extends Func<any, any>
    ? ResolveReturned<ReturnType<T[P]>>
    : T[P]
};

export type State<T> = T extends (infer R)[]
  ? ResolveReturned<R>[]
  : ResolveReturned<T>;

type GraphQLDictReturnType<T> = T extends Func<any, any>
  ? State<ReturnType<T>>
  : T;


type ResolveInternalFunctionReturn<T> = T extends (infer R)[]
? R: T

type ResolveArgs<T> = T extends Record<any, any>
  ? {
      [P in keyof T]?: T[P] extends (infer R)[]
        ? ResolveArgs<R>
        : T[P] extends {
            [x: string]: infer R;
          }
        ? ResolveArgs<T[P]>
        : T[P] extends Func<any, any>
        ? ReturnType<T[P]> extends Record<any, any>
          ? [ArgsType<T[P]>[0], ResolveInternalFunctionReturn<ResolveArgs<ReturnType<T[P]>>>]
          : [ArgsType<T[P]>[0]]
        : true
    }
  : true;


type GraphQLReturner<T> = T extends (infer R)[]
  ? ResolveArgs<R>
  : ResolveArgs<T>;

type EmptyOrGraphQLReturner<T> = T extends Func<any, any>
? ReturnType<T> extends Record<any, any>
  ? (o: GraphQLReturner<ReturnType<T>>) => Promise<GraphQLDictReturnType<T>>
  : () => Promise<GraphQLDictReturnType<T>>
: T extends Record<any, any>
? (o: GraphQLReturner<T>) => Promise<GraphQLDictReturnType<T>>
: () => Promise<GraphQLDictReturnType<T>>;

type FunctionToGraphQL<T> = T extends Func<any, any>
  ? AfterFunctionToGraphQL<T>
  : () => EmptyOrGraphQLReturner<T>;

type AfterFunctionToGraphQL<T extends Func<any, any>> = (
  props?: ArgsType<T>[0]
) => EmptyOrGraphQLReturner<T>;

type fetchOptions = ArgsType<typeof fetch>;
export declare function Api(
  ...options: fetchOptions
): {
  Query: {	cardById: FunctionToGraphQL<Query['cardById']>,
	drawCard: FunctionToGraphQL<Query['drawCard']>,
	listCards: FunctionToGraphQL<Query['listCards']>},Mutation: {	addCard: FunctionToGraphQL<Mutation['addCard']>},Subscription: {}
};
