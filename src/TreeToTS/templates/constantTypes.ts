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
export const constantTypes = `type Func<P extends any[], R> = (...args: P) => R;
type ArgsType<F extends Func<any, any>> = F extends Func<infer P, any>
  ? P
  : never;

type GraphQLResponse = {
  data?: {
    [x: string]: any;
  };
  errors?: {
    message: string;
  }[];
};

type Dict = {
  [x: string]: Dict | any | Dict[] | any[];
};

export type ResolveReturned<T> = {
  [P in keyof T]?: T[P] extends (infer R)[]
    ? ResolveReturned<R>[]
    : T[P] extends {
        [x: string]: infer R;
      }
    ? ResolveReturned<T[P]>
    : T[P] extends Func<any, any>
    ? ResolveReturned<ReturnType<T[P]>>
    : T[P]
};

export type State<T> = T extends (infer R)[]
  ? ResolveReturned<R>[]
  : ResolveReturned<T>;

type GraphQLDictReturnType<T> = T extends Func<any, any>
  ? State<ReturnType<T>>
  : T;

type ResolveArgs<T> = T extends Record<any, any>
  ? {
      [P in keyof T]?: T[P] extends (infer R)[]
        ? ResolveArgs<R>
        : T[P] extends {
            [x: string]: infer R;
          }
        ? ResolveArgs<T[P]>
        : T[P] extends Func<any, any>
        ? ReturnType<T[P]> extends Record<any, any>
          ? [ArgsType<T[P]>[0], ResolveArgs<ReturnType<T[P]>>]
          : [ArgsType<T[P]>[0]]
        : true
    }
  : true;

type GraphQLReturner<T> = T extends (infer R)[]
  ? ResolveArgs<R>
  : ResolveArgs<T>;

type EmptyOrGraphQLReturner<T> = T extends Func<any, any>
? ReturnType<T> extends Record<any, any>
  ? (o: GraphQLReturner<ReturnType<T>>) => Promise<GraphQLDictReturnType<T>>
  : () => Promise<GraphQLDictReturnType<T>>
: T extends Record<any, any>
? (o: GraphQLReturner<T>) => Promise<GraphQLDictReturnType<T>>
: () => Promise<GraphQLDictReturnType<T>>;

type FunctionToGraphQL<T> = T extends Func<any, any>
  ? AfterFunctionToGraphQL<T>
  : () => EmptyOrGraphQLReturner<T>;

type AfterFunctionToGraphQL<T extends Func<any, any>> = (
  props?: ArgsType<T>[0]
) => EmptyOrGraphQLReturner<T>;

type fetchOptions = ArgsType<typeof fetch>;`;
