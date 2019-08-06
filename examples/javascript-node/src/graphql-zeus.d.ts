export type Query = {
	cardById:(props:{	cardId?:string}) => Card,
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
	cardImage?:S3Object,
	/** Description of a card<br> */
	description:string,
	id:string,
	/** The name of a card<br> */
	name:string,
	skills?:SpecialSkills[]
}

/** Aws S3 File */
export type S3Object = {
	bucket:string,
	key:string,
	region:string
}

export enum SpecialSkills {
	RAIN = "RAIN",
	FIRE = "FIRE",
	THUNDER = "THUNDER"
}

export type Mutation = {
	/** add Card to Cards database<br> */
	addCard:(props:{	card:createCard}) => Card
}

export type createCard = {
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	skills?:SpecialSkills[],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string
}



type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsScalar<T, Z, L> = IsType<string | boolean | number, T, Z, L>;

type AliasType<T> = T & {
  __alias?: Record<string, T>;
};

export type AliasedReturnType<T> ={
	[P in keyof T]:T[P]
} & Record<string,{
	[P in keyof T]:T[P]
}>

type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type OfType<T> = T extends Array<infer R> ? R : T;
type FirstArgument<F extends AnyFunc> = OfType<ArgsType<F>>;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type State<T> = {
  [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<AliasedReturnType<State<R>>>
    : T[P] extends AnyFunc
    ? AliasedReturnType<State<ReturnType<T[P]>>>
    : IsScalar<T[P], T[P], AliasedReturnType<State<T[P]>>>;
};

export type PlainObject<T> = {
  [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<PlainObject<R>>
    : T[P] extends AnyFunc
    ?  PlainObject<ReturnType<T[P]>>
    : IsScalar<T[P], T[P], PlainObject<T[P]>>;
};

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsScalar<
      ReturnType<T>,
      [FirstArgument<T>],
      [FirstArgument<T>, SelectionSet<OfType<ReturnType<T>>>]
    >
  : IsScalar<T, T extends undefined ? undefined : true, SelectionSet<T>>;

export type SelectionSet<T> = IsScalar<
  T,  T extends undefined ? undefined : true
,  AliasType<
    {
      [P in keyof T]?: ResolveValue<T[P]>;
    }
  >>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;

type OperationToGraphQL<T> = (o: GraphQLReturner<T>) => Promise<AliasedReturnType<State<T>>>;

type ResolveApiField<T> = T extends Array<infer R>
  ? IsScalar<R, R, State<R>>
  : T extends AnyFunc
  ? IsScalar<OfType<ReturnType<T>>, T, State<OfType<ReturnType<T>>>>
  : IsScalar<T, T, State<T>>;

type ApiFieldToGraphQL<T> = (o: ResolveValue<T>) => Promise<ResolveApiField<T>>;

type fetchOptions = ArgsType<typeof fetch>;


export declare function Chain(
  ...options: fetchOptions
):{
  Query: OperationToGraphQL<Query>,Mutation: OperationToGraphQL<Mutation>
}

export declare function Api(
  ...options: fetchOptions
):{
  Query: {
cardById: ApiFieldToGraphQL<Query['cardById']>,
	drawCard: ApiFieldToGraphQL<Query['drawCard']>,
	listCards: ApiFieldToGraphQL<Query['listCards']>
},Mutation: {
addCard: ApiFieldToGraphQL<Mutation['addCard']>
}
}

export declare const Zeus: {
  Query: (o: GraphQLReturner<Query>) => string,Mutation: (o: GraphQLReturner<Mutation>) => string
}

export declare const Cast: {
  Query: (o:any) => State<Query>,Mutation: (o:any) => State<Mutation>
}
