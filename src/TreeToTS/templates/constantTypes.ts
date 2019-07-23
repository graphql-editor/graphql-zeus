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
type AnyRecord = Record<string, any>;

type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type GetTypeFromArray<T> = T extends Array<infer R> ? R : T;
type FirstArgument<F extends AnyFunc> = GetTypeFromArray<ArgsType<F>>;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

interface Dict {
  [x: string]: Dict | any | Dict[] | any[];
}

export type ResolveReturned<T> = {
  [P in keyof T]?: T[P] extends Array<infer R>
    ? Array<ResolveReturned<R>>
    : T[P] extends {
        [x: string]: infer R;
      }
    ? ResolveReturned<T[P]>
    : T[P] extends AnyFunc
    ? ResolveReturned<ReturnType<T[P]>>
    : T[P];
};

export type State<T> = T extends Array<infer R> ? Array<ResolveReturned<R>> : ResolveReturned<T>;

type GraphQLDictReturnType<T> = T extends AnyFunc ? State<ReturnType<T>> : T;

type ResolveInternalFunctionReturn<T> = T extends Array<infer R> ? R : T;

type ResolveArgs<T> = T extends AnyRecord
  ? {
      [P in keyof T]?: T[P] extends Array<infer R>
        ? ResolveArgs<R>
        : T[P] extends {
            [x: string]: infer R;
          }
        ? ResolveArgs<T[P]>
        : T[P] extends AnyFunc
        ? ReturnType<T[P]> extends AnyRecord
          ? [FirstArgument<T[P]>, ResolveArgs<ResolveInternalFunctionReturn<ReturnType<T[P]>>>]
          : [FirstArgument<T[P]>]
        : true;
    }
  : true;

type GraphQLReturner<T> = T extends Array<infer R> ? ResolveArgs<R> : ResolveArgs<T>;

type EmptyOrGraphQLReturner<T> = T extends AnyFunc
  ? ReturnType<T> extends AnyRecord
    ? (o: GraphQLReturner<ReturnType<T>>) => Promise<GraphQLDictReturnType<T>>
    : () => Promise<GraphQLDictReturnType<T>>
  : T extends AnyRecord
  ? (o: GraphQLReturner<T>) => Promise<GraphQLDictReturnType<T>>
  : () => Promise<GraphQLDictReturnType<T>>;

type FunctionToGraphQL<T> = T extends AnyFunc
  ? AfterFunctionToGraphQL<T>
  : () => EmptyOrGraphQLReturner<T>;

type OperationToGraphQL<T> = (o: GraphQLReturner<T>) => Promise<GraphQLDictReturnType<T>>;

type AfterFunctionToGraphQL<T extends AnyFunc> = (
  props?: FirstArgument<T>
) => EmptyOrGraphQLReturner<T>;

type fetchOptions = ArgsType<typeof fetch>;

`;
