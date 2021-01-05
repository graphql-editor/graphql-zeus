/* tslint:disable */
/* eslint-disable */

type ZEUS_INTERFACES = GraphQLTypes['Nameable'];
type ZEUS_UNIONS = GraphQLTypes['ChangeCard'];

export type ValueTypes = {
  /** create card inputs<br> */
  ['createCard']: {
    /** <div>How many children the greek god had</div> */
    Children?: number;
    /** The attack power<br> */
    Attack: number;
    /** The defense power<br> */
    Defense: number;
    /** input skills */
    skills?: ValueTypes['SpecialSkills'][];
    /** The name of a card<br> */
    name: string;
    /** Description of a card<br> */
    description: string;
  };
  ['SpecialCard']: AliasType<{
    effect?: true;
    name?: true;
    __typename?: true;
  }>;
  ['SpecialSkills']: SpecialSkills;
  ['Mutation']: AliasType<{
    addCard?: [{ card: ValueTypes['createCard'] }, ValueTypes['Card']];
    __typename?: true;
  }>;
  ['Query']: AliasType<{
    cardById?: [{ cardId?: string }, ValueTypes['Card']];
    /** Draw a card<br> */
    drawCard?: ValueTypes['Card'];
    drawChangeCard?: ValueTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards?: ValueTypes['Card'];
    myStacks?: ValueTypes['CardStack'];
    nameables?: ValueTypes['Nameable'];
    __typename?: true;
  }>;
  ['ChangeCard']: AliasType<{
    ['...on SpecialCard']: ValueTypes['SpecialCard'];
    ['...on EffectCard']: ValueTypes['EffectCard'];
    __typename?: true;
  }>;
  /** Stack of cards */
  ['CardStack']: AliasType<{
    cards?: ValueTypes['Card'];
    name?: true;
    __typename?: true;
  }>;
  /** Aws S3 File */
  ['S3Object']: AliasType<{
    bucket?: true;
    key?: true;
    region?: true;
    __typename?: true;
  }>;
  ['Nameable']: AliasType<{
    name?: true;
    ['...on SpecialCard']?: Omit<ValueTypes['SpecialCard'], keyof ValueTypes['Nameable']>;
    ['...on CardStack']?: Omit<ValueTypes['CardStack'], keyof ValueTypes['Nameable']>;
    ['...on EffectCard']?: Omit<ValueTypes['EffectCard'], keyof ValueTypes['Nameable']>;
    ['...on Card']?: Omit<ValueTypes['Card'], keyof ValueTypes['Nameable']>;
    __typename?: true;
  }>;
  ['EffectCard']: AliasType<{
    effectSize?: true;
    name?: true;
    __typename?: true;
  }>;
  /** Card used in card game<br> */
  ['Card']: AliasType<{
    /** The attack power<br> */
    Attack?: true;
    /** <div>How many children the greek god had</div> */
    Children?: true;
    /** The defense power<br> */
    Defense?: true;
    attack?: [
      {
        /** Attacked card/card ids<br> */ cardID: string[];
      },
      ValueTypes['Card'],
    ];
    /** Put your description here */
    cardImage?: ValueTypes['S3Object'];
    /** Description of a card<br> */
    description?: true;
    id?: true;
    image?: true;
    /** The name of a card<br> */
    name?: true;
    skills?: true;
    __typename?: true;
  }>;
};

export type ModelTypes = {
  /** create card inputs<br> */
  ['createCard']: GraphQLTypes['createCard'];
  ['SpecialCard']: {
    effect: string;
    name: string;
  };
  ['SpecialSkills']: GraphQLTypes['SpecialSkills'];
  ['Mutation']: {
    /** add Card to Cards database<br> */
    addCard: ModelTypes['Card'];
  };
  ['Query']: {
    cardById?: ModelTypes['Card'];
    /** Draw a card<br> */
    drawCard: ModelTypes['Card'];
    drawChangeCard: ModelTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards: ModelTypes['Card'][];
    myStacks?: ModelTypes['CardStack'][];
    nameables: ModelTypes['Nameable'][];
  };
  ['ChangeCard']: ModelTypes['SpecialCard'] | ModelTypes['EffectCard'];
  /** Stack of cards */
  ['CardStack']: {
    cards?: ModelTypes['Card'][];
    name: string;
  };
  /** Aws S3 File */
  ['S3Object']: {
    bucket: string;
    key: string;
    region: string;
  };
  ['Nameable']: ModelTypes['SpecialCard'] | ModelTypes['CardStack'] | ModelTypes['EffectCard'] | ModelTypes['Card'];
  ['EffectCard']: {
    effectSize: number;
    name: string;
  };
  /** Card used in card game<br> */
  ['Card']: {
    /** The attack power<br> */
    Attack: number;
    /** <div>How many children the greek god had</div> */
    Children?: number;
    /** The defense power<br> */
    Defense: number;
    /** Attack other cards on the table , returns Cards after attack<br> */
    attack?: ModelTypes['Card'][];
    /** Put your description here */
    cardImage?: ModelTypes['S3Object'];
    /** Description of a card<br> */
    description: string;
    id: string;
    image: string;
    /** The name of a card<br> */
    name: string;
    skills?: ModelTypes['SpecialSkills'][];
  };
};

export type GraphQLTypes = {
  /** create card inputs<br> */
  ['createCard']: {
    /** <div>How many children the greek god had</div> */
    Children?: number;
    /** The attack power<br> */
    Attack: number;
    /** The defense power<br> */
    Defense: number;
    /** input skills */
    skills?: GraphQLTypes['SpecialSkills'][];
    /** The name of a card<br> */
    name: string;
    /** Description of a card<br> */
    description: string;
  };
  ['SpecialCard']: {
    __typename: 'SpecialCard';
    effect: string;
    name: string;
  };
  ['SpecialSkills']: SpecialSkills;
  ['Mutation']: {
    __typename: 'Mutation';
    /** add Card to Cards database<br> */
    addCard: GraphQLTypes['Card'];
  };
  ['Query']: {
    __typename: 'Query';
    cardById?: GraphQLTypes['Card'];
    /** Draw a card<br> */
    drawCard: GraphQLTypes['Card'];
    drawChangeCard: GraphQLTypes['ChangeCard'];
    /** list All Cards availble<br> */
    listCards: GraphQLTypes['Card'][];
    myStacks?: GraphQLTypes['CardStack'][];
    nameables: GraphQLTypes['Nameable'][];
  };
  ['ChangeCard']: {
    ['...on SpecialCard']: '__union' & GraphQLTypes['SpecialCard'];
    ['...on EffectCard']: '__union' & GraphQLTypes['EffectCard'];
  };
  /** Stack of cards */
  ['CardStack']: {
    __typename: 'CardStack';
    cards?: GraphQLTypes['Card'][];
    name: string;
  };
  /** Aws S3 File */
  ['S3Object']: {
    __typename: 'S3Object';
    bucket: string;
    key: string;
    region: string;
  };
  ['Nameable']: {
    __typename: 'SpecialCard' | 'CardStack' | 'EffectCard' | 'Card';
    name: string;
    ['...on SpecialCard']: '__union' & GraphQLTypes['SpecialCard'];
    ['...on CardStack']: '__union' & GraphQLTypes['CardStack'];
    ['...on EffectCard']: '__union' & GraphQLTypes['EffectCard'];
    ['...on Card']: '__union' & GraphQLTypes['Card'];
  };
  ['EffectCard']: {
    __typename: 'EffectCard';
    effectSize: number;
    name: string;
  };
  /** Card used in card game<br> */
  ['Card']: {
    __typename: 'Card';
    /** The attack power<br> */
    Attack: number;
    /** <div>How many children the greek god had</div> */
    Children?: number;
    /** The defense power<br> */
    Defense: number;
    /** Attack other cards on the table , returns Cards after attack<br> */
    attack?: GraphQLTypes['Card'][];
    /** Put your description here */
    cardImage?: GraphQLTypes['S3Object'];
    /** Description of a card<br> */
    description: string;
    id: string;
    image: string;
    /** The name of a card<br> */
    name: string;
    skills?: GraphQLTypes['SpecialSkills'][];
  };
};
export enum SpecialSkills {
  THUNDER = 'THUNDER',
  RAIN = 'RAIN',
  FIRE = 'FIRE',
}

export const AllTypesProps: Record<string, any> = {
  createCard: {
    Children: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: false,
    },
    Attack: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: true,
    },
    Defense: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: true,
    },
    skills: {
      type: 'SpecialSkills',
      array: true,
      arrayRequired: false,
      required: true,
    },
    name: {
      type: 'String',
      array: false,
      arrayRequired: false,
      required: true,
    },
    description: {
      type: 'String',
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  SpecialSkills: 'enum',
  Mutation: {
    addCard: {
      card: {
        type: 'createCard',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  Query: {
    cardById: {
      cardId: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  Card: {
    attack: {
      cardID: {
        type: 'String',
        array: true,
        arrayRequired: true,
        required: true,
      },
    },
  },
};

export const ReturnTypes: Record<string, any> = {
  SpecialCard: {
    effect: 'String',
    name: 'String',
  },
  Mutation: {
    addCard: 'Card',
  },
  Query: {
    cardById: 'Card',
    drawCard: 'Card',
    drawChangeCard: 'ChangeCard',
    listCards: 'Card',
    myStacks: 'CardStack',
    nameables: 'Nameable',
  },
  ChangeCard: {
    '...on SpecialCard': 'SpecialCard',
    '...on EffectCard': 'EffectCard',
  },
  CardStack: {
    cards: 'Card',
    name: 'String',
  },
  S3Object: {
    bucket: 'String',
    key: 'String',
    region: 'String',
  },
  Nameable: {
    '...on SpecialCard': 'SpecialCard',
    '...on CardStack': 'CardStack',
    '...on EffectCard': 'EffectCard',
    '...on Card': 'Card',
    name: 'String',
  },
  EffectCard: {
    effectSize: 'Float',
    name: 'String',
  },
  Card: {
    Attack: 'Int',
    Children: 'Int',
    Defense: 'Int',
    attack: 'Card',
    cardImage: 'S3Object',
    description: 'String',
    id: 'ID',
    image: 'String',
    name: 'String',
    skills: 'SpecialSkills',
  },
};

export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super('');
    console.error(response);
  }
  toString() {
    return 'GraphQL Response Error';
  }
}

export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<UnwrapPromise<ReturnType<T>>>;
export type ZeusHook<
  T extends (...args: any[]) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type NotUnionTypes<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
}[keyof DST];

type ExtractUnions<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof SRC]: SRC[P] extends '__union' & infer R
    ? P extends keyof DST
      ? IsArray<R, DST[P] & { __typename: true }>
      : {}
    : never;
}[keyof SRC];

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? ExtractUnions<SRC, DST> &
      {
        [P in keyof Omit<Pick<SRC, NotUnionTypes<SRC, DST>>, '__typename'>]: DST[P] extends true
          ? SRC[P]
          : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: DST[P] extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<InputType<T, Z>>;
type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  variables?: Record<string, any>,
) => { on: (fn: (args: InputType<T, Z>) => void) => void };
type CastToGraphQL<V, T> = (resultOfYourQuery: any) => <Z extends V>(o: Z | V) => InputType<T, Z>;
type SelectionFunction<V> = <T>(t: T | V) => T;
type fetchOptions = ArgsType<typeof fetch>;
type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;
type SubscriptionFunction = (query: string, variables?: Record<string, any>) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays,
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`);
  }
  const typeResolved = resolvedValue.type;
  const isArray = resolvedValue.array;
  const isArrayRequired = resolvedValue.arrayRequired;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : '';
    let t = `${typeResolved}`;
    if (isArray) {
      if (isRequired) {
        t = `${t}!`;
      }
      t = `[${t}]`;
      if (isArrayRequired) {
        t = `${t}!`;
      }
    } else {
      if (isRequired) {
        t = `${t}!`;
      }
    }
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
  }
  if (isArray && !blockArrays) {
    return `[${value.map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true })).join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map((ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`)}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (parent: string[], a: any[]) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
    return keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: mainKey,
                name: key,
                key: v,
              })}`,
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v,
              })}`,
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o)
    .map((k) => `${resolveKV(k, o[k])}`)
    .join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
          if (k === '__alias') {
            Object.keys(a[k]).map((aliasKey) => {
              const aliasOperations = a[k][aliasKey];
              const aliasOperationName = Object.keys(aliasOperations)[0];
              const aliasOperation = aliasOperations[aliasOperationName];
              b[`${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`] = traverseToSeekArrays(
                [...parent, aliasOperationName],
                aliasOperation,
              );
            });
          } else {
            b[k] = traverseToSeekArrays([...parent, k], a[k]);
          }
        });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) =>
  fn(queryConstruct(t, tName)(o), variables).then((r: any) => {
    seekForAliases(r);
    return r;
  });
const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, variables?: Record<string, any>) => fn(queryConstruct(t, tName)(o), variables);
const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;

export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => fn;

const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0],
): Promise<GraphQLResponse> => {
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
interface subscriptionOptions {
  onMessage: (websocket: WebSocket, args: any) => void;
  host: string;
}
const apiSubscription = (options: subscriptionOptions) => (query: string, variables: Record<string, any> = {}) => {
  try {
    const ws = new WebSocket(options.host + query);
    ws.onmessage = (e) => {
      options.onMessage(ws, e);
    };
  } catch {
    throw new Error('No websockets implemented');
  }
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
  let fetchFunction;
  let queryString = query;
  let fetchOptions = options[1] || {};
  try {
    fetchFunction = require('node-fetch');
  } catch (error) {
    throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
  }
  if (fetchOptions.method && fetchOptions.method === 'GET') {
    try {
      queryString = require('querystring').stringify(query);
    } catch (error) {
      throw new Error("Something gone wrong 'querystring' is a part of nodejs environment");
    }
    return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  }
  return fetchFunction(`${options[0]}`, {
    body: JSON.stringify({ query: queryString, variables }),
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

export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes['Query'],
    GraphQLTypes['Query']
  >,
  mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response,
    )) as OperationToGraphQL<ValueTypes['Mutation'], GraphQLTypes['Mutation']>,
});

export const Chain = (options: fetchOptions, subscription: subscriptionOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response,
    )) as OperationToGraphQL<ValueTypes['Query'], GraphQLTypes['Query']>,
  mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response,
    )) as OperationToGraphQL<ValueTypes['Mutation'], GraphQLTypes['Mutation']>,
  subscription: ((o: any, variables: any) =>
    fullSubscriptionConstruct(apiSubscription(subscription))('mutation', 'Mutation')(
      o,
      variables,
    )) as SubscriptionToGraphQL<ValueTypes['Query'], GraphQLTypes['Query']>,
});
export const Zeus = {
  query: (o: ValueTypes['Query']) => queryConstruct('query', 'Query')(o),
  mutation: (o: ValueTypes['Mutation']) => queryConstruct('mutation', 'Mutation')(o),
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<ValueTypes['Query'], GraphQLTypes['Query']>,
  mutation: ((o: any) => (_: any) => o) as CastToGraphQL<ValueTypes['Mutation'], GraphQLTypes['Mutation']>,
};
export const Selectors = {
  query: ZeusSelect<ValueTypes['Query']>(),
  mutation: ZeusSelect<ValueTypes['Mutation']>(),
};

const c = Chain(['dsads'], {
  host: 'DSSD',
  onMessage: (ws, args) => {},
});

c.subscription({
  listCards: {
    name: true,
    id: true,
  },
}).on((response) => {});
