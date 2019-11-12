/* tslint:disable */

export const AllTypesProps: Record<string,any> = {
	AccountType: "enum",
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
			namespace:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			name:{
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
	NewSource:{
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
		},
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
	Role: "enum",
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
	UpdateProject:{
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
		},
		public:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Endpoint:{
		uri:"String"
	},
	FakerSource:{
		checksum:"String",
		contents:"String",
		filename:"String",
		getUrl:"String"
	},
	FakerSourceConnection:{
		pageInfo:"PageInfo",
		sources:"FakerSource"
	},
	Header:{
		key:"String",
		value:"String"
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
	MemberOps:{
		delete:"Boolean",
		update:"Boolean"
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
	Namespace:{
		project:"Project",
		projects:"ProjectConnection",
		public:"Boolean",
		slug:"String"
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
		mocked:"Boolean",
		name:"String",
		owner:"User",
		public:"Boolean",
		slug:"String",
		sources:"FakerSourceConnection",
		tags:"String",
		team:"Team"
	},
	ProjectConnection:{
		pageInfo:"PageInfo",
		projects:"Project"
	},
	ProjectOps:{
		delete:"Boolean",
		deployToFaker:"Boolean",
		update:"Boolean"
	},
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
	SourceUploadInfo:{
		filename:"String",
		headers:"Header",
		putUrl:"String"
	},
	Subscription:{
		cancelURL:"String",
		expiration:"String",
		quantity:"Int",
		seats:"UserConnection",
		status:"String",
		subscriptionID:"Int",
		subscriptionPlanID:"Int",
		updateURL:"String"
	},
	SubscriptionConnection:{
		pageInfo:"PageInfo",
		subscriptions:"Subscription"
	},
	Team:{
		id:"ID",
		member:"Member",
		members:"MemberConnection",
		name:"String",
		namespace:"Namespace"
	},
	TeamConnection:{
		pageInfo:"PageInfo",
		teams:"Team"
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
	User:{
		accountType:"AccountType",
		id:"ID",
		namespace:"Namespace",
		subscriptions:"SubscriptionConnection",
		username:"String"
	},
	UserConnection:{
		pageInfo:"PageInfo",
		users:"User"
	}
}

export type ValueTypes = {
    /** Defines user's account type */
["AccountType"]:AccountType,
	/** Endpoint returnes a full path to the project without host */
["Endpoint"]: {
	/** Full project uri without host */
	uri?:string
},
	/** A source object */
["FakerSource"]: {
	/** File checksum */
	checksum?:string,
	contents?:string,
	/** Name of source file */
	filename?:string,
	/** Return an url by which source file can be accessed */
	getUrl?:string
},
	/** Connection object containing list of faker sources */
["FakerSourceConnection"]: {
	/** Connection pageInfo */
	pageInfo:ValueTypes["PageInfo"],
	/** List of sources returned by connection */
	sources?:ValueTypes["FakerSource"][]
},
	/** Request header */
["Header"]: {
	/** Header name */
	key:string,
	/** Header value */
	value?:string
},
	/** Team member */
["Member"]: {
	/** Member email */
	email?:string,
	/** Member role */
	role?:ValueTypes["Role"],
	/** Member username */
	username?:string
},
	/** Paginated members list */
["MemberConnection"]: {
	/** List of members in this connection */
	members?:ValueTypes["Member"][],
	/** pageInfo for member connection */
	pageInfo:ValueTypes["PageInfo"]
},
	/** Team member ops */
["MemberOps"]: {
	/** Boolean object node */
	delete?:boolean,
	/** Boolean object node */
	update:(props:{	role?:ValueTypes["Role"]}) => boolean
},
	["Mutation"]: {
	/** Create new user project

public if true project is public

name is project name */
	createProject:(props:{	public?:boolean,	name:string}) => ValueTypes["Project"],
	/** Create new team */
	createTeam:(props:{	namespace:string,	name:string}) => ValueTypes["TeamOps"],
	/** Create new user

namespace name for a user

public is user namespace public */
	createUser:(props:{	namespace:string,	public?:boolean}) => ValueTypes["User"],
	/** deploy project to faker */
	deployToFaker:(props:{	id:string}) => boolean,
	/** Remove project by id */
	removeProject:(props:{	project:string}) => boolean,
	/** type object node */
	team:(props:{	id:string}) => ValueTypes["TeamOps"],
	/** Modify project */
	updateProject:(props:{	in?:ValueTypes["UpdateProject"]}) => boolean,
	/** Add sources to the project */
	updateSources:(props:{	project:string,	sources?:ValueTypes["NewSource"][]}) => (ValueTypes["SourceUploadInfo"] | undefined)[]
},
	/** Namespace is a root object containing projects belonging
to a team or user */
["Namespace"]: {
	/** Return project by name from namespace */
	project:(props:{	name:string}) => ValueTypes["Project"],
	/** Returns a project connection object which contains a projects belonging to namespace

last is a string returned by previous call to Namespace.projects

limit sets a limit on how many objects can be returned */
	projects:(props:{	last?:string,	limit?:number}) => ValueTypes["ProjectConnection"],
	/** True if namespace is public */
	public?:boolean,
	/** Namespace part of the slug */
	slug?:string
},
	/** New source payload */
["NewSource"]: {
	/** Source mime type */
	contentType?:string,
	/** Source checksum */
	checksum?:string,
	/** source file name */
	filename?:string,
	/** Length of source in bytes */
	contentLength?:number
},
	/** PageInfo contains information about connection page */
["PageInfo"]: {
	/** last element in connection */
	last?:string,
	/** limit set while quering */
	limit?:number,
	/** if next is false then client recieved all available data */
	next?:boolean
},
	/** Project type */
["Project"]: {
	/** Project description */
	description?:string,
	/** Project endpoint contains a slug under which project can be reached

For example https://app.graphqleditor.com/{endpoint.uri}/ */
	endpoint?:ValueTypes["Endpoint"],
	/** Unique project id */
	id:string,
	/** Is project mocked by faker backend */
	mocked?:boolean,
	/** Project name */
	name:string,
	/** Project owner

Can be null if project belongs to a team */
	owner?:ValueTypes["User"],
	/** True if project is public */
	public?:boolean,
	/** Project part of the slug */
	slug?:string,
	/** Returns a connection object with source files in project

last is a string returned by previous call to Project.sources

limit sets a limit on how many objects can be returned */
	sources:(props:{	last?:string,	limit?:number}) => ValueTypes["FakerSourceConnection"],
	/** Project tags */
	tags?:string[],
	/** Team to which project belongs

Can be null if project belongs to a user */
	team?:ValueTypes["Team"]
},
	/** Project connection object

Used with paginated listing of projects */
["ProjectConnection"]: {
	/** Current connection page info */
	pageInfo:ValueTypes["PageInfo"],
	/** List of projects in connection */
	projects?:ValueTypes["Project"][]
},
	/** type object node */
["ProjectOps"]: {
	/** Boolean object node */
	delete?:boolean,
	/** deploy project to faker */
	deployToFaker?:boolean,
	/** Boolean object node */
	update:(props:{	in?:ValueTypes["UpdateProject"]}) => boolean
},
	/** Root query type */
["Query"]: {
	/** Returns a project connection

query is a regular expresion matched agains project slug

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjects:(props:{	query:string,	last?:string,	limit?:number}) => ValueTypes["ProjectConnection"],
	/** Find projects which contain tag

tag is a string

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjectsByTag:(props:{	tag:string,	last?:string,	limit?:number}) => ValueTypes["ProjectConnection"],
	/** Return namespace matching slug */
	getNamespace:(props:{	slug:string}) => ValueTypes["Namespace"],
	/** Return project by id */
	getProject:(props:{	project:string}) => ValueTypes["Project"],
	/** Return team by name */
	getTeam:(props:{	name:string}) => ValueTypes["Team"],
	/** Return user by name */
	getUser:(props:{	username:string}) => ValueTypes["User"],
	/** Returns a project connection
	
If owned is true, returns only project belonging to currently logged user

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	listProjects:(props:{	last?:string,	limit?:number,	owned?:boolean}) => ValueTypes["ProjectConnection"],
	/** List of current user teams */
	myTeams:(props:{	last?:string,	limit?:number}) => ValueTypes["TeamConnection"]
},
	/** Team member role */
["Role"]:Role,
	/** Source upload info object */
["SourceUploadInfo"]: {
	/** Source file name */
	filename?:string,
	/** List of headers that must be included in PUT request */
	headers?:(ValueTypes["Header"] | undefined)[],
	/** String with url used in PUT request */
	putUrl:string
},
	["Subscription"]: {
	/** Cancel subscription URL */
	cancelURL?:string,
	/** Subscription expiration date */
	expiration?:string,
	/** Number of seats in subscription */
	quantity?:number,
	/** List of seats in subscription */
	seats?:ValueTypes["UserConnection"],
	/** Status of subscription */
	status?:string,
	/** Subscription unique id */
	subscriptionID?:number,
	/** Subscription unique id */
	subscriptionPlanID?:number,
	/** Update subscription URL */
	updateURL?:string
},
	["SubscriptionConnection"]: {
	/** Current conenction page info */
	pageInfo:ValueTypes["PageInfo"],
	/** List of subscriptions in connection */
	subscriptions?:ValueTypes["Subscription"][]
},
	/** Team object */
["Team"]: {
	/** Unique team id */
	id?:string,
	/** type object node */
	member:(props:{	username:string}) => ValueTypes["Member"],
	/** Paginated list of members in team */
	members:(props:{	last?:string,	limit?:number}) => ValueTypes["MemberConnection"],
	/** Team name */
	name:string,
	/** Team's namespace */
	namespace:ValueTypes["Namespace"]
},
	/** Teams connection */
["TeamConnection"]: {
	/** Pagination info used in next fetch */
	pageInfo:ValueTypes["PageInfo"],
	/** List of teams returned by current page in connection */
	teams?:ValueTypes["Team"][]
},
	/** Team operations */
["TeamOps"]: {
	/** Add member to the team */
	addMember:(props:{	username:string,	role:ValueTypes["Role"]}) => ValueTypes["Member"],
	/** Create new team project */
	createProject:(props:{	name:string,	public?:boolean}) => ValueTypes["Project"],
	/** Delete team */
	delete?:boolean,
	/** Unique team id */
	id?:string,
	/** type object node */
	member:(props:{	username:string}) => ValueTypes["MemberOps"],
	/** Paginated list of members in team */
	members:(props:{	last?:string,	limit?:number}) => ValueTypes["MemberConnection"],
	/** Team name */
	name?:string,
	/** Team's namespace */
	namespace?:ValueTypes["Namespace"],
	/** type object node */
	project:(props:{	id:string}) => ValueTypes["ProjectOps"]
},
	/** Update project payload */
["UpdateProject"]: {
	/** ID of project to be updated */
	project?:string,
	/** New description for project */
	description?:string,
	/** List of tags for project */
	tags?:string[],
	/** Set project visiblity */
	public?:boolean
},
	/** Editor user */
["User"]: {
	/** User's account type */
	accountType:ValueTypes["AccountType"],
	/** Unique user id */
	id?:string,
	/** User's namespace */
	namespace?:ValueTypes["Namespace"],
	/** User's subscriptions */
	subscriptions?:ValueTypes["SubscriptionConnection"],
	/** Unique username */
	username?:string
},
	["UserConnection"]: {
	/** Current connection page info */
	pageInfo:ValueTypes["PageInfo"],
	/** List of projects in connection */
	users?:ValueTypes["User"][]
}
  }

/** Defines user's account type */
export enum AccountType {
	FREE = "FREE",
	PREMIUM = "PREMIUM"
}

/** Endpoint returnes a full path to the project without host */
export type Endpoint = {
	__typename?: "Endpoint",
	/** Full project uri without host */
	uri?:string
}

/** A source object */
export type FakerSource = {
	__typename?: "FakerSource",
	/** File checksum */
	checksum?:string,
	contents?:string,
	/** Name of source file */
	filename?:string,
	/** Return an url by which source file can be accessed */
	getUrl?:string
}

/** Connection object containing list of faker sources */
export type FakerSourceConnection = {
	__typename?: "FakerSourceConnection",
	/** Connection pageInfo */
	pageInfo:PageInfo,
	/** List of sources returned by connection */
	sources?:FakerSource[]
}

/** Request header */
export type Header = {
	__typename?: "Header",
	/** Header name */
	key:string,
	/** Header value */
	value?:string
}

/** Team member */
export type Member = {
	__typename?: "Member",
	/** Member email */
	email?:string,
	/** Member role */
	role?:Role,
	/** Member username */
	username?:string
}

/** Paginated members list */
export type MemberConnection = {
	__typename?: "MemberConnection",
	/** List of members in this connection */
	members?:Member[],
	/** pageInfo for member connection */
	pageInfo:PageInfo
}

/** Team member ops */
export type MemberOps = {
	__typename?: "MemberOps",
	/** Boolean object node */
	delete?:boolean,
	/** Boolean object node */
	update:(props:{	role?:Role}) => boolean
}

export type Mutation = {
	__typename?: "Mutation",
	/** Create new user project

public if true project is public

name is project name */
	createProject:(props:{	public?:boolean,	name:string}) => Project,
	/** Create new team */
	createTeam:(props:{	namespace:string,	name:string}) => TeamOps,
	/** Create new user

namespace name for a user

public is user namespace public */
	createUser:(props:{	namespace:string,	public?:boolean}) => User,
	/** deploy project to faker */
	deployToFaker:(props:{	id:string}) => boolean,
	/** Remove project by id */
	removeProject:(props:{	project:string}) => boolean,
	/** type object node */
	team:(props:{	id:string}) => TeamOps,
	/** Modify project */
	updateProject:(props:{	in?:UpdateProject}) => boolean,
	/** Add sources to the project */
	updateSources:(props:{	project:string,	sources?:NewSource[]}) => (SourceUploadInfo | undefined)[]
}

/** Namespace is a root object containing projects belonging
to a team or user */
export type Namespace = {
	__typename?: "Namespace",
	/** Return project by name from namespace */
	project:(props:{	name:string}) => Project,
	/** Returns a project connection object which contains a projects belonging to namespace

last is a string returned by previous call to Namespace.projects

limit sets a limit on how many objects can be returned */
	projects:(props:{	last?:string,	limit?:number}) => ProjectConnection,
	/** True if namespace is public */
	public?:boolean,
	/** Namespace part of the slug */
	slug?:string
}

/** New source payload */
export type NewSource = {
		/** Source mime type */
	contentType?:string,
	/** Source checksum */
	checksum?:string,
	/** source file name */
	filename?:string,
	/** Length of source in bytes */
	contentLength?:number
}

/** PageInfo contains information about connection page */
export type PageInfo = {
	__typename?: "PageInfo",
	/** last element in connection */
	last?:string,
	/** limit set while quering */
	limit?:number,
	/** if next is false then client recieved all available data */
	next?:boolean
}

/** Project type */
export type Project = {
	__typename?: "Project",
	/** Project description */
	description?:string,
	/** Project endpoint contains a slug under which project can be reached

For example https://app.graphqleditor.com/{endpoint.uri}/ */
	endpoint?:Endpoint,
	/** Unique project id */
	id:string,
	/** Is project mocked by faker backend */
	mocked?:boolean,
	/** Project name */
	name:string,
	/** Project owner

Can be null if project belongs to a team */
	owner?:User,
	/** True if project is public */
	public?:boolean,
	/** Project part of the slug */
	slug?:string,
	/** Returns a connection object with source files in project

last is a string returned by previous call to Project.sources

limit sets a limit on how many objects can be returned */
	sources:(props:{	last?:string,	limit?:number}) => FakerSourceConnection,
	/** Project tags */
	tags?:string[],
	/** Team to which project belongs

Can be null if project belongs to a user */
	team?:Team
}

/** Project connection object

Used with paginated listing of projects */
export type ProjectConnection = {
	__typename?: "ProjectConnection",
	/** Current connection page info */
	pageInfo:PageInfo,
	/** List of projects in connection */
	projects?:Project[]
}

/** type object node */
export type ProjectOps = {
	__typename?: "ProjectOps",
	/** Boolean object node */
	delete?:boolean,
	/** deploy project to faker */
	deployToFaker?:boolean,
	/** Boolean object node */
	update:(props:{	in?:UpdateProject}) => boolean
}

/** Root query type */
export type Query = {
	__typename?: "Query",
	/** Returns a project connection

query is a regular expresion matched agains project slug

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjects:(props:{	query:string,	last?:string,	limit?:number}) => ProjectConnection,
	/** Find projects which contain tag

tag is a string

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjectsByTag:(props:{	tag:string,	last?:string,	limit?:number}) => ProjectConnection,
	/** Return namespace matching slug */
	getNamespace:(props:{	slug:string}) => Namespace,
	/** Return project by id */
	getProject:(props:{	project:string}) => Project,
	/** Return team by name */
	getTeam:(props:{	name:string}) => Team,
	/** Return user by name */
	getUser:(props:{	username:string}) => User,
	/** Returns a project connection
	
If owned is true, returns only project belonging to currently logged user

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	listProjects:(props:{	last?:string,	limit?:number,	owned?:boolean}) => ProjectConnection,
	/** List of current user teams */
	myTeams:(props:{	last?:string,	limit?:number}) => TeamConnection
}

/** Team member role */
export enum Role {
	OWNER = "OWNER",
	ADMIN = "ADMIN",
	EDITOR = "EDITOR",
	VIEWER = "VIEWER",
	CONTRIBUTOR = "CONTRIBUTOR"
}

/** Source upload info object */
export type SourceUploadInfo = {
	__typename?: "SourceUploadInfo",
	/** Source file name */
	filename?:string,
	/** List of headers that must be included in PUT request */
	headers?:(Header | undefined)[],
	/** String with url used in PUT request */
	putUrl:string
}

export type Subscription = {
	__typename?: "Subscription",
	/** Cancel subscription URL */
	cancelURL?:string,
	/** Subscription expiration date */
	expiration?:string,
	/** Number of seats in subscription */
	quantity?:number,
	/** List of seats in subscription */
	seats?:UserConnection,
	/** Status of subscription */
	status?:string,
	/** Subscription unique id */
	subscriptionID?:number,
	/** Subscription unique id */
	subscriptionPlanID?:number,
	/** Update subscription URL */
	updateURL?:string
}

export type SubscriptionConnection = {
	__typename?: "SubscriptionConnection",
	/** Current conenction page info */
	pageInfo:PageInfo,
	/** List of subscriptions in connection */
	subscriptions?:Subscription[]
}

/** Team object */
export type Team = {
	__typename?: "Team",
	/** Unique team id */
	id?:string,
	/** type object node */
	member:(props:{	username:string}) => Member,
	/** Paginated list of members in team */
	members:(props:{	last?:string,	limit?:number}) => MemberConnection,
	/** Team name */
	name:string,
	/** Team's namespace */
	namespace:Namespace
}

/** Teams connection */
export type TeamConnection = {
	__typename?: "TeamConnection",
	/** Pagination info used in next fetch */
	pageInfo:PageInfo,
	/** List of teams returned by current page in connection */
	teams?:Team[]
}

/** Team operations */
export type TeamOps = {
	__typename?: "TeamOps",
	/** Add member to the team */
	addMember:(props:{	username:string,	role:Role}) => Member,
	/** Create new team project */
	createProject:(props:{	name:string,	public?:boolean}) => Project,
	/** Delete team */
	delete?:boolean,
	/** Unique team id */
	id?:string,
	/** type object node */
	member:(props:{	username:string}) => MemberOps,
	/** Paginated list of members in team */
	members:(props:{	last?:string,	limit?:number}) => MemberConnection,
	/** Team name */
	name?:string,
	/** Team's namespace */
	namespace?:Namespace,
	/** type object node */
	project:(props:{	id:string}) => ProjectOps
}

/** Update project payload */
export type UpdateProject = {
		/** ID of project to be updated */
	project?:string,
	/** New description for project */
	description?:string,
	/** List of tags for project */
	tags?:string[],
	/** Set project visiblity */
	public?:boolean
}

/** Editor user */
export type User = {
	__typename?: "User",
	/** User's account type */
	accountType:AccountType,
	/** Unique user id */
	id?:string,
	/** User's namespace */
	namespace?:Namespace,
	/** User's subscriptions */
	subscriptions?:SubscriptionConnection,
	/** Unique username */
	username?:string
}

export type UserConnection = {
	__typename?: "UserConnection",
	/** Current connection page info */
	pageInfo:PageInfo,
	/** List of projects in connection */
	users?:User[]
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
type IsScalar<T, Z, L> = IsType<string | boolean | number, T, Z, L>;
type IsObject<T, Z, L> = IsType<{} | Record<string, any>, T, Z, L>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

export type ResolverType<F> = F extends Func<infer P, any> ? P[0] : undefined;

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
  [P in keyof T]: T[P] extends (Array<infer R> | undefined)
    ? Array<State<R>>
    : T[P] extends AnyFunc
    ? State<ReturnType<T[P]>>
    : IsScalar<T[P], T[P], IsObject<T[P], State<T[P]>, never>>;
};

export type PlainObject<T> = {
  [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<PlainObject<R>>
    : T[P] extends AnyFunc
    ? PlainObject<ReturnType<T[P]>>
    : IsScalar<T[P], T[P], IsObject<T[P], PlainObject<T[P]>, never>>;
};

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsScalar<
      ReturnType<T>,
      [FirstArgument<T>],
      [FirstArgument<T>, SelectionSet<OfType<ReturnType<T>>>]
    >
  : IsScalar<T, T extends undefined ? undefined : true, IsObject<T, SelectionSet<T>, never>>;

export type SelectionSet<T> = IsScalar<
  T,
  T extends undefined ? undefined : true,
  IsObject<
    T,
    AliasType<
      {
        [P in keyof T]?: ResolveValue<T[P]>;
      }
    >,
    never
  >
>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;

export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };

type LastMapTypeSRCResolver<SRC, DST> = SRC extends AnyFunc
  ? ReturnType<SRC> extends Array<infer FUNCRET>
    ? MapType<FUNCRET, DST>[]
    : MapType<ReturnType<SRC>, DST>
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends {
  __alias: any;
}
  ? {
      [A in keyof DST['__alias']]: Required<SRC> extends Anify<DST['__alias'][A]>
        ? MapType<Required<SRC>, DST['__alias'][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, '__alias'>]: LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z>(o: Z | GraphQLReturner<V>) => Promise<MapType<T, Z>>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | SelectionSet<V>) => T;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
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
  if (value === null) {
    return `null`;
  }
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
  traverseToSeekArrays([type], a)

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
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
Mutation: ((o: any) =>
    fullChainConstruct(options)('Mutation')(o).then(
      (response: any) => response as State<Mutation>
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  Query: (o:GraphQLReturner<ValueTypes["Query"]>) => queryConstruct('Query')(o),
Mutation: (o:GraphQLReturner<ValueTypes["Mutation"]>) => queryConstruct('Mutation')(o)
};
export const Cast = {
  Query: (o:any) => o as State<Query>,
Mutation: (o:any) => o as State<Mutation>
};
export const Selectors = {
  Query: ZeusSelect<ValueTypes["Query"]>(),
Mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  

export const Gql = Chain('https://project-api.graphqleditor.com/graphql')