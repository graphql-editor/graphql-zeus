/* eslint-disable */

import { AllTypesProps, ReturnTypes, Ops } from './const';
import fetch, { Response } from 'node-fetch';
import WebSocket from 'ws';
export const HOST = 'https://faker.graphqleditor.com/a-team/olympus/graphql';

export const HEADERS = {};
export const apiSubscription = (options: chainOptions) => (query: string) => {
  try {
    const queryString = options[0] + '?query=' + encodeURIComponent(query);
    const wsString = queryString.replace('http', 'ws');
    const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
    const webSocketOptions = options[1]?.websocket || [host];
    const ws = new WebSocket(...webSocketOptions);
    return {
      ws,
      on: (e: (args: any) => void) => {
        ws.onmessage = (event: any) => {
          if (event.data) {
            const parsed = JSON.parse(event.data);
            const data = parsed.data;
            return e(data);
          }
        };
      },
      off: (e: (args: any) => void) => {
        ws.onclose = e;
      },
      error: (e: (args: any) => void) => {
        ws.onerror = e;
      },
      open: (e: () => void) => {
        ws.onopen = e;
      },
    };
  } catch {
    throw new Error('No websockets implemented');
  }
};
const handleFetchResponse = (response: Response): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json();
};

export const apiFetch =
  (options: fetchOptions) =>
  (query: string, variables: Record<string, unknown> = {}) => {
    const fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      return fetch(`${options[0]}?query=${encodeURIComponent(query)}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetch(`${options[0]}`, {
      body: JSON.stringify({ query, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...fetchOptions,
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };

export const InternalsBuildQuery = ({
  ops,
  props,
  returns,
  options,
  scalars,
}: {
  props: AllTypesPropsType;
  returns: ReturnTypesType;
  ops: Operations;
  options?: OperationOptions;
  scalars?: ScalarDefinition;
}) => {
  const ibb = (
    k: string,
    o: InputValueType | VType,
    p = '',
    root = true,
    vars: Array<{ name: string; graphQLType: string }> = [],
  ): string => {
    const keyForPath = purifyGraphQLKey(k);
    const newPath = [p, keyForPath].join(SEPARATOR);
    if (!o) {
      return '';
    }
    if (typeof o === 'boolean' || typeof o === 'number') {
      return k;
    }
    if (typeof o === 'string') {
      return `${k} ${o}`;
    }
    if (Array.isArray(o)) {
      const args = InternalArgsBuilt({
        props,
        returns,
        ops,
        scalars,
        vars,
      })(o[0], newPath);
      return `${ibb(args ? `${k}(${args})` : k, o[1], p, false, vars)}`;
    }
    if (k === '__alias') {
      return Object.entries(o)
        .map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
            throw new Error(
              'Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}',
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(`${alias}:${operationName}`, operation, p, false, vars);
        })
        .join('\n');
    }
    const hasOperationName = root && options?.operationName ? ' ' + options.operationName : '';
    const keyForDirectives = o.__directives ?? '';
    const query = `{${Object.entries(o)
      .filter(([k]) => k !== '__directives')
      .map((e) => ibb(...e, [p, `field<>${keyForPath}`].join(SEPARATOR), false, vars))
      .join('\n')}}`;
    if (!root) {
      return `${k} ${keyForDirectives}${hasOperationName} ${query}`;
    }
    const varsString = vars.map((v) => `${v.name}: ${v.graphQLType}`).join(', ');
    return `${k} ${keyForDirectives}${hasOperationName}${varsString ? `(${varsString})` : ''} ${query}`;
  };
  return ibb;
};

export const Thunder =
  (fn: FetchFunction) =>
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions & { variables?: Record<string, unknown> }) =>
    fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: graphqlOptions?.scalars,
      }),
      ops?.variables,
    ).then((data) => {
      if (graphqlOptions?.scalars) {
        return decodeScalarsInResponse({
          response: data,
          initialOp: operation,
          initialZeusQuery: o as VType,
          returns: ReturnTypes,
          scalars: graphqlOptions.scalars,
          ops: Ops,
        });
      }
      return data;
    }) as Promise<InputType<GraphQLTypes[R], Z, SCLR>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));

export const SubscriptionThunder =
  (fn: SubscriptionFunction) =>
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions & { variables?: ExtractVariables<Z> }) => {
    const returnedFunction = fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: graphqlOptions?.scalars,
      }),
    ) as SubscriptionToGraphQL<Z, GraphQLTypes[R], SCLR>;
    if (returnedFunction?.on && graphqlOptions?.scalars) {
      const wrapped = returnedFunction.on;
      returnedFunction.on = (fnToCall: (args: InputType<GraphQLTypes[R], Z, SCLR>) => void) =>
        wrapped((data: InputType<GraphQLTypes[R], Z, SCLR>) => {
          if (graphqlOptions?.scalars) {
            return fnToCall(
              decodeScalarsInResponse({
                response: data,
                initialOp: operation,
                initialZeusQuery: o as VType,
                returns: ReturnTypes,
                scalars: graphqlOptions.scalars,
                ops: Ops,
              }),
            );
          }
          return fnToCall(data);
        });
    }
    return returnedFunction;
  };

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>,
>(
  operation: O,
  o: Z | ValueTypes[R],
  ops?: {
    operationOptions?: OperationOptions;
    scalars?: ScalarDefinition;
  },
) =>
  InternalsBuildQuery({
    props: AllTypesProps,
    returns: ReturnTypes,
    ops: Ops,
    options: ops?.operationOptions,
    scalars: ops?.scalars,
  })(operation, o as VType);

export const ZeusSelect = <T>() => ((t: unknown) => t) as SelectionFunction<T>;

export const Selector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();

export const TypeFromSelector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();
export const Gql = Chain(HOST, {
  headers: {
    'Content-Type': 'application/json',
    ...HEADERS,
  },
});

export const ZeusScalars = ZeusSelect<ScalarCoders>();

export const decodeScalarsInResponse = <O extends Operations>({
  response,
  scalars,
  returns,
  ops,
  initialZeusQuery,
  initialOp,
}: {
  ops: O;
  response: any;
  returns: ReturnTypesType;
  scalars?: Record<string, ScalarResolver | undefined>;
  initialOp: keyof O;
  initialZeusQuery: InputValueType | VType;
}) => {
  if (!scalars) {
    return response;
  }
  const builder = PrepareScalarPaths({
    ops,
    returns,
  });

  const scalarPaths = builder(initialOp as string, ops[initialOp], initialZeusQuery);
  if (scalarPaths) {
    const r = traverseResponse({ scalarPaths, resolvers: scalars })(initialOp as string, response, [ops[initialOp]]);
    return r;
  }
  return response;
};

export const traverseResponse = ({
  resolvers,
  scalarPaths,
}: {
  scalarPaths: { [x: string]: `scalar.${string}` };
  resolvers: {
    [x: string]: ScalarResolver | undefined;
  };
}) => {
  const ibb = (k: string, o: InputValueType | VType, p: string[] = []): unknown => {
    if (Array.isArray(o)) {
      return o.map((eachO) => ibb(k, eachO, p));
    }
    if (o == null) {
      return o;
    }
    const scalarPathString = p.join(SEPARATOR);
    const currentScalarString = scalarPaths[scalarPathString];
    if (currentScalarString) {
      const currentDecoder = resolvers[currentScalarString.split('.')[1]]?.decode;
      if (currentDecoder) {
        return currentDecoder(o);
      }
    }
    if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string' || !o) {
      return o;
    }
    return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, ibb(k, v, [...p, purifyGraphQLKey(k)])]));
  };
  return ibb;
};

export type AllTypesPropsType = {
  [x: string]:
    | undefined
    | `scalar.${string}`
    | 'enum'
    | {
        [x: string]:
          | undefined
          | string
          | {
              [x: string]: string | undefined;
            };
      };
};

export type ReturnTypesType = {
  [x: string]:
    | {
        [x: string]: string | undefined;
      }
    | `scalar.${string}`
    | undefined;
};
export type InputValueType = {
  [x: string]: undefined | boolean | string | number | [any, undefined | boolean | InputValueType] | InputValueType;
};
export type VType =
  | undefined
  | boolean
  | string
  | number
  | [any, undefined | boolean | InputValueType]
  | InputValueType;

export type PlainType = boolean | number | string | null | undefined;
export type ZeusArgsType =
  | PlainType
  | {
      [x: string]: ZeusArgsType;
    }
  | Array<ZeusArgsType>;

export type Operations = Record<string, string>;

export type VariableDefinition = {
  [x: string]: unknown;
};

export const SEPARATOR = '|';

export type fetchOptions = Parameters<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (...args: infer R) => WebSocket ? R : never;
export type chainOptions = [fetchOptions[0], fetchOptions[1] & { websocket?: websocketOptions }] | [fetchOptions[0]];
export type FetchFunction = (query: string, variables?: Record<string, unknown>) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type OperationOptions = {
  operationName?: string;
};

export type ScalarCoder = Record<string, (s: unknown) => string>;

export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super('');
    console.error(response);
  }
  toString() {
    return 'GraphQL Response Error';
  }
}
export type GenericOperation<O> = O extends keyof typeof Ops ? typeof Ops[O] : never;
export type ThunderGraphQLOptions<SCLR extends ScalarDefinition> = {
  scalars?: SCLR | ScalarCoders;
};

const ExtractScalar = (mappedParts: string[], returns: ReturnTypesType): `scalar.${string}` | undefined => {
  if (mappedParts.length === 0) {
    return;
  }
  const oKey = mappedParts[0];
  const returnP1 = returns[oKey];
  if (typeof returnP1 === 'object') {
    const returnP2 = returnP1[mappedParts[1]];
    if (returnP2) {
      return ExtractScalar([returnP2, ...mappedParts.slice(2)], returns);
    }
    return undefined;
  }
  return returnP1 as `scalar.${string}` | undefined;
};

export const PrepareScalarPaths = ({ ops, returns }: { returns: ReturnTypesType; ops: Operations }) => {
  const ibb = (
    k: string,
    originalKey: string,
    o: InputValueType | VType,
    p: string[] = [],
    pOriginals: string[] = [],
    root = true,
  ): { [x: string]: `scalar.${string}` } | undefined => {
    if (!o) {
      return;
    }
    if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
      const extractionArray = [...pOriginals, originalKey];
      const isScalar = ExtractScalar(extractionArray, returns);
      if (isScalar?.startsWith('scalar')) {
        const partOfTree = {
          [[...p, k].join(SEPARATOR)]: isScalar,
        };
        return partOfTree;
      }
      return {};
    }
    if (Array.isArray(o)) {
      return ibb(k, k, o[1], p, pOriginals, false);
    }
    if (k === '__alias') {
      return Object.entries(o)
        .map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
            throw new Error(
              'Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}',
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(alias, operationName, operation, p, pOriginals, false);
        })
        .reduce((a, b) => ({
          ...a,
          ...b,
        }));
    }
    const keyName = root ? ops[k] : k;
    return Object.entries(o)
      .filter(([k]) => k !== '__directives')
      .map(([k, v]) => {
        // Inline fragments shouldn't be added to the path as they aren't a field
        const isInlineFragment = originalKey.match(/^...\s*on/) != null;
        return ibb(
          k,
          k,
          v,
          isInlineFragment ? p : [...p, purifyGraphQLKey(keyName || k)],
          isInlineFragment ? pOriginals : [...pOriginals, purifyGraphQLKey(originalKey)],
          false,
        );
      })
      .reduce((a, b) => ({
        ...a,
        ...b,
      }));
  };
  return ibb;
};

export const purifyGraphQLKey = (k: string) => k.replace(/\([^)]*\)/g, '').replace(/^[^:]*\:/g, '');

const mapPart = (p: string) => {
  const [isArg, isField] = p.split('<>');
  if (isField) {
    return {
      v: isField,
      __type: 'field',
    } as const;
  }
  return {
    v: isArg,
    __type: 'arg',
  } as const;
};

type Part = ReturnType<typeof mapPart>;

export const ResolveFromPath = (props: AllTypesPropsType, returns: ReturnTypesType, ops: Operations) => {
  const ResolvePropsType = (mappedParts: Part[]) => {
    const oKey = ops[mappedParts[0].v];
    const propsP1 = oKey ? props[oKey] : props[mappedParts[0].v];
    if (propsP1 === 'enum' && mappedParts.length === 1) {
      return 'enum';
    }
    if (typeof propsP1 === 'string' && propsP1.startsWith('scalar.') && mappedParts.length === 1) {
      return propsP1;
    }
    if (typeof propsP1 === 'object') {
      if (mappedParts.length < 2) {
        return 'not';
      }
      const propsP2 = propsP1[mappedParts[1].v];
      if (typeof propsP2 === 'string') {
        return rpp(
          `${propsP2}${SEPARATOR}${mappedParts
            .slice(2)
            .map((mp) => mp.v)
            .join(SEPARATOR)}`,
        );
      }
      if (typeof propsP2 === 'object') {
        if (mappedParts.length < 3) {
          return 'not';
        }
        const propsP3 = propsP2[mappedParts[2].v];
        if (propsP3 && mappedParts[2].__type === 'arg') {
          return rpp(
            `${propsP3}${SEPARATOR}${mappedParts
              .slice(3)
              .map((mp) => mp.v)
              .join(SEPARATOR)}`,
          );
        }
      }
    }
  };
  const ResolveReturnType = (mappedParts: Part[]) => {
    if (mappedParts.length === 0) {
      return 'not';
    }
    const oKey = ops[mappedParts[0].v];
    const returnP1 = oKey ? returns[oKey] : returns[mappedParts[0].v];
    if (typeof returnP1 === 'object') {
      if (mappedParts.length < 2) return 'not';
      const returnP2 = returnP1[mappedParts[1].v];
      if (returnP2) {
        return rpp(
          `${returnP2}${SEPARATOR}${mappedParts
            .slice(2)
            .map((mp) => mp.v)
            .join(SEPARATOR)}`,
        );
      }
    }
  };
  const rpp = (path: string): 'enum' | 'not' | `scalar.${string}` => {
    const parts = path.split(SEPARATOR).filter((l) => l.length > 0);
    const mappedParts = parts.map(mapPart);
    const propsP1 = ResolvePropsType(mappedParts);
    if (propsP1) {
      return propsP1;
    }
    const returnP1 = ResolveReturnType(mappedParts);
    if (returnP1) {
      return returnP1;
    }
    return 'not';
  };
  return rpp;
};

export const InternalArgsBuilt = ({
  props,
  ops,
  returns,
  scalars,
  vars,
}: {
  props: AllTypesPropsType;
  returns: ReturnTypesType;
  ops: Operations;
  scalars?: ScalarDefinition;
  vars: Array<{ name: string; graphQLType: string }>;
}) => {
  const arb = (a: ZeusArgsType, p = '', root = true): string => {
    if (typeof a === 'string') {
      if (a.startsWith(START_VAR_NAME)) {
        const [varName, graphQLType] = a.replace(START_VAR_NAME, '$').split(GRAPHQL_TYPE_SEPARATOR);
        const v = vars.find((v) => v.name === varName);
        if (!v) {
          vars.push({
            name: varName,
            graphQLType,
          });
        } else {
          if (v.graphQLType !== graphQLType) {
            throw new Error(
              `Invalid variable exists with two different GraphQL Types, "${v.graphQLType}" and ${graphQLType}`,
            );
          }
        }
        return varName;
      }
    }
    const checkType = ResolveFromPath(props, returns, ops)(p);
    if (checkType.startsWith('scalar.')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...splittedScalar] = checkType.split('.');
      const scalarKey = splittedScalar.join('.');
      return (scalars?.[scalarKey]?.encode?.(a) as string) || JSON.stringify(a);
    }
    if (Array.isArray(a)) {
      return `[${a.map((arr) => arb(arr, p, false)).join(', ')}]`;
    }
    if (typeof a === 'string') {
      if (checkType === 'enum') {
        return a;
      }
      return `${JSON.stringify(a)}`;
    }
    if (typeof a === 'object') {
      if (a === null) {
        return `null`;
      }
      const returnedObjectString = Object.entries(a)
        .filter(([, v]) => typeof v !== 'undefined')
        .map(([k, v]) => `${k}: ${arb(v, [p, k].join(SEPARATOR), false)}`)
        .join(',\n');
      if (!root) {
        return `{${returnedObjectString}}`;
      }
      return returnedObjectString;
    }
    return `${a}`;
  };
  return arb;
};

export const resolverFor = <X, T extends keyof ResolverInputTypes, Z extends keyof ResolverInputTypes[T]>(
  type: T,
  field: Z,
  fn: (
    args: Required<ResolverInputTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any, source?: any) => any;

export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<UnwrapPromise<ReturnType<T>>>;
export type ZeusHook<
  T extends (...args: any[]) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>,
> = ZeusState<ReturnType<T>[N]>;

export type WithTypeNameValue<T> = T & {
  __typename?: boolean;
  __directives?: string;
};
export type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
export type ScalarDefinition = Record<string, ScalarResolver>;

type IsScalar<S, SCLR extends ScalarDefinition> = S extends 'scalar' & { name: infer T }
  ? T extends keyof SCLR
    ? SCLR[T]['decode'] extends (s: unknown) => unknown
      ? ReturnType<SCLR[T]['decode']>
      : unknown
    : unknown
  : S;
type IsArray<T, U, SCLR extends ScalarDefinition> = T extends Array<infer R>
  ? InputType<R, U, SCLR>[]
  : InputType<T, U, SCLR>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;
type BaseZeusResolver = boolean | 1 | string | Variable<any, string>;

type IsInterfaced<SRC extends DeepAnify<DST>, DST, SCLR extends ScalarDefinition> = FlattenArray<SRC> extends
  | ZEUS_INTERFACES
  | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P], SCLR>
          : IsArray<R, '__typename' extends keyof DST ? { __typename: true } : never, SCLR>
        : never;
    }[keyof SRC] & {
      [P in keyof Omit<
        Pick<
          SRC,
          {
            [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
          }[keyof DST]
        >,
        '__typename'
      >]: IsPayLoad<DST[P]> extends BaseZeusResolver ? IsScalar<SRC[P], SCLR> : IsArray<SRC[P], DST[P], SCLR>;
    }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends BaseZeusResolver
        ? IsScalar<SRC[P], SCLR>
        : IsArray<SRC[P], DST[P], SCLR>;
    };

export type MapType<SRC, DST, SCLR extends ScalarDefinition> = SRC extends DeepAnify<DST>
  ? IsInterfaced<SRC, DST, SCLR>
  : never;
// eslint-disable-next-line @typescript-eslint/ban-types
export type InputType<SRC, DST, SCLR extends ScalarDefinition = {}> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P], SCLR>[keyof MapType<SRC, R[P], SCLR>];
    } & MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>, SCLR>
  : MapType<SRC, IsPayLoad<DST>, SCLR>;
export type SubscriptionToGraphQL<Z, T, SCLR extends ScalarDefinition> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z, SCLR>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z, SCLR>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z, SCLR>; errors?: string[] }) => void) => void;
  open: () => void;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type FromSelector<SELECTOR, NAME extends keyof GraphQLTypes, SCLR extends ScalarDefinition = {}> = InputType<
  GraphQLTypes[NAME],
  SELECTOR,
  SCLR
>;

export type ScalarResolver = {
  encode?: (s: unknown) => string;
  decode?: (s: unknown) => unknown;
};

export type SelectionFunction<V> = <T>(t: T | V) => T;

type BuiltInVariableTypes = {
  ['String']: string;
  ['Int']: number;
  ['Float']: number;
  ['ID']: unknown;
  ['Boolean']: boolean;
};
type AllVariableTypes = keyof BuiltInVariableTypes | keyof ZEUS_VARIABLES;
type VariableRequired<T extends string> = `${T}!` | T | `[${T}]` | `[${T}]!` | `[${T}!]` | `[${T}!]!`;
type VR<T extends string> = VariableRequired<VariableRequired<T>>;

export type GraphQLVariableType = VR<AllVariableTypes>;

type ExtractVariableTypeString<T extends string> = T extends VR<infer R1>
  ? R1 extends VR<infer R2>
    ? R2 extends VR<infer R3>
      ? R3 extends VR<infer R4>
        ? R4 extends VR<infer R5>
          ? R5
          : R4
        : R3
      : R2
    : R1
  : T;

type DecomposeType<T, Type> = T extends `[${infer R}]`
  ? Array<DecomposeType<R, Type>> | undefined
  : T extends `${infer R}!`
  ? NonNullable<DecomposeType<R, Type>>
  : Type | undefined;

type ExtractTypeFromGraphQLType<T extends string> = T extends keyof ZEUS_VARIABLES
  ? ZEUS_VARIABLES[T]
  : T extends keyof BuiltInVariableTypes
  ? BuiltInVariableTypes[T]
  : any;

export type GetVariableType<T extends string> = DecomposeType<
  T,
  ExtractTypeFromGraphQLType<ExtractVariableTypeString<T>>
>;

type UndefinedKeys<T> = {
  [K in keyof T]-?: T[K] extends NonNullable<T[K]> ? never : K;
}[keyof T];

type WithNullableKeys<T> = Pick<T, UndefinedKeys<T>>;
type WithNonNullableKeys<T> = Omit<T, UndefinedKeys<T>>;

type OptionalKeys<T> = {
  [P in keyof T]?: T[P];
};

export type WithOptionalNullables<T> = OptionalKeys<WithNullableKeys<T>> & WithNonNullableKeys<T>;

export type Variable<T extends GraphQLVariableType, Name extends string> = {
  ' __zeus_name': Name;
  ' __zeus_type': T;
};

export type ExtractVariables<Query> = Query extends Variable<infer VType, infer VName>
  ? { [key in VName]: GetVariableType<VType> }
  : Query extends [infer Inputs, infer Outputs]
  ? ExtractVariables<Inputs> & ExtractVariables<Outputs>
  : Query extends string | number | boolean
  ? // eslint-disable-next-line @typescript-eslint/ban-types
    {}
  : UnionToIntersection<{ [K in keyof Query]: WithOptionalNullables<ExtractVariables<Query[K]>> }[keyof Query]>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export const START_VAR_NAME = `$ZEUS_VAR`;
export const GRAPHQL_TYPE_SEPARATOR = `__$GRAPHQL__`;

export const $ = <Type extends GraphQLVariableType, Name extends string>(name: Name, graphqlType: Type) => {
  return (START_VAR_NAME + name + GRAPHQL_TYPE_SEPARATOR + graphqlType) as unknown as Variable<Type, Name>;
};
type ZEUS_INTERFACES = GraphQLTypes['Nameable'];
export type ScalarCoders = {
  JSON?: ScalarResolver;
};
type ZEUS_UNIONS = GraphQLTypes['ChangeCard'];

export type ValueTypes = {
  ['ChangeCard']: AliasType<{
    ['...on SpecialCard']: ValueTypes['SpecialCard'];
    ['...on EffectCard']: ValueTypes['EffectCard'];
    __typename?: boolean | `@${string}`;
  }>;
  ['Query']: AliasType<{
    cardById?: [{ cardId?: string | undefined | null | Variable<any, string> }, ValueTypes['Card']];
    /** Draw a card<br> */
    drawCard?: ValueTypes['Card'];
    drawChangeCard?: ValueTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards?: ValueTypes['Card'];
    myStacks?: ValueTypes['CardStack'];
    nameables?: ValueTypes['Nameable'];
    public?: ValueTypes['Public'];
    __typename?: boolean | `@${string}`;
  }>;
  ['EffectCard']: AliasType<{
    effectSize?: boolean | `@${string}`;
    name?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  /** create card inputs<br> */
  ['createCard']: {
    /** The defense power<br> */
    Defense: number | Variable<any, string>;
    /** input skills */
    skills?: Array<ValueTypes['SpecialSkills']> | undefined | null | Variable<any, string>;
    /** The name of a card<br> */
    name: string | Variable<any, string>;
    /** Description of a card<br> */
    description: string | Variable<any, string>;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined | null | Variable<any, string>;
    /** The attack power<br> */
    Attack: number | Variable<any, string>;
  };
  ['Subscription']: AliasType<{
    deck?: ValueTypes['Card'];
    __typename?: boolean | `@${string}`;
  }>;
  ['SpecialCard']: AliasType<{
    effect?: boolean | `@${string}`;
    name?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  /** Card used in card game<br> */
  ['Card']: AliasType<{
    /** The attack power<br> */
    Attack?: boolean | `@${string}`;
    /** <div>How many children the greek god had</div> */
    Children?: boolean | `@${string}`;
    /** The defense power<br> */
    Defense?: boolean | `@${string}`;
    attack?: [
      {
        /** Attacked card/card ids<br> */ cardID: Array<string> | Variable<any, string>;
      },
      ValueTypes['Card'],
    ];
    /** Put your description here */
    cardImage?: ValueTypes['S3Object'];
    /** Description of a card<br> */
    description?: boolean | `@${string}`;
    id?: boolean | `@${string}`;
    image?: boolean | `@${string}`;
    info?: boolean | `@${string}`;
    /** The name of a card<br> */
    name?: boolean | `@${string}`;
    skills?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  ['SpecialSkills']: SpecialSkills;
  /** Aws S3 File */
  ['S3Object']: AliasType<{
    bucket?: boolean | `@${string}`;
    key?: boolean | `@${string}`;
    region?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  ['JSON']: unknown;
  ['Powerup']: AliasType<{
    name?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  ['Public']: AliasType<{
    powerups?: [{ filter: string | Variable<any, string> }, ValueTypes['Powerup']];
    __typename?: boolean | `@${string}`;
  }>;
  /** Stack of cards */
  ['CardStack']: AliasType<{
    cards?: ValueTypes['Card'];
    name?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  ['Nameable']: AliasType<{
    name?: boolean | `@${string}`;
    ['...on EffectCard']?: Omit<ValueTypes['EffectCard'], keyof ValueTypes['Nameable']>;
    ['...on SpecialCard']?: Omit<ValueTypes['SpecialCard'], keyof ValueTypes['Nameable']>;
    ['...on Card']?: Omit<ValueTypes['Card'], keyof ValueTypes['Nameable']>;
    ['...on CardStack']?: Omit<ValueTypes['CardStack'], keyof ValueTypes['Nameable']>;
    __typename?: boolean | `@${string}`;
  }>;
  ['Mutation']: AliasType<{
    addCard?: [{ card: ValueTypes['createCard'] | Variable<any, string> }, ValueTypes['Card']];
    __typename?: boolean | `@${string}`;
  }>;
};

export type ResolverInputTypes = {
  ['ChangeCard']: AliasType<{
    SpecialCard?: ResolverInputTypes['SpecialCard'];
    EffectCard?: ResolverInputTypes['EffectCard'];
    __typename?: boolean | `@${string}`;
  }>;
  ['Query']: AliasType<{
    cardById?: [{ cardId?: string | undefined | null }, ResolverInputTypes['Card']];
    /** Draw a card<br> */
    drawCard?: ResolverInputTypes['Card'];
    drawChangeCard?: ResolverInputTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards?: ResolverInputTypes['Card'];
    myStacks?: ResolverInputTypes['CardStack'];
    nameables?: ResolverInputTypes['Nameable'];
    public?: ResolverInputTypes['Public'];
    __typename?: boolean | `@${string}`;
  }>;
  ['EffectCard']: AliasType<{
    effectSize?: boolean | `@${string}`;
    name?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  /** create card inputs<br> */
  ['createCard']: {
    /** The defense power<br> */
    Defense: number;
    /** input skills */
    skills?: Array<ResolverInputTypes['SpecialSkills']> | undefined | null;
    /** The name of a card<br> */
    name: string;
    /** Description of a card<br> */
    description: string;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined | null;
    /** The attack power<br> */
    Attack: number;
  };
  ['Subscription']: AliasType<{
    deck?: ResolverInputTypes['Card'];
    __typename?: boolean | `@${string}`;
  }>;
  ['SpecialCard']: AliasType<{
    effect?: boolean | `@${string}`;
    name?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  /** Card used in card game<br> */
  ['Card']: AliasType<{
    /** The attack power<br> */
    Attack?: boolean | `@${string}`;
    /** <div>How many children the greek god had</div> */
    Children?: boolean | `@${string}`;
    /** The defense power<br> */
    Defense?: boolean | `@${string}`;
    attack?: [
      {
        /** Attacked card/card ids<br> */ cardID: Array<string>;
      },
      ResolverInputTypes['Card'],
    ];
    /** Put your description here */
    cardImage?: ResolverInputTypes['S3Object'];
    /** Description of a card<br> */
    description?: boolean | `@${string}`;
    id?: boolean | `@${string}`;
    image?: boolean | `@${string}`;
    info?: boolean | `@${string}`;
    /** The name of a card<br> */
    name?: boolean | `@${string}`;
    skills?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  ['SpecialSkills']: SpecialSkills;
  /** Aws S3 File */
  ['S3Object']: AliasType<{
    bucket?: boolean | `@${string}`;
    key?: boolean | `@${string}`;
    region?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  ['JSON']: unknown;
  ['Powerup']: AliasType<{
    name?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  ['Public']: AliasType<{
    powerups?: [{ filter: string }, ResolverInputTypes['Powerup']];
    __typename?: boolean | `@${string}`;
  }>;
  /** Stack of cards */
  ['CardStack']: AliasType<{
    cards?: ResolverInputTypes['Card'];
    name?: boolean | `@${string}`;
    __typename?: boolean | `@${string}`;
  }>;
  ['Nameable']: AliasType<{
    name?: boolean | `@${string}`;
    ['...on EffectCard']?: Omit<ResolverInputTypes['EffectCard'], keyof ResolverInputTypes['Nameable']>;
    ['...on SpecialCard']?: Omit<ResolverInputTypes['SpecialCard'], keyof ResolverInputTypes['Nameable']>;
    ['...on Card']?: Omit<ResolverInputTypes['Card'], keyof ResolverInputTypes['Nameable']>;
    ['...on CardStack']?: Omit<ResolverInputTypes['CardStack'], keyof ResolverInputTypes['Nameable']>;
    __typename?: boolean | `@${string}`;
  }>;
  ['Mutation']: AliasType<{
    addCard?: [{ card: ResolverInputTypes['createCard'] }, ResolverInputTypes['Card']];
    __typename?: boolean | `@${string}`;
  }>;
};

export type ModelTypes = {
  ['ChangeCard']: ModelTypes['SpecialCard'] | ModelTypes['EffectCard'];
  ['Query']: {
    cardById?: ModelTypes['Card'] | undefined;
    /** Draw a card<br> */
    drawCard: ModelTypes['Card'];
    drawChangeCard: ModelTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards: Array<ModelTypes['Card']>;
    myStacks?: Array<ModelTypes['CardStack']> | undefined;
    nameables: Array<ModelTypes['Nameable']>;
    public?: ModelTypes['Public'] | undefined;
  };
  ['EffectCard']: {
    effectSize: number;
    name: string;
  };
  /** create card inputs<br> */
  ['createCard']: {
    /** The defense power<br> */
    Defense: number;
    /** input skills */
    skills?: Array<ModelTypes['SpecialSkills']> | undefined;
    /** The name of a card<br> */
    name: string;
    /** Description of a card<br> */
    description: string;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined;
    /** The attack power<br> */
    Attack: number;
  };
  ['Subscription']: {
    deck?: Array<ModelTypes['Card']> | undefined;
  };
  ['SpecialCard']: {
    effect: string;
    name: string;
  };
  /** Card used in card game<br> */
  ['Card']: {
    /** The attack power<br> */
    Attack: number;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined;
    /** The defense power<br> */
    Defense: number;
    /** Attack other cards on the table , returns Cards after attack<br> */
    attack?: Array<ModelTypes['Card']> | undefined;
    /** Put your description here */
    cardImage?: ModelTypes['S3Object'] | undefined;
    /** Description of a card<br> */
    description: string;
    id: string;
    image: string;
    info: ModelTypes['JSON'];
    /** The name of a card<br> */
    name: string;
    skills?: Array<ModelTypes['SpecialSkills']> | undefined;
  };
  ['SpecialSkills']: SpecialSkills;
  /** Aws S3 File */
  ['S3Object']: {
    bucket: string;
    key: string;
    region: string;
  };
  ['JSON']: any;
  ['Powerup']: {
    name?: string | undefined;
  };
  ['Public']: {
    powerups?: Array<ModelTypes['Powerup']> | undefined;
  };
  /** Stack of cards */
  ['CardStack']: {
    cards?: Array<ModelTypes['Card']> | undefined;
    name: string;
  };
  ['Nameable']: ModelTypes['EffectCard'] | ModelTypes['SpecialCard'] | ModelTypes['Card'] | ModelTypes['CardStack'];
  ['Mutation']: {
    /** add Card to Cards database<br> */
    addCard: ModelTypes['Card'];
  };
};

export type GraphQLTypes = {
  ['ChangeCard']: {
    __typename: 'SpecialCard' | 'EffectCard';
    ['...on SpecialCard']: '__union' & GraphQLTypes['SpecialCard'];
    ['...on EffectCard']: '__union' & GraphQLTypes['EffectCard'];
  };
  ['Query']: {
    __typename: 'Query';
    cardById?: GraphQLTypes['Card'] | undefined;
    /** Draw a card<br> */
    drawCard: GraphQLTypes['Card'];
    drawChangeCard: GraphQLTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards: Array<GraphQLTypes['Card']>;
    myStacks?: Array<GraphQLTypes['CardStack']> | undefined;
    nameables: Array<GraphQLTypes['Nameable']>;
    public?: GraphQLTypes['Public'] | undefined;
  };
  ['EffectCard']: {
    __typename: 'EffectCard';
    effectSize: number;
    name: string;
  };
  /** create card inputs<br> */
  ['createCard']: {
    /** The defense power<br> */
    Defense: number;
    /** input skills */
    skills?: Array<GraphQLTypes['SpecialSkills']> | undefined;
    /** The name of a card<br> */
    name: string;
    /** Description of a card<br> */
    description: string;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined;
    /** The attack power<br> */
    Attack: number;
  };
  ['Subscription']: {
    __typename: 'Subscription';
    deck?: Array<GraphQLTypes['Card']> | undefined;
  };
  ['SpecialCard']: {
    __typename: 'SpecialCard';
    effect: string;
    name: string;
  };
  /** Card used in card game<br> */
  ['Card']: {
    __typename: 'Card';
    /** The attack power<br> */
    Attack: number;
    /** <div>How many children the greek god had</div> */
    Children?: number | undefined;
    /** The defense power<br> */
    Defense: number;
    /** Attack other cards on the table , returns Cards after attack<br> */
    attack?: Array<GraphQLTypes['Card']> | undefined;
    /** Put your description here */
    cardImage?: GraphQLTypes['S3Object'] | undefined;
    /** Description of a card<br> */
    description: string;
    id: string;
    image: string;
    info: GraphQLTypes['JSON'];
    /** The name of a card<br> */
    name: string;
    skills?: Array<GraphQLTypes['SpecialSkills']> | undefined;
  };
  ['SpecialSkills']: SpecialSkills;
  /** Aws S3 File */
  ['S3Object']: {
    __typename: 'S3Object';
    bucket: string;
    key: string;
    region: string;
  };
  ['JSON']: 'scalar' & { name: 'JSON' };
  ['Powerup']: {
    __typename: 'Powerup';
    name?: string | undefined;
  };
  ['Public']: {
    __typename: 'Public';
    powerups?: Array<GraphQLTypes['Powerup']> | undefined;
  };
  /** Stack of cards */
  ['CardStack']: {
    __typename: 'CardStack';
    cards?: Array<GraphQLTypes['Card']> | undefined;
    name: string;
  };
  ['Nameable']: {
    __typename: 'EffectCard' | 'SpecialCard' | 'Card' | 'CardStack';
    name: string;
    ['...on EffectCard']: '__union' & GraphQLTypes['EffectCard'];
    ['...on SpecialCard']: '__union' & GraphQLTypes['SpecialCard'];
    ['...on Card']: '__union' & GraphQLTypes['Card'];
    ['...on CardStack']: '__union' & GraphQLTypes['CardStack'];
  };
  ['Mutation']: {
    __typename: 'Mutation';
    /** add Card to Cards database<br> */
    addCard: GraphQLTypes['Card'];
  };
};
export const enum SpecialSkills {
  THUNDER = 'THUNDER',
  RAIN = 'RAIN',
  FIRE = 'FIRE',
}

type ZEUS_VARIABLES = {
  ['createCard']: ValueTypes['createCard'];
  ['SpecialSkills']: ValueTypes['SpecialSkills'];
  ['JSON']: ValueTypes['JSON'];
};
