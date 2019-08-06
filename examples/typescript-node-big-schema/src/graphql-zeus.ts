/* tslint:disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		findProjects:{
			query:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		findProjectsByTag:{
			tag:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getNamespace:{
			slug:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		getProject:{
			project:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		getTeam:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		getUser:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		listProjects:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			owned:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		myTeams:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Project:{
		sources:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	AccountType: "enum",
	Namespace:{
		project:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		projects:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Team:{
		member:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		members:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Role: "enum",
	Mutation:{
		createProject:{
			public:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createTeam:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			namespace:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createUser:{
			namespace:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			public:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deployToFaker:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeProject:{
			project:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		team:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateProject:{
			in:{
				type:"UpdateProject",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateSources:{
			project:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			sources:{
				type:"NewSource",
				array:true,
				arrayRequired:false,
				required:true
			}
		}
	},
	TeamOps:{
		addMember:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			role:{
				type:"Role",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createProject:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			public:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		member:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		members:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		project:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	MemberOps:{
		update:{
			role:{
				type:"Role",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	ProjectOps:{
		update:{
			in:{
				type:"UpdateProject",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateProject:{
		public:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		project:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tags:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		}
	},
	NewSource:{
		filename:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		contentLength:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		contentType:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		checksum:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		findProjects:"ProjectConnection",
		findProjectsByTag:"ProjectConnection",
		getNamespace:"Namespace",
		getProject:"Project",
		getTeam:"Team",
		getUser:"User",
		listProjects:"ProjectConnection",
		myTeams:"TeamConnection"
	},
	ProjectConnection:{
		pageInfo:"PageInfo",
		projects:"Project"
	},
	PageInfo:{
		last:"String",
		limit:"Int",
		next:"Boolean"
	},
	Project:{
		description:"String",
		endpoint:"Endpoint",
		id:"ID",
		name:"String",
		owner:"User",
		public:"Boolean",
		slug:"String",
		sources:"FakerSourceConnection",
		tags:"String",
		team:"Team"
	},
	Endpoint:{
		uri:"String"
	},
	User:{
		accountType:"AccountType",
		id:"ID",
		namespace:"Namespace",
		subscriptions:"SubscriptionConnection",
		username:"String"
	},
	Namespace:{
		project:"Project",
		projects:"ProjectConnection",
		public:"Boolean",
		slug:"String"
	},
	SubscriptionConnection:{
		pageInfo:"PageInfo",
		subscriptions:"Subscription"
	},
	Subscription:{
		cancelURL:"String",
		expiration:"String",
		quantity:"Int",
		seats:"UserConnection",
		subscriptionID:"Int",
		updateURL:"String"
	},
	UserConnection:{
		pageInfo:"PageInfo",
		users:"User"
	},
	FakerSourceConnection:{
		pageInfo:"PageInfo",
		sources:"FakerSource"
	},
	FakerSource:{
		checksum:"String",
		contents:"String",
		filename:"String",
		getUrl:"String"
	},
	Team:{
		id:"ID",
		member:"Member",
		members:"MemberConnection",
		name:"String",
		namespace:"Namespace"
	},
	Member:{
		email:"String",
		role:"Role",
		username:"String"
	},
	MemberConnection:{
		members:"Member",
		pageInfo:"PageInfo"
	},
	TeamConnection:{
		pageInfo:"PageInfo",
		teams:"Team"
	},
	Mutation:{
		createProject:"Project",
		createTeam:"TeamOps",
		createUser:"User",
		deployToFaker:"Boolean",
		removeProject:"Boolean",
		team:"TeamOps",
		updateProject:"Boolean",
		updateSources:"SourceUploadInfo"
	},
	TeamOps:{
		addMember:"Member",
		createProject:"Project",
		delete:"Boolean",
		id:"ID",
		member:"MemberOps",
		members:"MemberConnection",
		name:"String",
		namespace:"Namespace",
		project:"ProjectOps"
	},
	MemberOps:{
		delete:"Boolean",
		update:"Boolean"
	},
	ProjectOps:{
		delete:"Boolean",
		deployToFaker:"Boolean",
		update:"Boolean"
	},
	SourceUploadInfo:{
		filename:"String",
		headers:"Header",
		putUrl:"String"
	},
	Header:{
		key:"String",
		value:"String"
	}
}

export type Query = {
	findProjects:(props:{	query:string,	last?:string,	limit?:number}) => ProjectConnection,
	findProjectsByTag:(props:{	tag:string,	last?:string,	limit?:number}) => ProjectConnection,
	getNamespace:(props:{	slug:string}) => Namespace,
	getProject:(props:{	project:string}) => Project,
	getTeam:(props:{	name:string}) => Team,
	getUser:(props:{	username:string}) => User,
	listProjects:(props:{	last?:string,	limit?:number,	owned?:boolean}) => ProjectConnection,
	myTeams:(props:{	last?:string,	limit?:number}) => TeamConnection
}

export type ProjectConnection = {
	pageInfo:PageInfo,
	projects?:Project[]
}

export type PageInfo = {
	last?:string,
	limit?:number,
	next?:boolean
}

export type Project = {
	description?:string,
	endpoint?:Endpoint,
	id:string,
	name:string,
	owner?:User,
	public?:boolean,
	slug?:string,
	sources:(props:{	last?:string,	limit?:number}) => FakerSourceConnection,
	tags?:string[],
	team?:Team
}

export type Endpoint = {
	uri?:string
}

export type User = {
	accountType:AccountType,
	id?:string,
	namespace?:Namespace,
	subscriptions?:SubscriptionConnection,
	username?:string
}

export enum AccountType {
	FREE = "FREE",
	PREMIUM = "PREMIUM"
}

export type Namespace = {
	project:(props:{	name:string}) => Project,
	projects:(props:{	last?:string,	limit?:number}) => ProjectConnection,
	public?:boolean,
	slug?:string
}

export type SubscriptionConnection = {
	pageInfo:PageInfo,
	subscriptions?:Subscription[]
}

export type Subscription = {
	cancelURL?:string,
	expiration?:string,
	quantity?:number,
	seats?:UserConnection,
	subscriptionID?:number,
	updateURL?:string
}

export type UserConnection = {
	pageInfo:PageInfo,
	users?:User[]
}

export type FakerSourceConnection = {
	pageInfo:PageInfo,
	sources?:FakerSource[]
}

export type FakerSource = {
	checksum?:string,
	contents?:string,
	filename?:string,
	getUrl?:string
}

export type Team = {
	id?:string,
	member:(props:{	username:string}) => Member,
	members:(props:{	last?:string,	limit?:number}) => MemberConnection,
	name:string,
	namespace:Namespace
}

export type Member = {
	email?:string,
	role?:Role,
	username?:string
}

export enum Role {
	OWNER = "OWNER",
	ADMIN = "ADMIN",
	EDITOR = "EDITOR",
	VIEWER = "VIEWER",
	CONTRIBUTOR = "CONTRIBUTOR"
}

export type MemberConnection = {
	members?:Member[],
	pageInfo:PageInfo
}

export type TeamConnection = {
	pageInfo:PageInfo,
	teams?:Team[]
}

export type Mutation = {
	createProject:(props:{	public?:boolean,	name:string}) => Project,
	createTeam:(props:{	name:string,	namespace:string}) => TeamOps,
	createUser:(props:{	namespace:string,	public?:boolean}) => User,
	deployToFaker:(props:{	id:string}) => boolean,
	removeProject:(props:{	project:string}) => boolean,
	team:(props:{	id:string}) => TeamOps,
	updateProject:(props:{	in?:UpdateProject}) => boolean,
	updateSources:(props:{	project:string,	sources?:NewSource[]}) => (SourceUploadInfo | undefined)[]
}

export type TeamOps = {
	addMember:(props:{	username:string,	role:Role}) => Member,
	createProject:(props:{	name:string,	public?:boolean}) => Project,
	delete?:boolean,
	id?:string,
	member:(props:{	username:string}) => MemberOps,
	members:(props:{	last?:string,	limit?:number}) => MemberConnection,
	name?:string,
	namespace?:Namespace,
	project:(props:{	id:string}) => ProjectOps
}

export type MemberOps = {
	delete?:boolean,
	update:(props:{	role?:Role}) => boolean
}

export type ProjectOps = {
	delete?:boolean,
	deployToFaker?:boolean,
	update:(props:{	in?:UpdateProject}) => boolean
}

export type UpdateProject = {
	public?:boolean,
	project?:string,
	description?:string,
	tags?:string[]
}

export type NewSource = {
	filename?:string,
	contentLength?:number,
	contentType?:string,
	checksum?:string
}

export type SourceUploadInfo = {
	filename?:string,
	headers?:(Header | undefined)[],
	putUrl:string
}

export type Header = {
	key:string,
	value?:string
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
    )) as OperationToGraphQL<Mutation>,
Subscription: ((o: any) =>
    fullChainConstruct(options)('Subscription')(o).then(
      (response: any) => response as State<Subscription>
    )) as OperationToGraphQL<Subscription>
});
export const Api = (...options: fetchOptions) => ({
  Query: {
      findProjects: ((o:any) =>
      fullChainConstruct(options)('Query')({
        findProjects: o
      }).then((response:any) => response.findProjects)) as ApiFieldToGraphQL<Query['findProjects']>,
findProjectsByTag: ((o:any) =>
      fullChainConstruct(options)('Query')({
        findProjectsByTag: o
      }).then((response:any) => response.findProjectsByTag)) as ApiFieldToGraphQL<Query['findProjectsByTag']>,
getNamespace: ((o:any) =>
      fullChainConstruct(options)('Query')({
        getNamespace: o
      }).then((response:any) => response.getNamespace)) as ApiFieldToGraphQL<Query['getNamespace']>,
getProject: ((o:any) =>
      fullChainConstruct(options)('Query')({
        getProject: o
      }).then((response:any) => response.getProject)) as ApiFieldToGraphQL<Query['getProject']>,
getTeam: ((o:any) =>
      fullChainConstruct(options)('Query')({
        getTeam: o
      }).then((response:any) => response.getTeam)) as ApiFieldToGraphQL<Query['getTeam']>,
getUser: ((o:any) =>
      fullChainConstruct(options)('Query')({
        getUser: o
      }).then((response:any) => response.getUser)) as ApiFieldToGraphQL<Query['getUser']>,
listProjects: ((o:any) =>
      fullChainConstruct(options)('Query')({
        listProjects: o
      }).then((response:any) => response.listProjects)) as ApiFieldToGraphQL<Query['listProjects']>,
myTeams: ((o:any) =>
      fullChainConstruct(options)('Query')({
        myTeams: o
      }).then((response:any) => response.myTeams)) as ApiFieldToGraphQL<Query['myTeams']>
  },
Mutation: {
      createProject: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        createProject: o
      }).then((response:any) => response.createProject)) as ApiFieldToGraphQL<Mutation['createProject']>,
createTeam: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        createTeam: o
      }).then((response:any) => response.createTeam)) as ApiFieldToGraphQL<Mutation['createTeam']>,
createUser: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        createUser: o
      }).then((response:any) => response.createUser)) as ApiFieldToGraphQL<Mutation['createUser']>,
deployToFaker: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        deployToFaker: o
      }).then((response:any) => response.deployToFaker)) as ApiFieldToGraphQL<Mutation['deployToFaker']>,
removeProject: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        removeProject: o
      }).then((response:any) => response.removeProject)) as ApiFieldToGraphQL<Mutation['removeProject']>,
team: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        team: o
      }).then((response:any) => response.team)) as ApiFieldToGraphQL<Mutation['team']>,
updateProject: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        updateProject: o
      }).then((response:any) => response.updateProject)) as ApiFieldToGraphQL<Mutation['updateProject']>,
updateSources: ((o:any) =>
      fullChainConstruct(options)('Mutation')({
        updateSources: o
      }).then((response:any) => response.updateSources)) as ApiFieldToGraphQL<Mutation['updateSources']>
  },
Subscription: {
      cancelURL: ((o:any) =>
      fullChainConstruct(options)('Subscription')({
        cancelURL: o
      }).then((response:any) => response.cancelURL)) as ApiFieldToGraphQL<Subscription['cancelURL']>,
expiration: ((o:any) =>
      fullChainConstruct(options)('Subscription')({
        expiration: o
      }).then((response:any) => response.expiration)) as ApiFieldToGraphQL<Subscription['expiration']>,
quantity: ((o:any) =>
      fullChainConstruct(options)('Subscription')({
        quantity: o
      }).then((response:any) => response.quantity)) as ApiFieldToGraphQL<Subscription['quantity']>,
seats: ((o:any) =>
      fullChainConstruct(options)('Subscription')({
        seats: o
      }).then((response:any) => response.seats)) as ApiFieldToGraphQL<Subscription['seats']>,
subscriptionID: ((o:any) =>
      fullChainConstruct(options)('Subscription')({
        subscriptionID: o
      }).then((response:any) => response.subscriptionID)) as ApiFieldToGraphQL<Subscription['subscriptionID']>,
updateURL: ((o:any) =>
      fullChainConstruct(options)('Subscription')({
        updateURL: o
      }).then((response:any) => response.updateURL)) as ApiFieldToGraphQL<Subscription['updateURL']>
  }
});
export const Zeus = {
  Query: (o:GraphQLReturner<Query>) => queryConstruct('Query')(o),
Mutation: (o:GraphQLReturner<Mutation>) => queryConstruct('Mutation')(o),
Subscription: (o:GraphQLReturner<Subscription>) => queryConstruct('Subscription')(o)
};
export const Cast = {
  Query: (o:any) => o as State<Query>,
Mutation: (o:any) => o as State<Mutation>,
Subscription: (o:any) => o as State<Subscription>
};
  