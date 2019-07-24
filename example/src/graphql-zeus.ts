/* tslint:disable */

export const AllTypesProps: Record<string, any> = {
  Query: {
    cardById: {
      cardId: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true
      }
    }
  },
  Card: {
    attack: {
      cardID: {
        type: 'String',
        array: true,
        arrayRequired: false,
        required: true
      }
    }
  },
  SpecialSkills: 'enum',
  Mutation: {
    addCard: {
      card: {
        type: 'createCard',
        array: false,
        arrayRequired: false,
        required: true
      }
    }
  },
  createCard: {
    name: {
      type: 'String',
      array: false,
      arrayRequired: false,
      required: true
    },
    description: {
      type: 'String',
      array: false,
      arrayRequired: false,
      required: true
    },
    Children: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: false
    },
    Attack: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: true
    },
    Defense: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: true
    }
  }
};

export const ReturnTypes: Record<string, any> = {
  Query: {
    cardById: 'Card',
    drawCard: 'Card',
    listCards: 'Card'
  },
  Card: {
    Attack: 'Int',
    Children: 'Int',
    Defense: 'Int',
    attack: 'Card',
    description: 'String',
    id: 'ID',
    name: 'String',
    skills: 'SpecialSkills'
  },
  Mutation: {
    addCard: 'Card'
  }
};

export type Query = {
  cardById: (props: { cardId: string }) => Card;
  /** Draw a card<br> */
  drawCard: Card;
  /** list All Cards availbla<br> */
  listCards: Card[];
};

/** Card used in card game<br> */
export type Card = {
  /** The attack power<br> */
  Attack: number;
  /** <div>How many children the greek god had</div> */
  Children?: number;
  /** The defense power<br> */
  Defense: number;
  /** Attack other cards on the table , returns Cards after attack<br> */
  attack: (props: {
    /** Attacked card/card ids<br> */
    cardID?: string[];
  }) => Card[];
  /** Description of a card<br> */
  description: string;
  id: string;
  /** The name of a card<br> */
  name: string;
  skills?: SpecialSkills[];
};

export enum SpecialSkills {
  THUNDER = 'THUNDER',
  RAIN = 'RAIN',
  FIRE = 'FIRE'
}

export type Mutation = {
  /** add Card to Cards database<br> */
  addCard: (props: { card: createCard }) => Card;
};

export type createCard = {
  /** The name of a card<br> */
  name: string;
  /** Description of a card<br> */
  description: string;
  /** <div>How many children the greek god had</div> */
  Children?: number;
  /** The attack power<br> */
  Attack: number;
  /** The defense power<br> */
  Defense: number;
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

interface Dict {
  [x: string]: Dict | any | Dict[] | any[];
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

const joinArgs = (q: Dict): string => {
  return Array.isArray(q)
    ? `[${q.map(joinArgs).join(',')}]`
    : typeof q === 'object'
    ? `{${Object.keys(q)
        .map((k) => `${k}:${joinArgs(q[k])}`)
        .join(',')}}`
    : typeof q === 'string'
    ? `"${q}"`
    : q;
};

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return `"${value}"`;
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

export const ReturnGraphQLTypeOfArgument = (type: string, name: string, key: string) => {
  return AllTypesProps[type][name][key].type as string;
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = <T extends [Record<any, any>, Record<any, any>]>(
  parent: string[],
  a: T
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const keyValues = Object.keys(values);
  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
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
    .join('')}}`;

const traverseToSeekArrays = <T extends Record<any, any>>(parent: string[], a?: T) => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  Object.keys(a).map((k) => {
    if (Array.isArray(a[k])) {
      b[k] = isArrayFunction([...parent, k], a[k]);
    } else {
      if (typeof a[k] === 'object') {
        b[k] = traverseToSeekArrays([...parent, k], a[k]);
      } else {
        b[k] = a[k];
      }
    }
  });
  return objectToTree(b);
};

const buildQuery = <T extends Record<any, any>>(type: string, name: string, a?: T) =>
  traverseToSeekArrays([type, name], a).replace(/\"([^{^,^\n^\"]*)\":([^{^,^\n^\"]*)/g, '$1:$2');

const fullChainConstruct = (options: fetchOptions) => (
  t: 'Query' | 'Mutation' | 'Subscription'
) => (o: Record<any, any>) =>
  apiFetch(
    options,
    `${t.toLowerCase()}{${Object.keys(o)
      .map((ok) => `${ok}${buildQuery(t, ok, o[ok])}`)
      .join('\n')}}`
  );

const apiFetch = (options: fetchOptions, query: string, name?: string) => {
  let fetchFunction;
  let queryString = query;
  let fetchOptions = options[1] || {};
  if (typeof fetch !== 'undefined') {
    fetchFunction = fetch;
  } else {
    try {
      fetchFunction = require('node-fetch');
    } catch (error) {
      throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
    }
  }
  if (fetchOptions.method && fetchOptions.method === 'GET') {
    if (typeof encodeURIComponent !== 'undefined') {
      queryString = encodeURIComponent(query);
    } else {
      queryString = require('querystring').stringify(query);
    }
    return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
      .then((response: any) => response.json() as Promise<GraphQLResponse>)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        if (!name) {
          return response.data;
        }
        return response.data && response.data[name];
      });
  }
  return fetchFunction(`${options[0]}`, {
    body: JSON.stringify({ query: queryString }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    ...fetchOptions
  })
    .then((response: any) => response.json() as Promise<GraphQLResponse>)
    .then((response: GraphQLResponse) => {
      if (response.errors) {
        throw new GraphQLError(response);
      }
      if (!name) {
        return response.data;
      }
      return response.data && response.data[name];
    });
};

export const Chain = (...options: fetchOptions) => ({
  Query: ((o: any) =>
    fullChainConstruct(options)('Query')(o).then(
      (response: any) => response as ResolveReturned<Query>
    )) as OperationToGraphQL<Query>,
  Mutation: ((o: any) =>
    fullChainConstruct(options)('Mutation')(o).then(
      (response: any) => response as ResolveReturned<Mutation>
    )) as OperationToGraphQL<Mutation>
});

Chain('')
  .Query({
    cardById: [{ cardId: '' }, { Attack: true }],
    drawCard: {
      Defense: true
    },
    listCards: {
      Attack: true
    }
  })
  .then((chain) => {
    chain.cardById;
    chain.drawCard;
  });
