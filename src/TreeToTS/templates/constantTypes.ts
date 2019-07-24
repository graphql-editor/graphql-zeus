export const graphqlError = `
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }
`;
export const graphqlErrorJavascript = `
export class GraphQLError extends Error {
    constructor(response) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }
`;
export const constantTypes = `

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
  [P in keyof T]?: T[P] extends Array<infer R>
    ? Array<ResolveReturned<R>>
    : T[P] extends AnyFunc
    ? ResolveReturned<ReturnType<T[P]>>
    : IsObject<
        T[P],
        ResolveReturned<T[P]>,
        T[P] extends AnyFunc ? ResolveReturned<ReturnType<T[P]>> : T[P]
      >;
};

type ResolveInternalFunctionReturn<T> = T extends Array<infer R> ? R : T;

type ResolveArgs<T> = IsObject<
  T,
  {
    [P in keyof T]?: T[P] extends Array<infer R>
      ? ResolveArgs<R>
      : T[P] extends {
          [x: string]: infer R;
        }
      ? ResolveArgs<T[P]>
      : T[P] extends AnyFunc
      ? IsObject<
          ReturnType<T[P]>,
          [FirstArgument<T[P]>, ResolveArgs<ResolveInternalFunctionReturn<ReturnType<T[P]>>>],
          [FirstArgument<T[P]>]
        >
      : true;
  },
  true
>;

type GraphQLReturner<T> = T extends Array<infer R> ? ResolveArgs<R> : ResolveArgs<T>;

type OperationToGraphQL<T> = (o: GraphQLReturner<T>) => Promise<ResolveReturned<T>>;

type fetchOptions = ArgsType<typeof fetch>;

`;
