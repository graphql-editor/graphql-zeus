/** Card used in card game<br> */
export type Card = {
	__typename?: "Card",
	/** The attack power<br> */
	Attack:number,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The defense power<br> */
	Defense:number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack:(props:{	/** Attacked card/card ids<br> */
	cardID?:string[]}) => Card[],
	/** Put your description here */
	cardImage?:S3Object,
	/** Description of a card<br> */
	description:string,
	id:string,
	/** The name of a card<br> */
	name:string,
	skills?:SpecialSkills[]
}

/** Stack of cards */
export type CardStack = {
	__typename?: "CardStack",
	cards?:Card[],
	name?:string
}

export type ChangeCard = SpecialCard | EffectCard

/** create card inputs<br> */
export type createCard = {
		/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:SpecialSkills[],
	/** The name of a card<br> */
	name:string
}

export type EffectCard = {
	__typename?: "EffectCard",
	effectSize:number,
	name:string
}

export type Mutation = {
	__typename?: "Mutation",
	/** add Card to Cards database<br> */
	addCard:(props:{	card:createCard}) => Card
}

export type Query = {
	__typename?: "Query",
	cardById:(props:{	cardId?:string}) => Card,
	/** Draw a card<br> */
	drawCard:Card,
	drawChangeCard:ChangeCard,
	/** list All Cards availble<br> */
	listCards:Card[],
	myStacks?:CardStack[]
}

/** Aws S3 File */
export type S3Object = {
	__typename?: "S3Object",
	bucket:string,
	key:string,
	region:string
}

export type SpecialCard = {
	__typename?: "SpecialCard",
	effect:string,
	name:string
}

export enum SpecialSkills {
	THUNDER = "THUNDER",
	RAIN = "RAIN",
	FIRE = "FIRE"
}

export type ValueTypes = {
    /** Card used in card game<br> */
["Card"]: {
	/** The attack power<br> */
	Attack:number,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The defense power<br> */
	Defense:number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack:(props:{	/** Attacked card/card ids<br> */
	cardID?:string[]}) => ValueTypes["Card"][],
	/** Put your description here */
	cardImage?:ValueTypes["S3Object"],
	/** Description of a card<br> */
	description:string,
	id:string,
	/** The name of a card<br> */
	name:string,
	skills?:ValueTypes["SpecialSkills"][]
},
	/** Stack of cards */
["CardStack"]: {
	cards?:ValueTypes["Card"][],
	name?:string
},
	["ChangeCard"]: {		["...on SpecialCard"] : ValueTypes["SpecialCard"],
		["...on EffectCard"] : ValueTypes["EffectCard"]
},
	/** create card inputs<br> */
["createCard"]: {
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:ValueTypes["SpecialSkills"][],
	/** The name of a card<br> */
	name:string
},
	["EffectCard"]: {
	effectSize:number,
	name:string
},
	["Mutation"]: {
	/** add Card to Cards database<br> */
	addCard:(props:{	card:ValueTypes["createCard"]}) => ValueTypes["Card"]
},
	["Query"]: {
	cardById:(props:{	cardId?:string}) => ValueTypes["Card"],
	/** Draw a card<br> */
	drawCard:ValueTypes["Card"],
	drawChangeCard:ValueTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards:ValueTypes["Card"][],
	myStacks?:ValueTypes["CardStack"][]
},
	/** Aws S3 File */
["S3Object"]: {
	bucket:string,
	key:string,
	region:string
},
	["SpecialCard"]: {
	effect:string,
	name:string
},
	["SpecialSkills"]:SpecialSkills
  }



type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsScalar<T, Z, L> = IsType<string | boolean | number, T, Z, L>;
type IsObject<T, Z, L> = IsType<{} | Record<string, any>, T, Z, L>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

export type ResolverType<F> = F extends Func<infer P, any> ? P[0] : undefined;

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
    ? Array<State<R>>
    : T[P] extends AnyFunc
    ? State<ReturnType<T[P]>>
    : IsScalar<T[P], T[P], IsObject<T[P], State<T[P]>, never>>;
};

export type PlainObject<T> = {
  [P in keyof T]: T[P] extends (Array<infer R> | undefined)
    ? Array<PlainObject<R>>
    : T[P] extends AnyFunc
    ? PlainObject<ReturnType<T[P]>>
    : IsScalar<T[P], T[P], IsObject<T[P], PlainObject<T[P]>, never>>;
};

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsScalar<
      ReturnType<T>,
      [FirstArgument<T>],
      [FirstArgument<T>, SelectionSet<OfType<ReturnType<T>>>]
    >
  : IsScalar<T, T extends undefined ? undefined : true, IsObject<T, SelectionSet<T>, never>>;

export type SelectionSet<T> = IsScalar<
  T,
  T extends undefined ? undefined : true,
  IsObject<
    T,
    AliasType<
      {
        [P in keyof T]?: ResolveValue<T[P]>;
      }
    >,
    never
  >
>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;
type IsUnion<T, YES, NO, U extends T = T> = (T extends any
  ? (U extends T ? false : true)
  : never) extends false
  ? NO
  : YES;

type Anify<T> = { [P in keyof T]?: any };

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean ? SRC : IsUnion<
  SRC,
  State<SRC>,
  DST extends {
    __alias: any;
  }
    ? {
        [A in keyof DST['__alias']]: Required<SRC> extends Anify<DST['__alias'][A]>
          ? MapType<Required<SRC>, DST['__alias'][A]>
          : never;
      } &
        {
          [Key in keyof Omit<DST, '__alias'>]: DST[Key] extends boolean
            ? SRC[Key]
            : DST[Key] extends [any, infer R]
            ? ReturnType<Required<SRC>[Key]> extends Array<infer RETURNED> ? MapType<RETURNED, R>[] : MapType<ReturnType<Required<SRC>[Key]> ,R>
            : Required<SRC>[Key] extends Array<infer SRCArray>
            ? MapType<SRCArray, DST[Key]>[]
            : MapType<Required<SRC>[Key], DST[Key]>;
        }
    : {
        [Key in keyof DST]: DST[Key] extends boolean
          ? SRC[Key]
          : DST[Key] extends [any, infer R]
          ? ReturnType<Required<SRC>[Key]> extends Array<infer RETURNED> ? MapType<RETURNED, R>[] : MapType<ReturnType<Required<SRC>[Key]> ,R>
          : Required<SRC>[Key] extends Array<infer SRCArray>
          ? MapType<SRCArray, DST[Key]>[]
          : MapType<Required<SRC>[Key], DST[Key]>;
      }
>;

type OperationToGraphQL<V, T> = <Z>(o: Z | GraphQLReturner<V>) => Promise<MapType<T, Z>>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | SelectionSet<V>) => T;


export declare function Chain(
  ...options: fetchOptions
):{
  Query: OperationToGraphQL<ValueTypes["Query"],Query>,Mutation: OperationToGraphQL<ValueTypes["Mutation"],Mutation>
}

export declare const Zeus: {
  Query: (o: GraphQLReturner<ValueTypes["Query"]>) => string,Mutation: (o: GraphQLReturner<ValueTypes["Mutation"]>) => string
}

export declare const Cast: {
  Query: (o:any) => State<Query>,Mutation: (o:any) => State<Mutation>
}
