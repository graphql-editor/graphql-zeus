/* tslint:disable */
/* eslint-disable */

type ZEUS_INTERFACES = GraphQLTypes["Nameable"]
type ZEUS_UNIONS = GraphQLTypes["ChangeCard"]

export type ValueTypes = {
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
	["ChangeCard"]: AliasType<{		["...on SpecialCard"] : ValueTypes["SpecialCard"],
		["...on EffectCard"] : ValueTypes["EffectCard"]
		__typename?: true
}>;
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
	/** Aws S3 File */
["S3Object"]: AliasType<{
	bucket?:true,
	key?:true,
	region?:true,
		__typename?: true
}>;
	/** create card inputs<br> */
["createCard"]: {
	/** input skills */
	skills?:ValueTypes["SpecialSkills"][],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number
};
	["SpecialCard"]: AliasType<{
	effect?:true,
	name?:true,
		__typename?: true
}>;
	/** Stack of cards */
["CardStack"]: AliasType<{
	cards?:ValueTypes["Card"],
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
		['...on SpecialCard']?: Omit<ValueTypes["SpecialCard"],keyof ValueTypes["Nameable"]>;
		['...on CardStack']?: Omit<ValueTypes["CardStack"],keyof ValueTypes["Nameable"]>;
		['...on EffectCard']?: Omit<ValueTypes["EffectCard"],keyof ValueTypes["Nameable"]>;
		__typename?: true
}>;
	["EffectCard"]: AliasType<{
	effectSize?:true,
	name?:true,
		__typename?: true
}>;
	["SpecialSkills"]:SpecialSkills
  }

export type ModelTypes = {
    ["Query"]: {
		cardById?:ModelTypes["Card"],
	/** Draw a card<br> */
	drawCard:ModelTypes["Card"],
	drawChangeCard:ModelTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards:ModelTypes["Card"][],
	myStacks?:ModelTypes["CardStack"][],
	nameables:ModelTypes["Nameable"][]
};
	["ChangeCard"]:ModelTypes["SpecialCard"] | ModelTypes["EffectCard"];
	/** Card used in card game<br> */
["Card"]: {
		/** The attack power<br> */
	Attack:number,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The defense power<br> */
	Defense:number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack?:ModelTypes["Card"][],
	/** Put your description here */
	cardImage?:ModelTypes["S3Object"],
	/** Description of a card<br> */
	description:string,
	id:string,
	image:string,
	/** The name of a card<br> */
	name:string,
	skills?:ModelTypes["SpecialSkills"][]
};
	/** Aws S3 File */
["S3Object"]: {
		bucket:string,
	key:string,
	region:string
};
	/** create card inputs<br> */
["createCard"]: GraphQLTypes["createCard"];
	["SpecialCard"]: {
		effect:string,
	name:string
};
	/** Stack of cards */
["CardStack"]: {
		cards?:ModelTypes["Card"][],
	name:string
};
	["Mutation"]: {
		/** add Card to Cards database<br> */
	addCard:ModelTypes["Card"]
};
	["Nameable"]: ModelTypes["Card"] | ModelTypes["SpecialCard"] | ModelTypes["CardStack"] | ModelTypes["EffectCard"];
	["EffectCard"]: {
		effectSize:number,
	name:string
};
	["SpecialSkills"]: GraphQLTypes["SpecialSkills"]
    }

export type GraphQLTypes = {
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
	["ChangeCard"]:{
	['...on SpecialCard']: '__union' & GraphQLTypes["SpecialCard"];
	['...on EffectCard']: '__union' & GraphQLTypes["EffectCard"];
};
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
	/** Aws S3 File */
["S3Object"]: {
	__typename: "S3Object",
	bucket:string,
	key:string,
	region:string
};
	/** create card inputs<br> */
["createCard"]: {
		/** input skills */
	skills?:GraphQLTypes["SpecialSkills"][],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number
};
	["SpecialCard"]: {
	__typename: "SpecialCard",
	effect:string,
	name:string
};
	/** Stack of cards */
["CardStack"]: {
	__typename: "CardStack",
	cards?:GraphQLTypes["Card"][],
	name:string
};
	["Mutation"]: {
	__typename: "Mutation",
	/** add Card to Cards database<br> */
	addCard:GraphQLTypes["Card"]
};
	["Nameable"]: {
	__typename:"Card" | "SpecialCard" | "CardStack" | "EffectCard"
	name:string
	['...on Card']: '__union' & GraphQLTypes["Card"];
	['...on SpecialCard']: '__union' & GraphQLTypes["SpecialCard"];
	['...on CardStack']: '__union' & GraphQLTypes["CardStack"];
	['...on EffectCard']: '__union' & GraphQLTypes["EffectCard"];
};
	["EffectCard"]: {
	__typename: "EffectCard",
	effectSize:number,
	name:string
};
	["SpecialSkills"]: SpecialSkills
    }
export enum SpecialSkills {
	FIRE = "FIRE",
	THUNDER = "THUNDER",
	RAIN = "RAIN"
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

type NotUnionTypes<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
}[keyof DST];

type ExtractUnions<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof SRC]: SRC[P] extends '__union' & infer R
    ? P extends keyof DST
      ? IsArray<R, DST[P] & { __typename: true }>
      : {}
    : never;
}[keyof SRC];

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? ExtractUnions<SRC, DST> &
      {
        [P in keyof Omit<Pick<SRC, NotUnionTypes<SRC, DST>>, '__typename'>]: DST[P] extends true
          ? SRC[P]
          : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: DST[P] extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
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

export declare const resolverFor : <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => Y;

export declare const Gql: ReturnType<typeof Chain>
