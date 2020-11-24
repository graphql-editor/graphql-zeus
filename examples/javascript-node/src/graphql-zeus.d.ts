/* tslint:disable */
/* eslint-disable */

type ZEUS_INTERFACES = GraphQLTypes["Nameable"]
type ZEUS_UNIONS = GraphQLTypes["ChangeCard"]

export type ValueTypes = {
    /** Card used in card game<br> */
["Card"]: AliasType<{
	/** The attack power<br> */
	Attack?:true,
	/** <div>How many children the greek god had</div> */
	Children?:true,
	/** The defense power<br> */
	Defense?:true,
attack?: [{	/** Attacked card/card ids<br> */
	cardID:string[]},ValueTypes["Card"]],
	/** Put your description here */
	cardImage?:ValueTypes["S3Object"],
	/** Description of a card<br> */
	description?:true,
	id?:true,
	image?:true,
	/** The name of a card<br> */
	name?:true,
	skills?:true,
		__typename?: true
}>;
	/** Stack of cards */
["CardStack"]: AliasType<{
	cards?:ValueTypes["Card"],
	name?:true,
		__typename?: true
}>;
	["ChangeCard"]: AliasType<{		["...on SpecialCard"] : ValueTypes["SpecialCard"],
		["...on EffectCard"] : ValueTypes["EffectCard"]
		__typename?: true
}>;
	/** create card inputs<br> */
["createCard"]: {
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:ValueTypes["SpecialSkills"][],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number
};
	["EffectCard"]: AliasType<{
	effectSize?:true,
	name?:true,
		__typename?: true
}>;
	["Mutation"]: AliasType<{
addCard?: [{	card:ValueTypes["createCard"]},ValueTypes["Card"]],
		__typename?: true
}>;
	["Nameable"]:AliasType<{
		name?:true;
		['...on Card']?: Omit<ValueTypes["Card"],keyof ValueTypes["Nameable"]>;
		['...on CardStack']?: Omit<ValueTypes["CardStack"],keyof ValueTypes["Nameable"]>;
		['...on EffectCard']?: Omit<ValueTypes["EffectCard"],keyof ValueTypes["Nameable"]>;
		['...on SpecialCard']?: Omit<ValueTypes["SpecialCard"],keyof ValueTypes["Nameable"]>;
		__typename?: true
}>;
	["Query"]: AliasType<{
cardById?: [{	cardId?:string},ValueTypes["Card"]],
	/** Draw a card<br> */
	drawCard?:ValueTypes["Card"],
	drawChangeCard?:ValueTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards?:ValueTypes["Card"],
	myStacks?:ValueTypes["CardStack"],
	nameables?:ValueTypes["Nameable"],
		__typename?: true
}>;
	/** Aws S3 File */
["S3Object"]: AliasType<{
	bucket?:true,
	key?:true,
	region?:true,
		__typename?: true
}>;
	["SpecialCard"]: AliasType<{
	effect?:true,
	name?:true,
		__typename?: true
}>;
	["SpecialSkills"]:SpecialSkills
  }

export type PartialObjects = {
    /** Card used in card game<br> */
["Card"]: {
		__typename?: "Card";
			/** The attack power<br> */
	Attack?:number,
			/** <div>How many children the greek god had</div> */
	Children?:number,
			/** The defense power<br> */
	Defense?:number,
			/** Attack other cards on the table , returns Cards after attack<br> */
	attack?:PartialObjects["Card"][],
			/** Put your description here */
	cardImage?:PartialObjects["S3Object"],
			/** Description of a card<br> */
	description?:string,
			id?:string,
			image?:string,
			/** The name of a card<br> */
	name?:string,
			skills?:PartialObjects["SpecialSkills"][]
	},
	/** Stack of cards */
["CardStack"]: {
		__typename?: "CardStack";
			cards?:PartialObjects["Card"][],
			name?:string
	},
	["ChangeCard"]: PartialObjects["SpecialCard"] | PartialObjects["EffectCard"],
	/** create card inputs<br> */
["createCard"]: {
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:PartialObjects["SpecialSkills"][],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number
},
	["EffectCard"]: {
		__typename?: "EffectCard";
			effectSize?:number,
			name?:string
	},
	["Mutation"]: {
		__typename?: "Mutation";
			/** add Card to Cards database<br> */
	addCard?:PartialObjects["Card"]
	},
	["Nameable"]:{
		name?:string
} & (PartialObjects["Card"] | PartialObjects["CardStack"] | PartialObjects["EffectCard"] | PartialObjects["SpecialCard"]),
	["Query"]: {
		__typename?: "Query";
			cardById?:PartialObjects["Card"],
			/** Draw a card<br> */
	drawCard?:PartialObjects["Card"],
			drawChangeCard?:PartialObjects["ChangeCard"],
			/** list All Cards availble<br> */
	listCards?:PartialObjects["Card"][],
			myStacks?:PartialObjects["CardStack"][],
			nameables?:PartialObjects["Nameable"][]
	},
	/** Aws S3 File */
["S3Object"]: {
		__typename?: "S3Object";
			bucket?:string,
			key?:string,
			region?:string
	},
	["SpecialCard"]: {
		__typename?: "SpecialCard";
			effect?:string,
			name?:string
	},
	["SpecialSkills"]:SpecialSkills
  }

export type GraphQLTypes = {
    /** Card used in card game<br> */
["Card"]: {
	__typename: "Card",
	/** The attack power<br> */
	Attack:number,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The defense power<br> */
	Defense:number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack?:GraphQLTypes["Card"][],
	/** Put your description here */
	cardImage?:GraphQLTypes["S3Object"],
	/** Description of a card<br> */
	description:string,
	id:string,
	image:string,
	/** The name of a card<br> */
	name:string,
	skills?:GraphQLTypes["SpecialSkills"][]
};
	/** Stack of cards */
["CardStack"]: {
	__typename: "CardStack",
	cards?:GraphQLTypes["Card"][],
	name:string
};
	["ChangeCard"]:{
	['...on SpecialCard']: GraphQLTypes["SpecialCard"];
	['...on EffectCard']: GraphQLTypes["EffectCard"];
};
	/** create card inputs<br> */
["createCard"]: {
		/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:GraphQLTypes["SpecialSkills"][],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number
};
	["EffectCard"]: {
	__typename: "EffectCard",
	effectSize:number,
	name:string
};
	["Mutation"]: {
	__typename: "Mutation",
	/** add Card to Cards database<br> */
	addCard:GraphQLTypes["Card"]
};
	["Nameable"]: {
	__typename:"Card" | "CardStack" | "EffectCard" | "SpecialCard"
	name:string
	['...on Card']: GraphQLTypes["Card"];
	['...on CardStack']: GraphQLTypes["CardStack"];
	['...on EffectCard']: GraphQLTypes["EffectCard"];
	['...on SpecialCard']: GraphQLTypes["SpecialCard"];
};
	["Query"]: {
	__typename: "Query",
	cardById?:GraphQLTypes["Card"],
	/** Draw a card<br> */
	drawCard:GraphQLTypes["Card"],
	drawChangeCard:GraphQLTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards:GraphQLTypes["Card"][],
	myStacks?:GraphQLTypes["CardStack"][],
	nameables:GraphQLTypes["Nameable"][]
};
	/** Aws S3 File */
["S3Object"]: {
	__typename: "S3Object",
	bucket:string,
	key:string,
	region:string
};
	["SpecialCard"]: {
	__typename: "SpecialCard",
	effect:string,
	name:string
};
	["SpecialSkills"]: SpecialSkills
    }
export enum SpecialSkills {
	THUNDER = "THUNDER",
	RAIN = "RAIN",
	FIRE = "FIRE"
}


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};
type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

type UnionTypes<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof DST]: DST[P] extends true ? never : IsArray<SRC[P], DST[P]>;
}[keyof DST];
type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? UnionTypes<SRC, DST> &
      {
        [P in keyof SubType<DST, true>]: SRC[P];
      }
  : {
      [P in keyof DST]: DST[P] extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };
type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<InputType<T, Z>>;
type CastToGraphQL<V, T> = (resultOfYourQuery: any) => <Z extends V>(o: Z | V) => InputType<T, Z>;
type SelectionFunction<V> = <T>(t: T | V) => T;
type fetchOptions = ArgsType<typeof fetch>;
type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export declare function Thunder(
  fn: FetchFunction
):{
  query: OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,mutation: OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>
}

export declare function Chain(
  ...options: fetchOptions
):{
  query: OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,mutation: OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>
}

export declare const Zeus: {
  query: (o: ValueTypes["Query"]) => string,mutation: (o: ValueTypes["Mutation"]) => string
}

export declare const Cast: {
  query: CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>,mutation: CastToGraphQL<
  ValueTypes["Mutation"],
  GraphQLTypes["Mutation"]
>
}

export declare const Selectors: {
  query: SelectionFunction<ValueTypes["Query"]>,mutation: SelectionFunction<ValueTypes["Mutation"]>
}

export declare const resolverFor: <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (props: {
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : never;
    source?: unknown;
  }) => Z extends keyof GraphQLTypes[T] ? Omit<GraphQLTypes[T][Z], '__typename'> : never
>(
  type: T,
  field: Z,
  fn: Y,
) => Y

export declare const Gql: ReturnType<typeof Chain>
