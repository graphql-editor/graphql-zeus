/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    /** Defines user's account type */
["AccountType"]:AccountType;
	["ChangeSubscriptionInput"]: {
	subscriptionID:number,
	subscriptionPlanID?:number
};
	/** Checkout data needed to begin payment process */
["CheckoutDataInput"]: {
	/** Quantity of subscriptions that user wants */
	quantity?:number,
	/** Customer data */
	customer?:ValueTypes["CustomerInput"],
	/** Vat data */
	vat?:ValueTypes["VatInput"],
	/** Optional discount coupon */
	coupon?:string,
	/** URL to which user should be redirected after successful transaction */
	successURL?:string,
	/** URL to which user should be redirected after failed transaction */
	cancelURL?:string,
	/** An id of a chosen subscription plan */
	planID:string
};
	/** Customer data for checkout information */
["CustomerInput"]: {
	/** User's email address */
	email?:string,
	/** User's country */
	country?:string,
	/** User's post code */
	postCode?:string,
	/** Must be true for marketing to be allowed */
	marketingConsent?:boolean
};
	/** Amount is a number that gives precise representation of real numbers */
["Decimal"]:unknown;
	/** Endpoint returnes a full path to the project without host */
["Endpoint"]: AliasType<{
	/** Full project uri without host */
	uri?:true
		__typename?: true
}>;
	/** A source object */
["FakerSource"]: AliasType<{
	/** File checksum */
	checksum?:true,
	contents?:true,
	/** Name of source file */
	filename?:true,
	/** Return an url by which source file can be accessed */
	getUrl?:true
		__typename?: true
}>;
	/** Connection object containing list of faker sources */
["FakerSourceConnection"]: AliasType<{
	/** Connection pageInfo */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of sources returned by connection */
	sources?:ValueTypes["FakerSource"]
		__typename?: true
}>;
	["FileServerCredentials"]:unknown;
	/** Request header */
["Header"]: AliasType<{
	/** Header name */
	key?:true,
	/** Header value */
	value?:true
		__typename?: true
}>;
	/** Team member */
["Member"]: AliasType<{
	/** Member email */
	email?:true,
	/** Member role */
	role?:true,
	/** Member username */
	username?:true
		__typename?: true
}>;
	/** Paginated members list */
["MemberConnection"]: AliasType<{
	/** List of members in this connection */
	members?:ValueTypes["Member"],
	/** pageInfo for member connection */
	pageInfo?:ValueTypes["PageInfo"]
		__typename?: true
}>;
	/** Team member ops */
["MemberOps"]: AliasType<{
	/** Boolean object node */
	delete?:true,
update?: [{	role?:ValueTypes["Role"]},true]
		__typename?: true
}>;
	["Mutation"]: AliasType<{
changeSubscription?: [{	in:ValueTypes["ChangeSubscriptionInput"]},true],
createProject?: [{	public?:boolean,	name:string},ValueTypes["Project"]],
createTeam?: [{	namespace:string,	name:string},ValueTypes["TeamOps"]],
createUser?: [{	namespace:string,	public?:boolean},ValueTypes["User"]],
deployToFaker?: [{	id:string},true],
removeProject?: [{	project:string},true],
team?: [{	id:string},ValueTypes["TeamOps"]],
updateProject?: [{	in?:ValueTypes["UpdateProject"]},true],
updateSources?: [{	project:string,	sources?:ValueTypes["NewSource"][]},ValueTypes["SourceUploadInfo"]]
		__typename?: true
}>;
	/** Namespace is a root object containing projects belonging
to a team or user */
["Namespace"]: AliasType<{
project?: [{	name:string},ValueTypes["Project"]],
projects?: [{	last?:string,	limit?:number},ValueTypes["ProjectConnection"]],
	/** True if namespace is public */
	public?:true,
	/** Namespace part of the slug */
	slug?:true
		__typename?: true
}>;
	/** New source payload */
["NewSource"]: {
	/** source file name */
	filename?:string,
	/** Length of source in bytes */
	contentLength?:number,
	/** Source mime type */
	contentType?:string,
	/** Source checksum */
	checksum?:string
};
	/** PageInfo contains information about connection page */
["PageInfo"]: AliasType<{
	/** last element in connection */
	last?:true,
	/** limit set while quering */
	limit?:true,
	/** if next is false then client recieved all available data */
	next?:true
		__typename?: true
}>;
	["Payment"]: AliasType<{
	/** Amount paid */
	amount?:true,
	/** Currency in which payment was made */
	currency?:true,
	/** Date indicates a when the payment was made */
	date?:true,
	/** URL from which user can download invoice */
	receiptURL?:true,
	/** ID of subscription for which payment was made */
	subscriptionID?:true
		__typename?: true
}>;
	/** PaymentDate is a string in a format 'YYYY-MM-DD' */
["PaymentDate"]:unknown;
	/** Project type */
["Project"]: AliasType<{
	/** Return creation time stamp of a project */
	createdAt?:true,
	/** Project description */
	description?:true,
	/** Is project enabled */
	enabled?:true,
	/** Project endpoint contains a slug under which project can be reached

For example https://app.graphqleditor.com/{endpoint.uri}/ */
	endpoint?:ValueTypes["Endpoint"],
	/** Unique project id */
	id?:true,
	/** Is project mocked by faker backend */
	mocked?:true,
	/** Project name */
	name?:true,
	/** Project owner

Can be null if project belongs to a team */
	owner?:ValueTypes["User"],
	/** True if project is public */
	public?:true,
	/** Project part of the slug */
	slug?:true,
sources?: [{	last?:string,	limit?:number},ValueTypes["FakerSourceConnection"]],
	/** Project tags */
	tags?:true,
	/** Team to which project belongs

Can be null if project belongs to a user */
	team?:ValueTypes["Team"]
		__typename?: true
}>;
	/** Project connection object

Used with paginated listing of projects */
["ProjectConnection"]: AliasType<{
	/** Current connection page info */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of projects in connection */
	projects?:ValueTypes["Project"]
		__typename?: true
}>;
	/** type object node */
["ProjectOps"]: AliasType<{
	/** Boolean object node */
	delete?:true,
	/** deploy project to faker */
	deployToFaker?:true,
update?: [{	in?:ValueTypes["UpdateProject"]},true]
		__typename?: true
}>;
	/** ProjectsSortInput defines how projects from listProjects should be sorted. */
["ProjectsSortInput"]: {
	/** Sort by tag */
	tags?:ValueTypes["SortOrder"],
	/** Sorts projects by team.

Sort behaviour for projects by team is implemenation depednant. */
	team?:ValueTypes["SortOrder"],
	/** Sort projects by creation date */
	createdAt?:ValueTypes["SortOrder"],
	/** Sort by name */
	name?:ValueTypes["SortOrder"],
	/** Sort by id */
	id?:ValueTypes["SortOrder"],
	/** Sort by owner */
	owner?:ValueTypes["SortOrder"],
	/** Sort by visisbility */
	public?:ValueTypes["SortOrder"],
	/** Sort by slug */
	slug?:ValueTypes["SortOrder"]
};
	/** Root query type */
["Query"]: AliasType<{
checkoutData?: [{	data:ValueTypes["CheckoutDataInput"]},true],
fileServerCredentials?: [{	project?:string},true],
findProjects?: [{	last?:string,	limit?:number,	query:string},ValueTypes["ProjectConnection"]],
findProjectsByTag?: [{	tag:string,	last?:string,	limit?:number},ValueTypes["ProjectConnection"]],
getNamespace?: [{	slug:string},ValueTypes["Namespace"]],
getProject?: [{	project:string},ValueTypes["Project"]],
getTeam?: [{	name:string},ValueTypes["Team"]],
getUser?: [{	username:string},ValueTypes["User"]],
listProjects?: [{	sort?:(ValueTypes["ProjectsSortInput"] | undefined)[],	owned?:boolean,	last?:string,	limit?:number},ValueTypes["ProjectConnection"]],
myTeams?: [{	last?:string,	limit?:number},ValueTypes["TeamConnection"]],
	/** List user payments */
	payments?:ValueTypes["Payment"]
		__typename?: true
}>;
	/** RFC3339Date is a RFC3339 formated date-time string */
["RFC3339Date"]:unknown;
	/** Team member role */
["Role"]:Role;
	/** Sort order defines possible ordering of sorted outputs */
["SortOrder"]:SortOrder;
	/** Source upload info object */
["SourceUploadInfo"]: AliasType<{
	/** Source file name */
	filename?:true,
	/** List of headers that must be included in PUT request */
	headers?:ValueTypes["Header"],
	/** String with url used in PUT request */
	putUrl?:true
		__typename?: true
}>;
	["Subscription"]: AliasType<{
	/** Cancel subscription URL */
	cancelURL?:true,
	/** Subscription expiration date */
	expiration?:true,
	/** Number of seats in subscription */
	quantity?:true,
	/** List of seats in subscription */
	seats?:ValueTypes["UserConnection"],
	/** Status of subscription */
	status?:true,
	/** Subscription unique id */
	subscriptionID?:true,
	/** Subscription unique id */
	subscriptionPlanID?:true,
	/** Update subscription URL */
	updateURL?:true
		__typename?: true
}>;
	["SubscriptionConnection"]: AliasType<{
	/** Current conenction page info */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of subscriptions in connection */
	subscriptions?:ValueTypes["Subscription"]
		__typename?: true
}>;
	/** Team object */
["Team"]: AliasType<{
	/** Unique team id */
	id?:true,
member?: [{	username:string},ValueTypes["Member"]],
members?: [{	last?:string,	limit?:number},ValueTypes["MemberConnection"]],
	/** Team name */
	name?:true,
	/** Team's namespace */
	namespace?:ValueTypes["Namespace"]
		__typename?: true
}>;
	/** Teams connection */
["TeamConnection"]: AliasType<{
	/** Pagination info used in next fetch */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of teams returned by current page in connection */
	teams?:ValueTypes["Team"]
		__typename?: true
}>;
	/** Team operations */
["TeamOps"]: AliasType<{
addMember?: [{	username:string,	role:ValueTypes["Role"]},ValueTypes["Member"]],
createProject?: [{	name:string,	public?:boolean},ValueTypes["Project"]],
	/** Delete team */
	delete?:true,
	/** Unique team id */
	id?:true,
member?: [{	username:string},ValueTypes["MemberOps"]],
members?: [{	last?:string,	limit?:number},ValueTypes["MemberConnection"]],
	/** Team name */
	name?:true,
	/** Team's namespace */
	namespace?:ValueTypes["Namespace"],
project?: [{	id:string},ValueTypes["ProjectOps"]]
		__typename?: true
}>;
	/** Update project payload */
["UpdateProject"]: {
	/** Set project visiblity */
	public?:boolean,
	/** ID of project to be updated */
	project?:string,
	/** New description for project */
	description?:string,
	/** List of tags for project */
	tags?:string[]
};
	/** Editor user */
["User"]: AliasType<{
	/** User's account type */
	accountType?:true,
	/** Unique user id */
	id?:true,
	/** User's namespace */
	namespace?:ValueTypes["Namespace"],
	/** User's subscriptions */
	subscriptions?:ValueTypes["SubscriptionConnection"],
	/** Unique username */
	username?:true
		__typename?: true
}>;
	["UserConnection"]: AliasType<{
	/** Current connection page info */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of projects in connection */
	users?:ValueTypes["User"]
		__typename?: true
}>;
	/** Vat information of a user */
["VatInput"]: {
	/** Vat company post code address. */
	postCode?:string,
	/** Vat number */
	number?:string,
	/** Vat company name */
	companyName?:string,
	/** Vat company street address */
	street?:string,
	/** Vat company city address */
	city?:string,
	/** Vat company state address. Optional. */
	state?:string,
	/** Vat company country address. */
	country?:string
}
  }

export type PartialObjects = {
    /** Defines user's account type */
["AccountType"]:AccountType,
	["ChangeSubscriptionInput"]: {
	subscriptionID:number,
	subscriptionPlanID?:number
},
	/** Checkout data needed to begin payment process */
["CheckoutDataInput"]: {
	/** Quantity of subscriptions that user wants */
	quantity?:number,
	/** Customer data */
	customer?:PartialObjects["CustomerInput"],
	/** Vat data */
	vat?:PartialObjects["VatInput"],
	/** Optional discount coupon */
	coupon?:string,
	/** URL to which user should be redirected after successful transaction */
	successURL?:string,
	/** URL to which user should be redirected after failed transaction */
	cancelURL?:string,
	/** An id of a chosen subscription plan */
	planID:string
},
	/** Customer data for checkout information */
["CustomerInput"]: {
	/** User's email address */
	email?:string,
	/** User's country */
	country?:string,
	/** User's post code */
	postCode?:string,
	/** Must be true for marketing to be allowed */
	marketingConsent?:boolean
},
	/** Amount is a number that gives precise representation of real numbers */
["Decimal"]:any,
	/** Endpoint returnes a full path to the project without host */
["Endpoint"]: {
		__typename?: "Endpoint";
			/** Full project uri without host */
	uri?:string
	},
	/** A source object */
["FakerSource"]: {
		__typename?: "FakerSource";
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
		__typename?: "FakerSourceConnection";
			/** Connection pageInfo */
	pageInfo?:PartialObjects["PageInfo"],
			/** List of sources returned by connection */
	sources?:PartialObjects["FakerSource"][]
	},
	["FileServerCredentials"]:any,
	/** Request header */
["Header"]: {
		__typename?: "Header";
			/** Header name */
	key?:string,
			/** Header value */
	value?:string
	},
	/** Team member */
["Member"]: {
		__typename?: "Member";
			/** Member email */
	email?:string,
			/** Member role */
	role?:PartialObjects["Role"],
			/** Member username */
	username?:string
	},
	/** Paginated members list */
["MemberConnection"]: {
		__typename?: "MemberConnection";
			/** List of members in this connection */
	members?:PartialObjects["Member"][],
			/** pageInfo for member connection */
	pageInfo?:PartialObjects["PageInfo"]
	},
	/** Team member ops */
["MemberOps"]: {
		__typename?: "MemberOps";
			/** Boolean object node */
	delete?:boolean,
			/** Boolean object node */
	update?:boolean
	},
	["Mutation"]: {
		__typename?: "Mutation";
			/** Changes subscription settings for user */
	changeSubscription?:boolean,
			/** Create new user project

public if true project is public

name is project name */
	createProject?:PartialObjects["Project"],
			/** Create new team */
	createTeam?:PartialObjects["TeamOps"],
			/** Create new user

namespace name for a user

public is user namespace public */
	createUser?:PartialObjects["User"],
			/** deploy project to faker */
	deployToFaker?:boolean,
			/** Remove project by id */
	removeProject?:boolean,
			/** type object node */
	team?:PartialObjects["TeamOps"],
			/** Modify project */
	updateProject?:boolean,
			/** Add sources to the project */
	updateSources?:(PartialObjects["SourceUploadInfo"] | undefined)[]
	},
	/** Namespace is a root object containing projects belonging
to a team or user */
["Namespace"]: {
		__typename?: "Namespace";
			/** Return project by name from namespace */
	project?:PartialObjects["Project"],
			/** Returns a project connection object which contains a projects belonging to namespace

last is a string returned by previous call to Namespace.projects

limit sets a limit on how many objects can be returned */
	projects?:PartialObjects["ProjectConnection"],
			/** True if namespace is public */
	public?:boolean,
			/** Namespace part of the slug */
	slug?:string
	},
	/** New source payload */
["NewSource"]: {
	/** source file name */
	filename?:string,
	/** Length of source in bytes */
	contentLength?:number,
	/** Source mime type */
	contentType?:string,
	/** Source checksum */
	checksum?:string
},
	/** PageInfo contains information about connection page */
["PageInfo"]: {
		__typename?: "PageInfo";
			/** last element in connection */
	last?:string,
			/** limit set while quering */
	limit?:number,
			/** if next is false then client recieved all available data */
	next?:boolean
	},
	["Payment"]: {
		__typename?: "Payment";
			/** Amount paid */
	amount?:PartialObjects["Decimal"],
			/** Currency in which payment was made */
	currency?:string,
			/** Date indicates a when the payment was made */
	date?:PartialObjects["PaymentDate"],
			/** URL from which user can download invoice */
	receiptURL?:string,
			/** ID of subscription for which payment was made */
	subscriptionID?:number
	},
	/** PaymentDate is a string in a format 'YYYY-MM-DD' */
["PaymentDate"]:any,
	/** Project type */
["Project"]: {
		__typename?: "Project";
			/** Return creation time stamp of a project */
	createdAt?:PartialObjects["RFC3339Date"],
			/** Project description */
	description?:string,
			/** Is project enabled */
	enabled?:boolean,
			/** Project endpoint contains a slug under which project can be reached

For example https://app.graphqleditor.com/{endpoint.uri}/ */
	endpoint?:PartialObjects["Endpoint"],
			/** Unique project id */
	id?:string,
			/** Is project mocked by faker backend */
	mocked?:boolean,
			/** Project name */
	name?:string,
			/** Project owner

Can be null if project belongs to a team */
	owner?:PartialObjects["User"],
			/** True if project is public */
	public?:boolean,
			/** Project part of the slug */
	slug?:string,
			/** Returns a connection object with source files in project

last is a string returned by previous call to Project.sources

limit sets a limit on how many objects can be returned */
	sources?:PartialObjects["FakerSourceConnection"],
			/** Project tags */
	tags?:string[],
			/** Team to which project belongs

Can be null if project belongs to a user */
	team?:PartialObjects["Team"]
	},
	/** Project connection object

Used with paginated listing of projects */
["ProjectConnection"]: {
		__typename?: "ProjectConnection";
			/** Current connection page info */
	pageInfo?:PartialObjects["PageInfo"],
			/** List of projects in connection */
	projects?:PartialObjects["Project"][]
	},
	/** type object node */
["ProjectOps"]: {
		__typename?: "ProjectOps";
			/** Boolean object node */
	delete?:boolean,
			/** deploy project to faker */
	deployToFaker?:boolean,
			/** Boolean object node */
	update?:boolean
	},
	/** ProjectsSortInput defines how projects from listProjects should be sorted. */
["ProjectsSortInput"]: {
	/** Sort by tag */
	tags?:PartialObjects["SortOrder"],
	/** Sorts projects by team.

Sort behaviour for projects by team is implemenation depednant. */
	team?:PartialObjects["SortOrder"],
	/** Sort projects by creation date */
	createdAt?:PartialObjects["SortOrder"],
	/** Sort by name */
	name?:PartialObjects["SortOrder"],
	/** Sort by id */
	id?:PartialObjects["SortOrder"],
	/** Sort by owner */
	owner?:PartialObjects["SortOrder"],
	/** Sort by visisbility */
	public?:PartialObjects["SortOrder"],
	/** Sort by slug */
	slug?:PartialObjects["SortOrder"]
},
	/** Root query type */
["Query"]: {
		__typename?: "Query";
			/** Data needed by the current user to start payment flow */
	checkoutData?:string,
			/** Returns credentials to file server. If project ID is not provided returns a 
credentials that grants access to all projects owned by user, otherwise creates a
credentials that grants access to one project only if the project is public or
belongs to a user. */
	fileServerCredentials?:PartialObjects["FileServerCredentials"],
			/** Returns a project connection

query is a regular expresion matched agains project slug

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjects?:PartialObjects["ProjectConnection"],
			/** Find projects which contain tag

tag is a string

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjectsByTag?:PartialObjects["ProjectConnection"],
			/** Return namespace matching slug */
	getNamespace?:PartialObjects["Namespace"],
			/** Return project by id */
	getProject?:PartialObjects["Project"],
			/** Return team by name */
	getTeam?:PartialObjects["Team"],
			/** Return user by name */
	getUser?:PartialObjects["User"],
			/** Returns a project connection

If owned is true, returns only project belonging to currently logged user

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	listProjects?:PartialObjects["ProjectConnection"],
			/** List of current user teams */
	myTeams?:PartialObjects["TeamConnection"],
			/** List user payments */
	payments?:(PartialObjects["Payment"] | undefined)[]
	},
	/** RFC3339Date is a RFC3339 formated date-time string */
["RFC3339Date"]:any,
	/** Team member role */
["Role"]:Role,
	/** Sort order defines possible ordering of sorted outputs */
["SortOrder"]:SortOrder,
	/** Source upload info object */
["SourceUploadInfo"]: {
		__typename?: "SourceUploadInfo";
			/** Source file name */
	filename?:string,
			/** List of headers that must be included in PUT request */
	headers?:(PartialObjects["Header"] | undefined)[],
			/** String with url used in PUT request */
	putUrl?:string
	},
	["Subscription"]: {
		__typename?: "Subscription";
			/** Cancel subscription URL */
	cancelURL?:string,
			/** Subscription expiration date */
	expiration?:string,
			/** Number of seats in subscription */
	quantity?:number,
			/** List of seats in subscription */
	seats?:PartialObjects["UserConnection"],
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
		__typename?: "SubscriptionConnection";
			/** Current conenction page info */
	pageInfo?:PartialObjects["PageInfo"],
			/** List of subscriptions in connection */
	subscriptions?:PartialObjects["Subscription"][]
	},
	/** Team object */
["Team"]: {
		__typename?: "Team";
			/** Unique team id */
	id?:string,
			/** type object node */
	member?:PartialObjects["Member"],
			/** Paginated list of members in team */
	members?:PartialObjects["MemberConnection"],
			/** Team name */
	name?:string,
			/** Team's namespace */
	namespace?:PartialObjects["Namespace"]
	},
	/** Teams connection */
["TeamConnection"]: {
		__typename?: "TeamConnection";
			/** Pagination info used in next fetch */
	pageInfo?:PartialObjects["PageInfo"],
			/** List of teams returned by current page in connection */
	teams?:PartialObjects["Team"][]
	},
	/** Team operations */
["TeamOps"]: {
		__typename?: "TeamOps";
			/** Add member to the team */
	addMember?:PartialObjects["Member"],
			/** Create new team project */
	createProject?:PartialObjects["Project"],
			/** Delete team */
	delete?:boolean,
			/** Unique team id */
	id?:string,
			/** type object node */
	member?:PartialObjects["MemberOps"],
			/** Paginated list of members in team */
	members?:PartialObjects["MemberConnection"],
			/** Team name */
	name?:string,
			/** Team's namespace */
	namespace?:PartialObjects["Namespace"],
			/** type object node */
	project?:PartialObjects["ProjectOps"]
	},
	/** Update project payload */
["UpdateProject"]: {
	/** Set project visiblity */
	public?:boolean,
	/** ID of project to be updated */
	project?:string,
	/** New description for project */
	description?:string,
	/** List of tags for project */
	tags?:string[]
},
	/** Editor user */
["User"]: {
		__typename?: "User";
			/** User's account type */
	accountType?:PartialObjects["AccountType"],
			/** Unique user id */
	id?:string,
			/** User's namespace */
	namespace?:PartialObjects["Namespace"],
			/** User's subscriptions */
	subscriptions?:PartialObjects["SubscriptionConnection"],
			/** Unique username */
	username?:string
	},
	["UserConnection"]: {
		__typename?: "UserConnection";
			/** Current connection page info */
	pageInfo?:PartialObjects["PageInfo"],
			/** List of projects in connection */
	users?:PartialObjects["User"][]
	},
	/** Vat information of a user */
["VatInput"]: {
	/** Vat company post code address. */
	postCode?:string,
	/** Vat number */
	number?:string,
	/** Vat company name */
	companyName?:string,
	/** Vat company street address */
	street?:string,
	/** Vat company city address */
	city?:string,
	/** Vat company state address. Optional. */
	state?:string,
	/** Vat company country address. */
	country?:string
}
  }

/** Defines user's account type */
export enum AccountType {
	FREE = "FREE",
	PREMIUM = "PREMIUM"
}

export type ChangeSubscriptionInput = {
		subscriptionID:number,
	subscriptionPlanID?:number
}

/** Checkout data needed to begin payment process */
export type CheckoutDataInput = {
		/** Quantity of subscriptions that user wants */
	quantity?:number,
	/** Customer data */
	customer?:CustomerInput,
	/** Vat data */
	vat?:VatInput,
	/** Optional discount coupon */
	coupon?:string,
	/** URL to which user should be redirected after successful transaction */
	successURL?:string,
	/** URL to which user should be redirected after failed transaction */
	cancelURL?:string,
	/** An id of a chosen subscription plan */
	planID:string
}

/** Customer data for checkout information */
export type CustomerInput = {
		/** User's email address */
	email?:string,
	/** User's country */
	country?:string,
	/** User's post code */
	postCode?:string,
	/** Must be true for marketing to be allowed */
	marketingConsent?:boolean
}

/** Amount is a number that gives precise representation of real numbers */
export type Decimal = any

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

export type FileServerCredentials = any

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
	update?:boolean
}

export type Mutation = {
	__typename?: "Mutation",
	/** Changes subscription settings for user */
	changeSubscription?:boolean,
	/** Create new user project

public if true project is public

name is project name */
	createProject:Project,
	/** Create new team */
	createTeam?:TeamOps,
	/** Create new user

namespace name for a user

public is user namespace public */
	createUser:User,
	/** deploy project to faker */
	deployToFaker?:boolean,
	/** Remove project by id */
	removeProject?:boolean,
	/** type object node */
	team?:TeamOps,
	/** Modify project */
	updateProject?:boolean,
	/** Add sources to the project */
	updateSources?:(SourceUploadInfo | undefined)[]
}

/** Namespace is a root object containing projects belonging
to a team or user */
export type Namespace = {
	__typename?: "Namespace",
	/** Return project by name from namespace */
	project?:Project,
	/** Returns a project connection object which contains a projects belonging to namespace

last is a string returned by previous call to Namespace.projects

limit sets a limit on how many objects can be returned */
	projects?:ProjectConnection,
	/** True if namespace is public */
	public?:boolean,
	/** Namespace part of the slug */
	slug?:string
}

/** New source payload */
export type NewSource = {
		/** source file name */
	filename?:string,
	/** Length of source in bytes */
	contentLength?:number,
	/** Source mime type */
	contentType?:string,
	/** Source checksum */
	checksum?:string
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

export type Payment = {
	__typename?: "Payment",
	/** Amount paid */
	amount?:Decimal,
	/** Currency in which payment was made */
	currency?:string,
	/** Date indicates a when the payment was made */
	date?:PaymentDate,
	/** URL from which user can download invoice */
	receiptURL?:string,
	/** ID of subscription for which payment was made */
	subscriptionID?:number
}

/** PaymentDate is a string in a format 'YYYY-MM-DD' */
export type PaymentDate = any

/** Project type */
export type Project = {
	__typename?: "Project",
	/** Return creation time stamp of a project */
	createdAt?:RFC3339Date,
	/** Project description */
	description?:string,
	/** Is project enabled */
	enabled?:boolean,
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
	sources?:FakerSourceConnection,
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
	update?:boolean
}

/** ProjectsSortInput defines how projects from listProjects should be sorted. */
export type ProjectsSortInput = {
		/** Sort by tag */
	tags?:SortOrder,
	/** Sorts projects by team.

Sort behaviour for projects by team is implemenation depednant. */
	team?:SortOrder,
	/** Sort projects by creation date */
	createdAt?:SortOrder,
	/** Sort by name */
	name?:SortOrder,
	/** Sort by id */
	id?:SortOrder,
	/** Sort by owner */
	owner?:SortOrder,
	/** Sort by visisbility */
	public?:SortOrder,
	/** Sort by slug */
	slug?:SortOrder
}

/** Root query type */
export type Query = {
	__typename?: "Query",
	/** Data needed by the current user to start payment flow */
	checkoutData?:string,
	/** Returns credentials to file server. If project ID is not provided returns a 
credentials that grants access to all projects owned by user, otherwise creates a
credentials that grants access to one project only if the project is public or
belongs to a user. */
	fileServerCredentials?:FileServerCredentials,
	/** Returns a project connection

query is a regular expresion matched agains project slug

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjects?:ProjectConnection,
	/** Find projects which contain tag

tag is a string

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjectsByTag?:ProjectConnection,
	/** Return namespace matching slug */
	getNamespace?:Namespace,
	/** Return project by id */
	getProject?:Project,
	/** Return team by name */
	getTeam?:Team,
	/** Return user by name */
	getUser?:User,
	/** Returns a project connection

If owned is true, returns only project belonging to currently logged user

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	listProjects?:ProjectConnection,
	/** List of current user teams */
	myTeams?:TeamConnection,
	/** List user payments */
	payments?:(Payment | undefined)[]
}

/** RFC3339Date is a RFC3339 formated date-time string */
export type RFC3339Date = any

/** Team member role */
export enum Role {
	EDITOR = "EDITOR",
	VIEWER = "VIEWER",
	CONTRIBUTOR = "CONTRIBUTOR",
	OWNER = "OWNER",
	ADMIN = "ADMIN"
}

/** Sort order defines possible ordering of sorted outputs */
export enum SortOrder {
	Descending = "Descending",
	Ascending = "Ascending"
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
	member?:Member,
	/** Paginated list of members in team */
	members?:MemberConnection,
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
	addMember?:Member,
	/** Create new team project */
	createProject?:Project,
	/** Delete team */
	delete?:boolean,
	/** Unique team id */
	id?:string,
	/** type object node */
	member?:MemberOps,
	/** Paginated list of members in team */
	members?:MemberConnection,
	/** Team name */
	name?:string,
	/** Team's namespace */
	namespace?:Namespace,
	/** type object node */
	project?:ProjectOps
}

/** Update project payload */
export type UpdateProject = {
		/** Set project visiblity */
	public?:boolean,
	/** ID of project to be updated */
	project?:string,
	/** New description for project */
	description?:string,
	/** List of tags for project */
	tags?:string[]
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

/** Vat information of a user */
export type VatInput = {
		/** Vat company post code address. */
	postCode?:string,
	/** Vat number */
	number?:string,
	/** Vat company name */
	companyName?:string,
	/** Vat company street address */
	street?:string,
	/** Vat company city address */
	city?:string,
	/** Vat company state address. Optional. */
	state?:string,
	/** Vat company country address. */
	country?:string
}

export const AllTypesProps: Record<string,any> = {
	AccountType: "enum",
	ChangeSubscriptionInput:{
		subscriptionID:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		subscriptionPlanID:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CheckoutDataInput:{
		quantity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		customer:{
			type:"CustomerInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		vat:{
			type:"VatInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		coupon:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		successURL:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		cancelURL:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		planID:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CustomerInput:{
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		country:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		postCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		marketingConsent:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Decimal: "String",
	FileServerCredentials: "String",
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
		changeSubscription:{
			in:{
				type:"ChangeSubscriptionInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
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
	},
	PaymentDate: "String",
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
	ProjectsSortInput:{
		tags:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		team:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		public:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Query:{
		checkoutData:{
			data:{
				type:"CheckoutDataInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		fileServerCredentials:{
			project:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		findProjects:{
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
			query:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
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
			sort:{
				type:"ProjectsSortInput",
				array:true,
				arrayRequired:false,
				required:false
			},
			owned:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
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
	RFC3339Date: "String",
	Role: "enum",
	SortOrder: "enum",
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
	VatInput:{
		postCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		number:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		companyName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		street:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		city:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		state:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		country:{
			type:"String",
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
		changeSubscription:"Boolean",
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
	Payment:{
		amount:"Decimal",
		currency:"String",
		date:"PaymentDate",
		receiptURL:"String",
		subscriptionID:"Int"
	},
	Project:{
		createdAt:"RFC3339Date",
		description:"String",
		enabled:"Boolean",
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
		checkoutData:"String",
		fileServerCredentials:"FileServerCredentials",
		findProjects:"ProjectConnection",
		findProjectsByTag:"ProjectConnection",
		getNamespace:"Namespace",
		getProject:"Project",
		getTeam:"Team",
		getUser:"User",
		listProjects:"ProjectConnection",
		myTeams:"TeamConnection",
		payments:"Payment"
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

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
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


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
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
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
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

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*ZEUS_VAR\w*\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
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
) => fn(queryConstruct(t, tName)(o), variables);

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

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
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
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,
mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  

export const Gql = Chain('https://project-api.graphqleditor.com/graphql')