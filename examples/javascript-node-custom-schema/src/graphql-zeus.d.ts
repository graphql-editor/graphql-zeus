/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["NotMutation"]: AliasType<{
add?: [{	name?:string},ValueTypes["Person"]]
		__typename?: true
}>;
	["NotSubscription"]: AliasType<{
	people?:ValueTypes["Person"]
		__typename?: true
}>;
	["Person"]: AliasType<{
	name?:true
		__typename?: true
}>;
	["Query"]: AliasType<{
	people?:ValueTypes["Person"]
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


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;


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
