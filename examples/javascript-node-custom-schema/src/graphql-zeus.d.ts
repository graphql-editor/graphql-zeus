/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["NotMutation"]: AliasType<{
add?: [{	name?:string},ValueTypes["Person"]],
		__typename?: true
}>;
	["NotSubscription"]: AliasType<{
	people?:ValueTypes["Person"],
		__typename?: true
}>;
	["Person"]: AliasType<{
	name?:true,
		__typename?: true
}>;
	["Query"]: AliasType<{
	people?:ValueTypes["Person"],
		__typename?: true
}>
  }

export type PartialObjects = {
    ["NotMutation"]: {
		__typename?: "NotMutation";
			add?:PartialObjects["Person"]
	},
	["NotSubscription"]: {
		__typename?: "NotSubscription";
			people?:(PartialObjects["Person"] | undefined)[]
	},
	["Person"]: {
		__typename?: "Person";
			name?:string
	},
	["Query"]: {
		__typename?: "Query";
			people?:(PartialObjects["Person"] | undefined)[]
	}
  }

export type NotMutation = {
	__typename?: "NotMutation",
	add?:Person
}

export type NotSubscription = {
	__typename?: "NotSubscription",
	people?:(Person | undefined)[]
}

export type Person = {
	__typename?: "Person",
	name?:string
}

export type Query = {
	__typename?: "Query",
	people?:(Person | undefined)[]
}


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
type MapType<SRC, DST> = SRC extends DeepAnify<DST>
  ? {
      [P in keyof DST]: DST[P] extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    }
  : never;
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
  query: OperationToGraphQL<ValueTypes["Query"],Query>,mutation: OperationToGraphQL<ValueTypes["NotMutation"],NotMutation>,subscription: OperationToGraphQL<ValueTypes["NotSubscription"],NotSubscription>
}

export declare function Chain(
  ...options: fetchOptions
):{
  query: OperationToGraphQL<ValueTypes["Query"],Query>,mutation: OperationToGraphQL<ValueTypes["NotMutation"],NotMutation>,subscription: OperationToGraphQL<ValueTypes["NotSubscription"],NotSubscription>
}

export declare const Zeus: {
  query: (o: ValueTypes["Query"]) => string,mutation: (o: ValueTypes["NotMutation"]) => string,subscription: (o: ValueTypes["NotSubscription"]) => string
}

export declare const Cast: {
  query: CastToGraphQL<
  ValueTypes["Query"],
  Query
>,mutation: CastToGraphQL<
  ValueTypes["NotMutation"],
  NotMutation
>,subscription: CastToGraphQL<
  ValueTypes["NotSubscription"],
  NotSubscription
>
}

export declare const Selectors: {
  query: SelectionFunction<ValueTypes["Query"]>,mutation: SelectionFunction<ValueTypes["NotMutation"]>,subscription: SelectionFunction<ValueTypes["NotSubscription"]>
}


export declare const Gql: ReturnType<typeof Chain>
