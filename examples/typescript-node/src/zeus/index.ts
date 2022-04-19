/* eslint-disable */

import { AllTypesProps, ReturnTypes, Ops } from './const';
import fetch, { Response } from 'node-fetch';
import WebSocket from 'ws';
export const HOST = "https://faker.graphqleditor.com/a-team/olympus/graphql"



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

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, unknown> = {}) => {
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






export const InternalsBuildQuery = (
  props: AllTypesPropsType,
  returns: ReturnTypesType,
  ops: Operations,
  options?: OperationOptions,
) => {
  const ibb = (k: string, o: InputValueType | VType, p = '', root = true): string => {
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
      return `${ibb(
        `${k}(${InternalArgsBuilt(props, returns, ops, options?.variables?.values)(o[0], newPath)})`,
        o[1],
        p,
        false,
      )}`;
    }
    if (k === '__alias') {
      const alias = Object.keys(o)[0];
      const objectUnderAlias = o[alias];
      if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
        throw new Error('Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}');
      }
      const operationName = Object.keys(objectUnderAlias)[0];
      const operation = objectUnderAlias[operationName];
      return ibb(`${alias}:${operationName}`, operation, p, false);
    }
    const hasOperationName = root && options?.operationName ? ' ' + options.operationName : '';
    const hasVariables = root && options?.variables?.$params ? `(${options.variables?.$params})` : '';
    const keyForDirectives = o.__directives ? `${k} ${o.__directives}` : k;
    return `${keyForDirectives}${hasOperationName}${hasVariables}{${Object.entries(o)
      .map((e) => ibb(...e, [p, `field<>${keyForPath}`].join(SEPARATOR), false))
      .join('\n')}}`;
  };
  return ibb;
};










export const Thunder = (fn: FetchFunction) => <
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation)(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));

export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullSubscriptionConstruct(fn)(operation)(o as any, ops) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  ops?: OperationOptions,
) => InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, ops)(operation, o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();

export const Gql = Chain(HOST);






export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription') => (
  o: Record<any, any>,
  options?: OperationOptions,
) => {
  const builder = InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, options);
  return fn(builder(t, o), options?.variables?.values);
};






export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (t: 'query' | 'mutation' | 'subscription') => (
  o: Record<any, any>,
  options?: OperationOptions,
) => {
  const builder = InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, options);
  return fn(builder(t, o));
};





export type AllTypesPropsType = {
  [x: string]:
    | undefined
    | boolean
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

export type Operations = Record<string, string | undefined>;

export type VariableDefinition = {
  [x: string]: unknown;
};

export const SEPARATOR = '|';

export type fetchOptions = Parameters<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (...args: infer R) => WebSocket ? R : never;
export type chainOptions = [fetchOptions[0], fetchOptions[1] & { websocket?: websocketOptions }] | [fetchOptions[0]];
export type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type OperationOptions = {
  variables?: VariableInput;
  operationName?: string;
};
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
    if (typeof propsP1 === 'boolean' && mappedParts.length === 1) {
      return 'enum';
    }
    if (typeof propsP1 === 'object') {
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
    const oKey = ops[mappedParts[0].v];
    const returnP1 = oKey ? returns[oKey] : returns[mappedParts[0].v];
    if (typeof returnP1 === 'object') {
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
  const rpp = (path: string): 'enum' | 'not' => {
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

export const InternalArgsBuilt = (
  props: AllTypesPropsType,
  returns: ReturnTypesType,
  ops: Operations,
  variables?: Record<string, unknown>,
) => {
  const arb = (a: ZeusArgsType, p = '', root = true): string => {
    if (Array.isArray(a)) {
      return `[${a.map((arr) => arb(arr, p)).join(', ')}]`;
    }
    if (typeof a === 'string') {
      if (a.startsWith('$') && variables?.[a.slice(1)]) {
        return a;
      }
      const checkType = ResolveFromPath(props, returns, ops)(p);
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




export const resolverFor = <X, T extends keyof ValueTypes, Z extends keyof ValueTypes[T]>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any, source?: any) => any;


export type SelectionFunction<V> = <T>(t: T | V) => T;
export const ZeusSelect = <T>() => ((t: unknown) => t) as SelectionFunction<T>;




export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<UnwrapPromise<ReturnType<T>>>;
export type ZeusHook<
  T extends (...args: any[]) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
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
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;
type BaseZeusResolver = boolean | 1 | string;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : Record<string, unknown>
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends BaseZeusResolver ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends BaseZeusResolver ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>[keyof MapType<SRC, R[P]>];
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};


export const useZeusVariables = <T>(variables: T) => <
  Z extends {
    [P in keyof T]: unknown;
  }
>(
  values: Z,
) => {
  return {
    $params: Object.keys(variables)
      .map((k) => `$${k}: ${variables[k as keyof T]}`)
      .join(', '),
    $: <U extends keyof Z>(variable: U) => {
      return (`$${variable}` as unknown) as Z[U];
    },
    values,
  };
};

export type VariableInput = {
  $params: ReturnType<ReturnType<typeof useZeusVariables>>['$params'];
  values: Record<string, unknown>;
};


type ZEUS_INTERFACES = GraphQLTypes["Nameable"]
type ZEUS_UNIONS = GraphQLTypes["ChangeCard"]

export type ValueTypes = {
    /** Card used in card game<br> */
["Card"]: AliasType<{
	/** The attack power<br> */
	Attack?:boolean | `@${string}`,
	/** <div>How many children the greek god had</div> */
	Children?:boolean | `@${string}`,
	/** The defense power<br> */
	Defense?:boolean | `@${string}`,
attack?: [{	/** Attacked card/card ids<br> */
	cardID: Array<string>},ValueTypes["Card"]],
	/** Put your description here */
	cardImage?:ValueTypes["S3Object"],
	/** Description of a card<br> */
	description?:boolean | `@${string}`,
	id?:boolean | `@${string}`,
	image?:boolean | `@${string}`,
	info?:boolean | `@${string}`,
	/** The name of a card<br> */
	name?:boolean | `@${string}`,
	skills?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Nameable"]:AliasType<{
		name?:boolean | `@${string}`;
		['...on Card']?: Omit<ValueTypes["Card"],keyof ValueTypes["Nameable"]>;
		['...on EffectCard']?: Omit<ValueTypes["EffectCard"],keyof ValueTypes["Nameable"]>;
		['...on SpecialCard']?: Omit<ValueTypes["SpecialCard"],keyof ValueTypes["Nameable"]>;
		['...on CardStack']?: Omit<ValueTypes["CardStack"],keyof ValueTypes["Nameable"]>;
		__typename?: boolean | `@${string}`
}>;
	/** Aws S3 File */
["S3Object"]: AliasType<{
	bucket?:boolean | `@${string}`,
	key?:boolean | `@${string}`,
	region?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["EffectCard"]: AliasType<{
	effectSize?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
addCard?: [{	card: ValueTypes["createCard"]},ValueTypes["Card"]],
		__typename?: boolean | `@${string}`
}>;
	["JSON"]:unknown;
	["SpecialSkills"]:SpecialSkills;
	["Subscription"]: AliasType<{
	deck?:ValueTypes["Card"],
		__typename?: boolean | `@${string}`
}>;
	["Query"]: AliasType<{
cardById?: [{	cardId?: string | undefined | null},ValueTypes["Card"]],
	/** Draw a card<br> */
	drawCard?:ValueTypes["Card"],
	drawChangeCard?:ValueTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards?:ValueTypes["Card"],
	myStacks?:ValueTypes["CardStack"],
	nameables?:ValueTypes["Nameable"],
		__typename?: boolean | `@${string}`
}>;
	["ChangeCard"]: AliasType<{		["...on SpecialCard"] : ValueTypes["SpecialCard"],
		["...on EffectCard"] : ValueTypes["EffectCard"]
		__typename?: boolean | `@${string}`
}>;
	["SpecialCard"]: AliasType<{
	effect?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	/** Stack of cards */
["CardStack"]: AliasType<{
	cards?:ValueTypes["Card"],
	name?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	/** create card inputs<br> */
["createCard"]: {
	/** The attack power<br> */
	Attack: number,
	/** The defense power<br> */
	Defense: number,
	/** input skills */
	skills?: Array<ValueTypes["SpecialSkills"]> | undefined | null,
	/** The name of a card<br> */
	name: string,
	/** Description of a card<br> */
	description: string,
	/** <div>How many children the greek god had</div> */
	Children?: number | undefined | null
}
  }

export type ModelTypes = {
    /** Card used in card game<br> */
["Card"]: {
		/** The attack power<br> */
	Attack: number,
	/** <div>How many children the greek god had</div> */
	Children?: number | undefined,
	/** The defense power<br> */
	Defense: number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack?: Array<GraphQLTypes["Card"]> | undefined,
	/** Put your description here */
	cardImage?: GraphQLTypes["S3Object"] | undefined,
	/** Description of a card<br> */
	description: string,
	id: string,
	image: string,
	info: GraphQLTypes["JSON"],
	/** The name of a card<br> */
	name: string,
	skills?: Array<GraphQLTypes["SpecialSkills"]> | undefined
};
	["Nameable"]: ModelTypes["Card"] | ModelTypes["EffectCard"] | ModelTypes["SpecialCard"] | ModelTypes["CardStack"];
	/** Aws S3 File */
["S3Object"]: {
		bucket: string,
	key: string,
	region: string
};
	["EffectCard"]: {
		effectSize: number,
	name: string
};
	["Mutation"]: {
		/** add Card to Cards database<br> */
	addCard: GraphQLTypes["Card"]
};
	["JSON"]:any;
	["SpecialSkills"]: GraphQLTypes["SpecialSkills"];
	["Subscription"]: {
		deck?: Array<GraphQLTypes["Card"]> | undefined
};
	["Query"]: {
		cardById?: GraphQLTypes["Card"] | undefined,
	/** Draw a card<br> */
	drawCard: GraphQLTypes["Card"],
	drawChangeCard: GraphQLTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards: Array<GraphQLTypes["Card"]>,
	myStacks?: Array<GraphQLTypes["CardStack"]> | undefined,
	nameables: Array<GraphQLTypes["Nameable"]>
};
	["ChangeCard"]:ModelTypes["SpecialCard"] | ModelTypes["EffectCard"];
	["SpecialCard"]: {
		effect: string,
	name: string
};
	/** Stack of cards */
["CardStack"]: {
		cards?: Array<GraphQLTypes["Card"]> | undefined,
	name: string
};
	/** create card inputs<br> */
["createCard"]: GraphQLTypes["createCard"]
    }

export type GraphQLTypes = {
    /** Card used in card game<br> */
["Card"]: {
	__typename: "Card",
	/** The attack power<br> */
	Attack: number,
	/** <div>How many children the greek god had</div> */
	Children?: number | undefined,
	/** The defense power<br> */
	Defense: number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack?: Array<GraphQLTypes["Card"]> | undefined,
	/** Put your description here */
	cardImage?: GraphQLTypes["S3Object"] | undefined,
	/** Description of a card<br> */
	description: string,
	id: string,
	image: string,
	info: GraphQLTypes["JSON"],
	/** The name of a card<br> */
	name: string,
	skills?: Array<GraphQLTypes["SpecialSkills"]> | undefined
};
	["Nameable"]: {
	__typename:"Card" | "EffectCard" | "SpecialCard" | "CardStack",
	name: string
	['...on Card']: '__union' & GraphQLTypes["Card"];
	['...on EffectCard']: '__union' & GraphQLTypes["EffectCard"];
	['...on SpecialCard']: '__union' & GraphQLTypes["SpecialCard"];
	['...on CardStack']: '__union' & GraphQLTypes["CardStack"];
};
	/** Aws S3 File */
["S3Object"]: {
	__typename: "S3Object",
	bucket: string,
	key: string,
	region: string
};
	["EffectCard"]: {
	__typename: "EffectCard",
	effectSize: number,
	name: string
};
	["Mutation"]: {
	__typename: "Mutation",
	/** add Card to Cards database<br> */
	addCard: GraphQLTypes["Card"]
};
	["JSON"]: any;
	["SpecialSkills"]: SpecialSkills;
	["Subscription"]: {
	__typename: "Subscription",
	deck?: Array<GraphQLTypes["Card"]> | undefined
};
	["Query"]: {
	__typename: "Query",
	cardById?: GraphQLTypes["Card"] | undefined,
	/** Draw a card<br> */
	drawCard: GraphQLTypes["Card"],
	drawChangeCard: GraphQLTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards: Array<GraphQLTypes["Card"]>,
	myStacks?: Array<GraphQLTypes["CardStack"]> | undefined,
	nameables: Array<GraphQLTypes["Nameable"]>
};
	["ChangeCard"]:{
        	__typename:"SpecialCard" | "EffectCard"
        	['...on SpecialCard']: '__union' & GraphQLTypes["SpecialCard"];
	['...on EffectCard']: '__union' & GraphQLTypes["EffectCard"];
};
	["SpecialCard"]: {
	__typename: "SpecialCard",
	effect: string,
	name: string
};
	/** Stack of cards */
["CardStack"]: {
	__typename: "CardStack",
	cards?: Array<GraphQLTypes["Card"]> | undefined,
	name: string
};
	/** create card inputs<br> */
["createCard"]: {
		/** The attack power<br> */
	Attack: number,
	/** The defense power<br> */
	Defense: number,
	/** input skills */
	skills?: Array<GraphQLTypes["SpecialSkills"]> | undefined,
	/** The name of a card<br> */
	name: string,
	/** Description of a card<br> */
	description: string,
	/** <div>How many children the greek god had</div> */
	Children?: number | undefined
}
    }
export const enum SpecialSkills {
	THUNDER = "THUNDER",
	RAIN = "RAIN",
	FIRE = "FIRE"
}