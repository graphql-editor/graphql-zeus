/* eslint-disable */

import { AllTypesProps, ReturnTypes, Ops } from './const';
export const HOST = "https://api.thegraph.com/subgraphs/name/psparacino/goerli-smart-invoices"


export const HEADERS = {}
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
  return response.json() as Promise<GraphQLResponse>;
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
  <Z extends ValueTypes[R]>(
    o: (Z & ValueTypes[R]) | ValueTypes[R],
    ops?: OperationOptions & { variables?: Record<string, unknown> },
  ) =>
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
  <Z extends ValueTypes[R]>(
    o: (Z & ValueTypes[R]) | ValueTypes[R],
    ops?: OperationOptions & { variables?: ExtractVariables<Z> },
  ) => {
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
  o: (Z & ValueTypes[R]) | ValueTypes[R],
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
    const entries = Object.entries(o).map(([k, v]) => [k, ibb(k, v, [...p, purifyGraphQLKey(k)])] as const);
    const objectFromEntries = entries.reduce<Record<string, unknown>>((a, [k, v]) => {
      a[k] = v;
      return a;
    }, {});
    return objectFromEntries;
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
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : never,
) => fn as (args?: any, source?: any) => ReturnType<typeof fn>;

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
          : IsArray<R, '__typename' extends keyof DST ? { __typename: true } : Record<string, never>, SCLR>
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
type ZEUS_INTERFACES = never
export type ScalarCoders = {
	BigDecimal?: ScalarResolver;
	BigInt?: ScalarResolver;
	Bytes?: ScalarResolver;
	Int8?: ScalarResolver;
}
type ZEUS_UNIONS = never

export type ValueTypes = {
    ["ADR"]:ADR;
	["Agreement"]: AliasType<{
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	src?:boolean | `@${string}`,
	createdAt?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Agreement_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	type?: string | undefined | null | Variable<any, string>,
	type_not?: string | undefined | null | Variable<any, string>,
	type_gt?: string | undefined | null | Variable<any, string>,
	type_lt?: string | undefined | null | Variable<any, string>,
	type_gte?: string | undefined | null | Variable<any, string>,
	type_lte?: string | undefined | null | Variable<any, string>,
	type_in?: Array<string> | undefined | null | Variable<any, string>,
	type_not_in?: Array<string> | undefined | null | Variable<any, string>,
	type_contains?: string | undefined | null | Variable<any, string>,
	type_contains_nocase?: string | undefined | null | Variable<any, string>,
	type_not_contains?: string | undefined | null | Variable<any, string>,
	type_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	type_starts_with?: string | undefined | null | Variable<any, string>,
	type_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	type_not_starts_with?: string | undefined | null | Variable<any, string>,
	type_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	type_ends_with?: string | undefined | null | Variable<any, string>,
	type_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	type_not_ends_with?: string | undefined | null | Variable<any, string>,
	type_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	src?: string | undefined | null | Variable<any, string>,
	src_not?: string | undefined | null | Variable<any, string>,
	src_gt?: string | undefined | null | Variable<any, string>,
	src_lt?: string | undefined | null | Variable<any, string>,
	src_gte?: string | undefined | null | Variable<any, string>,
	src_lte?: string | undefined | null | Variable<any, string>,
	src_in?: Array<string> | undefined | null | Variable<any, string>,
	src_not_in?: Array<string> | undefined | null | Variable<any, string>,
	src_contains?: string | undefined | null | Variable<any, string>,
	src_contains_nocase?: string | undefined | null | Variable<any, string>,
	src_not_contains?: string | undefined | null | Variable<any, string>,
	src_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	src_starts_with?: string | undefined | null | Variable<any, string>,
	src_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	src_not_starts_with?: string | undefined | null | Variable<any, string>,
	src_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	src_ends_with?: string | undefined | null | Variable<any, string>,
	src_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	src_not_ends_with?: string | undefined | null | Variable<any, string>,
	src_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	createdAt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	createdAt_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Agreement_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Agreement_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Agreement_orderBy"]:Agreement_orderBy;
	["BigDecimal"]:unknown;
	["BigInt"]:unknown;
	["BlockChangedFilter"]: {
	number_gte: number | Variable<any, string>
};
	["Block_height"]: {
	hash?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	number?: number | undefined | null | Variable<any, string>,
	number_gte?: number | undefined | null | Variable<any, string>
};
	["Bytes"]:unknown;
	["Deposit"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	sender?:boolean | `@${string}`,
	invoice?:ValueTypes["Invoice"],
	amount?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Deposit_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	txHash?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	sender_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	sender_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice?: string | undefined | null | Variable<any, string>,
	invoice_not?: string | undefined | null | Variable<any, string>,
	invoice_gt?: string | undefined | null | Variable<any, string>,
	invoice_lt?: string | undefined | null | Variable<any, string>,
	invoice_gte?: string | undefined | null | Variable<any, string>,
	invoice_lte?: string | undefined | null | Variable<any, string>,
	invoice_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_not_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_contains?: string | undefined | null | Variable<any, string>,
	invoice_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_contains?: string | undefined | null | Variable<any, string>,
	invoice_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_?: ValueTypes["Invoice_filter"] | undefined | null | Variable<any, string>,
	amount?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amount_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Deposit_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Deposit_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Deposit_orderBy"]:Deposit_orderBy;
	["Dispute"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	invoice?:ValueTypes["Invoice"],
	sender?:boolean | `@${string}`,
	details?:boolean | `@${string}`,
	ipfsHash?:boolean | `@${string}`,
	disputeToken?:boolean | `@${string}`,
	disputeFee?:boolean | `@${string}`,
	disputeId?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Dispute_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	txHash?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice?: string | undefined | null | Variable<any, string>,
	invoice_not?: string | undefined | null | Variable<any, string>,
	invoice_gt?: string | undefined | null | Variable<any, string>,
	invoice_lt?: string | undefined | null | Variable<any, string>,
	invoice_gte?: string | undefined | null | Variable<any, string>,
	invoice_lte?: string | undefined | null | Variable<any, string>,
	invoice_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_not_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_contains?: string | undefined | null | Variable<any, string>,
	invoice_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_contains?: string | undefined | null | Variable<any, string>,
	invoice_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_?: ValueTypes["Invoice_filter"] | undefined | null | Variable<any, string>,
	sender?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	sender_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	sender_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	details_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	details_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	ipfsHash?: string | undefined | null | Variable<any, string>,
	ipfsHash_not?: string | undefined | null | Variable<any, string>,
	ipfsHash_gt?: string | undefined | null | Variable<any, string>,
	ipfsHash_lt?: string | undefined | null | Variable<any, string>,
	ipfsHash_gte?: string | undefined | null | Variable<any, string>,
	ipfsHash_lte?: string | undefined | null | Variable<any, string>,
	ipfsHash_in?: Array<string> | undefined | null | Variable<any, string>,
	ipfsHash_not_in?: Array<string> | undefined | null | Variable<any, string>,
	ipfsHash_contains?: string | undefined | null | Variable<any, string>,
	ipfsHash_contains_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_contains?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_starts_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_starts_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_ends_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_ends_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	disputeToken?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	disputeToken_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	disputeToken_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	disputeToken_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	disputeToken_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	disputeToken_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	disputeToken_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	disputeToken_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	disputeToken_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	disputeToken_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	disputeFee?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeFee_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeFee_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeFee_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeFee_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeFee_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeFee_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	disputeFee_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	disputeId?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	disputeId_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Dispute_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Dispute_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Dispute_orderBy"]:Dispute_orderBy;
	/** 8 bytes signed integer
 */
["Int8"]:unknown;
	["Invoice"]: AliasType<{
	id?:boolean | `@${string}`,
	network?:boolean | `@${string}`,
	address?:boolean | `@${string}`,
	factoryAddress?:boolean | `@${string}`,
	token?:boolean | `@${string}`,
	client?:boolean | `@${string}`,
	provider?:boolean | `@${string}`,
	resolverType?:boolean | `@${string}`,
	resolver?:boolean | `@${string}`,
	resolutionRate?:boolean | `@${string}`,
	isLocked?:boolean | `@${string}`,
	amounts?:boolean | `@${string}`,
	numMilestones?:boolean | `@${string}`,
	currentMilestone?:boolean | `@${string}`,
	total?:boolean | `@${string}`,
	released?:boolean | `@${string}`,
	createdAt?:boolean | `@${string}`,
	creationTxHash?:boolean | `@${string}`,
	terminationTime?:boolean | `@${string}`,
	details?:boolean | `@${string}`,
	ipfsHash?:boolean | `@${string}`,
	disputeId?:boolean | `@${string}`,
	projectName?:boolean | `@${string}`,
	projectDescription?:boolean | `@${string}`,
projectAgreement?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Agreement_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Agreement_filter"] | undefined | null | Variable<any, string>},ValueTypes["Agreement"]],
	startDate?:boolean | `@${string}`,
	endDate?:boolean | `@${string}`,
deposits?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Deposit_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Deposit_filter"] | undefined | null | Variable<any, string>},ValueTypes["Deposit"]],
withdraws?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Withdraw_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Withdraw_filter"] | undefined | null | Variable<any, string>},ValueTypes["Withdraw"]],
releases?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Release_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Release_filter"] | undefined | null | Variable<any, string>},ValueTypes["Release"]],
disputes?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Dispute_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Dispute_filter"] | undefined | null | Variable<any, string>},ValueTypes["Dispute"]],
resolutions?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Resolution_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Resolution_filter"] | undefined | null | Variable<any, string>},ValueTypes["Resolution"]],
	tokenMetadata?:ValueTypes["Token"],
verified?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Verified_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Verified_filter"] | undefined | null | Variable<any, string>},ValueTypes["Verified"]],
milestonesAdded?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["MilestonesAdded_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["MilestonesAdded_filter"] | undefined | null | Variable<any, string>},ValueTypes["MilestonesAdded"]],
	invoiceType?:boolean | `@${string}`,
	version?:boolean | `@${string}`,
	lateFee?:boolean | `@${string}`,
	lateFeeTimeInterval?:boolean | `@${string}`,
tipAmount?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Tip_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Tip_filter"] | undefined | null | Variable<any, string>},ValueTypes["Tip"]],
	deadline?:boolean | `@${string}`,
	fulfilled?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Invoice_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	network?: string | undefined | null | Variable<any, string>,
	network_not?: string | undefined | null | Variable<any, string>,
	network_gt?: string | undefined | null | Variable<any, string>,
	network_lt?: string | undefined | null | Variable<any, string>,
	network_gte?: string | undefined | null | Variable<any, string>,
	network_lte?: string | undefined | null | Variable<any, string>,
	network_in?: Array<string> | undefined | null | Variable<any, string>,
	network_not_in?: Array<string> | undefined | null | Variable<any, string>,
	network_contains?: string | undefined | null | Variable<any, string>,
	network_contains_nocase?: string | undefined | null | Variable<any, string>,
	network_not_contains?: string | undefined | null | Variable<any, string>,
	network_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	network_starts_with?: string | undefined | null | Variable<any, string>,
	network_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	network_not_starts_with?: string | undefined | null | Variable<any, string>,
	network_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	network_ends_with?: string | undefined | null | Variable<any, string>,
	network_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	network_not_ends_with?: string | undefined | null | Variable<any, string>,
	network_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	address?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	address_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	address_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	address_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	address_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	address_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	address_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	address_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	address_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	address_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	factoryAddress?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	factoryAddress_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	factoryAddress_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	factoryAddress_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	factoryAddress_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	factoryAddress_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	factoryAddress_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	factoryAddress_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	factoryAddress_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	factoryAddress_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	token?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	token_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	token_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	token_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	token_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	token_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	token_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	token_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	token_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	token_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	client_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	client_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	provider?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	provider_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	provider_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	provider_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	provider_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	provider_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	provider_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	provider_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	provider_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	provider_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolverType?: ValueTypes["ADR"] | undefined | null | Variable<any, string>,
	resolverType_not?: ValueTypes["ADR"] | undefined | null | Variable<any, string>,
	resolverType_in?: Array<ValueTypes["ADR"]> | undefined | null | Variable<any, string>,
	resolverType_not_in?: Array<ValueTypes["ADR"]> | undefined | null | Variable<any, string>,
	resolver?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	resolver_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	resolver_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionRate?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionRate_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionRate_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionRate_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionRate_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionRate_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionRate_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	resolutionRate_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	isLocked?: boolean | undefined | null | Variable<any, string>,
	isLocked_not?: boolean | undefined | null | Variable<any, string>,
	isLocked_in?: Array<boolean> | undefined | null | Variable<any, string>,
	isLocked_not_in?: Array<boolean> | undefined | null | Variable<any, string>,
	amounts?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amounts_not?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amounts_contains?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amounts_contains_nocase?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amounts_not_contains?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amounts_not_contains_nocase?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	numMilestones?: number | undefined | null | Variable<any, string>,
	numMilestones_not?: number | undefined | null | Variable<any, string>,
	numMilestones_gt?: number | undefined | null | Variable<any, string>,
	numMilestones_lt?: number | undefined | null | Variable<any, string>,
	numMilestones_gte?: number | undefined | null | Variable<any, string>,
	numMilestones_lte?: number | undefined | null | Variable<any, string>,
	numMilestones_in?: Array<number> | undefined | null | Variable<any, string>,
	numMilestones_not_in?: Array<number> | undefined | null | Variable<any, string>,
	currentMilestone?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	currentMilestone_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	currentMilestone_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	currentMilestone_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	currentMilestone_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	currentMilestone_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	currentMilestone_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	currentMilestone_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	total?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	total_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	total_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	total_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	total_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	total_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	total_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	total_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	released?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	released_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	released_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	released_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	released_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	released_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	released_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	released_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	createdAt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	createdAt_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	createdAt_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	creationTxHash?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	creationTxHash_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	creationTxHash_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	creationTxHash_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	creationTxHash_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	creationTxHash_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	creationTxHash_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	creationTxHash_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	creationTxHash_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	creationTxHash_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	terminationTime?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	terminationTime_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	terminationTime_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	terminationTime_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	terminationTime_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	terminationTime_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	terminationTime_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	terminationTime_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	details?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	details_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	details_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	ipfsHash?: string | undefined | null | Variable<any, string>,
	ipfsHash_not?: string | undefined | null | Variable<any, string>,
	ipfsHash_gt?: string | undefined | null | Variable<any, string>,
	ipfsHash_lt?: string | undefined | null | Variable<any, string>,
	ipfsHash_gte?: string | undefined | null | Variable<any, string>,
	ipfsHash_lte?: string | undefined | null | Variable<any, string>,
	ipfsHash_in?: Array<string> | undefined | null | Variable<any, string>,
	ipfsHash_not_in?: Array<string> | undefined | null | Variable<any, string>,
	ipfsHash_contains?: string | undefined | null | Variable<any, string>,
	ipfsHash_contains_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_contains?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_starts_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_starts_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_ends_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_ends_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	disputeId?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	disputeId_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	disputeId_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	projectName?: string | undefined | null | Variable<any, string>,
	projectName_not?: string | undefined | null | Variable<any, string>,
	projectName_gt?: string | undefined | null | Variable<any, string>,
	projectName_lt?: string | undefined | null | Variable<any, string>,
	projectName_gte?: string | undefined | null | Variable<any, string>,
	projectName_lte?: string | undefined | null | Variable<any, string>,
	projectName_in?: Array<string> | undefined | null | Variable<any, string>,
	projectName_not_in?: Array<string> | undefined | null | Variable<any, string>,
	projectName_contains?: string | undefined | null | Variable<any, string>,
	projectName_contains_nocase?: string | undefined | null | Variable<any, string>,
	projectName_not_contains?: string | undefined | null | Variable<any, string>,
	projectName_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	projectName_starts_with?: string | undefined | null | Variable<any, string>,
	projectName_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	projectName_not_starts_with?: string | undefined | null | Variable<any, string>,
	projectName_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	projectName_ends_with?: string | undefined | null | Variable<any, string>,
	projectName_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	projectName_not_ends_with?: string | undefined | null | Variable<any, string>,
	projectName_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	projectDescription?: string | undefined | null | Variable<any, string>,
	projectDescription_not?: string | undefined | null | Variable<any, string>,
	projectDescription_gt?: string | undefined | null | Variable<any, string>,
	projectDescription_lt?: string | undefined | null | Variable<any, string>,
	projectDescription_gte?: string | undefined | null | Variable<any, string>,
	projectDescription_lte?: string | undefined | null | Variable<any, string>,
	projectDescription_in?: Array<string> | undefined | null | Variable<any, string>,
	projectDescription_not_in?: Array<string> | undefined | null | Variable<any, string>,
	projectDescription_contains?: string | undefined | null | Variable<any, string>,
	projectDescription_contains_nocase?: string | undefined | null | Variable<any, string>,
	projectDescription_not_contains?: string | undefined | null | Variable<any, string>,
	projectDescription_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	projectDescription_starts_with?: string | undefined | null | Variable<any, string>,
	projectDescription_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	projectDescription_not_starts_with?: string | undefined | null | Variable<any, string>,
	projectDescription_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	projectDescription_ends_with?: string | undefined | null | Variable<any, string>,
	projectDescription_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	projectDescription_not_ends_with?: string | undefined | null | Variable<any, string>,
	projectDescription_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	projectAgreement?: Array<string> | undefined | null | Variable<any, string>,
	projectAgreement_not?: Array<string> | undefined | null | Variable<any, string>,
	projectAgreement_contains?: Array<string> | undefined | null | Variable<any, string>,
	projectAgreement_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	projectAgreement_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	projectAgreement_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	projectAgreement_?: ValueTypes["Agreement_filter"] | undefined | null | Variable<any, string>,
	startDate?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	startDate_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	startDate_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	startDate_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	startDate_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	startDate_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	startDate_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	startDate_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	endDate?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	endDate_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	endDate_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	endDate_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	endDate_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	endDate_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	endDate_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	endDate_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	deposits?: Array<string> | undefined | null | Variable<any, string>,
	deposits_not?: Array<string> | undefined | null | Variable<any, string>,
	deposits_contains?: Array<string> | undefined | null | Variable<any, string>,
	deposits_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	deposits_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	deposits_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	deposits_?: ValueTypes["Deposit_filter"] | undefined | null | Variable<any, string>,
	withdraws?: Array<string> | undefined | null | Variable<any, string>,
	withdraws_not?: Array<string> | undefined | null | Variable<any, string>,
	withdraws_contains?: Array<string> | undefined | null | Variable<any, string>,
	withdraws_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	withdraws_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	withdraws_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	withdraws_?: ValueTypes["Withdraw_filter"] | undefined | null | Variable<any, string>,
	releases?: Array<string> | undefined | null | Variable<any, string>,
	releases_not?: Array<string> | undefined | null | Variable<any, string>,
	releases_contains?: Array<string> | undefined | null | Variable<any, string>,
	releases_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	releases_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	releases_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	releases_?: ValueTypes["Release_filter"] | undefined | null | Variable<any, string>,
	disputes?: Array<string> | undefined | null | Variable<any, string>,
	disputes_not?: Array<string> | undefined | null | Variable<any, string>,
	disputes_contains?: Array<string> | undefined | null | Variable<any, string>,
	disputes_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	disputes_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	disputes_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	disputes_?: ValueTypes["Dispute_filter"] | undefined | null | Variable<any, string>,
	resolutions?: Array<string> | undefined | null | Variable<any, string>,
	resolutions_not?: Array<string> | undefined | null | Variable<any, string>,
	resolutions_contains?: Array<string> | undefined | null | Variable<any, string>,
	resolutions_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	resolutions_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	resolutions_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	resolutions_?: ValueTypes["Resolution_filter"] | undefined | null | Variable<any, string>,
	tokenMetadata?: string | undefined | null | Variable<any, string>,
	tokenMetadata_not?: string | undefined | null | Variable<any, string>,
	tokenMetadata_gt?: string | undefined | null | Variable<any, string>,
	tokenMetadata_lt?: string | undefined | null | Variable<any, string>,
	tokenMetadata_gte?: string | undefined | null | Variable<any, string>,
	tokenMetadata_lte?: string | undefined | null | Variable<any, string>,
	tokenMetadata_in?: Array<string> | undefined | null | Variable<any, string>,
	tokenMetadata_not_in?: Array<string> | undefined | null | Variable<any, string>,
	tokenMetadata_contains?: string | undefined | null | Variable<any, string>,
	tokenMetadata_contains_nocase?: string | undefined | null | Variable<any, string>,
	tokenMetadata_not_contains?: string | undefined | null | Variable<any, string>,
	tokenMetadata_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	tokenMetadata_starts_with?: string | undefined | null | Variable<any, string>,
	tokenMetadata_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	tokenMetadata_not_starts_with?: string | undefined | null | Variable<any, string>,
	tokenMetadata_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	tokenMetadata_ends_with?: string | undefined | null | Variable<any, string>,
	tokenMetadata_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	tokenMetadata_not_ends_with?: string | undefined | null | Variable<any, string>,
	tokenMetadata_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	tokenMetadata_?: ValueTypes["Token_filter"] | undefined | null | Variable<any, string>,
	verified?: Array<string> | undefined | null | Variable<any, string>,
	verified_not?: Array<string> | undefined | null | Variable<any, string>,
	verified_contains?: Array<string> | undefined | null | Variable<any, string>,
	verified_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	verified_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	verified_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	verified_?: ValueTypes["Verified_filter"] | undefined | null | Variable<any, string>,
	milestonesAdded?: Array<string> | undefined | null | Variable<any, string>,
	milestonesAdded_not?: Array<string> | undefined | null | Variable<any, string>,
	milestonesAdded_contains?: Array<string> | undefined | null | Variable<any, string>,
	milestonesAdded_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	milestonesAdded_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	milestonesAdded_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	milestonesAdded_?: ValueTypes["MilestonesAdded_filter"] | undefined | null | Variable<any, string>,
	invoiceType?: string | undefined | null | Variable<any, string>,
	invoiceType_not?: string | undefined | null | Variable<any, string>,
	invoiceType_gt?: string | undefined | null | Variable<any, string>,
	invoiceType_lt?: string | undefined | null | Variable<any, string>,
	invoiceType_gte?: string | undefined | null | Variable<any, string>,
	invoiceType_lte?: string | undefined | null | Variable<any, string>,
	invoiceType_in?: Array<string> | undefined | null | Variable<any, string>,
	invoiceType_not_in?: Array<string> | undefined | null | Variable<any, string>,
	invoiceType_contains?: string | undefined | null | Variable<any, string>,
	invoiceType_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoiceType_not_contains?: string | undefined | null | Variable<any, string>,
	invoiceType_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoiceType_starts_with?: string | undefined | null | Variable<any, string>,
	invoiceType_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoiceType_not_starts_with?: string | undefined | null | Variable<any, string>,
	invoiceType_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoiceType_ends_with?: string | undefined | null | Variable<any, string>,
	invoiceType_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoiceType_not_ends_with?: string | undefined | null | Variable<any, string>,
	invoiceType_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	version?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	version_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	version_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	version_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	version_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	version_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	version_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	version_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	lateFee?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFee_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFee_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFee_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFee_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFee_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFee_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	lateFee_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	lateFeeTimeInterval?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFeeTimeInterval_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFeeTimeInterval_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFeeTimeInterval_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFeeTimeInterval_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFeeTimeInterval_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	lateFeeTimeInterval_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	lateFeeTimeInterval_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	tipAmount?: Array<string> | undefined | null | Variable<any, string>,
	tipAmount_not?: Array<string> | undefined | null | Variable<any, string>,
	tipAmount_contains?: Array<string> | undefined | null | Variable<any, string>,
	tipAmount_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	tipAmount_not_contains?: Array<string> | undefined | null | Variable<any, string>,
	tipAmount_not_contains_nocase?: Array<string> | undefined | null | Variable<any, string>,
	tipAmount_?: ValueTypes["Tip_filter"] | undefined | null | Variable<any, string>,
	deadline?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	deadline_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	deadline_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	deadline_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	deadline_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	deadline_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	deadline_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	deadline_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	fulfilled?: boolean | undefined | null | Variable<any, string>,
	fulfilled_not?: boolean | undefined | null | Variable<any, string>,
	fulfilled_in?: Array<boolean> | undefined | null | Variable<any, string>,
	fulfilled_not_in?: Array<boolean> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Invoice_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Invoice_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Invoice_orderBy"]:Invoice_orderBy;
	["MilestonesAdded"]: AliasType<{
	id?:boolean | `@${string}`,
	sender?:boolean | `@${string}`,
	invoice?:boolean | `@${string}`,
	milestones?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["MilestonesAdded_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	sender?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	sender_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	sender_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	invoice_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	invoice_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	milestones?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	milestones_not?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	milestones_contains?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	milestones_contains_nocase?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	milestones_not_contains?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	milestones_not_contains_nocase?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["MilestonesAdded_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["MilestonesAdded_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["MilestonesAdded_orderBy"]:MilestonesAdded_orderBy;
	/** Defines the order direction, either ascending or descending */
["OrderDirection"]:OrderDirection;
	["Query"]: AliasType<{
invoice?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Invoice"]],
invoices?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Invoice_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Invoice_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Invoice"]],
deposit?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Deposit"]],
deposits?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Deposit_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Deposit_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Deposit"]],
agreement?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Agreement"]],
agreements?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Agreement_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Agreement_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Agreement"]],
release?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Release"]],
releases?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Release_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Release_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Release"]],
withdraw?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Withdraw"]],
withdraws?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Withdraw_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Withdraw_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Withdraw"]],
dispute?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Dispute"]],
disputes?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Dispute_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Dispute_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Dispute"]],
resolution?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Resolution"]],
resolutions?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Resolution_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Resolution_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Resolution"]],
token?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Token"]],
tokens?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Token_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Token_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Token"]],
verified?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Verified"]],
verifieds?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Verified_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Verified_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Verified"]],
milestonesAdded?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["MilestonesAdded"]],
milestonesAddeds?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["MilestonesAdded_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["MilestonesAdded_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["MilestonesAdded"]],
tip?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Tip"]],
tips?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Tip_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Tip_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Tip"]],
_meta?: [{	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>},ValueTypes["_Meta_"]],
		__typename?: boolean | `@${string}`
}>;
	["Release"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	invoice?:ValueTypes["Invoice"],
	milestone?:boolean | `@${string}`,
	amount?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Release_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	txHash?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice?: string | undefined | null | Variable<any, string>,
	invoice_not?: string | undefined | null | Variable<any, string>,
	invoice_gt?: string | undefined | null | Variable<any, string>,
	invoice_lt?: string | undefined | null | Variable<any, string>,
	invoice_gte?: string | undefined | null | Variable<any, string>,
	invoice_lte?: string | undefined | null | Variable<any, string>,
	invoice_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_not_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_contains?: string | undefined | null | Variable<any, string>,
	invoice_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_contains?: string | undefined | null | Variable<any, string>,
	invoice_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_?: ValueTypes["Invoice_filter"] | undefined | null | Variable<any, string>,
	milestone?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	milestone_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	milestone_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	milestone_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	milestone_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	milestone_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	milestone_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	milestone_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amount?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amount_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Release_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Release_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Release_orderBy"]:Release_orderBy;
	["Resolution"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	details?:boolean | `@${string}`,
	ipfsHash?:boolean | `@${string}`,
	invoice?:ValueTypes["Invoice"],
	resolverType?:boolean | `@${string}`,
	resolver?:boolean | `@${string}`,
	clientAward?:boolean | `@${string}`,
	providerAward?:boolean | `@${string}`,
	resolutionDetails?:boolean | `@${string}`,
	resolutionFee?:boolean | `@${string}`,
	ruling?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Resolution_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	txHash?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	details_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	details_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	details_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	ipfsHash?: string | undefined | null | Variable<any, string>,
	ipfsHash_not?: string | undefined | null | Variable<any, string>,
	ipfsHash_gt?: string | undefined | null | Variable<any, string>,
	ipfsHash_lt?: string | undefined | null | Variable<any, string>,
	ipfsHash_gte?: string | undefined | null | Variable<any, string>,
	ipfsHash_lte?: string | undefined | null | Variable<any, string>,
	ipfsHash_in?: Array<string> | undefined | null | Variable<any, string>,
	ipfsHash_not_in?: Array<string> | undefined | null | Variable<any, string>,
	ipfsHash_contains?: string | undefined | null | Variable<any, string>,
	ipfsHash_contains_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_contains?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_starts_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_starts_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_ends_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_ends_with?: string | undefined | null | Variable<any, string>,
	ipfsHash_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice?: string | undefined | null | Variable<any, string>,
	invoice_not?: string | undefined | null | Variable<any, string>,
	invoice_gt?: string | undefined | null | Variable<any, string>,
	invoice_lt?: string | undefined | null | Variable<any, string>,
	invoice_gte?: string | undefined | null | Variable<any, string>,
	invoice_lte?: string | undefined | null | Variable<any, string>,
	invoice_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_not_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_contains?: string | undefined | null | Variable<any, string>,
	invoice_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_contains?: string | undefined | null | Variable<any, string>,
	invoice_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_?: ValueTypes["Invoice_filter"] | undefined | null | Variable<any, string>,
	resolverType?: ValueTypes["ADR"] | undefined | null | Variable<any, string>,
	resolverType_not?: ValueTypes["ADR"] | undefined | null | Variable<any, string>,
	resolverType_in?: Array<ValueTypes["ADR"]> | undefined | null | Variable<any, string>,
	resolverType_not_in?: Array<ValueTypes["ADR"]> | undefined | null | Variable<any, string>,
	resolver?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	resolver_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	resolver_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolver_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	clientAward?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	clientAward_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	clientAward_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	clientAward_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	clientAward_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	clientAward_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	clientAward_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	clientAward_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	providerAward?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	providerAward_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	providerAward_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	providerAward_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	providerAward_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	providerAward_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	providerAward_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	providerAward_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	resolutionDetails?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionDetails_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionDetails_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionDetails_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionDetails_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionDetails_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionDetails_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	resolutionDetails_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	resolutionDetails_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionDetails_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	resolutionFee?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionFee_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionFee_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionFee_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionFee_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionFee_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	resolutionFee_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	resolutionFee_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	ruling?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	ruling_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	ruling_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	ruling_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	ruling_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	ruling_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	ruling_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	ruling_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Resolution_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Resolution_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Resolution_orderBy"]:Resolution_orderBy;
	["Subscription"]: AliasType<{
invoice?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Invoice"]],
invoices?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Invoice_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Invoice_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Invoice"]],
deposit?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Deposit"]],
deposits?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Deposit_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Deposit_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Deposit"]],
agreement?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Agreement"]],
agreements?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Agreement_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Agreement_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Agreement"]],
release?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Release"]],
releases?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Release_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Release_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Release"]],
withdraw?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Withdraw"]],
withdraws?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Withdraw_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Withdraw_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Withdraw"]],
dispute?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Dispute"]],
disputes?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Dispute_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Dispute_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Dispute"]],
resolution?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Resolution"]],
resolutions?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Resolution_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Resolution_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Resolution"]],
token?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Token"]],
tokens?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Token_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Token_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Token"]],
verified?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Verified"]],
verifieds?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Verified_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Verified_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Verified"]],
milestonesAdded?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["MilestonesAdded"]],
milestonesAddeds?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["MilestonesAdded_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["MilestonesAdded_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["MilestonesAdded"]],
tip?: [{	id: string | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Tip"]],
tips?: [{	skip?: number | undefined | null | Variable<any, string>,	first?: number | undefined | null | Variable<any, string>,	orderBy?: ValueTypes["Tip_orderBy"] | undefined | null | Variable<any, string>,	orderDirection?: ValueTypes["OrderDirection"] | undefined | null | Variable<any, string>,	where?: ValueTypes["Tip_filter"] | undefined | null | Variable<any, string>,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ValueTypes["_SubgraphErrorPolicy_"] | Variable<any, string>},ValueTypes["Tip"]],
_meta?: [{	block?: ValueTypes["Block_height"] | undefined | null | Variable<any, string>},ValueTypes["_Meta_"]],
		__typename?: boolean | `@${string}`
}>;
	["Tip"]: AliasType<{
	id?:boolean | `@${string}`,
	sender?:boolean | `@${string}`,
	amount?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Tip_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	sender?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	sender_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	sender_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	sender_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	amount?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amount_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Tip_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Tip_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Tip_orderBy"]:Tip_orderBy;
	["Token"]: AliasType<{
	id?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	symbol?:boolean | `@${string}`,
	decimals?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Token_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	name?: string | undefined | null | Variable<any, string>,
	name_not?: string | undefined | null | Variable<any, string>,
	name_gt?: string | undefined | null | Variable<any, string>,
	name_lt?: string | undefined | null | Variable<any, string>,
	name_gte?: string | undefined | null | Variable<any, string>,
	name_lte?: string | undefined | null | Variable<any, string>,
	name_in?: Array<string> | undefined | null | Variable<any, string>,
	name_not_in?: Array<string> | undefined | null | Variable<any, string>,
	name_contains?: string | undefined | null | Variable<any, string>,
	name_contains_nocase?: string | undefined | null | Variable<any, string>,
	name_not_contains?: string | undefined | null | Variable<any, string>,
	name_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	name_starts_with?: string | undefined | null | Variable<any, string>,
	name_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	name_not_starts_with?: string | undefined | null | Variable<any, string>,
	name_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	name_ends_with?: string | undefined | null | Variable<any, string>,
	name_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	name_not_ends_with?: string | undefined | null | Variable<any, string>,
	name_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	symbol?: string | undefined | null | Variable<any, string>,
	symbol_not?: string | undefined | null | Variable<any, string>,
	symbol_gt?: string | undefined | null | Variable<any, string>,
	symbol_lt?: string | undefined | null | Variable<any, string>,
	symbol_gte?: string | undefined | null | Variable<any, string>,
	symbol_lte?: string | undefined | null | Variable<any, string>,
	symbol_in?: Array<string> | undefined | null | Variable<any, string>,
	symbol_not_in?: Array<string> | undefined | null | Variable<any, string>,
	symbol_contains?: string | undefined | null | Variable<any, string>,
	symbol_contains_nocase?: string | undefined | null | Variable<any, string>,
	symbol_not_contains?: string | undefined | null | Variable<any, string>,
	symbol_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	symbol_starts_with?: string | undefined | null | Variable<any, string>,
	symbol_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	symbol_not_starts_with?: string | undefined | null | Variable<any, string>,
	symbol_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	symbol_ends_with?: string | undefined | null | Variable<any, string>,
	symbol_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	symbol_not_ends_with?: string | undefined | null | Variable<any, string>,
	symbol_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	decimals?: number | undefined | null | Variable<any, string>,
	decimals_not?: number | undefined | null | Variable<any, string>,
	decimals_gt?: number | undefined | null | Variable<any, string>,
	decimals_lt?: number | undefined | null | Variable<any, string>,
	decimals_gte?: number | undefined | null | Variable<any, string>,
	decimals_lte?: number | undefined | null | Variable<any, string>,
	decimals_in?: Array<number> | undefined | null | Variable<any, string>,
	decimals_not_in?: Array<number> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Token_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Token_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Token_orderBy"]:Token_orderBy;
	["Verified"]: AliasType<{
	id?:boolean | `@${string}`,
	client?:boolean | `@${string}`,
	invoice?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Verified_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	client?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	client_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	client_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	client_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	invoice_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	invoice_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Verified_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Verified_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Verified_orderBy"]:Verified_orderBy;
	["Withdraw"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	invoice?:ValueTypes["Invoice"],
	amount?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Withdraw_filter"]: {
	id?: string | undefined | null | Variable<any, string>,
	id_not?: string | undefined | null | Variable<any, string>,
	id_gt?: string | undefined | null | Variable<any, string>,
	id_lt?: string | undefined | null | Variable<any, string>,
	id_gte?: string | undefined | null | Variable<any, string>,
	id_lte?: string | undefined | null | Variable<any, string>,
	id_in?: Array<string> | undefined | null | Variable<any, string>,
	id_not_in?: Array<string> | undefined | null | Variable<any, string>,
	txHash?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lt?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_gte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_lte?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_not_in?: Array<ValueTypes["Bytes"]> | undefined | null | Variable<any, string>,
	txHash_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	txHash_not_contains?: ValueTypes["Bytes"] | undefined | null | Variable<any, string>,
	invoice?: string | undefined | null | Variable<any, string>,
	invoice_not?: string | undefined | null | Variable<any, string>,
	invoice_gt?: string | undefined | null | Variable<any, string>,
	invoice_lt?: string | undefined | null | Variable<any, string>,
	invoice_gte?: string | undefined | null | Variable<any, string>,
	invoice_lte?: string | undefined | null | Variable<any, string>,
	invoice_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_not_in?: Array<string> | undefined | null | Variable<any, string>,
	invoice_contains?: string | undefined | null | Variable<any, string>,
	invoice_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_contains?: string | undefined | null | Variable<any, string>,
	invoice_not_contains_nocase?: string | undefined | null | Variable<any, string>,
	invoice_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with?: string | undefined | null | Variable<any, string>,
	invoice_not_starts_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with?: string | undefined | null | Variable<any, string>,
	invoice_not_ends_with_nocase?: string | undefined | null | Variable<any, string>,
	invoice_?: ValueTypes["Invoice_filter"] | undefined | null | Variable<any, string>,
	amount?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	amount_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	amount_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_not?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lt?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_gte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_lte?: ValueTypes["BigInt"] | undefined | null | Variable<any, string>,
	timestamp_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	timestamp_not_in?: Array<ValueTypes["BigInt"]> | undefined | null | Variable<any, string>,
	/** Filter for the block changed event. */
	_change_block?: ValueTypes["BlockChangedFilter"] | undefined | null | Variable<any, string>,
	and?: Array<ValueTypes["Withdraw_filter"] | undefined | null> | undefined | null | Variable<any, string>,
	or?: Array<ValueTypes["Withdraw_filter"] | undefined | null> | undefined | null | Variable<any, string>
};
	["Withdraw_orderBy"]:Withdraw_orderBy;
	["_Block_"]: AliasType<{
	/** The hash of the block */
	hash?:boolean | `@${string}`,
	/** The block number */
	number?:boolean | `@${string}`,
	/** Integer representation of the timestamp stored in blocks for the chain */
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	/** The type for the top-level _meta field */
["_Meta_"]: AliasType<{
	/** Information about a specific subgraph block. The hash of the block
will be null if the _meta field has a block constraint that asks for
a block number. It will be filled if the _meta field has no block constraint
and therefore asks for the latest  block
 */
	block?:ValueTypes["_Block_"],
	/** The deployment ID */
	deployment?:boolean | `@${string}`,
	/** If `true`, the subgraph encountered indexing errors at some past block */
	hasIndexingErrors?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_SubgraphErrorPolicy_"]:_SubgraphErrorPolicy_
  }

export type ResolverInputTypes = {
    ["ADR"]:ADR;
	["Agreement"]: AliasType<{
	id?:boolean | `@${string}`,
	type?:boolean | `@${string}`,
	src?:boolean | `@${string}`,
	createdAt?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Agreement_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	type?: string | undefined | null,
	type_not?: string | undefined | null,
	type_gt?: string | undefined | null,
	type_lt?: string | undefined | null,
	type_gte?: string | undefined | null,
	type_lte?: string | undefined | null,
	type_in?: Array<string> | undefined | null,
	type_not_in?: Array<string> | undefined | null,
	type_contains?: string | undefined | null,
	type_contains_nocase?: string | undefined | null,
	type_not_contains?: string | undefined | null,
	type_not_contains_nocase?: string | undefined | null,
	type_starts_with?: string | undefined | null,
	type_starts_with_nocase?: string | undefined | null,
	type_not_starts_with?: string | undefined | null,
	type_not_starts_with_nocase?: string | undefined | null,
	type_ends_with?: string | undefined | null,
	type_ends_with_nocase?: string | undefined | null,
	type_not_ends_with?: string | undefined | null,
	type_not_ends_with_nocase?: string | undefined | null,
	src?: string | undefined | null,
	src_not?: string | undefined | null,
	src_gt?: string | undefined | null,
	src_lt?: string | undefined | null,
	src_gte?: string | undefined | null,
	src_lte?: string | undefined | null,
	src_in?: Array<string> | undefined | null,
	src_not_in?: Array<string> | undefined | null,
	src_contains?: string | undefined | null,
	src_contains_nocase?: string | undefined | null,
	src_not_contains?: string | undefined | null,
	src_not_contains_nocase?: string | undefined | null,
	src_starts_with?: string | undefined | null,
	src_starts_with_nocase?: string | undefined | null,
	src_not_starts_with?: string | undefined | null,
	src_not_starts_with_nocase?: string | undefined | null,
	src_ends_with?: string | undefined | null,
	src_ends_with_nocase?: string | undefined | null,
	src_not_ends_with?: string | undefined | null,
	src_not_ends_with_nocase?: string | undefined | null,
	createdAt?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_not?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	createdAt_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Agreement_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Agreement_filter"] | undefined | null> | undefined | null
};
	["Agreement_orderBy"]:Agreement_orderBy;
	["BigDecimal"]:unknown;
	["BigInt"]:unknown;
	["BlockChangedFilter"]: {
	number_gte: number
};
	["Block_height"]: {
	hash?: ResolverInputTypes["Bytes"] | undefined | null,
	number?: number | undefined | null,
	number_gte?: number | undefined | null
};
	["Bytes"]:unknown;
	["Deposit"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	sender?:boolean | `@${string}`,
	invoice?:ResolverInputTypes["Invoice"],
	amount?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Deposit_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	txHash?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	sender?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_not?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	sender_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	sender_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice?: string | undefined | null,
	invoice_not?: string | undefined | null,
	invoice_gt?: string | undefined | null,
	invoice_lt?: string | undefined | null,
	invoice_gte?: string | undefined | null,
	invoice_lte?: string | undefined | null,
	invoice_in?: Array<string> | undefined | null,
	invoice_not_in?: Array<string> | undefined | null,
	invoice_contains?: string | undefined | null,
	invoice_contains_nocase?: string | undefined | null,
	invoice_not_contains?: string | undefined | null,
	invoice_not_contains_nocase?: string | undefined | null,
	invoice_starts_with?: string | undefined | null,
	invoice_starts_with_nocase?: string | undefined | null,
	invoice_not_starts_with?: string | undefined | null,
	invoice_not_starts_with_nocase?: string | undefined | null,
	invoice_ends_with?: string | undefined | null,
	invoice_ends_with_nocase?: string | undefined | null,
	invoice_not_ends_with?: string | undefined | null,
	invoice_not_ends_with_nocase?: string | undefined | null,
	invoice_?: ResolverInputTypes["Invoice_filter"] | undefined | null,
	amount?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_not?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amount_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_not?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Deposit_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Deposit_filter"] | undefined | null> | undefined | null
};
	["Deposit_orderBy"]:Deposit_orderBy;
	["Dispute"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	invoice?:ResolverInputTypes["Invoice"],
	sender?:boolean | `@${string}`,
	details?:boolean | `@${string}`,
	ipfsHash?:boolean | `@${string}`,
	disputeToken?:boolean | `@${string}`,
	disputeFee?:boolean | `@${string}`,
	disputeId?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Dispute_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	txHash?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice?: string | undefined | null,
	invoice_not?: string | undefined | null,
	invoice_gt?: string | undefined | null,
	invoice_lt?: string | undefined | null,
	invoice_gte?: string | undefined | null,
	invoice_lte?: string | undefined | null,
	invoice_in?: Array<string> | undefined | null,
	invoice_not_in?: Array<string> | undefined | null,
	invoice_contains?: string | undefined | null,
	invoice_contains_nocase?: string | undefined | null,
	invoice_not_contains?: string | undefined | null,
	invoice_not_contains_nocase?: string | undefined | null,
	invoice_starts_with?: string | undefined | null,
	invoice_starts_with_nocase?: string | undefined | null,
	invoice_not_starts_with?: string | undefined | null,
	invoice_not_starts_with_nocase?: string | undefined | null,
	invoice_ends_with?: string | undefined | null,
	invoice_ends_with_nocase?: string | undefined | null,
	invoice_not_ends_with?: string | undefined | null,
	invoice_not_ends_with_nocase?: string | undefined | null,
	invoice_?: ResolverInputTypes["Invoice_filter"] | undefined | null,
	sender?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_not?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	sender_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	sender_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	details?: ResolverInputTypes["Bytes"] | undefined | null,
	details_not?: ResolverInputTypes["Bytes"] | undefined | null,
	details_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	details_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	details_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	details_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	details_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	details_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	details_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	details_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	ipfsHash?: string | undefined | null,
	ipfsHash_not?: string | undefined | null,
	ipfsHash_gt?: string | undefined | null,
	ipfsHash_lt?: string | undefined | null,
	ipfsHash_gte?: string | undefined | null,
	ipfsHash_lte?: string | undefined | null,
	ipfsHash_in?: Array<string> | undefined | null,
	ipfsHash_not_in?: Array<string> | undefined | null,
	ipfsHash_contains?: string | undefined | null,
	ipfsHash_contains_nocase?: string | undefined | null,
	ipfsHash_not_contains?: string | undefined | null,
	ipfsHash_not_contains_nocase?: string | undefined | null,
	ipfsHash_starts_with?: string | undefined | null,
	ipfsHash_starts_with_nocase?: string | undefined | null,
	ipfsHash_not_starts_with?: string | undefined | null,
	ipfsHash_not_starts_with_nocase?: string | undefined | null,
	ipfsHash_ends_with?: string | undefined | null,
	ipfsHash_ends_with_nocase?: string | undefined | null,
	ipfsHash_not_ends_with?: string | undefined | null,
	ipfsHash_not_ends_with_nocase?: string | undefined | null,
	disputeToken?: ResolverInputTypes["Bytes"] | undefined | null,
	disputeToken_not?: ResolverInputTypes["Bytes"] | undefined | null,
	disputeToken_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	disputeToken_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	disputeToken_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	disputeToken_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	disputeToken_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	disputeToken_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	disputeToken_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	disputeToken_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	disputeFee?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeFee_not?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeFee_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeFee_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeFee_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeFee_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeFee_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	disputeFee_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	disputeId?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_not?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	disputeId_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_not?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Dispute_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Dispute_filter"] | undefined | null> | undefined | null
};
	["Dispute_orderBy"]:Dispute_orderBy;
	/** 8 bytes signed integer
 */
["Int8"]:unknown;
	["Invoice"]: AliasType<{
	id?:boolean | `@${string}`,
	network?:boolean | `@${string}`,
	address?:boolean | `@${string}`,
	factoryAddress?:boolean | `@${string}`,
	token?:boolean | `@${string}`,
	client?:boolean | `@${string}`,
	provider?:boolean | `@${string}`,
	resolverType?:boolean | `@${string}`,
	resolver?:boolean | `@${string}`,
	resolutionRate?:boolean | `@${string}`,
	isLocked?:boolean | `@${string}`,
	amounts?:boolean | `@${string}`,
	numMilestones?:boolean | `@${string}`,
	currentMilestone?:boolean | `@${string}`,
	total?:boolean | `@${string}`,
	released?:boolean | `@${string}`,
	createdAt?:boolean | `@${string}`,
	creationTxHash?:boolean | `@${string}`,
	terminationTime?:boolean | `@${string}`,
	details?:boolean | `@${string}`,
	ipfsHash?:boolean | `@${string}`,
	disputeId?:boolean | `@${string}`,
	projectName?:boolean | `@${string}`,
	projectDescription?:boolean | `@${string}`,
projectAgreement?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Agreement_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Agreement_filter"] | undefined | null},ResolverInputTypes["Agreement"]],
	startDate?:boolean | `@${string}`,
	endDate?:boolean | `@${string}`,
deposits?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Deposit_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Deposit_filter"] | undefined | null},ResolverInputTypes["Deposit"]],
withdraws?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Withdraw_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Withdraw_filter"] | undefined | null},ResolverInputTypes["Withdraw"]],
releases?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Release_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Release_filter"] | undefined | null},ResolverInputTypes["Release"]],
disputes?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Dispute_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Dispute_filter"] | undefined | null},ResolverInputTypes["Dispute"]],
resolutions?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Resolution_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Resolution_filter"] | undefined | null},ResolverInputTypes["Resolution"]],
	tokenMetadata?:ResolverInputTypes["Token"],
verified?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Verified_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Verified_filter"] | undefined | null},ResolverInputTypes["Verified"]],
milestonesAdded?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["MilestonesAdded_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["MilestonesAdded_filter"] | undefined | null},ResolverInputTypes["MilestonesAdded"]],
	invoiceType?:boolean | `@${string}`,
	version?:boolean | `@${string}`,
	lateFee?:boolean | `@${string}`,
	lateFeeTimeInterval?:boolean | `@${string}`,
tipAmount?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Tip_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Tip_filter"] | undefined | null},ResolverInputTypes["Tip"]],
	deadline?:boolean | `@${string}`,
	fulfilled?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Invoice_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	network?: string | undefined | null,
	network_not?: string | undefined | null,
	network_gt?: string | undefined | null,
	network_lt?: string | undefined | null,
	network_gte?: string | undefined | null,
	network_lte?: string | undefined | null,
	network_in?: Array<string> | undefined | null,
	network_not_in?: Array<string> | undefined | null,
	network_contains?: string | undefined | null,
	network_contains_nocase?: string | undefined | null,
	network_not_contains?: string | undefined | null,
	network_not_contains_nocase?: string | undefined | null,
	network_starts_with?: string | undefined | null,
	network_starts_with_nocase?: string | undefined | null,
	network_not_starts_with?: string | undefined | null,
	network_not_starts_with_nocase?: string | undefined | null,
	network_ends_with?: string | undefined | null,
	network_ends_with_nocase?: string | undefined | null,
	network_not_ends_with?: string | undefined | null,
	network_not_ends_with_nocase?: string | undefined | null,
	address?: ResolverInputTypes["Bytes"] | undefined | null,
	address_not?: ResolverInputTypes["Bytes"] | undefined | null,
	address_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	address_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	address_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	address_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	address_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	address_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	address_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	address_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	factoryAddress?: ResolverInputTypes["Bytes"] | undefined | null,
	factoryAddress_not?: ResolverInputTypes["Bytes"] | undefined | null,
	factoryAddress_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	factoryAddress_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	factoryAddress_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	factoryAddress_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	factoryAddress_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	factoryAddress_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	factoryAddress_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	factoryAddress_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	token?: ResolverInputTypes["Bytes"] | undefined | null,
	token_not?: ResolverInputTypes["Bytes"] | undefined | null,
	token_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	token_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	token_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	token_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	token_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	token_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	token_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	token_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	client?: ResolverInputTypes["Bytes"] | undefined | null,
	client_not?: ResolverInputTypes["Bytes"] | undefined | null,
	client_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	client_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	client_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	client_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	client_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	client_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	client_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	client_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	provider?: ResolverInputTypes["Bytes"] | undefined | null,
	provider_not?: ResolverInputTypes["Bytes"] | undefined | null,
	provider_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	provider_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	provider_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	provider_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	provider_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	provider_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	provider_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	provider_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	resolverType?: ResolverInputTypes["ADR"] | undefined | null,
	resolverType_not?: ResolverInputTypes["ADR"] | undefined | null,
	resolverType_in?: Array<ResolverInputTypes["ADR"]> | undefined | null,
	resolverType_not_in?: Array<ResolverInputTypes["ADR"]> | undefined | null,
	resolver?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_not?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	resolver_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	resolver_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionRate?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionRate_not?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionRate_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionRate_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionRate_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionRate_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionRate_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	resolutionRate_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	isLocked?: boolean | undefined | null,
	isLocked_not?: boolean | undefined | null,
	isLocked_in?: Array<boolean> | undefined | null,
	isLocked_not_in?: Array<boolean> | undefined | null,
	amounts?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amounts_not?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amounts_contains?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amounts_contains_nocase?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amounts_not_contains?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amounts_not_contains_nocase?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	numMilestones?: number | undefined | null,
	numMilestones_not?: number | undefined | null,
	numMilestones_gt?: number | undefined | null,
	numMilestones_lt?: number | undefined | null,
	numMilestones_gte?: number | undefined | null,
	numMilestones_lte?: number | undefined | null,
	numMilestones_in?: Array<number> | undefined | null,
	numMilestones_not_in?: Array<number> | undefined | null,
	currentMilestone?: ResolverInputTypes["BigInt"] | undefined | null,
	currentMilestone_not?: ResolverInputTypes["BigInt"] | undefined | null,
	currentMilestone_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	currentMilestone_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	currentMilestone_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	currentMilestone_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	currentMilestone_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	currentMilestone_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	total?: ResolverInputTypes["BigInt"] | undefined | null,
	total_not?: ResolverInputTypes["BigInt"] | undefined | null,
	total_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	total_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	total_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	total_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	total_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	total_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	released?: ResolverInputTypes["BigInt"] | undefined | null,
	released_not?: ResolverInputTypes["BigInt"] | undefined | null,
	released_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	released_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	released_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	released_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	released_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	released_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	createdAt?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_not?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	createdAt_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	createdAt_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	creationTxHash?: ResolverInputTypes["Bytes"] | undefined | null,
	creationTxHash_not?: ResolverInputTypes["Bytes"] | undefined | null,
	creationTxHash_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	creationTxHash_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	creationTxHash_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	creationTxHash_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	creationTxHash_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	creationTxHash_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	creationTxHash_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	creationTxHash_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	terminationTime?: ResolverInputTypes["BigInt"] | undefined | null,
	terminationTime_not?: ResolverInputTypes["BigInt"] | undefined | null,
	terminationTime_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	terminationTime_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	terminationTime_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	terminationTime_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	terminationTime_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	terminationTime_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	details?: ResolverInputTypes["Bytes"] | undefined | null,
	details_not?: ResolverInputTypes["Bytes"] | undefined | null,
	details_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	details_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	details_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	details_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	details_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	details_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	details_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	details_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	ipfsHash?: string | undefined | null,
	ipfsHash_not?: string | undefined | null,
	ipfsHash_gt?: string | undefined | null,
	ipfsHash_lt?: string | undefined | null,
	ipfsHash_gte?: string | undefined | null,
	ipfsHash_lte?: string | undefined | null,
	ipfsHash_in?: Array<string> | undefined | null,
	ipfsHash_not_in?: Array<string> | undefined | null,
	ipfsHash_contains?: string | undefined | null,
	ipfsHash_contains_nocase?: string | undefined | null,
	ipfsHash_not_contains?: string | undefined | null,
	ipfsHash_not_contains_nocase?: string | undefined | null,
	ipfsHash_starts_with?: string | undefined | null,
	ipfsHash_starts_with_nocase?: string | undefined | null,
	ipfsHash_not_starts_with?: string | undefined | null,
	ipfsHash_not_starts_with_nocase?: string | undefined | null,
	ipfsHash_ends_with?: string | undefined | null,
	ipfsHash_ends_with_nocase?: string | undefined | null,
	ipfsHash_not_ends_with?: string | undefined | null,
	ipfsHash_not_ends_with_nocase?: string | undefined | null,
	disputeId?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_not?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	disputeId_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	disputeId_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	projectName?: string | undefined | null,
	projectName_not?: string | undefined | null,
	projectName_gt?: string | undefined | null,
	projectName_lt?: string | undefined | null,
	projectName_gte?: string | undefined | null,
	projectName_lte?: string | undefined | null,
	projectName_in?: Array<string> | undefined | null,
	projectName_not_in?: Array<string> | undefined | null,
	projectName_contains?: string | undefined | null,
	projectName_contains_nocase?: string | undefined | null,
	projectName_not_contains?: string | undefined | null,
	projectName_not_contains_nocase?: string | undefined | null,
	projectName_starts_with?: string | undefined | null,
	projectName_starts_with_nocase?: string | undefined | null,
	projectName_not_starts_with?: string | undefined | null,
	projectName_not_starts_with_nocase?: string | undefined | null,
	projectName_ends_with?: string | undefined | null,
	projectName_ends_with_nocase?: string | undefined | null,
	projectName_not_ends_with?: string | undefined | null,
	projectName_not_ends_with_nocase?: string | undefined | null,
	projectDescription?: string | undefined | null,
	projectDescription_not?: string | undefined | null,
	projectDescription_gt?: string | undefined | null,
	projectDescription_lt?: string | undefined | null,
	projectDescription_gte?: string | undefined | null,
	projectDescription_lte?: string | undefined | null,
	projectDescription_in?: Array<string> | undefined | null,
	projectDescription_not_in?: Array<string> | undefined | null,
	projectDescription_contains?: string | undefined | null,
	projectDescription_contains_nocase?: string | undefined | null,
	projectDescription_not_contains?: string | undefined | null,
	projectDescription_not_contains_nocase?: string | undefined | null,
	projectDescription_starts_with?: string | undefined | null,
	projectDescription_starts_with_nocase?: string | undefined | null,
	projectDescription_not_starts_with?: string | undefined | null,
	projectDescription_not_starts_with_nocase?: string | undefined | null,
	projectDescription_ends_with?: string | undefined | null,
	projectDescription_ends_with_nocase?: string | undefined | null,
	projectDescription_not_ends_with?: string | undefined | null,
	projectDescription_not_ends_with_nocase?: string | undefined | null,
	projectAgreement?: Array<string> | undefined | null,
	projectAgreement_not?: Array<string> | undefined | null,
	projectAgreement_contains?: Array<string> | undefined | null,
	projectAgreement_contains_nocase?: Array<string> | undefined | null,
	projectAgreement_not_contains?: Array<string> | undefined | null,
	projectAgreement_not_contains_nocase?: Array<string> | undefined | null,
	projectAgreement_?: ResolverInputTypes["Agreement_filter"] | undefined | null,
	startDate?: ResolverInputTypes["BigInt"] | undefined | null,
	startDate_not?: ResolverInputTypes["BigInt"] | undefined | null,
	startDate_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	startDate_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	startDate_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	startDate_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	startDate_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	startDate_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	endDate?: ResolverInputTypes["BigInt"] | undefined | null,
	endDate_not?: ResolverInputTypes["BigInt"] | undefined | null,
	endDate_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	endDate_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	endDate_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	endDate_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	endDate_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	endDate_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	deposits?: Array<string> | undefined | null,
	deposits_not?: Array<string> | undefined | null,
	deposits_contains?: Array<string> | undefined | null,
	deposits_contains_nocase?: Array<string> | undefined | null,
	deposits_not_contains?: Array<string> | undefined | null,
	deposits_not_contains_nocase?: Array<string> | undefined | null,
	deposits_?: ResolverInputTypes["Deposit_filter"] | undefined | null,
	withdraws?: Array<string> | undefined | null,
	withdraws_not?: Array<string> | undefined | null,
	withdraws_contains?: Array<string> | undefined | null,
	withdraws_contains_nocase?: Array<string> | undefined | null,
	withdraws_not_contains?: Array<string> | undefined | null,
	withdraws_not_contains_nocase?: Array<string> | undefined | null,
	withdraws_?: ResolverInputTypes["Withdraw_filter"] | undefined | null,
	releases?: Array<string> | undefined | null,
	releases_not?: Array<string> | undefined | null,
	releases_contains?: Array<string> | undefined | null,
	releases_contains_nocase?: Array<string> | undefined | null,
	releases_not_contains?: Array<string> | undefined | null,
	releases_not_contains_nocase?: Array<string> | undefined | null,
	releases_?: ResolverInputTypes["Release_filter"] | undefined | null,
	disputes?: Array<string> | undefined | null,
	disputes_not?: Array<string> | undefined | null,
	disputes_contains?: Array<string> | undefined | null,
	disputes_contains_nocase?: Array<string> | undefined | null,
	disputes_not_contains?: Array<string> | undefined | null,
	disputes_not_contains_nocase?: Array<string> | undefined | null,
	disputes_?: ResolverInputTypes["Dispute_filter"] | undefined | null,
	resolutions?: Array<string> | undefined | null,
	resolutions_not?: Array<string> | undefined | null,
	resolutions_contains?: Array<string> | undefined | null,
	resolutions_contains_nocase?: Array<string> | undefined | null,
	resolutions_not_contains?: Array<string> | undefined | null,
	resolutions_not_contains_nocase?: Array<string> | undefined | null,
	resolutions_?: ResolverInputTypes["Resolution_filter"] | undefined | null,
	tokenMetadata?: string | undefined | null,
	tokenMetadata_not?: string | undefined | null,
	tokenMetadata_gt?: string | undefined | null,
	tokenMetadata_lt?: string | undefined | null,
	tokenMetadata_gte?: string | undefined | null,
	tokenMetadata_lte?: string | undefined | null,
	tokenMetadata_in?: Array<string> | undefined | null,
	tokenMetadata_not_in?: Array<string> | undefined | null,
	tokenMetadata_contains?: string | undefined | null,
	tokenMetadata_contains_nocase?: string | undefined | null,
	tokenMetadata_not_contains?: string | undefined | null,
	tokenMetadata_not_contains_nocase?: string | undefined | null,
	tokenMetadata_starts_with?: string | undefined | null,
	tokenMetadata_starts_with_nocase?: string | undefined | null,
	tokenMetadata_not_starts_with?: string | undefined | null,
	tokenMetadata_not_starts_with_nocase?: string | undefined | null,
	tokenMetadata_ends_with?: string | undefined | null,
	tokenMetadata_ends_with_nocase?: string | undefined | null,
	tokenMetadata_not_ends_with?: string | undefined | null,
	tokenMetadata_not_ends_with_nocase?: string | undefined | null,
	tokenMetadata_?: ResolverInputTypes["Token_filter"] | undefined | null,
	verified?: Array<string> | undefined | null,
	verified_not?: Array<string> | undefined | null,
	verified_contains?: Array<string> | undefined | null,
	verified_contains_nocase?: Array<string> | undefined | null,
	verified_not_contains?: Array<string> | undefined | null,
	verified_not_contains_nocase?: Array<string> | undefined | null,
	verified_?: ResolverInputTypes["Verified_filter"] | undefined | null,
	milestonesAdded?: Array<string> | undefined | null,
	milestonesAdded_not?: Array<string> | undefined | null,
	milestonesAdded_contains?: Array<string> | undefined | null,
	milestonesAdded_contains_nocase?: Array<string> | undefined | null,
	milestonesAdded_not_contains?: Array<string> | undefined | null,
	milestonesAdded_not_contains_nocase?: Array<string> | undefined | null,
	milestonesAdded_?: ResolverInputTypes["MilestonesAdded_filter"] | undefined | null,
	invoiceType?: string | undefined | null,
	invoiceType_not?: string | undefined | null,
	invoiceType_gt?: string | undefined | null,
	invoiceType_lt?: string | undefined | null,
	invoiceType_gte?: string | undefined | null,
	invoiceType_lte?: string | undefined | null,
	invoiceType_in?: Array<string> | undefined | null,
	invoiceType_not_in?: Array<string> | undefined | null,
	invoiceType_contains?: string | undefined | null,
	invoiceType_contains_nocase?: string | undefined | null,
	invoiceType_not_contains?: string | undefined | null,
	invoiceType_not_contains_nocase?: string | undefined | null,
	invoiceType_starts_with?: string | undefined | null,
	invoiceType_starts_with_nocase?: string | undefined | null,
	invoiceType_not_starts_with?: string | undefined | null,
	invoiceType_not_starts_with_nocase?: string | undefined | null,
	invoiceType_ends_with?: string | undefined | null,
	invoiceType_ends_with_nocase?: string | undefined | null,
	invoiceType_not_ends_with?: string | undefined | null,
	invoiceType_not_ends_with_nocase?: string | undefined | null,
	version?: ResolverInputTypes["BigInt"] | undefined | null,
	version_not?: ResolverInputTypes["BigInt"] | undefined | null,
	version_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	version_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	version_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	version_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	version_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	version_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	lateFee?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFee_not?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFee_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFee_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFee_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFee_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFee_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	lateFee_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	lateFeeTimeInterval?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFeeTimeInterval_not?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFeeTimeInterval_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFeeTimeInterval_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFeeTimeInterval_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFeeTimeInterval_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	lateFeeTimeInterval_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	lateFeeTimeInterval_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	tipAmount?: Array<string> | undefined | null,
	tipAmount_not?: Array<string> | undefined | null,
	tipAmount_contains?: Array<string> | undefined | null,
	tipAmount_contains_nocase?: Array<string> | undefined | null,
	tipAmount_not_contains?: Array<string> | undefined | null,
	tipAmount_not_contains_nocase?: Array<string> | undefined | null,
	tipAmount_?: ResolverInputTypes["Tip_filter"] | undefined | null,
	deadline?: ResolverInputTypes["BigInt"] | undefined | null,
	deadline_not?: ResolverInputTypes["BigInt"] | undefined | null,
	deadline_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	deadline_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	deadline_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	deadline_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	deadline_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	deadline_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	fulfilled?: boolean | undefined | null,
	fulfilled_not?: boolean | undefined | null,
	fulfilled_in?: Array<boolean> | undefined | null,
	fulfilled_not_in?: Array<boolean> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Invoice_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Invoice_filter"] | undefined | null> | undefined | null
};
	["Invoice_orderBy"]:Invoice_orderBy;
	["MilestonesAdded"]: AliasType<{
	id?:boolean | `@${string}`,
	sender?:boolean | `@${string}`,
	invoice?:boolean | `@${string}`,
	milestones?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["MilestonesAdded_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	sender?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_not?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	sender_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	sender_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_not?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	invoice_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	invoice_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	milestones?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	milestones_not?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	milestones_contains?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	milestones_contains_nocase?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	milestones_not_contains?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	milestones_not_contains_nocase?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["MilestonesAdded_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["MilestonesAdded_filter"] | undefined | null> | undefined | null
};
	["MilestonesAdded_orderBy"]:MilestonesAdded_orderBy;
	/** Defines the order direction, either ascending or descending */
["OrderDirection"]:OrderDirection;
	["Query"]: AliasType<{
invoice?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Invoice"]],
invoices?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Invoice_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Invoice_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Invoice"]],
deposit?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Deposit"]],
deposits?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Deposit_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Deposit_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Deposit"]],
agreement?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Agreement"]],
agreements?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Agreement_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Agreement_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Agreement"]],
release?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Release"]],
releases?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Release_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Release_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Release"]],
withdraw?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Withdraw"]],
withdraws?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Withdraw_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Withdraw_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Withdraw"]],
dispute?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Dispute"]],
disputes?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Dispute_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Dispute_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Dispute"]],
resolution?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Resolution"]],
resolutions?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Resolution_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Resolution_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Resolution"]],
token?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Token"]],
tokens?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Token_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Token_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Token"]],
verified?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Verified"]],
verifieds?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Verified_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Verified_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Verified"]],
milestonesAdded?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["MilestonesAdded"]],
milestonesAddeds?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["MilestonesAdded_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["MilestonesAdded_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["MilestonesAdded"]],
tip?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Tip"]],
tips?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Tip_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Tip_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Tip"]],
_meta?: [{	block?: ResolverInputTypes["Block_height"] | undefined | null},ResolverInputTypes["_Meta_"]],
		__typename?: boolean | `@${string}`
}>;
	["Release"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	invoice?:ResolverInputTypes["Invoice"],
	milestone?:boolean | `@${string}`,
	amount?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Release_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	txHash?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice?: string | undefined | null,
	invoice_not?: string | undefined | null,
	invoice_gt?: string | undefined | null,
	invoice_lt?: string | undefined | null,
	invoice_gte?: string | undefined | null,
	invoice_lte?: string | undefined | null,
	invoice_in?: Array<string> | undefined | null,
	invoice_not_in?: Array<string> | undefined | null,
	invoice_contains?: string | undefined | null,
	invoice_contains_nocase?: string | undefined | null,
	invoice_not_contains?: string | undefined | null,
	invoice_not_contains_nocase?: string | undefined | null,
	invoice_starts_with?: string | undefined | null,
	invoice_starts_with_nocase?: string | undefined | null,
	invoice_not_starts_with?: string | undefined | null,
	invoice_not_starts_with_nocase?: string | undefined | null,
	invoice_ends_with?: string | undefined | null,
	invoice_ends_with_nocase?: string | undefined | null,
	invoice_not_ends_with?: string | undefined | null,
	invoice_not_ends_with_nocase?: string | undefined | null,
	invoice_?: ResolverInputTypes["Invoice_filter"] | undefined | null,
	milestone?: ResolverInputTypes["BigInt"] | undefined | null,
	milestone_not?: ResolverInputTypes["BigInt"] | undefined | null,
	milestone_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	milestone_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	milestone_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	milestone_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	milestone_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	milestone_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amount?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_not?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amount_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_not?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Release_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Release_filter"] | undefined | null> | undefined | null
};
	["Release_orderBy"]:Release_orderBy;
	["Resolution"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	details?:boolean | `@${string}`,
	ipfsHash?:boolean | `@${string}`,
	invoice?:ResolverInputTypes["Invoice"],
	resolverType?:boolean | `@${string}`,
	resolver?:boolean | `@${string}`,
	clientAward?:boolean | `@${string}`,
	providerAward?:boolean | `@${string}`,
	resolutionDetails?:boolean | `@${string}`,
	resolutionFee?:boolean | `@${string}`,
	ruling?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Resolution_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	txHash?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	details?: ResolverInputTypes["Bytes"] | undefined | null,
	details_not?: ResolverInputTypes["Bytes"] | undefined | null,
	details_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	details_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	details_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	details_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	details_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	details_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	details_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	details_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	ipfsHash?: string | undefined | null,
	ipfsHash_not?: string | undefined | null,
	ipfsHash_gt?: string | undefined | null,
	ipfsHash_lt?: string | undefined | null,
	ipfsHash_gte?: string | undefined | null,
	ipfsHash_lte?: string | undefined | null,
	ipfsHash_in?: Array<string> | undefined | null,
	ipfsHash_not_in?: Array<string> | undefined | null,
	ipfsHash_contains?: string | undefined | null,
	ipfsHash_contains_nocase?: string | undefined | null,
	ipfsHash_not_contains?: string | undefined | null,
	ipfsHash_not_contains_nocase?: string | undefined | null,
	ipfsHash_starts_with?: string | undefined | null,
	ipfsHash_starts_with_nocase?: string | undefined | null,
	ipfsHash_not_starts_with?: string | undefined | null,
	ipfsHash_not_starts_with_nocase?: string | undefined | null,
	ipfsHash_ends_with?: string | undefined | null,
	ipfsHash_ends_with_nocase?: string | undefined | null,
	ipfsHash_not_ends_with?: string | undefined | null,
	ipfsHash_not_ends_with_nocase?: string | undefined | null,
	invoice?: string | undefined | null,
	invoice_not?: string | undefined | null,
	invoice_gt?: string | undefined | null,
	invoice_lt?: string | undefined | null,
	invoice_gte?: string | undefined | null,
	invoice_lte?: string | undefined | null,
	invoice_in?: Array<string> | undefined | null,
	invoice_not_in?: Array<string> | undefined | null,
	invoice_contains?: string | undefined | null,
	invoice_contains_nocase?: string | undefined | null,
	invoice_not_contains?: string | undefined | null,
	invoice_not_contains_nocase?: string | undefined | null,
	invoice_starts_with?: string | undefined | null,
	invoice_starts_with_nocase?: string | undefined | null,
	invoice_not_starts_with?: string | undefined | null,
	invoice_not_starts_with_nocase?: string | undefined | null,
	invoice_ends_with?: string | undefined | null,
	invoice_ends_with_nocase?: string | undefined | null,
	invoice_not_ends_with?: string | undefined | null,
	invoice_not_ends_with_nocase?: string | undefined | null,
	invoice_?: ResolverInputTypes["Invoice_filter"] | undefined | null,
	resolverType?: ResolverInputTypes["ADR"] | undefined | null,
	resolverType_not?: ResolverInputTypes["ADR"] | undefined | null,
	resolverType_in?: Array<ResolverInputTypes["ADR"]> | undefined | null,
	resolverType_not_in?: Array<ResolverInputTypes["ADR"]> | undefined | null,
	resolver?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_not?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	resolver_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	resolver_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	resolver_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	clientAward?: ResolverInputTypes["BigInt"] | undefined | null,
	clientAward_not?: ResolverInputTypes["BigInt"] | undefined | null,
	clientAward_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	clientAward_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	clientAward_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	clientAward_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	clientAward_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	clientAward_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	providerAward?: ResolverInputTypes["BigInt"] | undefined | null,
	providerAward_not?: ResolverInputTypes["BigInt"] | undefined | null,
	providerAward_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	providerAward_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	providerAward_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	providerAward_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	providerAward_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	providerAward_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	resolutionDetails?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionDetails_not?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionDetails_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionDetails_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionDetails_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionDetails_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionDetails_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	resolutionDetails_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	resolutionDetails_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionDetails_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	resolutionFee?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionFee_not?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionFee_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionFee_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionFee_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionFee_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	resolutionFee_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	resolutionFee_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	ruling?: ResolverInputTypes["BigInt"] | undefined | null,
	ruling_not?: ResolverInputTypes["BigInt"] | undefined | null,
	ruling_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	ruling_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	ruling_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	ruling_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	ruling_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	ruling_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_not?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Resolution_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Resolution_filter"] | undefined | null> | undefined | null
};
	["Resolution_orderBy"]:Resolution_orderBy;
	["Subscription"]: AliasType<{
invoice?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Invoice"]],
invoices?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Invoice_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Invoice_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Invoice"]],
deposit?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Deposit"]],
deposits?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Deposit_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Deposit_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Deposit"]],
agreement?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Agreement"]],
agreements?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Agreement_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Agreement_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Agreement"]],
release?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Release"]],
releases?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Release_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Release_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Release"]],
withdraw?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Withdraw"]],
withdraws?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Withdraw_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Withdraw_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Withdraw"]],
dispute?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Dispute"]],
disputes?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Dispute_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Dispute_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Dispute"]],
resolution?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Resolution"]],
resolutions?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Resolution_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Resolution_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Resolution"]],
token?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Token"]],
tokens?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Token_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Token_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Token"]],
verified?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Verified"]],
verifieds?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Verified_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Verified_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Verified"]],
milestonesAdded?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["MilestonesAdded"]],
milestonesAddeds?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["MilestonesAdded_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["MilestonesAdded_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["MilestonesAdded"]],
tip?: [{	id: string,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Tip"]],
tips?: [{	skip?: number | undefined | null,	first?: number | undefined | null,	orderBy?: ResolverInputTypes["Tip_orderBy"] | undefined | null,	orderDirection?: ResolverInputTypes["OrderDirection"] | undefined | null,	where?: ResolverInputTypes["Tip_filter"] | undefined | null,	/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
	block?: ResolverInputTypes["Block_height"] | undefined | null,	/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
	subgraphError: ResolverInputTypes["_SubgraphErrorPolicy_"]},ResolverInputTypes["Tip"]],
_meta?: [{	block?: ResolverInputTypes["Block_height"] | undefined | null},ResolverInputTypes["_Meta_"]],
		__typename?: boolean | `@${string}`
}>;
	["Tip"]: AliasType<{
	id?:boolean | `@${string}`,
	sender?:boolean | `@${string}`,
	amount?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Tip_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	sender?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_not?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	sender_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	sender_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	sender_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	amount?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_not?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amount_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Tip_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Tip_filter"] | undefined | null> | undefined | null
};
	["Tip_orderBy"]:Tip_orderBy;
	["Token"]: AliasType<{
	id?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	symbol?:boolean | `@${string}`,
	decimals?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Token_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	name?: string | undefined | null,
	name_not?: string | undefined | null,
	name_gt?: string | undefined | null,
	name_lt?: string | undefined | null,
	name_gte?: string | undefined | null,
	name_lte?: string | undefined | null,
	name_in?: Array<string> | undefined | null,
	name_not_in?: Array<string> | undefined | null,
	name_contains?: string | undefined | null,
	name_contains_nocase?: string | undefined | null,
	name_not_contains?: string | undefined | null,
	name_not_contains_nocase?: string | undefined | null,
	name_starts_with?: string | undefined | null,
	name_starts_with_nocase?: string | undefined | null,
	name_not_starts_with?: string | undefined | null,
	name_not_starts_with_nocase?: string | undefined | null,
	name_ends_with?: string | undefined | null,
	name_ends_with_nocase?: string | undefined | null,
	name_not_ends_with?: string | undefined | null,
	name_not_ends_with_nocase?: string | undefined | null,
	symbol?: string | undefined | null,
	symbol_not?: string | undefined | null,
	symbol_gt?: string | undefined | null,
	symbol_lt?: string | undefined | null,
	symbol_gte?: string | undefined | null,
	symbol_lte?: string | undefined | null,
	symbol_in?: Array<string> | undefined | null,
	symbol_not_in?: Array<string> | undefined | null,
	symbol_contains?: string | undefined | null,
	symbol_contains_nocase?: string | undefined | null,
	symbol_not_contains?: string | undefined | null,
	symbol_not_contains_nocase?: string | undefined | null,
	symbol_starts_with?: string | undefined | null,
	symbol_starts_with_nocase?: string | undefined | null,
	symbol_not_starts_with?: string | undefined | null,
	symbol_not_starts_with_nocase?: string | undefined | null,
	symbol_ends_with?: string | undefined | null,
	symbol_ends_with_nocase?: string | undefined | null,
	symbol_not_ends_with?: string | undefined | null,
	symbol_not_ends_with_nocase?: string | undefined | null,
	decimals?: number | undefined | null,
	decimals_not?: number | undefined | null,
	decimals_gt?: number | undefined | null,
	decimals_lt?: number | undefined | null,
	decimals_gte?: number | undefined | null,
	decimals_lte?: number | undefined | null,
	decimals_in?: Array<number> | undefined | null,
	decimals_not_in?: Array<number> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Token_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Token_filter"] | undefined | null> | undefined | null
};
	["Token_orderBy"]:Token_orderBy;
	["Verified"]: AliasType<{
	id?:boolean | `@${string}`,
	client?:boolean | `@${string}`,
	invoice?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Verified_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	client?: ResolverInputTypes["Bytes"] | undefined | null,
	client_not?: ResolverInputTypes["Bytes"] | undefined | null,
	client_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	client_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	client_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	client_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	client_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	client_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	client_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	client_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_not?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	invoice_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	invoice_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Verified_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Verified_filter"] | undefined | null> | undefined | null
};
	["Verified_orderBy"]:Verified_orderBy;
	["Withdraw"]: AliasType<{
	id?:boolean | `@${string}`,
	txHash?:boolean | `@${string}`,
	invoice?:ResolverInputTypes["Invoice"],
	amount?:boolean | `@${string}`,
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Withdraw_filter"]: {
	id?: string | undefined | null,
	id_not?: string | undefined | null,
	id_gt?: string | undefined | null,
	id_lt?: string | undefined | null,
	id_gte?: string | undefined | null,
	id_lte?: string | undefined | null,
	id_in?: Array<string> | undefined | null,
	id_not_in?: Array<string> | undefined | null,
	txHash?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lt?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_gte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_lte?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_not_in?: Array<ResolverInputTypes["Bytes"]> | undefined | null,
	txHash_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	txHash_not_contains?: ResolverInputTypes["Bytes"] | undefined | null,
	invoice?: string | undefined | null,
	invoice_not?: string | undefined | null,
	invoice_gt?: string | undefined | null,
	invoice_lt?: string | undefined | null,
	invoice_gte?: string | undefined | null,
	invoice_lte?: string | undefined | null,
	invoice_in?: Array<string> | undefined | null,
	invoice_not_in?: Array<string> | undefined | null,
	invoice_contains?: string | undefined | null,
	invoice_contains_nocase?: string | undefined | null,
	invoice_not_contains?: string | undefined | null,
	invoice_not_contains_nocase?: string | undefined | null,
	invoice_starts_with?: string | undefined | null,
	invoice_starts_with_nocase?: string | undefined | null,
	invoice_not_starts_with?: string | undefined | null,
	invoice_not_starts_with_nocase?: string | undefined | null,
	invoice_ends_with?: string | undefined | null,
	invoice_ends_with_nocase?: string | undefined | null,
	invoice_not_ends_with?: string | undefined | null,
	invoice_not_ends_with_nocase?: string | undefined | null,
	invoice_?: ResolverInputTypes["Invoice_filter"] | undefined | null,
	amount?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_not?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	amount_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	amount_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_not?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lt?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_gte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_lte?: ResolverInputTypes["BigInt"] | undefined | null,
	timestamp_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	timestamp_not_in?: Array<ResolverInputTypes["BigInt"]> | undefined | null,
	/** Filter for the block changed event. */
	_change_block?: ResolverInputTypes["BlockChangedFilter"] | undefined | null,
	and?: Array<ResolverInputTypes["Withdraw_filter"] | undefined | null> | undefined | null,
	or?: Array<ResolverInputTypes["Withdraw_filter"] | undefined | null> | undefined | null
};
	["Withdraw_orderBy"]:Withdraw_orderBy;
	["_Block_"]: AliasType<{
	/** The hash of the block */
	hash?:boolean | `@${string}`,
	/** The block number */
	number?:boolean | `@${string}`,
	/** Integer representation of the timestamp stored in blocks for the chain */
	timestamp?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	/** The type for the top-level _meta field */
["_Meta_"]: AliasType<{
	/** Information about a specific subgraph block. The hash of the block
will be null if the _meta field has a block constraint that asks for
a block number. It will be filled if the _meta field has no block constraint
and therefore asks for the latest  block
 */
	block?:ResolverInputTypes["_Block_"],
	/** The deployment ID */
	deployment?:boolean | `@${string}`,
	/** If `true`, the subgraph encountered indexing errors at some past block */
	hasIndexingErrors?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["_SubgraphErrorPolicy_"]:_SubgraphErrorPolicy_;
	["schema"]: AliasType<{
	query?:ResolverInputTypes["Query"],
	subscription?:ResolverInputTypes["Subscription"],
		__typename?: boolean | `@${string}`
}>
  }

export type ModelTypes = {
    ["ADR"]:ADR;
	["Agreement"]: {
		id: string,
	type: string,
	src: string,
	createdAt: ModelTypes["BigInt"]
};
	["Agreement_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	type?: string | undefined,
	type_not?: string | undefined,
	type_gt?: string | undefined,
	type_lt?: string | undefined,
	type_gte?: string | undefined,
	type_lte?: string | undefined,
	type_in?: Array<string> | undefined,
	type_not_in?: Array<string> | undefined,
	type_contains?: string | undefined,
	type_contains_nocase?: string | undefined,
	type_not_contains?: string | undefined,
	type_not_contains_nocase?: string | undefined,
	type_starts_with?: string | undefined,
	type_starts_with_nocase?: string | undefined,
	type_not_starts_with?: string | undefined,
	type_not_starts_with_nocase?: string | undefined,
	type_ends_with?: string | undefined,
	type_ends_with_nocase?: string | undefined,
	type_not_ends_with?: string | undefined,
	type_not_ends_with_nocase?: string | undefined,
	src?: string | undefined,
	src_not?: string | undefined,
	src_gt?: string | undefined,
	src_lt?: string | undefined,
	src_gte?: string | undefined,
	src_lte?: string | undefined,
	src_in?: Array<string> | undefined,
	src_not_in?: Array<string> | undefined,
	src_contains?: string | undefined,
	src_contains_nocase?: string | undefined,
	src_not_contains?: string | undefined,
	src_not_contains_nocase?: string | undefined,
	src_starts_with?: string | undefined,
	src_starts_with_nocase?: string | undefined,
	src_not_starts_with?: string | undefined,
	src_not_starts_with_nocase?: string | undefined,
	src_ends_with?: string | undefined,
	src_ends_with_nocase?: string | undefined,
	src_not_ends_with?: string | undefined,
	src_not_ends_with_nocase?: string | undefined,
	createdAt?: ModelTypes["BigInt"] | undefined,
	createdAt_not?: ModelTypes["BigInt"] | undefined,
	createdAt_gt?: ModelTypes["BigInt"] | undefined,
	createdAt_lt?: ModelTypes["BigInt"] | undefined,
	createdAt_gte?: ModelTypes["BigInt"] | undefined,
	createdAt_lte?: ModelTypes["BigInt"] | undefined,
	createdAt_in?: Array<ModelTypes["BigInt"]> | undefined,
	createdAt_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Agreement_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Agreement_filter"] | undefined> | undefined
};
	["Agreement_orderBy"]:Agreement_orderBy;
	["BigDecimal"]:any;
	["BigInt"]:any;
	["BlockChangedFilter"]: {
	number_gte: number
};
	["Block_height"]: {
	hash?: ModelTypes["Bytes"] | undefined,
	number?: number | undefined,
	number_gte?: number | undefined
};
	["Bytes"]:any;
	["Deposit"]: {
		id: string,
	txHash: ModelTypes["Bytes"],
	sender: ModelTypes["Bytes"],
	invoice: ModelTypes["Invoice"],
	amount: ModelTypes["BigInt"],
	timestamp: ModelTypes["BigInt"]
};
	["Deposit_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: ModelTypes["Bytes"] | undefined,
	txHash_not?: ModelTypes["Bytes"] | undefined,
	txHash_gt?: ModelTypes["Bytes"] | undefined,
	txHash_lt?: ModelTypes["Bytes"] | undefined,
	txHash_gte?: ModelTypes["Bytes"] | undefined,
	txHash_lte?: ModelTypes["Bytes"] | undefined,
	txHash_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_contains?: ModelTypes["Bytes"] | undefined,
	txHash_not_contains?: ModelTypes["Bytes"] | undefined,
	sender?: ModelTypes["Bytes"] | undefined,
	sender_not?: ModelTypes["Bytes"] | undefined,
	sender_gt?: ModelTypes["Bytes"] | undefined,
	sender_lt?: ModelTypes["Bytes"] | undefined,
	sender_gte?: ModelTypes["Bytes"] | undefined,
	sender_lte?: ModelTypes["Bytes"] | undefined,
	sender_in?: Array<ModelTypes["Bytes"]> | undefined,
	sender_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	sender_contains?: ModelTypes["Bytes"] | undefined,
	sender_not_contains?: ModelTypes["Bytes"] | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: ModelTypes["Invoice_filter"] | undefined,
	amount?: ModelTypes["BigInt"] | undefined,
	amount_not?: ModelTypes["BigInt"] | undefined,
	amount_gt?: ModelTypes["BigInt"] | undefined,
	amount_lt?: ModelTypes["BigInt"] | undefined,
	amount_gte?: ModelTypes["BigInt"] | undefined,
	amount_lte?: ModelTypes["BigInt"] | undefined,
	amount_in?: Array<ModelTypes["BigInt"]> | undefined,
	amount_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp?: ModelTypes["BigInt"] | undefined,
	timestamp_not?: ModelTypes["BigInt"] | undefined,
	timestamp_gt?: ModelTypes["BigInt"] | undefined,
	timestamp_lt?: ModelTypes["BigInt"] | undefined,
	timestamp_gte?: ModelTypes["BigInt"] | undefined,
	timestamp_lte?: ModelTypes["BigInt"] | undefined,
	timestamp_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Deposit_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Deposit_filter"] | undefined> | undefined
};
	["Deposit_orderBy"]:Deposit_orderBy;
	["Dispute"]: {
		id: string,
	txHash: ModelTypes["Bytes"],
	invoice: ModelTypes["Invoice"],
	sender: ModelTypes["Bytes"],
	details: ModelTypes["Bytes"],
	ipfsHash: string,
	disputeToken?: ModelTypes["Bytes"] | undefined,
	disputeFee?: ModelTypes["BigInt"] | undefined,
	disputeId?: ModelTypes["BigInt"] | undefined,
	timestamp: ModelTypes["BigInt"]
};
	["Dispute_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: ModelTypes["Bytes"] | undefined,
	txHash_not?: ModelTypes["Bytes"] | undefined,
	txHash_gt?: ModelTypes["Bytes"] | undefined,
	txHash_lt?: ModelTypes["Bytes"] | undefined,
	txHash_gte?: ModelTypes["Bytes"] | undefined,
	txHash_lte?: ModelTypes["Bytes"] | undefined,
	txHash_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_contains?: ModelTypes["Bytes"] | undefined,
	txHash_not_contains?: ModelTypes["Bytes"] | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: ModelTypes["Invoice_filter"] | undefined,
	sender?: ModelTypes["Bytes"] | undefined,
	sender_not?: ModelTypes["Bytes"] | undefined,
	sender_gt?: ModelTypes["Bytes"] | undefined,
	sender_lt?: ModelTypes["Bytes"] | undefined,
	sender_gte?: ModelTypes["Bytes"] | undefined,
	sender_lte?: ModelTypes["Bytes"] | undefined,
	sender_in?: Array<ModelTypes["Bytes"]> | undefined,
	sender_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	sender_contains?: ModelTypes["Bytes"] | undefined,
	sender_not_contains?: ModelTypes["Bytes"] | undefined,
	details?: ModelTypes["Bytes"] | undefined,
	details_not?: ModelTypes["Bytes"] | undefined,
	details_gt?: ModelTypes["Bytes"] | undefined,
	details_lt?: ModelTypes["Bytes"] | undefined,
	details_gte?: ModelTypes["Bytes"] | undefined,
	details_lte?: ModelTypes["Bytes"] | undefined,
	details_in?: Array<ModelTypes["Bytes"]> | undefined,
	details_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	details_contains?: ModelTypes["Bytes"] | undefined,
	details_not_contains?: ModelTypes["Bytes"] | undefined,
	ipfsHash?: string | undefined,
	ipfsHash_not?: string | undefined,
	ipfsHash_gt?: string | undefined,
	ipfsHash_lt?: string | undefined,
	ipfsHash_gte?: string | undefined,
	ipfsHash_lte?: string | undefined,
	ipfsHash_in?: Array<string> | undefined,
	ipfsHash_not_in?: Array<string> | undefined,
	ipfsHash_contains?: string | undefined,
	ipfsHash_contains_nocase?: string | undefined,
	ipfsHash_not_contains?: string | undefined,
	ipfsHash_not_contains_nocase?: string | undefined,
	ipfsHash_starts_with?: string | undefined,
	ipfsHash_starts_with_nocase?: string | undefined,
	ipfsHash_not_starts_with?: string | undefined,
	ipfsHash_not_starts_with_nocase?: string | undefined,
	ipfsHash_ends_with?: string | undefined,
	ipfsHash_ends_with_nocase?: string | undefined,
	ipfsHash_not_ends_with?: string | undefined,
	ipfsHash_not_ends_with_nocase?: string | undefined,
	disputeToken?: ModelTypes["Bytes"] | undefined,
	disputeToken_not?: ModelTypes["Bytes"] | undefined,
	disputeToken_gt?: ModelTypes["Bytes"] | undefined,
	disputeToken_lt?: ModelTypes["Bytes"] | undefined,
	disputeToken_gte?: ModelTypes["Bytes"] | undefined,
	disputeToken_lte?: ModelTypes["Bytes"] | undefined,
	disputeToken_in?: Array<ModelTypes["Bytes"]> | undefined,
	disputeToken_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	disputeToken_contains?: ModelTypes["Bytes"] | undefined,
	disputeToken_not_contains?: ModelTypes["Bytes"] | undefined,
	disputeFee?: ModelTypes["BigInt"] | undefined,
	disputeFee_not?: ModelTypes["BigInt"] | undefined,
	disputeFee_gt?: ModelTypes["BigInt"] | undefined,
	disputeFee_lt?: ModelTypes["BigInt"] | undefined,
	disputeFee_gte?: ModelTypes["BigInt"] | undefined,
	disputeFee_lte?: ModelTypes["BigInt"] | undefined,
	disputeFee_in?: Array<ModelTypes["BigInt"]> | undefined,
	disputeFee_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	disputeId?: ModelTypes["BigInt"] | undefined,
	disputeId_not?: ModelTypes["BigInt"] | undefined,
	disputeId_gt?: ModelTypes["BigInt"] | undefined,
	disputeId_lt?: ModelTypes["BigInt"] | undefined,
	disputeId_gte?: ModelTypes["BigInt"] | undefined,
	disputeId_lte?: ModelTypes["BigInt"] | undefined,
	disputeId_in?: Array<ModelTypes["BigInt"]> | undefined,
	disputeId_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp?: ModelTypes["BigInt"] | undefined,
	timestamp_not?: ModelTypes["BigInt"] | undefined,
	timestamp_gt?: ModelTypes["BigInt"] | undefined,
	timestamp_lt?: ModelTypes["BigInt"] | undefined,
	timestamp_gte?: ModelTypes["BigInt"] | undefined,
	timestamp_lte?: ModelTypes["BigInt"] | undefined,
	timestamp_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Dispute_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Dispute_filter"] | undefined> | undefined
};
	["Dispute_orderBy"]:Dispute_orderBy;
	/** 8 bytes signed integer
 */
["Int8"]:any;
	["Invoice"]: {
		id: string,
	network: string,
	address: ModelTypes["Bytes"],
	factoryAddress: ModelTypes["Bytes"],
	token: ModelTypes["Bytes"],
	client: ModelTypes["Bytes"],
	provider: ModelTypes["Bytes"],
	resolverType: ModelTypes["ADR"],
	resolver: ModelTypes["Bytes"],
	resolutionRate: ModelTypes["BigInt"],
	isLocked: boolean,
	amounts: Array<ModelTypes["BigInt"]>,
	numMilestones: number,
	currentMilestone: ModelTypes["BigInt"],
	total: ModelTypes["BigInt"],
	released: ModelTypes["BigInt"],
	createdAt: ModelTypes["BigInt"],
	creationTxHash: ModelTypes["Bytes"],
	terminationTime: ModelTypes["BigInt"],
	details: ModelTypes["Bytes"],
	ipfsHash: string,
	disputeId: ModelTypes["BigInt"],
	projectName: string,
	projectDescription: string,
	projectAgreement: Array<ModelTypes["Agreement"]>,
	startDate?: ModelTypes["BigInt"] | undefined,
	endDate?: ModelTypes["BigInt"] | undefined,
	deposits: Array<ModelTypes["Deposit"]>,
	withdraws: Array<ModelTypes["Withdraw"]>,
	releases: Array<ModelTypes["Release"]>,
	disputes: Array<ModelTypes["Dispute"]>,
	resolutions: Array<ModelTypes["Resolution"]>,
	tokenMetadata: ModelTypes["Token"],
	verified: Array<ModelTypes["Verified"]>,
	milestonesAdded: Array<ModelTypes["MilestonesAdded"]>,
	invoiceType?: string | undefined,
	version?: ModelTypes["BigInt"] | undefined,
	lateFee?: ModelTypes["BigInt"] | undefined,
	lateFeeTimeInterval?: ModelTypes["BigInt"] | undefined,
	tipAmount?: Array<ModelTypes["Tip"]> | undefined,
	deadline?: ModelTypes["BigInt"] | undefined,
	fulfilled?: boolean | undefined
};
	["Invoice_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	network?: string | undefined,
	network_not?: string | undefined,
	network_gt?: string | undefined,
	network_lt?: string | undefined,
	network_gte?: string | undefined,
	network_lte?: string | undefined,
	network_in?: Array<string> | undefined,
	network_not_in?: Array<string> | undefined,
	network_contains?: string | undefined,
	network_contains_nocase?: string | undefined,
	network_not_contains?: string | undefined,
	network_not_contains_nocase?: string | undefined,
	network_starts_with?: string | undefined,
	network_starts_with_nocase?: string | undefined,
	network_not_starts_with?: string | undefined,
	network_not_starts_with_nocase?: string | undefined,
	network_ends_with?: string | undefined,
	network_ends_with_nocase?: string | undefined,
	network_not_ends_with?: string | undefined,
	network_not_ends_with_nocase?: string | undefined,
	address?: ModelTypes["Bytes"] | undefined,
	address_not?: ModelTypes["Bytes"] | undefined,
	address_gt?: ModelTypes["Bytes"] | undefined,
	address_lt?: ModelTypes["Bytes"] | undefined,
	address_gte?: ModelTypes["Bytes"] | undefined,
	address_lte?: ModelTypes["Bytes"] | undefined,
	address_in?: Array<ModelTypes["Bytes"]> | undefined,
	address_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	address_contains?: ModelTypes["Bytes"] | undefined,
	address_not_contains?: ModelTypes["Bytes"] | undefined,
	factoryAddress?: ModelTypes["Bytes"] | undefined,
	factoryAddress_not?: ModelTypes["Bytes"] | undefined,
	factoryAddress_gt?: ModelTypes["Bytes"] | undefined,
	factoryAddress_lt?: ModelTypes["Bytes"] | undefined,
	factoryAddress_gte?: ModelTypes["Bytes"] | undefined,
	factoryAddress_lte?: ModelTypes["Bytes"] | undefined,
	factoryAddress_in?: Array<ModelTypes["Bytes"]> | undefined,
	factoryAddress_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	factoryAddress_contains?: ModelTypes["Bytes"] | undefined,
	factoryAddress_not_contains?: ModelTypes["Bytes"] | undefined,
	token?: ModelTypes["Bytes"] | undefined,
	token_not?: ModelTypes["Bytes"] | undefined,
	token_gt?: ModelTypes["Bytes"] | undefined,
	token_lt?: ModelTypes["Bytes"] | undefined,
	token_gte?: ModelTypes["Bytes"] | undefined,
	token_lte?: ModelTypes["Bytes"] | undefined,
	token_in?: Array<ModelTypes["Bytes"]> | undefined,
	token_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	token_contains?: ModelTypes["Bytes"] | undefined,
	token_not_contains?: ModelTypes["Bytes"] | undefined,
	client?: ModelTypes["Bytes"] | undefined,
	client_not?: ModelTypes["Bytes"] | undefined,
	client_gt?: ModelTypes["Bytes"] | undefined,
	client_lt?: ModelTypes["Bytes"] | undefined,
	client_gte?: ModelTypes["Bytes"] | undefined,
	client_lte?: ModelTypes["Bytes"] | undefined,
	client_in?: Array<ModelTypes["Bytes"]> | undefined,
	client_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	client_contains?: ModelTypes["Bytes"] | undefined,
	client_not_contains?: ModelTypes["Bytes"] | undefined,
	provider?: ModelTypes["Bytes"] | undefined,
	provider_not?: ModelTypes["Bytes"] | undefined,
	provider_gt?: ModelTypes["Bytes"] | undefined,
	provider_lt?: ModelTypes["Bytes"] | undefined,
	provider_gte?: ModelTypes["Bytes"] | undefined,
	provider_lte?: ModelTypes["Bytes"] | undefined,
	provider_in?: Array<ModelTypes["Bytes"]> | undefined,
	provider_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	provider_contains?: ModelTypes["Bytes"] | undefined,
	provider_not_contains?: ModelTypes["Bytes"] | undefined,
	resolverType?: ModelTypes["ADR"] | undefined,
	resolverType_not?: ModelTypes["ADR"] | undefined,
	resolverType_in?: Array<ModelTypes["ADR"]> | undefined,
	resolverType_not_in?: Array<ModelTypes["ADR"]> | undefined,
	resolver?: ModelTypes["Bytes"] | undefined,
	resolver_not?: ModelTypes["Bytes"] | undefined,
	resolver_gt?: ModelTypes["Bytes"] | undefined,
	resolver_lt?: ModelTypes["Bytes"] | undefined,
	resolver_gte?: ModelTypes["Bytes"] | undefined,
	resolver_lte?: ModelTypes["Bytes"] | undefined,
	resolver_in?: Array<ModelTypes["Bytes"]> | undefined,
	resolver_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	resolver_contains?: ModelTypes["Bytes"] | undefined,
	resolver_not_contains?: ModelTypes["Bytes"] | undefined,
	resolutionRate?: ModelTypes["BigInt"] | undefined,
	resolutionRate_not?: ModelTypes["BigInt"] | undefined,
	resolutionRate_gt?: ModelTypes["BigInt"] | undefined,
	resolutionRate_lt?: ModelTypes["BigInt"] | undefined,
	resolutionRate_gte?: ModelTypes["BigInt"] | undefined,
	resolutionRate_lte?: ModelTypes["BigInt"] | undefined,
	resolutionRate_in?: Array<ModelTypes["BigInt"]> | undefined,
	resolutionRate_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	isLocked?: boolean | undefined,
	isLocked_not?: boolean | undefined,
	isLocked_in?: Array<boolean> | undefined,
	isLocked_not_in?: Array<boolean> | undefined,
	amounts?: Array<ModelTypes["BigInt"]> | undefined,
	amounts_not?: Array<ModelTypes["BigInt"]> | undefined,
	amounts_contains?: Array<ModelTypes["BigInt"]> | undefined,
	amounts_contains_nocase?: Array<ModelTypes["BigInt"]> | undefined,
	amounts_not_contains?: Array<ModelTypes["BigInt"]> | undefined,
	amounts_not_contains_nocase?: Array<ModelTypes["BigInt"]> | undefined,
	numMilestones?: number | undefined,
	numMilestones_not?: number | undefined,
	numMilestones_gt?: number | undefined,
	numMilestones_lt?: number | undefined,
	numMilestones_gte?: number | undefined,
	numMilestones_lte?: number | undefined,
	numMilestones_in?: Array<number> | undefined,
	numMilestones_not_in?: Array<number> | undefined,
	currentMilestone?: ModelTypes["BigInt"] | undefined,
	currentMilestone_not?: ModelTypes["BigInt"] | undefined,
	currentMilestone_gt?: ModelTypes["BigInt"] | undefined,
	currentMilestone_lt?: ModelTypes["BigInt"] | undefined,
	currentMilestone_gte?: ModelTypes["BigInt"] | undefined,
	currentMilestone_lte?: ModelTypes["BigInt"] | undefined,
	currentMilestone_in?: Array<ModelTypes["BigInt"]> | undefined,
	currentMilestone_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	total?: ModelTypes["BigInt"] | undefined,
	total_not?: ModelTypes["BigInt"] | undefined,
	total_gt?: ModelTypes["BigInt"] | undefined,
	total_lt?: ModelTypes["BigInt"] | undefined,
	total_gte?: ModelTypes["BigInt"] | undefined,
	total_lte?: ModelTypes["BigInt"] | undefined,
	total_in?: Array<ModelTypes["BigInt"]> | undefined,
	total_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	released?: ModelTypes["BigInt"] | undefined,
	released_not?: ModelTypes["BigInt"] | undefined,
	released_gt?: ModelTypes["BigInt"] | undefined,
	released_lt?: ModelTypes["BigInt"] | undefined,
	released_gte?: ModelTypes["BigInt"] | undefined,
	released_lte?: ModelTypes["BigInt"] | undefined,
	released_in?: Array<ModelTypes["BigInt"]> | undefined,
	released_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	createdAt?: ModelTypes["BigInt"] | undefined,
	createdAt_not?: ModelTypes["BigInt"] | undefined,
	createdAt_gt?: ModelTypes["BigInt"] | undefined,
	createdAt_lt?: ModelTypes["BigInt"] | undefined,
	createdAt_gte?: ModelTypes["BigInt"] | undefined,
	createdAt_lte?: ModelTypes["BigInt"] | undefined,
	createdAt_in?: Array<ModelTypes["BigInt"]> | undefined,
	createdAt_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	creationTxHash?: ModelTypes["Bytes"] | undefined,
	creationTxHash_not?: ModelTypes["Bytes"] | undefined,
	creationTxHash_gt?: ModelTypes["Bytes"] | undefined,
	creationTxHash_lt?: ModelTypes["Bytes"] | undefined,
	creationTxHash_gte?: ModelTypes["Bytes"] | undefined,
	creationTxHash_lte?: ModelTypes["Bytes"] | undefined,
	creationTxHash_in?: Array<ModelTypes["Bytes"]> | undefined,
	creationTxHash_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	creationTxHash_contains?: ModelTypes["Bytes"] | undefined,
	creationTxHash_not_contains?: ModelTypes["Bytes"] | undefined,
	terminationTime?: ModelTypes["BigInt"] | undefined,
	terminationTime_not?: ModelTypes["BigInt"] | undefined,
	terminationTime_gt?: ModelTypes["BigInt"] | undefined,
	terminationTime_lt?: ModelTypes["BigInt"] | undefined,
	terminationTime_gte?: ModelTypes["BigInt"] | undefined,
	terminationTime_lte?: ModelTypes["BigInt"] | undefined,
	terminationTime_in?: Array<ModelTypes["BigInt"]> | undefined,
	terminationTime_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	details?: ModelTypes["Bytes"] | undefined,
	details_not?: ModelTypes["Bytes"] | undefined,
	details_gt?: ModelTypes["Bytes"] | undefined,
	details_lt?: ModelTypes["Bytes"] | undefined,
	details_gte?: ModelTypes["Bytes"] | undefined,
	details_lte?: ModelTypes["Bytes"] | undefined,
	details_in?: Array<ModelTypes["Bytes"]> | undefined,
	details_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	details_contains?: ModelTypes["Bytes"] | undefined,
	details_not_contains?: ModelTypes["Bytes"] | undefined,
	ipfsHash?: string | undefined,
	ipfsHash_not?: string | undefined,
	ipfsHash_gt?: string | undefined,
	ipfsHash_lt?: string | undefined,
	ipfsHash_gte?: string | undefined,
	ipfsHash_lte?: string | undefined,
	ipfsHash_in?: Array<string> | undefined,
	ipfsHash_not_in?: Array<string> | undefined,
	ipfsHash_contains?: string | undefined,
	ipfsHash_contains_nocase?: string | undefined,
	ipfsHash_not_contains?: string | undefined,
	ipfsHash_not_contains_nocase?: string | undefined,
	ipfsHash_starts_with?: string | undefined,
	ipfsHash_starts_with_nocase?: string | undefined,
	ipfsHash_not_starts_with?: string | undefined,
	ipfsHash_not_starts_with_nocase?: string | undefined,
	ipfsHash_ends_with?: string | undefined,
	ipfsHash_ends_with_nocase?: string | undefined,
	ipfsHash_not_ends_with?: string | undefined,
	ipfsHash_not_ends_with_nocase?: string | undefined,
	disputeId?: ModelTypes["BigInt"] | undefined,
	disputeId_not?: ModelTypes["BigInt"] | undefined,
	disputeId_gt?: ModelTypes["BigInt"] | undefined,
	disputeId_lt?: ModelTypes["BigInt"] | undefined,
	disputeId_gte?: ModelTypes["BigInt"] | undefined,
	disputeId_lte?: ModelTypes["BigInt"] | undefined,
	disputeId_in?: Array<ModelTypes["BigInt"]> | undefined,
	disputeId_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	projectName?: string | undefined,
	projectName_not?: string | undefined,
	projectName_gt?: string | undefined,
	projectName_lt?: string | undefined,
	projectName_gte?: string | undefined,
	projectName_lte?: string | undefined,
	projectName_in?: Array<string> | undefined,
	projectName_not_in?: Array<string> | undefined,
	projectName_contains?: string | undefined,
	projectName_contains_nocase?: string | undefined,
	projectName_not_contains?: string | undefined,
	projectName_not_contains_nocase?: string | undefined,
	projectName_starts_with?: string | undefined,
	projectName_starts_with_nocase?: string | undefined,
	projectName_not_starts_with?: string | undefined,
	projectName_not_starts_with_nocase?: string | undefined,
	projectName_ends_with?: string | undefined,
	projectName_ends_with_nocase?: string | undefined,
	projectName_not_ends_with?: string | undefined,
	projectName_not_ends_with_nocase?: string | undefined,
	projectDescription?: string | undefined,
	projectDescription_not?: string | undefined,
	projectDescription_gt?: string | undefined,
	projectDescription_lt?: string | undefined,
	projectDescription_gte?: string | undefined,
	projectDescription_lte?: string | undefined,
	projectDescription_in?: Array<string> | undefined,
	projectDescription_not_in?: Array<string> | undefined,
	projectDescription_contains?: string | undefined,
	projectDescription_contains_nocase?: string | undefined,
	projectDescription_not_contains?: string | undefined,
	projectDescription_not_contains_nocase?: string | undefined,
	projectDescription_starts_with?: string | undefined,
	projectDescription_starts_with_nocase?: string | undefined,
	projectDescription_not_starts_with?: string | undefined,
	projectDescription_not_starts_with_nocase?: string | undefined,
	projectDescription_ends_with?: string | undefined,
	projectDescription_ends_with_nocase?: string | undefined,
	projectDescription_not_ends_with?: string | undefined,
	projectDescription_not_ends_with_nocase?: string | undefined,
	projectAgreement?: Array<string> | undefined,
	projectAgreement_not?: Array<string> | undefined,
	projectAgreement_contains?: Array<string> | undefined,
	projectAgreement_contains_nocase?: Array<string> | undefined,
	projectAgreement_not_contains?: Array<string> | undefined,
	projectAgreement_not_contains_nocase?: Array<string> | undefined,
	projectAgreement_?: ModelTypes["Agreement_filter"] | undefined,
	startDate?: ModelTypes["BigInt"] | undefined,
	startDate_not?: ModelTypes["BigInt"] | undefined,
	startDate_gt?: ModelTypes["BigInt"] | undefined,
	startDate_lt?: ModelTypes["BigInt"] | undefined,
	startDate_gte?: ModelTypes["BigInt"] | undefined,
	startDate_lte?: ModelTypes["BigInt"] | undefined,
	startDate_in?: Array<ModelTypes["BigInt"]> | undefined,
	startDate_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	endDate?: ModelTypes["BigInt"] | undefined,
	endDate_not?: ModelTypes["BigInt"] | undefined,
	endDate_gt?: ModelTypes["BigInt"] | undefined,
	endDate_lt?: ModelTypes["BigInt"] | undefined,
	endDate_gte?: ModelTypes["BigInt"] | undefined,
	endDate_lte?: ModelTypes["BigInt"] | undefined,
	endDate_in?: Array<ModelTypes["BigInt"]> | undefined,
	endDate_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	deposits?: Array<string> | undefined,
	deposits_not?: Array<string> | undefined,
	deposits_contains?: Array<string> | undefined,
	deposits_contains_nocase?: Array<string> | undefined,
	deposits_not_contains?: Array<string> | undefined,
	deposits_not_contains_nocase?: Array<string> | undefined,
	deposits_?: ModelTypes["Deposit_filter"] | undefined,
	withdraws?: Array<string> | undefined,
	withdraws_not?: Array<string> | undefined,
	withdraws_contains?: Array<string> | undefined,
	withdraws_contains_nocase?: Array<string> | undefined,
	withdraws_not_contains?: Array<string> | undefined,
	withdraws_not_contains_nocase?: Array<string> | undefined,
	withdraws_?: ModelTypes["Withdraw_filter"] | undefined,
	releases?: Array<string> | undefined,
	releases_not?: Array<string> | undefined,
	releases_contains?: Array<string> | undefined,
	releases_contains_nocase?: Array<string> | undefined,
	releases_not_contains?: Array<string> | undefined,
	releases_not_contains_nocase?: Array<string> | undefined,
	releases_?: ModelTypes["Release_filter"] | undefined,
	disputes?: Array<string> | undefined,
	disputes_not?: Array<string> | undefined,
	disputes_contains?: Array<string> | undefined,
	disputes_contains_nocase?: Array<string> | undefined,
	disputes_not_contains?: Array<string> | undefined,
	disputes_not_contains_nocase?: Array<string> | undefined,
	disputes_?: ModelTypes["Dispute_filter"] | undefined,
	resolutions?: Array<string> | undefined,
	resolutions_not?: Array<string> | undefined,
	resolutions_contains?: Array<string> | undefined,
	resolutions_contains_nocase?: Array<string> | undefined,
	resolutions_not_contains?: Array<string> | undefined,
	resolutions_not_contains_nocase?: Array<string> | undefined,
	resolutions_?: ModelTypes["Resolution_filter"] | undefined,
	tokenMetadata?: string | undefined,
	tokenMetadata_not?: string | undefined,
	tokenMetadata_gt?: string | undefined,
	tokenMetadata_lt?: string | undefined,
	tokenMetadata_gte?: string | undefined,
	tokenMetadata_lte?: string | undefined,
	tokenMetadata_in?: Array<string> | undefined,
	tokenMetadata_not_in?: Array<string> | undefined,
	tokenMetadata_contains?: string | undefined,
	tokenMetadata_contains_nocase?: string | undefined,
	tokenMetadata_not_contains?: string | undefined,
	tokenMetadata_not_contains_nocase?: string | undefined,
	tokenMetadata_starts_with?: string | undefined,
	tokenMetadata_starts_with_nocase?: string | undefined,
	tokenMetadata_not_starts_with?: string | undefined,
	tokenMetadata_not_starts_with_nocase?: string | undefined,
	tokenMetadata_ends_with?: string | undefined,
	tokenMetadata_ends_with_nocase?: string | undefined,
	tokenMetadata_not_ends_with?: string | undefined,
	tokenMetadata_not_ends_with_nocase?: string | undefined,
	tokenMetadata_?: ModelTypes["Token_filter"] | undefined,
	verified?: Array<string> | undefined,
	verified_not?: Array<string> | undefined,
	verified_contains?: Array<string> | undefined,
	verified_contains_nocase?: Array<string> | undefined,
	verified_not_contains?: Array<string> | undefined,
	verified_not_contains_nocase?: Array<string> | undefined,
	verified_?: ModelTypes["Verified_filter"] | undefined,
	milestonesAdded?: Array<string> | undefined,
	milestonesAdded_not?: Array<string> | undefined,
	milestonesAdded_contains?: Array<string> | undefined,
	milestonesAdded_contains_nocase?: Array<string> | undefined,
	milestonesAdded_not_contains?: Array<string> | undefined,
	milestonesAdded_not_contains_nocase?: Array<string> | undefined,
	milestonesAdded_?: ModelTypes["MilestonesAdded_filter"] | undefined,
	invoiceType?: string | undefined,
	invoiceType_not?: string | undefined,
	invoiceType_gt?: string | undefined,
	invoiceType_lt?: string | undefined,
	invoiceType_gte?: string | undefined,
	invoiceType_lte?: string | undefined,
	invoiceType_in?: Array<string> | undefined,
	invoiceType_not_in?: Array<string> | undefined,
	invoiceType_contains?: string | undefined,
	invoiceType_contains_nocase?: string | undefined,
	invoiceType_not_contains?: string | undefined,
	invoiceType_not_contains_nocase?: string | undefined,
	invoiceType_starts_with?: string | undefined,
	invoiceType_starts_with_nocase?: string | undefined,
	invoiceType_not_starts_with?: string | undefined,
	invoiceType_not_starts_with_nocase?: string | undefined,
	invoiceType_ends_with?: string | undefined,
	invoiceType_ends_with_nocase?: string | undefined,
	invoiceType_not_ends_with?: string | undefined,
	invoiceType_not_ends_with_nocase?: string | undefined,
	version?: ModelTypes["BigInt"] | undefined,
	version_not?: ModelTypes["BigInt"] | undefined,
	version_gt?: ModelTypes["BigInt"] | undefined,
	version_lt?: ModelTypes["BigInt"] | undefined,
	version_gte?: ModelTypes["BigInt"] | undefined,
	version_lte?: ModelTypes["BigInt"] | undefined,
	version_in?: Array<ModelTypes["BigInt"]> | undefined,
	version_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	lateFee?: ModelTypes["BigInt"] | undefined,
	lateFee_not?: ModelTypes["BigInt"] | undefined,
	lateFee_gt?: ModelTypes["BigInt"] | undefined,
	lateFee_lt?: ModelTypes["BigInt"] | undefined,
	lateFee_gte?: ModelTypes["BigInt"] | undefined,
	lateFee_lte?: ModelTypes["BigInt"] | undefined,
	lateFee_in?: Array<ModelTypes["BigInt"]> | undefined,
	lateFee_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	lateFeeTimeInterval?: ModelTypes["BigInt"] | undefined,
	lateFeeTimeInterval_not?: ModelTypes["BigInt"] | undefined,
	lateFeeTimeInterval_gt?: ModelTypes["BigInt"] | undefined,
	lateFeeTimeInterval_lt?: ModelTypes["BigInt"] | undefined,
	lateFeeTimeInterval_gte?: ModelTypes["BigInt"] | undefined,
	lateFeeTimeInterval_lte?: ModelTypes["BigInt"] | undefined,
	lateFeeTimeInterval_in?: Array<ModelTypes["BigInt"]> | undefined,
	lateFeeTimeInterval_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	tipAmount?: Array<string> | undefined,
	tipAmount_not?: Array<string> | undefined,
	tipAmount_contains?: Array<string> | undefined,
	tipAmount_contains_nocase?: Array<string> | undefined,
	tipAmount_not_contains?: Array<string> | undefined,
	tipAmount_not_contains_nocase?: Array<string> | undefined,
	tipAmount_?: ModelTypes["Tip_filter"] | undefined,
	deadline?: ModelTypes["BigInt"] | undefined,
	deadline_not?: ModelTypes["BigInt"] | undefined,
	deadline_gt?: ModelTypes["BigInt"] | undefined,
	deadline_lt?: ModelTypes["BigInt"] | undefined,
	deadline_gte?: ModelTypes["BigInt"] | undefined,
	deadline_lte?: ModelTypes["BigInt"] | undefined,
	deadline_in?: Array<ModelTypes["BigInt"]> | undefined,
	deadline_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	fulfilled?: boolean | undefined,
	fulfilled_not?: boolean | undefined,
	fulfilled_in?: Array<boolean> | undefined,
	fulfilled_not_in?: Array<boolean> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Invoice_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Invoice_filter"] | undefined> | undefined
};
	["Invoice_orderBy"]:Invoice_orderBy;
	["MilestonesAdded"]: {
		id: string,
	sender: ModelTypes["Bytes"],
	invoice: ModelTypes["Bytes"],
	milestones: Array<ModelTypes["BigInt"]>
};
	["MilestonesAdded_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	sender?: ModelTypes["Bytes"] | undefined,
	sender_not?: ModelTypes["Bytes"] | undefined,
	sender_gt?: ModelTypes["Bytes"] | undefined,
	sender_lt?: ModelTypes["Bytes"] | undefined,
	sender_gte?: ModelTypes["Bytes"] | undefined,
	sender_lte?: ModelTypes["Bytes"] | undefined,
	sender_in?: Array<ModelTypes["Bytes"]> | undefined,
	sender_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	sender_contains?: ModelTypes["Bytes"] | undefined,
	sender_not_contains?: ModelTypes["Bytes"] | undefined,
	invoice?: ModelTypes["Bytes"] | undefined,
	invoice_not?: ModelTypes["Bytes"] | undefined,
	invoice_gt?: ModelTypes["Bytes"] | undefined,
	invoice_lt?: ModelTypes["Bytes"] | undefined,
	invoice_gte?: ModelTypes["Bytes"] | undefined,
	invoice_lte?: ModelTypes["Bytes"] | undefined,
	invoice_in?: Array<ModelTypes["Bytes"]> | undefined,
	invoice_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	invoice_contains?: ModelTypes["Bytes"] | undefined,
	invoice_not_contains?: ModelTypes["Bytes"] | undefined,
	milestones?: Array<ModelTypes["BigInt"]> | undefined,
	milestones_not?: Array<ModelTypes["BigInt"]> | undefined,
	milestones_contains?: Array<ModelTypes["BigInt"]> | undefined,
	milestones_contains_nocase?: Array<ModelTypes["BigInt"]> | undefined,
	milestones_not_contains?: Array<ModelTypes["BigInt"]> | undefined,
	milestones_not_contains_nocase?: Array<ModelTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["MilestonesAdded_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["MilestonesAdded_filter"] | undefined> | undefined
};
	["MilestonesAdded_orderBy"]:MilestonesAdded_orderBy;
	["OrderDirection"]:OrderDirection;
	["Query"]: {
		invoice?: ModelTypes["Invoice"] | undefined,
	invoices: Array<ModelTypes["Invoice"]>,
	deposit?: ModelTypes["Deposit"] | undefined,
	deposits: Array<ModelTypes["Deposit"]>,
	agreement?: ModelTypes["Agreement"] | undefined,
	agreements: Array<ModelTypes["Agreement"]>,
	release?: ModelTypes["Release"] | undefined,
	releases: Array<ModelTypes["Release"]>,
	withdraw?: ModelTypes["Withdraw"] | undefined,
	withdraws: Array<ModelTypes["Withdraw"]>,
	dispute?: ModelTypes["Dispute"] | undefined,
	disputes: Array<ModelTypes["Dispute"]>,
	resolution?: ModelTypes["Resolution"] | undefined,
	resolutions: Array<ModelTypes["Resolution"]>,
	token?: ModelTypes["Token"] | undefined,
	tokens: Array<ModelTypes["Token"]>,
	verified?: ModelTypes["Verified"] | undefined,
	verifieds: Array<ModelTypes["Verified"]>,
	milestonesAdded?: ModelTypes["MilestonesAdded"] | undefined,
	milestonesAddeds: Array<ModelTypes["MilestonesAdded"]>,
	tip?: ModelTypes["Tip"] | undefined,
	tips: Array<ModelTypes["Tip"]>,
	/** Access to subgraph metadata */
	_meta?: ModelTypes["_Meta_"] | undefined
};
	["Release"]: {
		id: string,
	txHash: ModelTypes["Bytes"],
	invoice: ModelTypes["Invoice"],
	milestone: ModelTypes["BigInt"],
	amount: ModelTypes["BigInt"],
	timestamp: ModelTypes["BigInt"]
};
	["Release_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: ModelTypes["Bytes"] | undefined,
	txHash_not?: ModelTypes["Bytes"] | undefined,
	txHash_gt?: ModelTypes["Bytes"] | undefined,
	txHash_lt?: ModelTypes["Bytes"] | undefined,
	txHash_gte?: ModelTypes["Bytes"] | undefined,
	txHash_lte?: ModelTypes["Bytes"] | undefined,
	txHash_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_contains?: ModelTypes["Bytes"] | undefined,
	txHash_not_contains?: ModelTypes["Bytes"] | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: ModelTypes["Invoice_filter"] | undefined,
	milestone?: ModelTypes["BigInt"] | undefined,
	milestone_not?: ModelTypes["BigInt"] | undefined,
	milestone_gt?: ModelTypes["BigInt"] | undefined,
	milestone_lt?: ModelTypes["BigInt"] | undefined,
	milestone_gte?: ModelTypes["BigInt"] | undefined,
	milestone_lte?: ModelTypes["BigInt"] | undefined,
	milestone_in?: Array<ModelTypes["BigInt"]> | undefined,
	milestone_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	amount?: ModelTypes["BigInt"] | undefined,
	amount_not?: ModelTypes["BigInt"] | undefined,
	amount_gt?: ModelTypes["BigInt"] | undefined,
	amount_lt?: ModelTypes["BigInt"] | undefined,
	amount_gte?: ModelTypes["BigInt"] | undefined,
	amount_lte?: ModelTypes["BigInt"] | undefined,
	amount_in?: Array<ModelTypes["BigInt"]> | undefined,
	amount_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp?: ModelTypes["BigInt"] | undefined,
	timestamp_not?: ModelTypes["BigInt"] | undefined,
	timestamp_gt?: ModelTypes["BigInt"] | undefined,
	timestamp_lt?: ModelTypes["BigInt"] | undefined,
	timestamp_gte?: ModelTypes["BigInt"] | undefined,
	timestamp_lte?: ModelTypes["BigInt"] | undefined,
	timestamp_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Release_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Release_filter"] | undefined> | undefined
};
	["Release_orderBy"]:Release_orderBy;
	["Resolution"]: {
		id: string,
	txHash: ModelTypes["Bytes"],
	details: ModelTypes["Bytes"],
	ipfsHash: string,
	invoice: ModelTypes["Invoice"],
	resolverType: ModelTypes["ADR"],
	resolver: ModelTypes["Bytes"],
	clientAward: ModelTypes["BigInt"],
	providerAward: ModelTypes["BigInt"],
	resolutionDetails?: ModelTypes["Bytes"] | undefined,
	resolutionFee?: ModelTypes["BigInt"] | undefined,
	ruling?: ModelTypes["BigInt"] | undefined,
	timestamp: ModelTypes["BigInt"]
};
	["Resolution_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: ModelTypes["Bytes"] | undefined,
	txHash_not?: ModelTypes["Bytes"] | undefined,
	txHash_gt?: ModelTypes["Bytes"] | undefined,
	txHash_lt?: ModelTypes["Bytes"] | undefined,
	txHash_gte?: ModelTypes["Bytes"] | undefined,
	txHash_lte?: ModelTypes["Bytes"] | undefined,
	txHash_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_contains?: ModelTypes["Bytes"] | undefined,
	txHash_not_contains?: ModelTypes["Bytes"] | undefined,
	details?: ModelTypes["Bytes"] | undefined,
	details_not?: ModelTypes["Bytes"] | undefined,
	details_gt?: ModelTypes["Bytes"] | undefined,
	details_lt?: ModelTypes["Bytes"] | undefined,
	details_gte?: ModelTypes["Bytes"] | undefined,
	details_lte?: ModelTypes["Bytes"] | undefined,
	details_in?: Array<ModelTypes["Bytes"]> | undefined,
	details_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	details_contains?: ModelTypes["Bytes"] | undefined,
	details_not_contains?: ModelTypes["Bytes"] | undefined,
	ipfsHash?: string | undefined,
	ipfsHash_not?: string | undefined,
	ipfsHash_gt?: string | undefined,
	ipfsHash_lt?: string | undefined,
	ipfsHash_gte?: string | undefined,
	ipfsHash_lte?: string | undefined,
	ipfsHash_in?: Array<string> | undefined,
	ipfsHash_not_in?: Array<string> | undefined,
	ipfsHash_contains?: string | undefined,
	ipfsHash_contains_nocase?: string | undefined,
	ipfsHash_not_contains?: string | undefined,
	ipfsHash_not_contains_nocase?: string | undefined,
	ipfsHash_starts_with?: string | undefined,
	ipfsHash_starts_with_nocase?: string | undefined,
	ipfsHash_not_starts_with?: string | undefined,
	ipfsHash_not_starts_with_nocase?: string | undefined,
	ipfsHash_ends_with?: string | undefined,
	ipfsHash_ends_with_nocase?: string | undefined,
	ipfsHash_not_ends_with?: string | undefined,
	ipfsHash_not_ends_with_nocase?: string | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: ModelTypes["Invoice_filter"] | undefined,
	resolverType?: ModelTypes["ADR"] | undefined,
	resolverType_not?: ModelTypes["ADR"] | undefined,
	resolverType_in?: Array<ModelTypes["ADR"]> | undefined,
	resolverType_not_in?: Array<ModelTypes["ADR"]> | undefined,
	resolver?: ModelTypes["Bytes"] | undefined,
	resolver_not?: ModelTypes["Bytes"] | undefined,
	resolver_gt?: ModelTypes["Bytes"] | undefined,
	resolver_lt?: ModelTypes["Bytes"] | undefined,
	resolver_gte?: ModelTypes["Bytes"] | undefined,
	resolver_lte?: ModelTypes["Bytes"] | undefined,
	resolver_in?: Array<ModelTypes["Bytes"]> | undefined,
	resolver_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	resolver_contains?: ModelTypes["Bytes"] | undefined,
	resolver_not_contains?: ModelTypes["Bytes"] | undefined,
	clientAward?: ModelTypes["BigInt"] | undefined,
	clientAward_not?: ModelTypes["BigInt"] | undefined,
	clientAward_gt?: ModelTypes["BigInt"] | undefined,
	clientAward_lt?: ModelTypes["BigInt"] | undefined,
	clientAward_gte?: ModelTypes["BigInt"] | undefined,
	clientAward_lte?: ModelTypes["BigInt"] | undefined,
	clientAward_in?: Array<ModelTypes["BigInt"]> | undefined,
	clientAward_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	providerAward?: ModelTypes["BigInt"] | undefined,
	providerAward_not?: ModelTypes["BigInt"] | undefined,
	providerAward_gt?: ModelTypes["BigInt"] | undefined,
	providerAward_lt?: ModelTypes["BigInt"] | undefined,
	providerAward_gte?: ModelTypes["BigInt"] | undefined,
	providerAward_lte?: ModelTypes["BigInt"] | undefined,
	providerAward_in?: Array<ModelTypes["BigInt"]> | undefined,
	providerAward_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	resolutionDetails?: ModelTypes["Bytes"] | undefined,
	resolutionDetails_not?: ModelTypes["Bytes"] | undefined,
	resolutionDetails_gt?: ModelTypes["Bytes"] | undefined,
	resolutionDetails_lt?: ModelTypes["Bytes"] | undefined,
	resolutionDetails_gte?: ModelTypes["Bytes"] | undefined,
	resolutionDetails_lte?: ModelTypes["Bytes"] | undefined,
	resolutionDetails_in?: Array<ModelTypes["Bytes"]> | undefined,
	resolutionDetails_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	resolutionDetails_contains?: ModelTypes["Bytes"] | undefined,
	resolutionDetails_not_contains?: ModelTypes["Bytes"] | undefined,
	resolutionFee?: ModelTypes["BigInt"] | undefined,
	resolutionFee_not?: ModelTypes["BigInt"] | undefined,
	resolutionFee_gt?: ModelTypes["BigInt"] | undefined,
	resolutionFee_lt?: ModelTypes["BigInt"] | undefined,
	resolutionFee_gte?: ModelTypes["BigInt"] | undefined,
	resolutionFee_lte?: ModelTypes["BigInt"] | undefined,
	resolutionFee_in?: Array<ModelTypes["BigInt"]> | undefined,
	resolutionFee_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	ruling?: ModelTypes["BigInt"] | undefined,
	ruling_not?: ModelTypes["BigInt"] | undefined,
	ruling_gt?: ModelTypes["BigInt"] | undefined,
	ruling_lt?: ModelTypes["BigInt"] | undefined,
	ruling_gte?: ModelTypes["BigInt"] | undefined,
	ruling_lte?: ModelTypes["BigInt"] | undefined,
	ruling_in?: Array<ModelTypes["BigInt"]> | undefined,
	ruling_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp?: ModelTypes["BigInt"] | undefined,
	timestamp_not?: ModelTypes["BigInt"] | undefined,
	timestamp_gt?: ModelTypes["BigInt"] | undefined,
	timestamp_lt?: ModelTypes["BigInt"] | undefined,
	timestamp_gte?: ModelTypes["BigInt"] | undefined,
	timestamp_lte?: ModelTypes["BigInt"] | undefined,
	timestamp_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Resolution_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Resolution_filter"] | undefined> | undefined
};
	["Resolution_orderBy"]:Resolution_orderBy;
	["Subscription"]: {
		invoice?: ModelTypes["Invoice"] | undefined,
	invoices: Array<ModelTypes["Invoice"]>,
	deposit?: ModelTypes["Deposit"] | undefined,
	deposits: Array<ModelTypes["Deposit"]>,
	agreement?: ModelTypes["Agreement"] | undefined,
	agreements: Array<ModelTypes["Agreement"]>,
	release?: ModelTypes["Release"] | undefined,
	releases: Array<ModelTypes["Release"]>,
	withdraw?: ModelTypes["Withdraw"] | undefined,
	withdraws: Array<ModelTypes["Withdraw"]>,
	dispute?: ModelTypes["Dispute"] | undefined,
	disputes: Array<ModelTypes["Dispute"]>,
	resolution?: ModelTypes["Resolution"] | undefined,
	resolutions: Array<ModelTypes["Resolution"]>,
	token?: ModelTypes["Token"] | undefined,
	tokens: Array<ModelTypes["Token"]>,
	verified?: ModelTypes["Verified"] | undefined,
	verifieds: Array<ModelTypes["Verified"]>,
	milestonesAdded?: ModelTypes["MilestonesAdded"] | undefined,
	milestonesAddeds: Array<ModelTypes["MilestonesAdded"]>,
	tip?: ModelTypes["Tip"] | undefined,
	tips: Array<ModelTypes["Tip"]>,
	/** Access to subgraph metadata */
	_meta?: ModelTypes["_Meta_"] | undefined
};
	["Tip"]: {
		id: string,
	sender: ModelTypes["Bytes"],
	amount: ModelTypes["BigInt"]
};
	["Tip_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	sender?: ModelTypes["Bytes"] | undefined,
	sender_not?: ModelTypes["Bytes"] | undefined,
	sender_gt?: ModelTypes["Bytes"] | undefined,
	sender_lt?: ModelTypes["Bytes"] | undefined,
	sender_gte?: ModelTypes["Bytes"] | undefined,
	sender_lte?: ModelTypes["Bytes"] | undefined,
	sender_in?: Array<ModelTypes["Bytes"]> | undefined,
	sender_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	sender_contains?: ModelTypes["Bytes"] | undefined,
	sender_not_contains?: ModelTypes["Bytes"] | undefined,
	amount?: ModelTypes["BigInt"] | undefined,
	amount_not?: ModelTypes["BigInt"] | undefined,
	amount_gt?: ModelTypes["BigInt"] | undefined,
	amount_lt?: ModelTypes["BigInt"] | undefined,
	amount_gte?: ModelTypes["BigInt"] | undefined,
	amount_lte?: ModelTypes["BigInt"] | undefined,
	amount_in?: Array<ModelTypes["BigInt"]> | undefined,
	amount_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Tip_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Tip_filter"] | undefined> | undefined
};
	["Tip_orderBy"]:Tip_orderBy;
	["Token"]: {
		id: string,
	name: string,
	symbol: string,
	decimals: number
};
	["Token_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	name?: string | undefined,
	name_not?: string | undefined,
	name_gt?: string | undefined,
	name_lt?: string | undefined,
	name_gte?: string | undefined,
	name_lte?: string | undefined,
	name_in?: Array<string> | undefined,
	name_not_in?: Array<string> | undefined,
	name_contains?: string | undefined,
	name_contains_nocase?: string | undefined,
	name_not_contains?: string | undefined,
	name_not_contains_nocase?: string | undefined,
	name_starts_with?: string | undefined,
	name_starts_with_nocase?: string | undefined,
	name_not_starts_with?: string | undefined,
	name_not_starts_with_nocase?: string | undefined,
	name_ends_with?: string | undefined,
	name_ends_with_nocase?: string | undefined,
	name_not_ends_with?: string | undefined,
	name_not_ends_with_nocase?: string | undefined,
	symbol?: string | undefined,
	symbol_not?: string | undefined,
	symbol_gt?: string | undefined,
	symbol_lt?: string | undefined,
	symbol_gte?: string | undefined,
	symbol_lte?: string | undefined,
	symbol_in?: Array<string> | undefined,
	symbol_not_in?: Array<string> | undefined,
	symbol_contains?: string | undefined,
	symbol_contains_nocase?: string | undefined,
	symbol_not_contains?: string | undefined,
	symbol_not_contains_nocase?: string | undefined,
	symbol_starts_with?: string | undefined,
	symbol_starts_with_nocase?: string | undefined,
	symbol_not_starts_with?: string | undefined,
	symbol_not_starts_with_nocase?: string | undefined,
	symbol_ends_with?: string | undefined,
	symbol_ends_with_nocase?: string | undefined,
	symbol_not_ends_with?: string | undefined,
	symbol_not_ends_with_nocase?: string | undefined,
	decimals?: number | undefined,
	decimals_not?: number | undefined,
	decimals_gt?: number | undefined,
	decimals_lt?: number | undefined,
	decimals_gte?: number | undefined,
	decimals_lte?: number | undefined,
	decimals_in?: Array<number> | undefined,
	decimals_not_in?: Array<number> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Token_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Token_filter"] | undefined> | undefined
};
	["Token_orderBy"]:Token_orderBy;
	["Verified"]: {
		id: string,
	client: ModelTypes["Bytes"],
	invoice: ModelTypes["Bytes"]
};
	["Verified_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	client?: ModelTypes["Bytes"] | undefined,
	client_not?: ModelTypes["Bytes"] | undefined,
	client_gt?: ModelTypes["Bytes"] | undefined,
	client_lt?: ModelTypes["Bytes"] | undefined,
	client_gte?: ModelTypes["Bytes"] | undefined,
	client_lte?: ModelTypes["Bytes"] | undefined,
	client_in?: Array<ModelTypes["Bytes"]> | undefined,
	client_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	client_contains?: ModelTypes["Bytes"] | undefined,
	client_not_contains?: ModelTypes["Bytes"] | undefined,
	invoice?: ModelTypes["Bytes"] | undefined,
	invoice_not?: ModelTypes["Bytes"] | undefined,
	invoice_gt?: ModelTypes["Bytes"] | undefined,
	invoice_lt?: ModelTypes["Bytes"] | undefined,
	invoice_gte?: ModelTypes["Bytes"] | undefined,
	invoice_lte?: ModelTypes["Bytes"] | undefined,
	invoice_in?: Array<ModelTypes["Bytes"]> | undefined,
	invoice_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	invoice_contains?: ModelTypes["Bytes"] | undefined,
	invoice_not_contains?: ModelTypes["Bytes"] | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Verified_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Verified_filter"] | undefined> | undefined
};
	["Verified_orderBy"]:Verified_orderBy;
	["Withdraw"]: {
		id: string,
	txHash: ModelTypes["Bytes"],
	invoice: ModelTypes["Invoice"],
	amount: ModelTypes["BigInt"],
	timestamp: ModelTypes["BigInt"]
};
	["Withdraw_filter"]: {
	id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: ModelTypes["Bytes"] | undefined,
	txHash_not?: ModelTypes["Bytes"] | undefined,
	txHash_gt?: ModelTypes["Bytes"] | undefined,
	txHash_lt?: ModelTypes["Bytes"] | undefined,
	txHash_gte?: ModelTypes["Bytes"] | undefined,
	txHash_lte?: ModelTypes["Bytes"] | undefined,
	txHash_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<ModelTypes["Bytes"]> | undefined,
	txHash_contains?: ModelTypes["Bytes"] | undefined,
	txHash_not_contains?: ModelTypes["Bytes"] | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: ModelTypes["Invoice_filter"] | undefined,
	amount?: ModelTypes["BigInt"] | undefined,
	amount_not?: ModelTypes["BigInt"] | undefined,
	amount_gt?: ModelTypes["BigInt"] | undefined,
	amount_lt?: ModelTypes["BigInt"] | undefined,
	amount_gte?: ModelTypes["BigInt"] | undefined,
	amount_lte?: ModelTypes["BigInt"] | undefined,
	amount_in?: Array<ModelTypes["BigInt"]> | undefined,
	amount_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp?: ModelTypes["BigInt"] | undefined,
	timestamp_not?: ModelTypes["BigInt"] | undefined,
	timestamp_gt?: ModelTypes["BigInt"] | undefined,
	timestamp_lt?: ModelTypes["BigInt"] | undefined,
	timestamp_gte?: ModelTypes["BigInt"] | undefined,
	timestamp_lte?: ModelTypes["BigInt"] | undefined,
	timestamp_in?: Array<ModelTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<ModelTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: ModelTypes["BlockChangedFilter"] | undefined,
	and?: Array<ModelTypes["Withdraw_filter"] | undefined> | undefined,
	or?: Array<ModelTypes["Withdraw_filter"] | undefined> | undefined
};
	["Withdraw_orderBy"]:Withdraw_orderBy;
	["_Block_"]: {
		/** The hash of the block */
	hash?: ModelTypes["Bytes"] | undefined,
	/** The block number */
	number: number,
	/** Integer representation of the timestamp stored in blocks for the chain */
	timestamp?: number | undefined
};
	/** The type for the top-level _meta field */
["_Meta_"]: {
		/** Information about a specific subgraph block. The hash of the block
will be null if the _meta field has a block constraint that asks for
a block number. It will be filled if the _meta field has no block constraint
and therefore asks for the latest  block
 */
	block: ModelTypes["_Block_"],
	/** The deployment ID */
	deployment: string,
	/** If `true`, the subgraph encountered indexing errors at some past block */
	hasIndexingErrors: boolean
};
	["_SubgraphErrorPolicy_"]:_SubgraphErrorPolicy_;
	["schema"]: {
	query?: ModelTypes["Query"] | undefined,
	subscription?: ModelTypes["Subscription"] | undefined
}
    }

export type GraphQLTypes = {
    ["ADR"]: ADR;
	["Agreement"]: {
	__typename: "Agreement",
	id: string,
	type: string,
	src: string,
	createdAt: GraphQLTypes["BigInt"]
};
	["Agreement_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	type?: string | undefined,
	type_not?: string | undefined,
	type_gt?: string | undefined,
	type_lt?: string | undefined,
	type_gte?: string | undefined,
	type_lte?: string | undefined,
	type_in?: Array<string> | undefined,
	type_not_in?: Array<string> | undefined,
	type_contains?: string | undefined,
	type_contains_nocase?: string | undefined,
	type_not_contains?: string | undefined,
	type_not_contains_nocase?: string | undefined,
	type_starts_with?: string | undefined,
	type_starts_with_nocase?: string | undefined,
	type_not_starts_with?: string | undefined,
	type_not_starts_with_nocase?: string | undefined,
	type_ends_with?: string | undefined,
	type_ends_with_nocase?: string | undefined,
	type_not_ends_with?: string | undefined,
	type_not_ends_with_nocase?: string | undefined,
	src?: string | undefined,
	src_not?: string | undefined,
	src_gt?: string | undefined,
	src_lt?: string | undefined,
	src_gte?: string | undefined,
	src_lte?: string | undefined,
	src_in?: Array<string> | undefined,
	src_not_in?: Array<string> | undefined,
	src_contains?: string | undefined,
	src_contains_nocase?: string | undefined,
	src_not_contains?: string | undefined,
	src_not_contains_nocase?: string | undefined,
	src_starts_with?: string | undefined,
	src_starts_with_nocase?: string | undefined,
	src_not_starts_with?: string | undefined,
	src_not_starts_with_nocase?: string | undefined,
	src_ends_with?: string | undefined,
	src_ends_with_nocase?: string | undefined,
	src_not_ends_with?: string | undefined,
	src_not_ends_with_nocase?: string | undefined,
	createdAt?: GraphQLTypes["BigInt"] | undefined,
	createdAt_not?: GraphQLTypes["BigInt"] | undefined,
	createdAt_gt?: GraphQLTypes["BigInt"] | undefined,
	createdAt_lt?: GraphQLTypes["BigInt"] | undefined,
	createdAt_gte?: GraphQLTypes["BigInt"] | undefined,
	createdAt_lte?: GraphQLTypes["BigInt"] | undefined,
	createdAt_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	createdAt_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Agreement_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Agreement_filter"] | undefined> | undefined
};
	["Agreement_orderBy"]: Agreement_orderBy;
	["BigDecimal"]: "scalar" & { name: "BigDecimal" };
	["BigInt"]: "scalar" & { name: "BigInt" };
	["BlockChangedFilter"]: {
		number_gte: number
};
	["Block_height"]: {
		hash?: GraphQLTypes["Bytes"] | undefined,
	number?: number | undefined,
	number_gte?: number | undefined
};
	["Bytes"]: "scalar" & { name: "Bytes" };
	["Deposit"]: {
	__typename: "Deposit",
	id: string,
	txHash: GraphQLTypes["Bytes"],
	sender: GraphQLTypes["Bytes"],
	invoice: GraphQLTypes["Invoice"],
	amount: GraphQLTypes["BigInt"],
	timestamp: GraphQLTypes["BigInt"]
};
	["Deposit_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: GraphQLTypes["Bytes"] | undefined,
	txHash_not?: GraphQLTypes["Bytes"] | undefined,
	txHash_gt?: GraphQLTypes["Bytes"] | undefined,
	txHash_lt?: GraphQLTypes["Bytes"] | undefined,
	txHash_gte?: GraphQLTypes["Bytes"] | undefined,
	txHash_lte?: GraphQLTypes["Bytes"] | undefined,
	txHash_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_contains?: GraphQLTypes["Bytes"] | undefined,
	txHash_not_contains?: GraphQLTypes["Bytes"] | undefined,
	sender?: GraphQLTypes["Bytes"] | undefined,
	sender_not?: GraphQLTypes["Bytes"] | undefined,
	sender_gt?: GraphQLTypes["Bytes"] | undefined,
	sender_lt?: GraphQLTypes["Bytes"] | undefined,
	sender_gte?: GraphQLTypes["Bytes"] | undefined,
	sender_lte?: GraphQLTypes["Bytes"] | undefined,
	sender_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	sender_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	sender_contains?: GraphQLTypes["Bytes"] | undefined,
	sender_not_contains?: GraphQLTypes["Bytes"] | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: GraphQLTypes["Invoice_filter"] | undefined,
	amount?: GraphQLTypes["BigInt"] | undefined,
	amount_not?: GraphQLTypes["BigInt"] | undefined,
	amount_gt?: GraphQLTypes["BigInt"] | undefined,
	amount_lt?: GraphQLTypes["BigInt"] | undefined,
	amount_gte?: GraphQLTypes["BigInt"] | undefined,
	amount_lte?: GraphQLTypes["BigInt"] | undefined,
	amount_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	amount_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp?: GraphQLTypes["BigInt"] | undefined,
	timestamp_not?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Deposit_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Deposit_filter"] | undefined> | undefined
};
	["Deposit_orderBy"]: Deposit_orderBy;
	["Dispute"]: {
	__typename: "Dispute",
	id: string,
	txHash: GraphQLTypes["Bytes"],
	invoice: GraphQLTypes["Invoice"],
	sender: GraphQLTypes["Bytes"],
	details: GraphQLTypes["Bytes"],
	ipfsHash: string,
	disputeToken?: GraphQLTypes["Bytes"] | undefined,
	disputeFee?: GraphQLTypes["BigInt"] | undefined,
	disputeId?: GraphQLTypes["BigInt"] | undefined,
	timestamp: GraphQLTypes["BigInt"]
};
	["Dispute_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: GraphQLTypes["Bytes"] | undefined,
	txHash_not?: GraphQLTypes["Bytes"] | undefined,
	txHash_gt?: GraphQLTypes["Bytes"] | undefined,
	txHash_lt?: GraphQLTypes["Bytes"] | undefined,
	txHash_gte?: GraphQLTypes["Bytes"] | undefined,
	txHash_lte?: GraphQLTypes["Bytes"] | undefined,
	txHash_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_contains?: GraphQLTypes["Bytes"] | undefined,
	txHash_not_contains?: GraphQLTypes["Bytes"] | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: GraphQLTypes["Invoice_filter"] | undefined,
	sender?: GraphQLTypes["Bytes"] | undefined,
	sender_not?: GraphQLTypes["Bytes"] | undefined,
	sender_gt?: GraphQLTypes["Bytes"] | undefined,
	sender_lt?: GraphQLTypes["Bytes"] | undefined,
	sender_gte?: GraphQLTypes["Bytes"] | undefined,
	sender_lte?: GraphQLTypes["Bytes"] | undefined,
	sender_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	sender_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	sender_contains?: GraphQLTypes["Bytes"] | undefined,
	sender_not_contains?: GraphQLTypes["Bytes"] | undefined,
	details?: GraphQLTypes["Bytes"] | undefined,
	details_not?: GraphQLTypes["Bytes"] | undefined,
	details_gt?: GraphQLTypes["Bytes"] | undefined,
	details_lt?: GraphQLTypes["Bytes"] | undefined,
	details_gte?: GraphQLTypes["Bytes"] | undefined,
	details_lte?: GraphQLTypes["Bytes"] | undefined,
	details_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	details_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	details_contains?: GraphQLTypes["Bytes"] | undefined,
	details_not_contains?: GraphQLTypes["Bytes"] | undefined,
	ipfsHash?: string | undefined,
	ipfsHash_not?: string | undefined,
	ipfsHash_gt?: string | undefined,
	ipfsHash_lt?: string | undefined,
	ipfsHash_gte?: string | undefined,
	ipfsHash_lte?: string | undefined,
	ipfsHash_in?: Array<string> | undefined,
	ipfsHash_not_in?: Array<string> | undefined,
	ipfsHash_contains?: string | undefined,
	ipfsHash_contains_nocase?: string | undefined,
	ipfsHash_not_contains?: string | undefined,
	ipfsHash_not_contains_nocase?: string | undefined,
	ipfsHash_starts_with?: string | undefined,
	ipfsHash_starts_with_nocase?: string | undefined,
	ipfsHash_not_starts_with?: string | undefined,
	ipfsHash_not_starts_with_nocase?: string | undefined,
	ipfsHash_ends_with?: string | undefined,
	ipfsHash_ends_with_nocase?: string | undefined,
	ipfsHash_not_ends_with?: string | undefined,
	ipfsHash_not_ends_with_nocase?: string | undefined,
	disputeToken?: GraphQLTypes["Bytes"] | undefined,
	disputeToken_not?: GraphQLTypes["Bytes"] | undefined,
	disputeToken_gt?: GraphQLTypes["Bytes"] | undefined,
	disputeToken_lt?: GraphQLTypes["Bytes"] | undefined,
	disputeToken_gte?: GraphQLTypes["Bytes"] | undefined,
	disputeToken_lte?: GraphQLTypes["Bytes"] | undefined,
	disputeToken_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	disputeToken_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	disputeToken_contains?: GraphQLTypes["Bytes"] | undefined,
	disputeToken_not_contains?: GraphQLTypes["Bytes"] | undefined,
	disputeFee?: GraphQLTypes["BigInt"] | undefined,
	disputeFee_not?: GraphQLTypes["BigInt"] | undefined,
	disputeFee_gt?: GraphQLTypes["BigInt"] | undefined,
	disputeFee_lt?: GraphQLTypes["BigInt"] | undefined,
	disputeFee_gte?: GraphQLTypes["BigInt"] | undefined,
	disputeFee_lte?: GraphQLTypes["BigInt"] | undefined,
	disputeFee_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	disputeFee_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	disputeId?: GraphQLTypes["BigInt"] | undefined,
	disputeId_not?: GraphQLTypes["BigInt"] | undefined,
	disputeId_gt?: GraphQLTypes["BigInt"] | undefined,
	disputeId_lt?: GraphQLTypes["BigInt"] | undefined,
	disputeId_gte?: GraphQLTypes["BigInt"] | undefined,
	disputeId_lte?: GraphQLTypes["BigInt"] | undefined,
	disputeId_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	disputeId_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp?: GraphQLTypes["BigInt"] | undefined,
	timestamp_not?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Dispute_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Dispute_filter"] | undefined> | undefined
};
	["Dispute_orderBy"]: Dispute_orderBy;
	/** 8 bytes signed integer
 */
["Int8"]: "scalar" & { name: "Int8" };
	["Invoice"]: {
	__typename: "Invoice",
	id: string,
	network: string,
	address: GraphQLTypes["Bytes"],
	factoryAddress: GraphQLTypes["Bytes"],
	token: GraphQLTypes["Bytes"],
	client: GraphQLTypes["Bytes"],
	provider: GraphQLTypes["Bytes"],
	resolverType: GraphQLTypes["ADR"],
	resolver: GraphQLTypes["Bytes"],
	resolutionRate: GraphQLTypes["BigInt"],
	isLocked: boolean,
	amounts: Array<GraphQLTypes["BigInt"]>,
	numMilestones: number,
	currentMilestone: GraphQLTypes["BigInt"],
	total: GraphQLTypes["BigInt"],
	released: GraphQLTypes["BigInt"],
	createdAt: GraphQLTypes["BigInt"],
	creationTxHash: GraphQLTypes["Bytes"],
	terminationTime: GraphQLTypes["BigInt"],
	details: GraphQLTypes["Bytes"],
	ipfsHash: string,
	disputeId: GraphQLTypes["BigInt"],
	projectName: string,
	projectDescription: string,
	projectAgreement: Array<GraphQLTypes["Agreement"]>,
	startDate?: GraphQLTypes["BigInt"] | undefined,
	endDate?: GraphQLTypes["BigInt"] | undefined,
	deposits: Array<GraphQLTypes["Deposit"]>,
	withdraws: Array<GraphQLTypes["Withdraw"]>,
	releases: Array<GraphQLTypes["Release"]>,
	disputes: Array<GraphQLTypes["Dispute"]>,
	resolutions: Array<GraphQLTypes["Resolution"]>,
	tokenMetadata: GraphQLTypes["Token"],
	verified: Array<GraphQLTypes["Verified"]>,
	milestonesAdded: Array<GraphQLTypes["MilestonesAdded"]>,
	invoiceType?: string | undefined,
	version?: GraphQLTypes["BigInt"] | undefined,
	lateFee?: GraphQLTypes["BigInt"] | undefined,
	lateFeeTimeInterval?: GraphQLTypes["BigInt"] | undefined,
	tipAmount?: Array<GraphQLTypes["Tip"]> | undefined,
	deadline?: GraphQLTypes["BigInt"] | undefined,
	fulfilled?: boolean | undefined
};
	["Invoice_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	network?: string | undefined,
	network_not?: string | undefined,
	network_gt?: string | undefined,
	network_lt?: string | undefined,
	network_gte?: string | undefined,
	network_lte?: string | undefined,
	network_in?: Array<string> | undefined,
	network_not_in?: Array<string> | undefined,
	network_contains?: string | undefined,
	network_contains_nocase?: string | undefined,
	network_not_contains?: string | undefined,
	network_not_contains_nocase?: string | undefined,
	network_starts_with?: string | undefined,
	network_starts_with_nocase?: string | undefined,
	network_not_starts_with?: string | undefined,
	network_not_starts_with_nocase?: string | undefined,
	network_ends_with?: string | undefined,
	network_ends_with_nocase?: string | undefined,
	network_not_ends_with?: string | undefined,
	network_not_ends_with_nocase?: string | undefined,
	address?: GraphQLTypes["Bytes"] | undefined,
	address_not?: GraphQLTypes["Bytes"] | undefined,
	address_gt?: GraphQLTypes["Bytes"] | undefined,
	address_lt?: GraphQLTypes["Bytes"] | undefined,
	address_gte?: GraphQLTypes["Bytes"] | undefined,
	address_lte?: GraphQLTypes["Bytes"] | undefined,
	address_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	address_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	address_contains?: GraphQLTypes["Bytes"] | undefined,
	address_not_contains?: GraphQLTypes["Bytes"] | undefined,
	factoryAddress?: GraphQLTypes["Bytes"] | undefined,
	factoryAddress_not?: GraphQLTypes["Bytes"] | undefined,
	factoryAddress_gt?: GraphQLTypes["Bytes"] | undefined,
	factoryAddress_lt?: GraphQLTypes["Bytes"] | undefined,
	factoryAddress_gte?: GraphQLTypes["Bytes"] | undefined,
	factoryAddress_lte?: GraphQLTypes["Bytes"] | undefined,
	factoryAddress_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	factoryAddress_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	factoryAddress_contains?: GraphQLTypes["Bytes"] | undefined,
	factoryAddress_not_contains?: GraphQLTypes["Bytes"] | undefined,
	token?: GraphQLTypes["Bytes"] | undefined,
	token_not?: GraphQLTypes["Bytes"] | undefined,
	token_gt?: GraphQLTypes["Bytes"] | undefined,
	token_lt?: GraphQLTypes["Bytes"] | undefined,
	token_gte?: GraphQLTypes["Bytes"] | undefined,
	token_lte?: GraphQLTypes["Bytes"] | undefined,
	token_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	token_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	token_contains?: GraphQLTypes["Bytes"] | undefined,
	token_not_contains?: GraphQLTypes["Bytes"] | undefined,
	client?: GraphQLTypes["Bytes"] | undefined,
	client_not?: GraphQLTypes["Bytes"] | undefined,
	client_gt?: GraphQLTypes["Bytes"] | undefined,
	client_lt?: GraphQLTypes["Bytes"] | undefined,
	client_gte?: GraphQLTypes["Bytes"] | undefined,
	client_lte?: GraphQLTypes["Bytes"] | undefined,
	client_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	client_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	client_contains?: GraphQLTypes["Bytes"] | undefined,
	client_not_contains?: GraphQLTypes["Bytes"] | undefined,
	provider?: GraphQLTypes["Bytes"] | undefined,
	provider_not?: GraphQLTypes["Bytes"] | undefined,
	provider_gt?: GraphQLTypes["Bytes"] | undefined,
	provider_lt?: GraphQLTypes["Bytes"] | undefined,
	provider_gte?: GraphQLTypes["Bytes"] | undefined,
	provider_lte?: GraphQLTypes["Bytes"] | undefined,
	provider_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	provider_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	provider_contains?: GraphQLTypes["Bytes"] | undefined,
	provider_not_contains?: GraphQLTypes["Bytes"] | undefined,
	resolverType?: GraphQLTypes["ADR"] | undefined,
	resolverType_not?: GraphQLTypes["ADR"] | undefined,
	resolverType_in?: Array<GraphQLTypes["ADR"]> | undefined,
	resolverType_not_in?: Array<GraphQLTypes["ADR"]> | undefined,
	resolver?: GraphQLTypes["Bytes"] | undefined,
	resolver_not?: GraphQLTypes["Bytes"] | undefined,
	resolver_gt?: GraphQLTypes["Bytes"] | undefined,
	resolver_lt?: GraphQLTypes["Bytes"] | undefined,
	resolver_gte?: GraphQLTypes["Bytes"] | undefined,
	resolver_lte?: GraphQLTypes["Bytes"] | undefined,
	resolver_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	resolver_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	resolver_contains?: GraphQLTypes["Bytes"] | undefined,
	resolver_not_contains?: GraphQLTypes["Bytes"] | undefined,
	resolutionRate?: GraphQLTypes["BigInt"] | undefined,
	resolutionRate_not?: GraphQLTypes["BigInt"] | undefined,
	resolutionRate_gt?: GraphQLTypes["BigInt"] | undefined,
	resolutionRate_lt?: GraphQLTypes["BigInt"] | undefined,
	resolutionRate_gte?: GraphQLTypes["BigInt"] | undefined,
	resolutionRate_lte?: GraphQLTypes["BigInt"] | undefined,
	resolutionRate_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	resolutionRate_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	isLocked?: boolean | undefined,
	isLocked_not?: boolean | undefined,
	isLocked_in?: Array<boolean> | undefined,
	isLocked_not_in?: Array<boolean> | undefined,
	amounts?: Array<GraphQLTypes["BigInt"]> | undefined,
	amounts_not?: Array<GraphQLTypes["BigInt"]> | undefined,
	amounts_contains?: Array<GraphQLTypes["BigInt"]> | undefined,
	amounts_contains_nocase?: Array<GraphQLTypes["BigInt"]> | undefined,
	amounts_not_contains?: Array<GraphQLTypes["BigInt"]> | undefined,
	amounts_not_contains_nocase?: Array<GraphQLTypes["BigInt"]> | undefined,
	numMilestones?: number | undefined,
	numMilestones_not?: number | undefined,
	numMilestones_gt?: number | undefined,
	numMilestones_lt?: number | undefined,
	numMilestones_gte?: number | undefined,
	numMilestones_lte?: number | undefined,
	numMilestones_in?: Array<number> | undefined,
	numMilestones_not_in?: Array<number> | undefined,
	currentMilestone?: GraphQLTypes["BigInt"] | undefined,
	currentMilestone_not?: GraphQLTypes["BigInt"] | undefined,
	currentMilestone_gt?: GraphQLTypes["BigInt"] | undefined,
	currentMilestone_lt?: GraphQLTypes["BigInt"] | undefined,
	currentMilestone_gte?: GraphQLTypes["BigInt"] | undefined,
	currentMilestone_lte?: GraphQLTypes["BigInt"] | undefined,
	currentMilestone_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	currentMilestone_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	total?: GraphQLTypes["BigInt"] | undefined,
	total_not?: GraphQLTypes["BigInt"] | undefined,
	total_gt?: GraphQLTypes["BigInt"] | undefined,
	total_lt?: GraphQLTypes["BigInt"] | undefined,
	total_gte?: GraphQLTypes["BigInt"] | undefined,
	total_lte?: GraphQLTypes["BigInt"] | undefined,
	total_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	total_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	released?: GraphQLTypes["BigInt"] | undefined,
	released_not?: GraphQLTypes["BigInt"] | undefined,
	released_gt?: GraphQLTypes["BigInt"] | undefined,
	released_lt?: GraphQLTypes["BigInt"] | undefined,
	released_gte?: GraphQLTypes["BigInt"] | undefined,
	released_lte?: GraphQLTypes["BigInt"] | undefined,
	released_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	released_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	createdAt?: GraphQLTypes["BigInt"] | undefined,
	createdAt_not?: GraphQLTypes["BigInt"] | undefined,
	createdAt_gt?: GraphQLTypes["BigInt"] | undefined,
	createdAt_lt?: GraphQLTypes["BigInt"] | undefined,
	createdAt_gte?: GraphQLTypes["BigInt"] | undefined,
	createdAt_lte?: GraphQLTypes["BigInt"] | undefined,
	createdAt_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	createdAt_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	creationTxHash?: GraphQLTypes["Bytes"] | undefined,
	creationTxHash_not?: GraphQLTypes["Bytes"] | undefined,
	creationTxHash_gt?: GraphQLTypes["Bytes"] | undefined,
	creationTxHash_lt?: GraphQLTypes["Bytes"] | undefined,
	creationTxHash_gte?: GraphQLTypes["Bytes"] | undefined,
	creationTxHash_lte?: GraphQLTypes["Bytes"] | undefined,
	creationTxHash_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	creationTxHash_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	creationTxHash_contains?: GraphQLTypes["Bytes"] | undefined,
	creationTxHash_not_contains?: GraphQLTypes["Bytes"] | undefined,
	terminationTime?: GraphQLTypes["BigInt"] | undefined,
	terminationTime_not?: GraphQLTypes["BigInt"] | undefined,
	terminationTime_gt?: GraphQLTypes["BigInt"] | undefined,
	terminationTime_lt?: GraphQLTypes["BigInt"] | undefined,
	terminationTime_gte?: GraphQLTypes["BigInt"] | undefined,
	terminationTime_lte?: GraphQLTypes["BigInt"] | undefined,
	terminationTime_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	terminationTime_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	details?: GraphQLTypes["Bytes"] | undefined,
	details_not?: GraphQLTypes["Bytes"] | undefined,
	details_gt?: GraphQLTypes["Bytes"] | undefined,
	details_lt?: GraphQLTypes["Bytes"] | undefined,
	details_gte?: GraphQLTypes["Bytes"] | undefined,
	details_lte?: GraphQLTypes["Bytes"] | undefined,
	details_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	details_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	details_contains?: GraphQLTypes["Bytes"] | undefined,
	details_not_contains?: GraphQLTypes["Bytes"] | undefined,
	ipfsHash?: string | undefined,
	ipfsHash_not?: string | undefined,
	ipfsHash_gt?: string | undefined,
	ipfsHash_lt?: string | undefined,
	ipfsHash_gte?: string | undefined,
	ipfsHash_lte?: string | undefined,
	ipfsHash_in?: Array<string> | undefined,
	ipfsHash_not_in?: Array<string> | undefined,
	ipfsHash_contains?: string | undefined,
	ipfsHash_contains_nocase?: string | undefined,
	ipfsHash_not_contains?: string | undefined,
	ipfsHash_not_contains_nocase?: string | undefined,
	ipfsHash_starts_with?: string | undefined,
	ipfsHash_starts_with_nocase?: string | undefined,
	ipfsHash_not_starts_with?: string | undefined,
	ipfsHash_not_starts_with_nocase?: string | undefined,
	ipfsHash_ends_with?: string | undefined,
	ipfsHash_ends_with_nocase?: string | undefined,
	ipfsHash_not_ends_with?: string | undefined,
	ipfsHash_not_ends_with_nocase?: string | undefined,
	disputeId?: GraphQLTypes["BigInt"] | undefined,
	disputeId_not?: GraphQLTypes["BigInt"] | undefined,
	disputeId_gt?: GraphQLTypes["BigInt"] | undefined,
	disputeId_lt?: GraphQLTypes["BigInt"] | undefined,
	disputeId_gte?: GraphQLTypes["BigInt"] | undefined,
	disputeId_lte?: GraphQLTypes["BigInt"] | undefined,
	disputeId_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	disputeId_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	projectName?: string | undefined,
	projectName_not?: string | undefined,
	projectName_gt?: string | undefined,
	projectName_lt?: string | undefined,
	projectName_gte?: string | undefined,
	projectName_lte?: string | undefined,
	projectName_in?: Array<string> | undefined,
	projectName_not_in?: Array<string> | undefined,
	projectName_contains?: string | undefined,
	projectName_contains_nocase?: string | undefined,
	projectName_not_contains?: string | undefined,
	projectName_not_contains_nocase?: string | undefined,
	projectName_starts_with?: string | undefined,
	projectName_starts_with_nocase?: string | undefined,
	projectName_not_starts_with?: string | undefined,
	projectName_not_starts_with_nocase?: string | undefined,
	projectName_ends_with?: string | undefined,
	projectName_ends_with_nocase?: string | undefined,
	projectName_not_ends_with?: string | undefined,
	projectName_not_ends_with_nocase?: string | undefined,
	projectDescription?: string | undefined,
	projectDescription_not?: string | undefined,
	projectDescription_gt?: string | undefined,
	projectDescription_lt?: string | undefined,
	projectDescription_gte?: string | undefined,
	projectDescription_lte?: string | undefined,
	projectDescription_in?: Array<string> | undefined,
	projectDescription_not_in?: Array<string> | undefined,
	projectDescription_contains?: string | undefined,
	projectDescription_contains_nocase?: string | undefined,
	projectDescription_not_contains?: string | undefined,
	projectDescription_not_contains_nocase?: string | undefined,
	projectDescription_starts_with?: string | undefined,
	projectDescription_starts_with_nocase?: string | undefined,
	projectDescription_not_starts_with?: string | undefined,
	projectDescription_not_starts_with_nocase?: string | undefined,
	projectDescription_ends_with?: string | undefined,
	projectDescription_ends_with_nocase?: string | undefined,
	projectDescription_not_ends_with?: string | undefined,
	projectDescription_not_ends_with_nocase?: string | undefined,
	projectAgreement?: Array<string> | undefined,
	projectAgreement_not?: Array<string> | undefined,
	projectAgreement_contains?: Array<string> | undefined,
	projectAgreement_contains_nocase?: Array<string> | undefined,
	projectAgreement_not_contains?: Array<string> | undefined,
	projectAgreement_not_contains_nocase?: Array<string> | undefined,
	projectAgreement_?: GraphQLTypes["Agreement_filter"] | undefined,
	startDate?: GraphQLTypes["BigInt"] | undefined,
	startDate_not?: GraphQLTypes["BigInt"] | undefined,
	startDate_gt?: GraphQLTypes["BigInt"] | undefined,
	startDate_lt?: GraphQLTypes["BigInt"] | undefined,
	startDate_gte?: GraphQLTypes["BigInt"] | undefined,
	startDate_lte?: GraphQLTypes["BigInt"] | undefined,
	startDate_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	startDate_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	endDate?: GraphQLTypes["BigInt"] | undefined,
	endDate_not?: GraphQLTypes["BigInt"] | undefined,
	endDate_gt?: GraphQLTypes["BigInt"] | undefined,
	endDate_lt?: GraphQLTypes["BigInt"] | undefined,
	endDate_gte?: GraphQLTypes["BigInt"] | undefined,
	endDate_lte?: GraphQLTypes["BigInt"] | undefined,
	endDate_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	endDate_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	deposits?: Array<string> | undefined,
	deposits_not?: Array<string> | undefined,
	deposits_contains?: Array<string> | undefined,
	deposits_contains_nocase?: Array<string> | undefined,
	deposits_not_contains?: Array<string> | undefined,
	deposits_not_contains_nocase?: Array<string> | undefined,
	deposits_?: GraphQLTypes["Deposit_filter"] | undefined,
	withdraws?: Array<string> | undefined,
	withdraws_not?: Array<string> | undefined,
	withdraws_contains?: Array<string> | undefined,
	withdraws_contains_nocase?: Array<string> | undefined,
	withdraws_not_contains?: Array<string> | undefined,
	withdraws_not_contains_nocase?: Array<string> | undefined,
	withdraws_?: GraphQLTypes["Withdraw_filter"] | undefined,
	releases?: Array<string> | undefined,
	releases_not?: Array<string> | undefined,
	releases_contains?: Array<string> | undefined,
	releases_contains_nocase?: Array<string> | undefined,
	releases_not_contains?: Array<string> | undefined,
	releases_not_contains_nocase?: Array<string> | undefined,
	releases_?: GraphQLTypes["Release_filter"] | undefined,
	disputes?: Array<string> | undefined,
	disputes_not?: Array<string> | undefined,
	disputes_contains?: Array<string> | undefined,
	disputes_contains_nocase?: Array<string> | undefined,
	disputes_not_contains?: Array<string> | undefined,
	disputes_not_contains_nocase?: Array<string> | undefined,
	disputes_?: GraphQLTypes["Dispute_filter"] | undefined,
	resolutions?: Array<string> | undefined,
	resolutions_not?: Array<string> | undefined,
	resolutions_contains?: Array<string> | undefined,
	resolutions_contains_nocase?: Array<string> | undefined,
	resolutions_not_contains?: Array<string> | undefined,
	resolutions_not_contains_nocase?: Array<string> | undefined,
	resolutions_?: GraphQLTypes["Resolution_filter"] | undefined,
	tokenMetadata?: string | undefined,
	tokenMetadata_not?: string | undefined,
	tokenMetadata_gt?: string | undefined,
	tokenMetadata_lt?: string | undefined,
	tokenMetadata_gte?: string | undefined,
	tokenMetadata_lte?: string | undefined,
	tokenMetadata_in?: Array<string> | undefined,
	tokenMetadata_not_in?: Array<string> | undefined,
	tokenMetadata_contains?: string | undefined,
	tokenMetadata_contains_nocase?: string | undefined,
	tokenMetadata_not_contains?: string | undefined,
	tokenMetadata_not_contains_nocase?: string | undefined,
	tokenMetadata_starts_with?: string | undefined,
	tokenMetadata_starts_with_nocase?: string | undefined,
	tokenMetadata_not_starts_with?: string | undefined,
	tokenMetadata_not_starts_with_nocase?: string | undefined,
	tokenMetadata_ends_with?: string | undefined,
	tokenMetadata_ends_with_nocase?: string | undefined,
	tokenMetadata_not_ends_with?: string | undefined,
	tokenMetadata_not_ends_with_nocase?: string | undefined,
	tokenMetadata_?: GraphQLTypes["Token_filter"] | undefined,
	verified?: Array<string> | undefined,
	verified_not?: Array<string> | undefined,
	verified_contains?: Array<string> | undefined,
	verified_contains_nocase?: Array<string> | undefined,
	verified_not_contains?: Array<string> | undefined,
	verified_not_contains_nocase?: Array<string> | undefined,
	verified_?: GraphQLTypes["Verified_filter"] | undefined,
	milestonesAdded?: Array<string> | undefined,
	milestonesAdded_not?: Array<string> | undefined,
	milestonesAdded_contains?: Array<string> | undefined,
	milestonesAdded_contains_nocase?: Array<string> | undefined,
	milestonesAdded_not_contains?: Array<string> | undefined,
	milestonesAdded_not_contains_nocase?: Array<string> | undefined,
	milestonesAdded_?: GraphQLTypes["MilestonesAdded_filter"] | undefined,
	invoiceType?: string | undefined,
	invoiceType_not?: string | undefined,
	invoiceType_gt?: string | undefined,
	invoiceType_lt?: string | undefined,
	invoiceType_gte?: string | undefined,
	invoiceType_lte?: string | undefined,
	invoiceType_in?: Array<string> | undefined,
	invoiceType_not_in?: Array<string> | undefined,
	invoiceType_contains?: string | undefined,
	invoiceType_contains_nocase?: string | undefined,
	invoiceType_not_contains?: string | undefined,
	invoiceType_not_contains_nocase?: string | undefined,
	invoiceType_starts_with?: string | undefined,
	invoiceType_starts_with_nocase?: string | undefined,
	invoiceType_not_starts_with?: string | undefined,
	invoiceType_not_starts_with_nocase?: string | undefined,
	invoiceType_ends_with?: string | undefined,
	invoiceType_ends_with_nocase?: string | undefined,
	invoiceType_not_ends_with?: string | undefined,
	invoiceType_not_ends_with_nocase?: string | undefined,
	version?: GraphQLTypes["BigInt"] | undefined,
	version_not?: GraphQLTypes["BigInt"] | undefined,
	version_gt?: GraphQLTypes["BigInt"] | undefined,
	version_lt?: GraphQLTypes["BigInt"] | undefined,
	version_gte?: GraphQLTypes["BigInt"] | undefined,
	version_lte?: GraphQLTypes["BigInt"] | undefined,
	version_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	version_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	lateFee?: GraphQLTypes["BigInt"] | undefined,
	lateFee_not?: GraphQLTypes["BigInt"] | undefined,
	lateFee_gt?: GraphQLTypes["BigInt"] | undefined,
	lateFee_lt?: GraphQLTypes["BigInt"] | undefined,
	lateFee_gte?: GraphQLTypes["BigInt"] | undefined,
	lateFee_lte?: GraphQLTypes["BigInt"] | undefined,
	lateFee_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	lateFee_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	lateFeeTimeInterval?: GraphQLTypes["BigInt"] | undefined,
	lateFeeTimeInterval_not?: GraphQLTypes["BigInt"] | undefined,
	lateFeeTimeInterval_gt?: GraphQLTypes["BigInt"] | undefined,
	lateFeeTimeInterval_lt?: GraphQLTypes["BigInt"] | undefined,
	lateFeeTimeInterval_gte?: GraphQLTypes["BigInt"] | undefined,
	lateFeeTimeInterval_lte?: GraphQLTypes["BigInt"] | undefined,
	lateFeeTimeInterval_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	lateFeeTimeInterval_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	tipAmount?: Array<string> | undefined,
	tipAmount_not?: Array<string> | undefined,
	tipAmount_contains?: Array<string> | undefined,
	tipAmount_contains_nocase?: Array<string> | undefined,
	tipAmount_not_contains?: Array<string> | undefined,
	tipAmount_not_contains_nocase?: Array<string> | undefined,
	tipAmount_?: GraphQLTypes["Tip_filter"] | undefined,
	deadline?: GraphQLTypes["BigInt"] | undefined,
	deadline_not?: GraphQLTypes["BigInt"] | undefined,
	deadline_gt?: GraphQLTypes["BigInt"] | undefined,
	deadline_lt?: GraphQLTypes["BigInt"] | undefined,
	deadline_gte?: GraphQLTypes["BigInt"] | undefined,
	deadline_lte?: GraphQLTypes["BigInt"] | undefined,
	deadline_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	deadline_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	fulfilled?: boolean | undefined,
	fulfilled_not?: boolean | undefined,
	fulfilled_in?: Array<boolean> | undefined,
	fulfilled_not_in?: Array<boolean> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Invoice_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Invoice_filter"] | undefined> | undefined
};
	["Invoice_orderBy"]: Invoice_orderBy;
	["MilestonesAdded"]: {
	__typename: "MilestonesAdded",
	id: string,
	sender: GraphQLTypes["Bytes"],
	invoice: GraphQLTypes["Bytes"],
	milestones: Array<GraphQLTypes["BigInt"]>
};
	["MilestonesAdded_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	sender?: GraphQLTypes["Bytes"] | undefined,
	sender_not?: GraphQLTypes["Bytes"] | undefined,
	sender_gt?: GraphQLTypes["Bytes"] | undefined,
	sender_lt?: GraphQLTypes["Bytes"] | undefined,
	sender_gte?: GraphQLTypes["Bytes"] | undefined,
	sender_lte?: GraphQLTypes["Bytes"] | undefined,
	sender_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	sender_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	sender_contains?: GraphQLTypes["Bytes"] | undefined,
	sender_not_contains?: GraphQLTypes["Bytes"] | undefined,
	invoice?: GraphQLTypes["Bytes"] | undefined,
	invoice_not?: GraphQLTypes["Bytes"] | undefined,
	invoice_gt?: GraphQLTypes["Bytes"] | undefined,
	invoice_lt?: GraphQLTypes["Bytes"] | undefined,
	invoice_gte?: GraphQLTypes["Bytes"] | undefined,
	invoice_lte?: GraphQLTypes["Bytes"] | undefined,
	invoice_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	invoice_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	invoice_contains?: GraphQLTypes["Bytes"] | undefined,
	invoice_not_contains?: GraphQLTypes["Bytes"] | undefined,
	milestones?: Array<GraphQLTypes["BigInt"]> | undefined,
	milestones_not?: Array<GraphQLTypes["BigInt"]> | undefined,
	milestones_contains?: Array<GraphQLTypes["BigInt"]> | undefined,
	milestones_contains_nocase?: Array<GraphQLTypes["BigInt"]> | undefined,
	milestones_not_contains?: Array<GraphQLTypes["BigInt"]> | undefined,
	milestones_not_contains_nocase?: Array<GraphQLTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["MilestonesAdded_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["MilestonesAdded_filter"] | undefined> | undefined
};
	["MilestonesAdded_orderBy"]: MilestonesAdded_orderBy;
	/** Defines the order direction, either ascending or descending */
["OrderDirection"]: OrderDirection;
	["Query"]: {
	__typename: "Query",
	invoice?: GraphQLTypes["Invoice"] | undefined,
	invoices: Array<GraphQLTypes["Invoice"]>,
	deposit?: GraphQLTypes["Deposit"] | undefined,
	deposits: Array<GraphQLTypes["Deposit"]>,
	agreement?: GraphQLTypes["Agreement"] | undefined,
	agreements: Array<GraphQLTypes["Agreement"]>,
	release?: GraphQLTypes["Release"] | undefined,
	releases: Array<GraphQLTypes["Release"]>,
	withdraw?: GraphQLTypes["Withdraw"] | undefined,
	withdraws: Array<GraphQLTypes["Withdraw"]>,
	dispute?: GraphQLTypes["Dispute"] | undefined,
	disputes: Array<GraphQLTypes["Dispute"]>,
	resolution?: GraphQLTypes["Resolution"] | undefined,
	resolutions: Array<GraphQLTypes["Resolution"]>,
	token?: GraphQLTypes["Token"] | undefined,
	tokens: Array<GraphQLTypes["Token"]>,
	verified?: GraphQLTypes["Verified"] | undefined,
	verifieds: Array<GraphQLTypes["Verified"]>,
	milestonesAdded?: GraphQLTypes["MilestonesAdded"] | undefined,
	milestonesAddeds: Array<GraphQLTypes["MilestonesAdded"]>,
	tip?: GraphQLTypes["Tip"] | undefined,
	tips: Array<GraphQLTypes["Tip"]>,
	/** Access to subgraph metadata */
	_meta?: GraphQLTypes["_Meta_"] | undefined
};
	["Release"]: {
	__typename: "Release",
	id: string,
	txHash: GraphQLTypes["Bytes"],
	invoice: GraphQLTypes["Invoice"],
	milestone: GraphQLTypes["BigInt"],
	amount: GraphQLTypes["BigInt"],
	timestamp: GraphQLTypes["BigInt"]
};
	["Release_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: GraphQLTypes["Bytes"] | undefined,
	txHash_not?: GraphQLTypes["Bytes"] | undefined,
	txHash_gt?: GraphQLTypes["Bytes"] | undefined,
	txHash_lt?: GraphQLTypes["Bytes"] | undefined,
	txHash_gte?: GraphQLTypes["Bytes"] | undefined,
	txHash_lte?: GraphQLTypes["Bytes"] | undefined,
	txHash_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_contains?: GraphQLTypes["Bytes"] | undefined,
	txHash_not_contains?: GraphQLTypes["Bytes"] | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: GraphQLTypes["Invoice_filter"] | undefined,
	milestone?: GraphQLTypes["BigInt"] | undefined,
	milestone_not?: GraphQLTypes["BigInt"] | undefined,
	milestone_gt?: GraphQLTypes["BigInt"] | undefined,
	milestone_lt?: GraphQLTypes["BigInt"] | undefined,
	milestone_gte?: GraphQLTypes["BigInt"] | undefined,
	milestone_lte?: GraphQLTypes["BigInt"] | undefined,
	milestone_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	milestone_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	amount?: GraphQLTypes["BigInt"] | undefined,
	amount_not?: GraphQLTypes["BigInt"] | undefined,
	amount_gt?: GraphQLTypes["BigInt"] | undefined,
	amount_lt?: GraphQLTypes["BigInt"] | undefined,
	amount_gte?: GraphQLTypes["BigInt"] | undefined,
	amount_lte?: GraphQLTypes["BigInt"] | undefined,
	amount_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	amount_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp?: GraphQLTypes["BigInt"] | undefined,
	timestamp_not?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Release_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Release_filter"] | undefined> | undefined
};
	["Release_orderBy"]: Release_orderBy;
	["Resolution"]: {
	__typename: "Resolution",
	id: string,
	txHash: GraphQLTypes["Bytes"],
	details: GraphQLTypes["Bytes"],
	ipfsHash: string,
	invoice: GraphQLTypes["Invoice"],
	resolverType: GraphQLTypes["ADR"],
	resolver: GraphQLTypes["Bytes"],
	clientAward: GraphQLTypes["BigInt"],
	providerAward: GraphQLTypes["BigInt"],
	resolutionDetails?: GraphQLTypes["Bytes"] | undefined,
	resolutionFee?: GraphQLTypes["BigInt"] | undefined,
	ruling?: GraphQLTypes["BigInt"] | undefined,
	timestamp: GraphQLTypes["BigInt"]
};
	["Resolution_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: GraphQLTypes["Bytes"] | undefined,
	txHash_not?: GraphQLTypes["Bytes"] | undefined,
	txHash_gt?: GraphQLTypes["Bytes"] | undefined,
	txHash_lt?: GraphQLTypes["Bytes"] | undefined,
	txHash_gte?: GraphQLTypes["Bytes"] | undefined,
	txHash_lte?: GraphQLTypes["Bytes"] | undefined,
	txHash_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_contains?: GraphQLTypes["Bytes"] | undefined,
	txHash_not_contains?: GraphQLTypes["Bytes"] | undefined,
	details?: GraphQLTypes["Bytes"] | undefined,
	details_not?: GraphQLTypes["Bytes"] | undefined,
	details_gt?: GraphQLTypes["Bytes"] | undefined,
	details_lt?: GraphQLTypes["Bytes"] | undefined,
	details_gte?: GraphQLTypes["Bytes"] | undefined,
	details_lte?: GraphQLTypes["Bytes"] | undefined,
	details_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	details_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	details_contains?: GraphQLTypes["Bytes"] | undefined,
	details_not_contains?: GraphQLTypes["Bytes"] | undefined,
	ipfsHash?: string | undefined,
	ipfsHash_not?: string | undefined,
	ipfsHash_gt?: string | undefined,
	ipfsHash_lt?: string | undefined,
	ipfsHash_gte?: string | undefined,
	ipfsHash_lte?: string | undefined,
	ipfsHash_in?: Array<string> | undefined,
	ipfsHash_not_in?: Array<string> | undefined,
	ipfsHash_contains?: string | undefined,
	ipfsHash_contains_nocase?: string | undefined,
	ipfsHash_not_contains?: string | undefined,
	ipfsHash_not_contains_nocase?: string | undefined,
	ipfsHash_starts_with?: string | undefined,
	ipfsHash_starts_with_nocase?: string | undefined,
	ipfsHash_not_starts_with?: string | undefined,
	ipfsHash_not_starts_with_nocase?: string | undefined,
	ipfsHash_ends_with?: string | undefined,
	ipfsHash_ends_with_nocase?: string | undefined,
	ipfsHash_not_ends_with?: string | undefined,
	ipfsHash_not_ends_with_nocase?: string | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: GraphQLTypes["Invoice_filter"] | undefined,
	resolverType?: GraphQLTypes["ADR"] | undefined,
	resolverType_not?: GraphQLTypes["ADR"] | undefined,
	resolverType_in?: Array<GraphQLTypes["ADR"]> | undefined,
	resolverType_not_in?: Array<GraphQLTypes["ADR"]> | undefined,
	resolver?: GraphQLTypes["Bytes"] | undefined,
	resolver_not?: GraphQLTypes["Bytes"] | undefined,
	resolver_gt?: GraphQLTypes["Bytes"] | undefined,
	resolver_lt?: GraphQLTypes["Bytes"] | undefined,
	resolver_gte?: GraphQLTypes["Bytes"] | undefined,
	resolver_lte?: GraphQLTypes["Bytes"] | undefined,
	resolver_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	resolver_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	resolver_contains?: GraphQLTypes["Bytes"] | undefined,
	resolver_not_contains?: GraphQLTypes["Bytes"] | undefined,
	clientAward?: GraphQLTypes["BigInt"] | undefined,
	clientAward_not?: GraphQLTypes["BigInt"] | undefined,
	clientAward_gt?: GraphQLTypes["BigInt"] | undefined,
	clientAward_lt?: GraphQLTypes["BigInt"] | undefined,
	clientAward_gte?: GraphQLTypes["BigInt"] | undefined,
	clientAward_lte?: GraphQLTypes["BigInt"] | undefined,
	clientAward_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	clientAward_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	providerAward?: GraphQLTypes["BigInt"] | undefined,
	providerAward_not?: GraphQLTypes["BigInt"] | undefined,
	providerAward_gt?: GraphQLTypes["BigInt"] | undefined,
	providerAward_lt?: GraphQLTypes["BigInt"] | undefined,
	providerAward_gte?: GraphQLTypes["BigInt"] | undefined,
	providerAward_lte?: GraphQLTypes["BigInt"] | undefined,
	providerAward_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	providerAward_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	resolutionDetails?: GraphQLTypes["Bytes"] | undefined,
	resolutionDetails_not?: GraphQLTypes["Bytes"] | undefined,
	resolutionDetails_gt?: GraphQLTypes["Bytes"] | undefined,
	resolutionDetails_lt?: GraphQLTypes["Bytes"] | undefined,
	resolutionDetails_gte?: GraphQLTypes["Bytes"] | undefined,
	resolutionDetails_lte?: GraphQLTypes["Bytes"] | undefined,
	resolutionDetails_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	resolutionDetails_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	resolutionDetails_contains?: GraphQLTypes["Bytes"] | undefined,
	resolutionDetails_not_contains?: GraphQLTypes["Bytes"] | undefined,
	resolutionFee?: GraphQLTypes["BigInt"] | undefined,
	resolutionFee_not?: GraphQLTypes["BigInt"] | undefined,
	resolutionFee_gt?: GraphQLTypes["BigInt"] | undefined,
	resolutionFee_lt?: GraphQLTypes["BigInt"] | undefined,
	resolutionFee_gte?: GraphQLTypes["BigInt"] | undefined,
	resolutionFee_lte?: GraphQLTypes["BigInt"] | undefined,
	resolutionFee_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	resolutionFee_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	ruling?: GraphQLTypes["BigInt"] | undefined,
	ruling_not?: GraphQLTypes["BigInt"] | undefined,
	ruling_gt?: GraphQLTypes["BigInt"] | undefined,
	ruling_lt?: GraphQLTypes["BigInt"] | undefined,
	ruling_gte?: GraphQLTypes["BigInt"] | undefined,
	ruling_lte?: GraphQLTypes["BigInt"] | undefined,
	ruling_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	ruling_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp?: GraphQLTypes["BigInt"] | undefined,
	timestamp_not?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Resolution_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Resolution_filter"] | undefined> | undefined
};
	["Resolution_orderBy"]: Resolution_orderBy;
	["Subscription"]: {
	__typename: "Subscription",
	invoice?: GraphQLTypes["Invoice"] | undefined,
	invoices: Array<GraphQLTypes["Invoice"]>,
	deposit?: GraphQLTypes["Deposit"] | undefined,
	deposits: Array<GraphQLTypes["Deposit"]>,
	agreement?: GraphQLTypes["Agreement"] | undefined,
	agreements: Array<GraphQLTypes["Agreement"]>,
	release?: GraphQLTypes["Release"] | undefined,
	releases: Array<GraphQLTypes["Release"]>,
	withdraw?: GraphQLTypes["Withdraw"] | undefined,
	withdraws: Array<GraphQLTypes["Withdraw"]>,
	dispute?: GraphQLTypes["Dispute"] | undefined,
	disputes: Array<GraphQLTypes["Dispute"]>,
	resolution?: GraphQLTypes["Resolution"] | undefined,
	resolutions: Array<GraphQLTypes["Resolution"]>,
	token?: GraphQLTypes["Token"] | undefined,
	tokens: Array<GraphQLTypes["Token"]>,
	verified?: GraphQLTypes["Verified"] | undefined,
	verifieds: Array<GraphQLTypes["Verified"]>,
	milestonesAdded?: GraphQLTypes["MilestonesAdded"] | undefined,
	milestonesAddeds: Array<GraphQLTypes["MilestonesAdded"]>,
	tip?: GraphQLTypes["Tip"] | undefined,
	tips: Array<GraphQLTypes["Tip"]>,
	/** Access to subgraph metadata */
	_meta?: GraphQLTypes["_Meta_"] | undefined
};
	["Tip"]: {
	__typename: "Tip",
	id: string,
	sender: GraphQLTypes["Bytes"],
	amount: GraphQLTypes["BigInt"]
};
	["Tip_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	sender?: GraphQLTypes["Bytes"] | undefined,
	sender_not?: GraphQLTypes["Bytes"] | undefined,
	sender_gt?: GraphQLTypes["Bytes"] | undefined,
	sender_lt?: GraphQLTypes["Bytes"] | undefined,
	sender_gte?: GraphQLTypes["Bytes"] | undefined,
	sender_lte?: GraphQLTypes["Bytes"] | undefined,
	sender_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	sender_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	sender_contains?: GraphQLTypes["Bytes"] | undefined,
	sender_not_contains?: GraphQLTypes["Bytes"] | undefined,
	amount?: GraphQLTypes["BigInt"] | undefined,
	amount_not?: GraphQLTypes["BigInt"] | undefined,
	amount_gt?: GraphQLTypes["BigInt"] | undefined,
	amount_lt?: GraphQLTypes["BigInt"] | undefined,
	amount_gte?: GraphQLTypes["BigInt"] | undefined,
	amount_lte?: GraphQLTypes["BigInt"] | undefined,
	amount_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	amount_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Tip_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Tip_filter"] | undefined> | undefined
};
	["Tip_orderBy"]: Tip_orderBy;
	["Token"]: {
	__typename: "Token",
	id: string,
	name: string,
	symbol: string,
	decimals: number
};
	["Token_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	name?: string | undefined,
	name_not?: string | undefined,
	name_gt?: string | undefined,
	name_lt?: string | undefined,
	name_gte?: string | undefined,
	name_lte?: string | undefined,
	name_in?: Array<string> | undefined,
	name_not_in?: Array<string> | undefined,
	name_contains?: string | undefined,
	name_contains_nocase?: string | undefined,
	name_not_contains?: string | undefined,
	name_not_contains_nocase?: string | undefined,
	name_starts_with?: string | undefined,
	name_starts_with_nocase?: string | undefined,
	name_not_starts_with?: string | undefined,
	name_not_starts_with_nocase?: string | undefined,
	name_ends_with?: string | undefined,
	name_ends_with_nocase?: string | undefined,
	name_not_ends_with?: string | undefined,
	name_not_ends_with_nocase?: string | undefined,
	symbol?: string | undefined,
	symbol_not?: string | undefined,
	symbol_gt?: string | undefined,
	symbol_lt?: string | undefined,
	symbol_gte?: string | undefined,
	symbol_lte?: string | undefined,
	symbol_in?: Array<string> | undefined,
	symbol_not_in?: Array<string> | undefined,
	symbol_contains?: string | undefined,
	symbol_contains_nocase?: string | undefined,
	symbol_not_contains?: string | undefined,
	symbol_not_contains_nocase?: string | undefined,
	symbol_starts_with?: string | undefined,
	symbol_starts_with_nocase?: string | undefined,
	symbol_not_starts_with?: string | undefined,
	symbol_not_starts_with_nocase?: string | undefined,
	symbol_ends_with?: string | undefined,
	symbol_ends_with_nocase?: string | undefined,
	symbol_not_ends_with?: string | undefined,
	symbol_not_ends_with_nocase?: string | undefined,
	decimals?: number | undefined,
	decimals_not?: number | undefined,
	decimals_gt?: number | undefined,
	decimals_lt?: number | undefined,
	decimals_gte?: number | undefined,
	decimals_lte?: number | undefined,
	decimals_in?: Array<number> | undefined,
	decimals_not_in?: Array<number> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Token_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Token_filter"] | undefined> | undefined
};
	["Token_orderBy"]: Token_orderBy;
	["Verified"]: {
	__typename: "Verified",
	id: string,
	client: GraphQLTypes["Bytes"],
	invoice: GraphQLTypes["Bytes"]
};
	["Verified_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	client?: GraphQLTypes["Bytes"] | undefined,
	client_not?: GraphQLTypes["Bytes"] | undefined,
	client_gt?: GraphQLTypes["Bytes"] | undefined,
	client_lt?: GraphQLTypes["Bytes"] | undefined,
	client_gte?: GraphQLTypes["Bytes"] | undefined,
	client_lte?: GraphQLTypes["Bytes"] | undefined,
	client_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	client_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	client_contains?: GraphQLTypes["Bytes"] | undefined,
	client_not_contains?: GraphQLTypes["Bytes"] | undefined,
	invoice?: GraphQLTypes["Bytes"] | undefined,
	invoice_not?: GraphQLTypes["Bytes"] | undefined,
	invoice_gt?: GraphQLTypes["Bytes"] | undefined,
	invoice_lt?: GraphQLTypes["Bytes"] | undefined,
	invoice_gte?: GraphQLTypes["Bytes"] | undefined,
	invoice_lte?: GraphQLTypes["Bytes"] | undefined,
	invoice_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	invoice_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	invoice_contains?: GraphQLTypes["Bytes"] | undefined,
	invoice_not_contains?: GraphQLTypes["Bytes"] | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Verified_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Verified_filter"] | undefined> | undefined
};
	["Verified_orderBy"]: Verified_orderBy;
	["Withdraw"]: {
	__typename: "Withdraw",
	id: string,
	txHash: GraphQLTypes["Bytes"],
	invoice: GraphQLTypes["Invoice"],
	amount: GraphQLTypes["BigInt"],
	timestamp: GraphQLTypes["BigInt"]
};
	["Withdraw_filter"]: {
		id?: string | undefined,
	id_not?: string | undefined,
	id_gt?: string | undefined,
	id_lt?: string | undefined,
	id_gte?: string | undefined,
	id_lte?: string | undefined,
	id_in?: Array<string> | undefined,
	id_not_in?: Array<string> | undefined,
	txHash?: GraphQLTypes["Bytes"] | undefined,
	txHash_not?: GraphQLTypes["Bytes"] | undefined,
	txHash_gt?: GraphQLTypes["Bytes"] | undefined,
	txHash_lt?: GraphQLTypes["Bytes"] | undefined,
	txHash_gte?: GraphQLTypes["Bytes"] | undefined,
	txHash_lte?: GraphQLTypes["Bytes"] | undefined,
	txHash_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_not_in?: Array<GraphQLTypes["Bytes"]> | undefined,
	txHash_contains?: GraphQLTypes["Bytes"] | undefined,
	txHash_not_contains?: GraphQLTypes["Bytes"] | undefined,
	invoice?: string | undefined,
	invoice_not?: string | undefined,
	invoice_gt?: string | undefined,
	invoice_lt?: string | undefined,
	invoice_gte?: string | undefined,
	invoice_lte?: string | undefined,
	invoice_in?: Array<string> | undefined,
	invoice_not_in?: Array<string> | undefined,
	invoice_contains?: string | undefined,
	invoice_contains_nocase?: string | undefined,
	invoice_not_contains?: string | undefined,
	invoice_not_contains_nocase?: string | undefined,
	invoice_starts_with?: string | undefined,
	invoice_starts_with_nocase?: string | undefined,
	invoice_not_starts_with?: string | undefined,
	invoice_not_starts_with_nocase?: string | undefined,
	invoice_ends_with?: string | undefined,
	invoice_ends_with_nocase?: string | undefined,
	invoice_not_ends_with?: string | undefined,
	invoice_not_ends_with_nocase?: string | undefined,
	invoice_?: GraphQLTypes["Invoice_filter"] | undefined,
	amount?: GraphQLTypes["BigInt"] | undefined,
	amount_not?: GraphQLTypes["BigInt"] | undefined,
	amount_gt?: GraphQLTypes["BigInt"] | undefined,
	amount_lt?: GraphQLTypes["BigInt"] | undefined,
	amount_gte?: GraphQLTypes["BigInt"] | undefined,
	amount_lte?: GraphQLTypes["BigInt"] | undefined,
	amount_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	amount_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp?: GraphQLTypes["BigInt"] | undefined,
	timestamp_not?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lt?: GraphQLTypes["BigInt"] | undefined,
	timestamp_gte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_lte?: GraphQLTypes["BigInt"] | undefined,
	timestamp_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	timestamp_not_in?: Array<GraphQLTypes["BigInt"]> | undefined,
	/** Filter for the block changed event. */
	_change_block?: GraphQLTypes["BlockChangedFilter"] | undefined,
	and?: Array<GraphQLTypes["Withdraw_filter"] | undefined> | undefined,
	or?: Array<GraphQLTypes["Withdraw_filter"] | undefined> | undefined
};
	["Withdraw_orderBy"]: Withdraw_orderBy;
	["_Block_"]: {
	__typename: "_Block_",
	/** The hash of the block */
	hash?: GraphQLTypes["Bytes"] | undefined,
	/** The block number */
	number: number,
	/** Integer representation of the timestamp stored in blocks for the chain */
	timestamp?: number | undefined
};
	/** The type for the top-level _meta field */
["_Meta_"]: {
	__typename: "_Meta_",
	/** Information about a specific subgraph block. The hash of the block
will be null if the _meta field has a block constraint that asks for
a block number. It will be filled if the _meta field has no block constraint
and therefore asks for the latest  block
 */
	block: GraphQLTypes["_Block_"],
	/** The deployment ID */
	deployment: string,
	/** If `true`, the subgraph encountered indexing errors at some past block */
	hasIndexingErrors: boolean
};
	["_SubgraphErrorPolicy_"]: _SubgraphErrorPolicy_
    }
export const enum ADR {
	individual = "individual",
	arbitrator = "arbitrator"
}
export const enum Agreement_orderBy {
	id = "id",
	type = "type",
	src = "src",
	createdAt = "createdAt"
}
export const enum Deposit_orderBy {
	id = "id",
	txHash = "txHash",
	sender = "sender",
	invoice = "invoice",
	invoice__id = "invoice__id",
	invoice__network = "invoice__network",
	invoice__address = "invoice__address",
	invoice__factoryAddress = "invoice__factoryAddress",
	invoice__token = "invoice__token",
	invoice__client = "invoice__client",
	invoice__provider = "invoice__provider",
	invoice__resolverType = "invoice__resolverType",
	invoice__resolver = "invoice__resolver",
	invoice__resolutionRate = "invoice__resolutionRate",
	invoice__isLocked = "invoice__isLocked",
	invoice__numMilestones = "invoice__numMilestones",
	invoice__currentMilestone = "invoice__currentMilestone",
	invoice__total = "invoice__total",
	invoice__released = "invoice__released",
	invoice__createdAt = "invoice__createdAt",
	invoice__creationTxHash = "invoice__creationTxHash",
	invoice__terminationTime = "invoice__terminationTime",
	invoice__details = "invoice__details",
	invoice__ipfsHash = "invoice__ipfsHash",
	invoice__disputeId = "invoice__disputeId",
	invoice__projectName = "invoice__projectName",
	invoice__projectDescription = "invoice__projectDescription",
	invoice__startDate = "invoice__startDate",
	invoice__endDate = "invoice__endDate",
	invoice__invoiceType = "invoice__invoiceType",
	invoice__version = "invoice__version",
	invoice__lateFee = "invoice__lateFee",
	invoice__lateFeeTimeInterval = "invoice__lateFeeTimeInterval",
	invoice__deadline = "invoice__deadline",
	invoice__fulfilled = "invoice__fulfilled",
	amount = "amount",
	timestamp = "timestamp"
}
export const enum Dispute_orderBy {
	id = "id",
	txHash = "txHash",
	invoice = "invoice",
	invoice__id = "invoice__id",
	invoice__network = "invoice__network",
	invoice__address = "invoice__address",
	invoice__factoryAddress = "invoice__factoryAddress",
	invoice__token = "invoice__token",
	invoice__client = "invoice__client",
	invoice__provider = "invoice__provider",
	invoice__resolverType = "invoice__resolverType",
	invoice__resolver = "invoice__resolver",
	invoice__resolutionRate = "invoice__resolutionRate",
	invoice__isLocked = "invoice__isLocked",
	invoice__numMilestones = "invoice__numMilestones",
	invoice__currentMilestone = "invoice__currentMilestone",
	invoice__total = "invoice__total",
	invoice__released = "invoice__released",
	invoice__createdAt = "invoice__createdAt",
	invoice__creationTxHash = "invoice__creationTxHash",
	invoice__terminationTime = "invoice__terminationTime",
	invoice__details = "invoice__details",
	invoice__ipfsHash = "invoice__ipfsHash",
	invoice__disputeId = "invoice__disputeId",
	invoice__projectName = "invoice__projectName",
	invoice__projectDescription = "invoice__projectDescription",
	invoice__startDate = "invoice__startDate",
	invoice__endDate = "invoice__endDate",
	invoice__invoiceType = "invoice__invoiceType",
	invoice__version = "invoice__version",
	invoice__lateFee = "invoice__lateFee",
	invoice__lateFeeTimeInterval = "invoice__lateFeeTimeInterval",
	invoice__deadline = "invoice__deadline",
	invoice__fulfilled = "invoice__fulfilled",
	sender = "sender",
	details = "details",
	ipfsHash = "ipfsHash",
	disputeToken = "disputeToken",
	disputeFee = "disputeFee",
	disputeId = "disputeId",
	timestamp = "timestamp"
}
export const enum Invoice_orderBy {
	id = "id",
	network = "network",
	address = "address",
	factoryAddress = "factoryAddress",
	token = "token",
	client = "client",
	provider = "provider",
	resolverType = "resolverType",
	resolver = "resolver",
	resolutionRate = "resolutionRate",
	isLocked = "isLocked",
	amounts = "amounts",
	numMilestones = "numMilestones",
	currentMilestone = "currentMilestone",
	total = "total",
	released = "released",
	createdAt = "createdAt",
	creationTxHash = "creationTxHash",
	terminationTime = "terminationTime",
	details = "details",
	ipfsHash = "ipfsHash",
	disputeId = "disputeId",
	projectName = "projectName",
	projectDescription = "projectDescription",
	projectAgreement = "projectAgreement",
	startDate = "startDate",
	endDate = "endDate",
	deposits = "deposits",
	withdraws = "withdraws",
	releases = "releases",
	disputes = "disputes",
	resolutions = "resolutions",
	tokenMetadata = "tokenMetadata",
	tokenMetadata__id = "tokenMetadata__id",
	tokenMetadata__name = "tokenMetadata__name",
	tokenMetadata__symbol = "tokenMetadata__symbol",
	tokenMetadata__decimals = "tokenMetadata__decimals",
	verified = "verified",
	milestonesAdded = "milestonesAdded",
	invoiceType = "invoiceType",
	version = "version",
	lateFee = "lateFee",
	lateFeeTimeInterval = "lateFeeTimeInterval",
	tipAmount = "tipAmount",
	deadline = "deadline",
	fulfilled = "fulfilled"
}
export const enum MilestonesAdded_orderBy {
	id = "id",
	sender = "sender",
	invoice = "invoice",
	milestones = "milestones"
}
/** Defines the order direction, either ascending or descending */
export const enum OrderDirection {
	asc = "asc",
	desc = "desc"
}
export const enum Release_orderBy {
	id = "id",
	txHash = "txHash",
	invoice = "invoice",
	invoice__id = "invoice__id",
	invoice__network = "invoice__network",
	invoice__address = "invoice__address",
	invoice__factoryAddress = "invoice__factoryAddress",
	invoice__token = "invoice__token",
	invoice__client = "invoice__client",
	invoice__provider = "invoice__provider",
	invoice__resolverType = "invoice__resolverType",
	invoice__resolver = "invoice__resolver",
	invoice__resolutionRate = "invoice__resolutionRate",
	invoice__isLocked = "invoice__isLocked",
	invoice__numMilestones = "invoice__numMilestones",
	invoice__currentMilestone = "invoice__currentMilestone",
	invoice__total = "invoice__total",
	invoice__released = "invoice__released",
	invoice__createdAt = "invoice__createdAt",
	invoice__creationTxHash = "invoice__creationTxHash",
	invoice__terminationTime = "invoice__terminationTime",
	invoice__details = "invoice__details",
	invoice__ipfsHash = "invoice__ipfsHash",
	invoice__disputeId = "invoice__disputeId",
	invoice__projectName = "invoice__projectName",
	invoice__projectDescription = "invoice__projectDescription",
	invoice__startDate = "invoice__startDate",
	invoice__endDate = "invoice__endDate",
	invoice__invoiceType = "invoice__invoiceType",
	invoice__version = "invoice__version",
	invoice__lateFee = "invoice__lateFee",
	invoice__lateFeeTimeInterval = "invoice__lateFeeTimeInterval",
	invoice__deadline = "invoice__deadline",
	invoice__fulfilled = "invoice__fulfilled",
	milestone = "milestone",
	amount = "amount",
	timestamp = "timestamp"
}
export const enum Resolution_orderBy {
	id = "id",
	txHash = "txHash",
	details = "details",
	ipfsHash = "ipfsHash",
	invoice = "invoice",
	invoice__id = "invoice__id",
	invoice__network = "invoice__network",
	invoice__address = "invoice__address",
	invoice__factoryAddress = "invoice__factoryAddress",
	invoice__token = "invoice__token",
	invoice__client = "invoice__client",
	invoice__provider = "invoice__provider",
	invoice__resolverType = "invoice__resolverType",
	invoice__resolver = "invoice__resolver",
	invoice__resolutionRate = "invoice__resolutionRate",
	invoice__isLocked = "invoice__isLocked",
	invoice__numMilestones = "invoice__numMilestones",
	invoice__currentMilestone = "invoice__currentMilestone",
	invoice__total = "invoice__total",
	invoice__released = "invoice__released",
	invoice__createdAt = "invoice__createdAt",
	invoice__creationTxHash = "invoice__creationTxHash",
	invoice__terminationTime = "invoice__terminationTime",
	invoice__details = "invoice__details",
	invoice__ipfsHash = "invoice__ipfsHash",
	invoice__disputeId = "invoice__disputeId",
	invoice__projectName = "invoice__projectName",
	invoice__projectDescription = "invoice__projectDescription",
	invoice__startDate = "invoice__startDate",
	invoice__endDate = "invoice__endDate",
	invoice__invoiceType = "invoice__invoiceType",
	invoice__version = "invoice__version",
	invoice__lateFee = "invoice__lateFee",
	invoice__lateFeeTimeInterval = "invoice__lateFeeTimeInterval",
	invoice__deadline = "invoice__deadline",
	invoice__fulfilled = "invoice__fulfilled",
	resolverType = "resolverType",
	resolver = "resolver",
	clientAward = "clientAward",
	providerAward = "providerAward",
	resolutionDetails = "resolutionDetails",
	resolutionFee = "resolutionFee",
	ruling = "ruling",
	timestamp = "timestamp"
}
export const enum Tip_orderBy {
	id = "id",
	sender = "sender",
	amount = "amount"
}
export const enum Token_orderBy {
	id = "id",
	name = "name",
	symbol = "symbol",
	decimals = "decimals"
}
export const enum Verified_orderBy {
	id = "id",
	client = "client",
	invoice = "invoice"
}
export const enum Withdraw_orderBy {
	id = "id",
	txHash = "txHash",
	invoice = "invoice",
	invoice__id = "invoice__id",
	invoice__network = "invoice__network",
	invoice__address = "invoice__address",
	invoice__factoryAddress = "invoice__factoryAddress",
	invoice__token = "invoice__token",
	invoice__client = "invoice__client",
	invoice__provider = "invoice__provider",
	invoice__resolverType = "invoice__resolverType",
	invoice__resolver = "invoice__resolver",
	invoice__resolutionRate = "invoice__resolutionRate",
	invoice__isLocked = "invoice__isLocked",
	invoice__numMilestones = "invoice__numMilestones",
	invoice__currentMilestone = "invoice__currentMilestone",
	invoice__total = "invoice__total",
	invoice__released = "invoice__released",
	invoice__createdAt = "invoice__createdAt",
	invoice__creationTxHash = "invoice__creationTxHash",
	invoice__terminationTime = "invoice__terminationTime",
	invoice__details = "invoice__details",
	invoice__ipfsHash = "invoice__ipfsHash",
	invoice__disputeId = "invoice__disputeId",
	invoice__projectName = "invoice__projectName",
	invoice__projectDescription = "invoice__projectDescription",
	invoice__startDate = "invoice__startDate",
	invoice__endDate = "invoice__endDate",
	invoice__invoiceType = "invoice__invoiceType",
	invoice__version = "invoice__version",
	invoice__lateFee = "invoice__lateFee",
	invoice__lateFeeTimeInterval = "invoice__lateFeeTimeInterval",
	invoice__deadline = "invoice__deadline",
	invoice__fulfilled = "invoice__fulfilled",
	amount = "amount",
	timestamp = "timestamp"
}
export const enum _SubgraphErrorPolicy_ {
	allow = "allow",
	deny = "deny"
}

type ZEUS_VARIABLES = {
	["ADR"]: ValueTypes["ADR"];
	["Agreement_filter"]: ValueTypes["Agreement_filter"];
	["Agreement_orderBy"]: ValueTypes["Agreement_orderBy"];
	["BigDecimal"]: ValueTypes["BigDecimal"];
	["BigInt"]: ValueTypes["BigInt"];
	["BlockChangedFilter"]: ValueTypes["BlockChangedFilter"];
	["Block_height"]: ValueTypes["Block_height"];
	["Bytes"]: ValueTypes["Bytes"];
	["Deposit_filter"]: ValueTypes["Deposit_filter"];
	["Deposit_orderBy"]: ValueTypes["Deposit_orderBy"];
	["Dispute_filter"]: ValueTypes["Dispute_filter"];
	["Dispute_orderBy"]: ValueTypes["Dispute_orderBy"];
	["Int8"]: ValueTypes["Int8"];
	["Invoice_filter"]: ValueTypes["Invoice_filter"];
	["Invoice_orderBy"]: ValueTypes["Invoice_orderBy"];
	["MilestonesAdded_filter"]: ValueTypes["MilestonesAdded_filter"];
	["MilestonesAdded_orderBy"]: ValueTypes["MilestonesAdded_orderBy"];
	["OrderDirection"]: ValueTypes["OrderDirection"];
	["Release_filter"]: ValueTypes["Release_filter"];
	["Release_orderBy"]: ValueTypes["Release_orderBy"];
	["Resolution_filter"]: ValueTypes["Resolution_filter"];
	["Resolution_orderBy"]: ValueTypes["Resolution_orderBy"];
	["Tip_filter"]: ValueTypes["Tip_filter"];
	["Tip_orderBy"]: ValueTypes["Tip_orderBy"];
	["Token_filter"]: ValueTypes["Token_filter"];
	["Token_orderBy"]: ValueTypes["Token_orderBy"];
	["Verified_filter"]: ValueTypes["Verified_filter"];
	["Verified_orderBy"]: ValueTypes["Verified_orderBy"];
	["Withdraw_filter"]: ValueTypes["Withdraw_filter"];
	["Withdraw_orderBy"]: ValueTypes["Withdraw_orderBy"];
	["_SubgraphErrorPolicy_"]: ValueTypes["_SubgraphErrorPolicy_"];
}