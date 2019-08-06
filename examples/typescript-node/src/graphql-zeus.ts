/* tslint:disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		cardById:{
			cardId:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Card:{
		attack:{
			cardID:{
				type:"String",
				array:true,
				arrayRequired:false,
				required:true
			}
		}
	},
	SpecialSkills: "enum",
	Mutation:{
		addCard:{
			card:{
				type:"createCard",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	createCard:{
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		Children:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		Attack:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		Defense:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		skills:{
			type:"SpecialSkills",
			array:true,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		cardById:"Card",
		drawCard:"Card",
		listCards:"Card"
	},
	Card:{
		Attack:"Int",
		Children:"Int",
		Defense:"Int",
		attack:"Card",
		cardImage:"S3Object",
		description:"String",
		id:"ID",
		name:"String",
		skills:"SpecialSkills"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Mutation:{
		addCard:"Card"
	}
}

export type Query = {
	cardById:(props:{	cardId?:string}) => Card,
	/** Draw a card<br> */
	drawCard:Card,
	/** list All Cards availbla<br> */
	listCards:Card[]
}

/** Card used in card game<br> */
export type Card = {
	/** The attack power<br> */
	Attack:number,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The defense power<br> */
	Defense:number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack:(props:{	/** Attacked card/card ids<br> */
	cardID?:string[]}) => Card[],
	cardImage?:S3Object,
	/** Description of a card<br> */
	description:string,
	id:string,
	/** The name of a card<br> */
	name:string,
	skills?:SpecialSkills[]
}

/** Aws S3 File */
export type S3Object = {
	bucket:string,
	key:string,
	region:string
}

export enum SpecialSkills {
	THUNDER = "THUNDER",
	RAIN = "RAIN",
	FIRE = "FIRE"
}

export type Mutation = {
	/** add Card to Cards database<br> */
	addCard:(props:{	card:createCard}) => Card
}

export type createCard = {
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number,
	/** The defense power<br> */
	Defense:number,
	skills?:SpecialSkills[],
	/** The name of a card<br> */
	name:string
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }



type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsObject<T, Z, L> = IsType<Record<string | number | symbol, unknown | undefined> | undefined, T, Z, L>;
type IsScalar<T, Z, L> = IsType<string | boolean | number, T, Z, L>;

type AliasType<T> = T & {
  __alias?: Record<string, T>;
};

export type AliasedReturnType<T> ={
	[P in keyof T]:T[P]
} & Record<string,{
	[P in keyof T]:T[P]
}>

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
    ? Array<AliasedReturnType<State<R>>>
    : T[P] extends AnyFunc
    ? AliasedReturnType<State<ReturnType<T[P]>>>
    : IsObject<T[P], AliasedReturnType<State<T[P]>>, T[P]>;
};

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsScalar<
      ReturnType<T>,
      [FirstArgument<T>],
      [FirstArgument<T>, SelectionSet<OfType<ReturnType<T>>>]
    >
  : IsObject<T, SelectionSet<T>, T extends undefined ? undefined : true>;

export type SelectionSet<T> = IsObject<
  T,
  AliasType<
    {
      [P in keyof T]?: ResolveValue<T[P]>;
    }
  >,
  T extends undefined ? undefined : true
>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;

type OperationToGraphQL<T> = (o: GraphQLReturner<T>) => Promise<AliasedReturnType<State<T>>>;

type ResolveApiField<T> = T extends Array<infer R>
  ? IsObject<R, State<R>, R>
  : T extends AnyFunc
  ? IsObject<OfType<ReturnType<T>>, State<OfType<ReturnType<T>>>, T>
  : IsObject<T, State<T>, T>;

type ApiFieldToGraphQL<T> = (o: ResolveValue<T>) => Promise<ResolveApiField<T>>;

type fetchOptions = ArgsType<typeof fetch>;



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

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
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
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

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
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
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

const buildQuery = (type: string, a?: Record<any, any>) =>
  traverseToSeekArrays([type], a).replace(/\"([^{^,^\n^\"]*)\":([^{^,^\n^\"]*)/g, '$1:$2');

const queryConstruct = (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) => `${t.toLowerCase()}${buildQuery(t, o)}`;

const fullChainConstruct = (options: fetchOptions) => (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) =>
  apiFetch(options, queryConstruct(t)(o));

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};


const apiFetch = (options: fetchOptions, query: string) => {
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
        .then((response: any) => response.json() as Promise<GraphQLResponse>)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
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
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Chain = (...options: fetchOptions) => ({
  Query: ((o: any) =>
    fullChainConstruct(options)('Query')(o).then(
      (response: any) => response as State<Query>
    )) as OperationToGraphQL<Query>,
Mutation: ((o: any) =>
    fullChainConstruct(options)('Mutation')(o).then(
      (response: any) => response as State<Mutation>
    )) as OperationToGraphQL<Mutation>
});
export const Api = (...options: fetchOptions) => ({
  Query: {
      cardById: ((o:any) =>
      fullChainConstruct(options)('Query')({
        cardById: o
      }).then((response:any) => response.cardById)) as ApiFieldToGraphQL<Query['cardById']>,
drawCard: ((o:any) =>
      fullChainConstruct(options)('Query')({
        drawCard: o
      }).then((response:any) => response.drawCard)) as ApiFieldToGraphQL<Query['drawCard']>,
listCards: ((o:any) =>
      fullChainConstruct(options)('Query')({
        listCards: o
      }).then((response:any) => response.listCards)) as ApiFieldToGraphQL<Query['listCards']>
  },
Mutation: {
      addCard: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        addCard: o
      }).then((response:any) => response.addCard)) as ApiFieldToGraphQL<Mutation['addCard']>
  }
});
export const Zeus = {
  Query: (o:GraphQLReturner<Query>) => queryConstruct('Query')(o),
Mutation: (o:GraphQLReturner<Mutation>) => queryConstruct('Mutation')(o)
};
export const Cast = {
  Query: (o:any) => o as State<Query>,
Mutation: (o:any) => o as State<Mutation>
};
  