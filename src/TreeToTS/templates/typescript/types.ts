export const constantTypesTypescript = `

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsScalar<T, Z, L> = IsType<string | boolean | number, T, Z, L>;
type IsObject<T, Z, L> = IsType<{} | Record<string,any>, T, Z, L>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

export type AliasedReturnType<T> = IsObject<T,{
  [P in keyof T]: T[P];
} &
Record<
  string,
  {
    [P in keyof T]: T[P];
  }
>,never>;

export type ResolverType<F> = F extends Func<infer P, any>
  ? P[0]
  : undefined;

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
    : IsScalar<T[P], T[P], IsObject<T[P],AliasedReturnType<State<T[P]>>,never>>;
};

export type PlainObject<T> = {
  [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<PlainObject<R>>
    : T[P] extends AnyFunc
    ?  PlainObject<ReturnType<T[P]>>
    : IsScalar<T[P], T[P], IsObject<T[P],PlainObject<T[P]>,never>>;
};

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsScalar<
      ReturnType<T>,
      [FirstArgument<T>],
      [FirstArgument<T>, SelectionSet<OfType<ReturnType<T>>>]
    >
  : IsScalar<T, T extends undefined ? undefined : true, IsObject<T,SelectionSet<T>,never>>;

export type SelectionSet<T> = IsScalar<
  T,  T extends undefined ? undefined : true
, IsObject<T,AliasType<
    {
      [P in keyof T]?: ResolveValue<T[P]>;
    }
  >,never>>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;

type OperationToGraphQL<V,T> = (o: GraphQLReturner<V>) => Promise<AliasedReturnType<State<T>>>;

type ResolveApiField<T> = T extends Array<infer R>
  ? IsScalar<R, R, State<R>>
  : T extends AnyFunc
  ? IsScalar<OfType<ReturnType<T>>, T, State<OfType<ReturnType<T>>>>
  : IsScalar<T, T, State<T>>;

type ApiFieldToGraphQL<V,T> = (o: ResolveValue<V>) => Promise<ResolveApiField<T>>;

type fetchOptions = ArgsType<typeof fetch>;

`;
