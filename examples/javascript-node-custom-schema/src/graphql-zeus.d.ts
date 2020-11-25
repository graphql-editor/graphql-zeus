/* tslint:disable */
/* eslint-disable */

type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

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

export type ModelTypes = {
    ["NotMutation"]: {
		add?:ModelTypes["Person"]
};
	["NotSubscription"]: {
		people?:(ModelTypes["Person"] | undefined)[]
};
	["Person"]: {
		name?:string
};
	["Query"]: {
		people?:(ModelTypes["Person"] | undefined)[]
}
    }

export type GraphQLTypes = {
    ["NotMutation"]: {
	__typename: "NotMutation",
	add?:GraphQLTypes["Person"]
};
	["NotSubscription"]: {
	__typename: "NotSubscription",
	people?:(GraphQLTypes["Person"] | undefined)[]
};
	["Person"]: {
	__typename: "Person",
	name?:string
};
	["Query"]: {
	__typename: "Query",
	people?:(GraphQLTypes["Person"] | undefined)[]
}
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
  query: OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,mutation: OperationToGraphQL<ValueTypes["NotMutation"],GraphQLTypes["NotMutation"]>,subscription: OperationToGraphQL<ValueTypes["NotSubscription"],GraphQLTypes["NotSubscription"]>
}

export declare function Chain(
  ...options: fetchOptions
):{
  query: OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,mutation: OperationToGraphQL<ValueTypes["NotMutation"],GraphQLTypes["NotMutation"]>,subscription: OperationToGraphQL<ValueTypes["NotSubscription"],GraphQLTypes["NotSubscription"]>
}

export declare const Zeus: {
  query: (o: ValueTypes["Query"]) => string,mutation: (o: ValueTypes["NotMutation"]) => string,subscription: (o: ValueTypes["NotSubscription"]) => string
}

export declare const Cast: {
  query: CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>,mutation: CastToGraphQL<
  ValueTypes["NotMutation"],
  GraphQLTypes["NotMutation"]
>,subscription: CastToGraphQL<
  ValueTypes["NotSubscription"],
  GraphQLTypes["NotSubscription"]
>
}

export declare const Selectors: {
  query: SelectionFunction<ValueTypes["Query"]>,mutation: SelectionFunction<ValueTypes["NotMutation"]>,subscription: SelectionFunction<ValueTypes["NotSubscription"]>
}

export declare const resolverFor : <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : never,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : never
>(
  type: T,
  field: Z,
  fn: Y,
) => Y;

export declare const Gql: ReturnType<typeof Chain>
