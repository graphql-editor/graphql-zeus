export const constantTypesTypescript = `

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsObject<T, Z, L> = IsType<object, T, Z, L>;

type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type GetTypeFromArray<T> = T extends Array<infer R> ? R : T;
type FirstArgument<F extends AnyFunc> = GetTypeFromArray<ArgsType<F>>;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type ResolveReturned<T> = {
  [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<ResolveReturned<R>>
    : T[P] extends AnyFunc
    ? ResolveReturned<ReturnType<T[P]>>
    : IsObject<
        T[P],
        ResolveReturned<T[P]>,
        T[P] extends AnyFunc ? ResolveReturned<ReturnType<T[P]>> : T[P]
      >;
};

export type State<T> = ResolveReturned<T>

type ResolveInternalFunctionReturn<T> = T extends Array<infer R> ? R : T;


type ResolveValue<T> = T extends Array<infer R>
  ? ResolveArgs<R>
  : T extends AnyFunc
  ? IsObject<
      ReturnType<T>,
      [FirstArgument<T>, ResolveArgs<ResolveInternalFunctionReturn<ReturnType<T>>>],
      [FirstArgument<T>]
    >
  : IsObject<T, ResolveArgs<T>, T extends undefined ? undefined : true>;

type ResolveArgs<T> = IsObject<
  T,
  {
    [P in keyof T]?: ResolveValue<T[P]>;
  },
  T extends undefined ? undefined : true
>;

type GraphQLReturner<T> = T extends Array<infer R> ? ResolveArgs<R> : ResolveArgs<T>;

type OperationToGraphQL<T> = (o: GraphQLReturner<T>) => Promise<ResolveReturned<T>>;
type ApiFieldToGraphQL<T> = (o: ResolveValue<T>) => Promise<ResolveReturned<T>>;

type fetchOptions = ArgsType<typeof fetch>;

`;
