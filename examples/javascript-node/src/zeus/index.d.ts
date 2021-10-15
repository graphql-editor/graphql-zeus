type ZEUS_INTERFACES = GraphQLTypes["Nameable"]
type ZEUS_UNIONS = GraphQLTypes["ChangeCard"]

export type ValueTypes = {
    ["EffectCard"]: AliasType<{
	effectSize?:true,
	name?:true,
		__typename?: true
}>;
	["SpecialSkills"]:SpecialSkills;
	["ChangeCard"]: AliasType<{		["...on SpecialCard"] : ValueTypes["SpecialCard"],
		["...on EffectCard"] : ValueTypes["EffectCard"]
		__typename?: true
}>;
	["SpecialCard"]: AliasType<{
	effect?:true,
	name?:true,
		__typename?: true
}>;
	["Subscription"]: AliasType<{
	deck?:ValueTypes["Card"],
		__typename?: true
}>;
	["Query"]: AliasType<{
cardById?: [{	cardId?:string | null},ValueTypes["Card"]],
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
	/** create card inputs<br> */
["createCard"]: {
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number | null,
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:ValueTypes["SpecialSkills"][]
};
	["Nameable"]:AliasType<{
		name?:true;
		['...on EffectCard']?: Omit<ValueTypes["EffectCard"],keyof ValueTypes["Nameable"]>;
		['...on SpecialCard']?: Omit<ValueTypes["SpecialCard"],keyof ValueTypes["Nameable"]>;
		['...on Card']?: Omit<ValueTypes["Card"],keyof ValueTypes["Nameable"]>;
		['...on CardStack']?: Omit<ValueTypes["CardStack"],keyof ValueTypes["Nameable"]>;
		__typename?: true
}>;
	["Mutation"]: AliasType<{
addCard?: [{	card:ValueTypes["createCard"]},ValueTypes["Card"]],
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
	/** Stack of cards */
["CardStack"]: AliasType<{
	cards?:ValueTypes["Card"],
	name?:true,
		__typename?: true
}>
  }

export type ModelTypes = {
    ["EffectCard"]: {
		effectSize:number,
	name:string
};
	["SpecialSkills"]: GraphQLTypes["SpecialSkills"];
	["ChangeCard"]:ModelTypes["SpecialCard"] | ModelTypes["EffectCard"];
	["SpecialCard"]: {
		effect:string,
	name:string
};
	["Subscription"]: {
		deck?:ModelTypes["Card"][]
};
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
	/** Aws S3 File */
["S3Object"]: {
		bucket:string,
	key:string,
	region:string
};
	/** create card inputs<br> */
["createCard"]: GraphQLTypes["createCard"];
	["Nameable"]: ModelTypes["EffectCard"] | ModelTypes["SpecialCard"] | ModelTypes["Card"] | ModelTypes["CardStack"];
	["Mutation"]: {
		/** add Card to Cards database<br> */
	addCard:ModelTypes["Card"]
};
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
	/** Stack of cards */
["CardStack"]: {
		cards?:ModelTypes["Card"][],
	name:string
}
    }

export type GraphQLTypes = {
    ["EffectCard"]: {
	__typename: "EffectCard",
	effectSize: number,
	name: string
};
	["SpecialSkills"]: SpecialSkills;
	["ChangeCard"]:{
	__typename:"SpecialCard" | "EffectCard"
	['...on SpecialCard']: '__union' & GraphQLTypes["SpecialCard"];
	['...on EffectCard']: '__union' & GraphQLTypes["EffectCard"];
};
	["SpecialCard"]: {
	__typename: "SpecialCard",
	effect: string,
	name: string
};
	["Subscription"]: {
	__typename: "Subscription",
	deck?: Array<GraphQLTypes["Card"]>
};
	["Query"]: {
	__typename: "Query",
	cardById?: GraphQLTypes["Card"],
	/** Draw a card<br> */
	drawCard: GraphQLTypes["Card"],
	drawChangeCard: GraphQLTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards: Array<GraphQLTypes["Card"]>,
	myStacks?: Array<GraphQLTypes["CardStack"]>,
	nameables: Array<GraphQLTypes["Nameable"]>
};
	/** Aws S3 File */
["S3Object"]: {
	__typename: "S3Object",
	bucket: string,
	key: string,
	region: string
};
	/** create card inputs<br> */
["createCard"]: {
		/** The name of a card<br> */
	name: string,
	/** Description of a card<br> */
	description: string,
	/** <div>How many children the greek god had</div> */
	Children?: number,
	/** The attack power<br> */
	Attack: number,
	/** The defense power<br> */
	Defense: number,
	/** input skills */
	skills?: Array<GraphQLTypes["SpecialSkills"]>
};
	["Nameable"]: {
	__typename:"EffectCard" | "SpecialCard" | "Card" | "CardStack",
	name: string
	['...on EffectCard']: '__union' & GraphQLTypes["EffectCard"];
	['...on SpecialCard']: '__union' & GraphQLTypes["SpecialCard"];
	['...on Card']: '__union' & GraphQLTypes["Card"];
	['...on CardStack']: '__union' & GraphQLTypes["CardStack"];
};
	["Mutation"]: {
	__typename: "Mutation",
	/** add Card to Cards database<br> */
	addCard: GraphQLTypes["Card"]
};
	/** Card used in card game<br> */
["Card"]: {
	__typename: "Card",
	/** The attack power<br> */
	Attack: number,
	/** <div>How many children the greek god had</div> */
	Children?: number,
	/** The defense power<br> */
	Defense: number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack?: Array<GraphQLTypes["Card"]>,
	/** Put your description here */
	cardImage?: GraphQLTypes["S3Object"],
	/** Description of a card<br> */
	description: string,
	id: string,
	image: string,
	/** The name of a card<br> */
	name: string,
	skills?: Array<GraphQLTypes["SpecialSkills"]>
};
	/** Stack of cards */
["CardStack"]: {
	__typename: "CardStack",
	cards?: Array<GraphQLTypes["Card"]>,
	name: string
}
    }
export const enum SpecialSkills {
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
export interface GraphQLResponse {
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

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, options?: OperationOptions) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  options?: OperationOptions,
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?:string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export declare function Thunder(
  fn: FetchFunction,
  subscriptionFn: SubscriptionFunction
):{
  query: OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,mutation: OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>,subscription: OperationToGraphQL<ValueTypes["Subscription"],GraphQLTypes["Subscription"]>
}

export declare function Chain(
  ...options: chainOptions
):{
  query: OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,mutation: OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>,subscription: OperationToGraphQL<ValueTypes["Subscription"],GraphQLTypes["Subscription"]>
}

export declare const Zeus: {
  query: (o: ValueTypes["Query"]) => string,mutation: (o: ValueTypes["Mutation"]) => string,subscription: (o: ValueTypes["Subscription"]) => string
}

export declare const Selectors: {
  query: SelectionFunction<ValueTypes["Query"]>,mutation: SelectionFunction<ValueTypes["Mutation"]>,subscription: SelectionFunction<ValueTypes["Subscription"]>
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
) => (args?:any, source?:any) => void;

export declare const Gql: ReturnType<typeof Chain>
