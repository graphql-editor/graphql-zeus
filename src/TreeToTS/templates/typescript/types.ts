export const constantTypesTypescript = `

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type AliasType<T> = T & {
  __alias?: Record<string, T>;
};

type AliasedReturnType<T> = T & {
  [x: string]: T;
};
type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsObject<T, Z, L> = IsType<
  {
    [x in keyof T]: unknown;
  },
  T,
  Z,
  L
>;
type IsSimpleObject<T, Z, L> = IsType<Record<string, unknown> | Record<string, unknown>[], T, Z, L>;
type IsScalar<T, Z, L> = IsType<string | boolean | number, T, Z, L>;

type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type GetTypeFromArray<T> = T extends Array<infer R> ? R : T;
type FirstArgument<F extends AnyFunc> = GetTypeFromArray<ArgsType<F>>;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type ResolveReturned<T> = AliasedReturnType<
  {
    [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
      ? Array<ResolveReturned<R>>
      : T[P] extends AnyFunc
      ? ResolveReturned<ReturnType<T[P]>>
      : IsObject<
          T[P],
          ResolveReturned<T[P]>,
          T[P] extends AnyFunc ? ResolveReturned<ReturnType<T[P]>> : T[P]
        >;
  }
>;

export type State<T> = ResolveReturned<T>;

type ResolveInternalFunctionReturn<T> = T extends Array<infer R> ? R : T;

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsScalar<
      ReturnType<T>,
      [FirstArgument<T>],
      [FirstArgument<T>, AliasType<SelectionSet<ResolveInternalFunctionReturn<ReturnType<T>>>>]
    >
  : IsSimpleObject<T, AliasType<SelectionSet<T>>, T extends undefined ? undefined : true>;

export type SelectionSet<T> = IsSimpleObject<
  T,
  AliasType<
    {
      [P in keyof T]?: AliasType<ResolveValue<T[P]>>;
    }
  >,
  T extends undefined ? undefined : true
>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;

type OperationToGraphQL<T> = (o: GraphQLReturner<T>) => Promise<ResolveReturned<T>>;
type ApiFieldToGraphQL<T> = (o: ResolveValue<T>) => Promise<ResolveReturned<T>>;

type fetchOptions = ArgsType<typeof fetch>;

`;
