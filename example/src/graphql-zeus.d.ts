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
	/** The defense power<br> */
	Defense:number,
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number
}



type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
type AnyRecord = Record<string, any>;

type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: {
    [x: string]: any;
  };
  errors?: Array<{
    message: string;
  }>;
}

interface Dict {
  [x: string]: Dict | any | Dict[] | any[];
}

export type ResolveReturned<T> = {
  [P in keyof T]?: T[P] extends Array<infer R>
    ? Array<ResolveReturned<R>>
    : T[P] extends {
        [x: string]: infer R;
      }
    ? ResolveReturned<T[P]>
    : T[P] extends AnyFunc
    ? ResolveReturned<ReturnType<T[P]>>
    : T[P];
};

export type State<T> = T extends Array<infer R> ? Array<ResolveReturned<R>> : ResolveReturned<T>;

type GraphQLDictReturnType<T> = T extends AnyFunc ? State<ReturnType<T>> : T;

type ResolveInternalFunctionReturn<T> = T extends Array<infer R> ? R : T;

type ResolveArgs<T> = T extends AnyRecord
  ? {
      [P in keyof T]?: T[P] extends Array<infer R>
        ? ResolveArgs<R>
        : T[P] extends {
            [x: string]: infer R;
          }
        ? ResolveArgs<T[P]>
        : T[P] extends AnyFunc
        ? ReturnType<T[P]> extends AnyRecord
          ? [ArgsType<T[P]>[0], ResolveArgs<ResolveInternalFunctionReturn<ReturnType<T[P]>>>]
          : [ArgsType<T[P]>[0]]
        : true;
    }
  : true;

type GraphQLReturner<T> = T extends Array<infer R> ? ResolveArgs<R> : ResolveArgs<T>;

type EmptyOrGraphQLReturner<T> = T extends AnyFunc
  ? ReturnType<T> extends AnyRecord
    ? (o: GraphQLReturner<ReturnType<T>>) => Promise<GraphQLDictReturnType<T>>
    : () => Promise<GraphQLDictReturnType<T>>
  : T extends AnyRecord
  ? (o: GraphQLReturner<T>) => Promise<GraphQLDictReturnType<T>>
  : () => Promise<GraphQLDictReturnType<T>>;

type FunctionToGraphQL<T> = T extends AnyFunc
  ? AfterFunctionToGraphQL<T>
  : () => EmptyOrGraphQLReturner<T>;

type AfterFunctionToGraphQL<T extends AnyFunc> = (
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
