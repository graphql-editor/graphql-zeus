export const constantTypesTypescript = `

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

`;
