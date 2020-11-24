/* tslint:disable */
/* eslint-disable */

type ZEUS_INTERFACES = 
type ZEUS_UNIONS = 

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
	/** Must be true for marketing to be allowed */
	marketingConsent?:boolean,
	/** User's email address */
	email?:string,
	/** User's country */
	country?:string,
	/** User's post code */
	postCode?:string
};
	/** Amount is a number that gives precise representation of real numbers */
["Decimal"]:unknown;
	/** Endpoint returnes a full path to the project without host */
["Endpoint"]: AliasType<{
	/** Full project uri without host */
	uri?:true,
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
	getUrl?:true,
		__typename?: true
}>;
	/** Connection object containing list of faker sources */
["FakerSourceConnection"]: AliasType<{
	/** Connection pageInfo */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of sources returned by connection */
	sources?:ValueTypes["FakerSource"],
		__typename?: true
}>;
	["FileServerCredentials"]:unknown;
	/** Request header */
["Header"]: AliasType<{
	/** Header name */
	key?:true,
	/** Header value */
	value?:true,
		__typename?: true
}>;
	/** Team member */
["Member"]: AliasType<{
	/** Member email */
	email?:true,
	/** Member role */
	role?:true,
	/** Member username */
	username?:true,
		__typename?: true
}>;
	/** Paginated members list */
["MemberConnection"]: AliasType<{
	/** List of members in this connection */
	members?:ValueTypes["Member"],
	/** pageInfo for member connection */
	pageInfo?:ValueTypes["PageInfo"],
		__typename?: true
}>;
	/** Team member ops */
["MemberOps"]: AliasType<{
	/** Boolean object node */
	delete?:true,
update?: [{	role?:ValueTypes["Role"]},true],
		__typename?: true
}>;
	["Mutation"]: AliasType<{
changeSubscription?: [{	in:ValueTypes["ChangeSubscriptionInput"]},true],
createProject?: [{	public?:boolean,	name:string},ValueTypes["Project"]],
createTeam?: [{	name:string,	namespace:string},ValueTypes["TeamOps"]],
createUser?: [{	public?:boolean,	namespace:string},ValueTypes["User"]],
deployToFaker?: [{	id:string},true],
removeProject?: [{	project:string},true],
sync?: [{	source:string,	target:string},true],
team?: [{	id:string},ValueTypes["TeamOps"]],
updateProject?: [{	in?:ValueTypes["UpdateProject"]},true],
updateSources?: [{	project:string,	sources?:ValueTypes["NewSource"][]},ValueTypes["SourceUploadInfo"]],
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
	slug?:true,
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
	next?:true,
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
	subscriptionID?:true,
		__typename?: true
}>;
	/** PaymentDate is a string in a format 'YYYY-MM-DD' */
["PaymentDate"]:unknown;
	/** PredictCheckout represents payment prediction for checkout data */
["PredictCheckout"]: AliasType<{
	/** Predicted checkout price */
	price?:true,
	/** Predicted number of trial days */
	trialDays?:true,
		__typename?: true
}>;
	/** Checkout data needed to begin payment process */
["PredictCheckoutInput"]: {
	/** An id of a chosen subscription plan */
	planID:string,
	/** Quantity of subscriptions that user wants */
	quantity?:number,
	/** Optional discount coupon */
	coupon?:string
};
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
	team?:ValueTypes["Team"],
		__typename?: true
}>;
	/** Project connection object

Used with paginated listing of projects */
["ProjectConnection"]: AliasType<{
	/** Current connection page info */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of projects in connection */
	projects?:ValueTypes["Project"],
		__typename?: true
}>;
	/** type object node */
["ProjectOps"]: AliasType<{
	/** Boolean object node */
	delete?:true,
	/** deploy project to faker */
	deployToFaker?:true,
update?: [{	in?:ValueTypes["UpdateProject"]},true],
		__typename?: true
}>;
	/** ProjectsSortInput defines how projects from listProjects should be sorted. */
["ProjectsSortInput"]: {
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
	slug?:ValueTypes["SortOrder"],
	/** Sort by tag */
	tags?:ValueTypes["SortOrder"]
};
	/** Root query type */
["Query"]: AliasType<{
checkoutData?: [{	data:ValueTypes["CheckoutDataInput"]},true],
fileServerCredentials?: [{	project?:string},true],
findProjects?: [{	query:string,	last?:string,	limit?:number},ValueTypes["ProjectConnection"]],
findProjectsByTag?: [{	last?:string,	limit?:number,	tag:string},ValueTypes["ProjectConnection"]],
getNamespace?: [{	slug:string},ValueTypes["Namespace"]],
getProject?: [{	project:string},ValueTypes["Project"]],
getTeam?: [{	name:string},ValueTypes["Team"]],
getUser?: [{	username:string},ValueTypes["User"]],
listProjects?: [{	sort?:(ValueTypes["ProjectsSortInput"] | undefined)[],	owned?:boolean,	last?:string,	limit?:number},ValueTypes["ProjectConnection"]],
myTeams?: [{	last?:string,	limit?:number},ValueTypes["TeamConnection"]],
	/** List user payments */
	payments?:ValueTypes["Payment"],
predictCheckout?: [{	data:ValueTypes["PredictCheckoutInput"]},ValueTypes["PredictCheckout"]],
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
	putUrl?:true,
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
	/** Subscription plan unique id */
	subscriptionPlanID?:true,
	/** Update subscription URL */
	updateURL?:true,
		__typename?: true
}>;
	["SubscriptionConnection"]: AliasType<{
	/** Current conenction page info */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of subscriptions in connection */
	subscriptions?:ValueTypes["Subscription"],
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
	namespace?:ValueTypes["Namespace"],
		__typename?: true
}>;
	/** Teams connection */
["TeamConnection"]: AliasType<{
	/** Pagination info used in next fetch */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of teams returned by current page in connection */
	teams?:ValueTypes["Team"],
		__typename?: true
}>;
	/** Team operations */
["TeamOps"]: AliasType<{
addMember?: [{	loginCallback?:string,	username:string,	role:ValueTypes["Role"]},ValueTypes["Member"]],
createProject?: [{	public?:boolean,	name:string},ValueTypes["Project"]],
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
project?: [{	id:string},ValueTypes["ProjectOps"]],
		__typename?: true
}>;
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
	username?:true,
		__typename?: true
}>;
	["UserConnection"]: AliasType<{
	/** Current connection page info */
	pageInfo?:ValueTypes["PageInfo"],
	/** List of projects in connection */
	users?:ValueTypes["User"],
		__typename?: true
}>;
	/** Vat information of a user */
["VatInput"]: {
	/** Vat company city address */
	city?:string,
	/** Vat company state address. Optional. */
	state?:string,
	/** Vat company country address. */
	country?:string,
	/** Vat company post code address. */
	postCode?:string,
	/** Vat number */
	number?:string,
	/** Vat company name */
	companyName?:string,
	/** Vat company street address */
	street?:string
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
	/** Must be true for marketing to be allowed */
	marketingConsent?:boolean,
	/** User's email address */
	email?:string,
	/** User's country */
	country?:string,
	/** User's post code */
	postCode?:string
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
			/** Synhronises the target project with source. It overrides existing files
of target with files of sources. It does not remove files from target that do not
exist in source. */
	sync?:boolean,
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
	/** PredictCheckout represents payment prediction for checkout data */
["PredictCheckout"]: {
		__typename?: "PredictCheckout";
			/** Predicted checkout price */
	price?:number,
			/** Predicted number of trial days */
	trialDays?:number
	},
	/** Checkout data needed to begin payment process */
["PredictCheckoutInput"]: {
	/** An id of a chosen subscription plan */
	planID:string,
	/** Quantity of subscriptions that user wants */
	quantity?:number,
	/** Optional discount coupon */
	coupon?:string
},
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
	slug?:PartialObjects["SortOrder"],
	/** Sort by tag */
	tags?:PartialObjects["SortOrder"]
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
	payments?:(PartialObjects["Payment"] | undefined)[],
			/** Calculate checkout information */
	predictCheckout?:PartialObjects["PredictCheckout"]
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
			/** Subscription plan unique id */
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
	/** Vat company city address */
	city?:string,
	/** Vat company state address. Optional. */
	state?:string,
	/** Vat company country address. */
	country?:string,
	/** Vat company post code address. */
	postCode?:string,
	/** Vat number */
	number?:string,
	/** Vat company name */
	companyName?:string,
	/** Vat company street address */
	street?:string
}
  }

export type GraphQLTypes = {
    /** Defines user's account type */
["AccountType"]: AccountType;
	["ChangeSubscriptionInput"]: {
		subscriptionID:number,
	subscriptionPlanID?:number
};
	/** Checkout data needed to begin payment process */
["CheckoutDataInput"]: {
		/** Quantity of subscriptions that user wants */
	quantity?:number,
	/** Customer data */
	customer?:GraphQLTypes["CustomerInput"],
	/** Vat data */
	vat?:GraphQLTypes["VatInput"],
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
		/** Must be true for marketing to be allowed */
	marketingConsent?:boolean,
	/** User's email address */
	email?:string,
	/** User's country */
	country?:string,
	/** User's post code */
	postCode?:string
};
	/** Amount is a number that gives precise representation of real numbers */
["Decimal"]:any;
	/** Endpoint returnes a full path to the project without host */
["Endpoint"]: {
	__typename: "Endpoint",
	/** Full project uri without host */
	uri?:string
};
	/** A source object */
["FakerSource"]: {
	__typename: "FakerSource",
	/** File checksum */
	checksum?:string,
	contents?:string,
	/** Name of source file */
	filename?:string,
	/** Return an url by which source file can be accessed */
	getUrl?:string
};
	/** Connection object containing list of faker sources */
["FakerSourceConnection"]: {
	__typename: "FakerSourceConnection",
	/** Connection pageInfo */
	pageInfo:GraphQLTypes["PageInfo"],
	/** List of sources returned by connection */
	sources?:GraphQLTypes["FakerSource"][]
};
	["FileServerCredentials"]:any;
	/** Request header */
["Header"]: {
	__typename: "Header",
	/** Header name */
	key:string,
	/** Header value */
	value?:string
};
	/** Team member */
["Member"]: {
	__typename: "Member",
	/** Member email */
	email?:string,
	/** Member role */
	role?:GraphQLTypes["Role"],
	/** Member username */
	username?:string
};
	/** Paginated members list */
["MemberConnection"]: {
	__typename: "MemberConnection",
	/** List of members in this connection */
	members?:GraphQLTypes["Member"][],
	/** pageInfo for member connection */
	pageInfo:GraphQLTypes["PageInfo"]
};
	/** Team member ops */
["MemberOps"]: {
	__typename: "MemberOps",
	/** Boolean object node */
	delete?:boolean,
	/** Boolean object node */
	update?:boolean
};
	["Mutation"]: {
	__typename: "Mutation",
	/** Changes subscription settings for user */
	changeSubscription?:boolean,
	/** Create new user project

public if true project is public

name is project name */
	createProject:GraphQLTypes["Project"],
	/** Create new team */
	createTeam?:GraphQLTypes["TeamOps"],
	/** Create new user

namespace name for a user

public is user namespace public */
	createUser:GraphQLTypes["User"],
	/** deploy project to faker */
	deployToFaker?:boolean,
	/** Remove project by id */
	removeProject?:boolean,
	/** Synhronises the target project with source. It overrides existing files
of target with files of sources. It does not remove files from target that do not
exist in source. */
	sync?:boolean,
	/** type object node */
	team?:GraphQLTypes["TeamOps"],
	/** Modify project */
	updateProject?:boolean,
	/** Add sources to the project */
	updateSources?:(GraphQLTypes["SourceUploadInfo"] | undefined)[]
};
	/** Namespace is a root object containing projects belonging
to a team or user */
["Namespace"]: {
	__typename: "Namespace",
	/** Return project by name from namespace */
	project?:GraphQLTypes["Project"],
	/** Returns a project connection object which contains a projects belonging to namespace

last is a string returned by previous call to Namespace.projects

limit sets a limit on how many objects can be returned */
	projects?:GraphQLTypes["ProjectConnection"],
	/** True if namespace is public */
	public?:boolean,
	/** Namespace part of the slug */
	slug?:string
};
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
["PageInfo"]: {
	__typename: "PageInfo",
	/** last element in connection */
	last?:string,
	/** limit set while quering */
	limit?:number,
	/** if next is false then client recieved all available data */
	next?:boolean
};
	["Payment"]: {
	__typename: "Payment",
	/** Amount paid */
	amount?:GraphQLTypes["Decimal"],
	/** Currency in which payment was made */
	currency?:string,
	/** Date indicates a when the payment was made */
	date?:GraphQLTypes["PaymentDate"],
	/** URL from which user can download invoice */
	receiptURL?:string,
	/** ID of subscription for which payment was made */
	subscriptionID?:number
};
	/** PaymentDate is a string in a format 'YYYY-MM-DD' */
["PaymentDate"]:any;
	/** PredictCheckout represents payment prediction for checkout data */
["PredictCheckout"]: {
	__typename: "PredictCheckout",
	/** Predicted checkout price */
	price:number,
	/** Predicted number of trial days */
	trialDays?:number
};
	/** Checkout data needed to begin payment process */
["PredictCheckoutInput"]: {
		/** An id of a chosen subscription plan */
	planID:string,
	/** Quantity of subscriptions that user wants */
	quantity?:number,
	/** Optional discount coupon */
	coupon?:string
};
	/** Project type */
["Project"]: {
	__typename: "Project",
	/** Return creation time stamp of a project */
	createdAt?:GraphQLTypes["RFC3339Date"],
	/** Project description */
	description?:string,
	/** Is project enabled */
	enabled?:boolean,
	/** Project endpoint contains a slug under which project can be reached

For example https://app.graphqleditor.com/{endpoint.uri}/ */
	endpoint?:GraphQLTypes["Endpoint"],
	/** Unique project id */
	id:string,
	/** Is project mocked by faker backend */
	mocked?:boolean,
	/** Project name */
	name:string,
	/** Project owner

Can be null if project belongs to a team */
	owner?:GraphQLTypes["User"],
	/** True if project is public */
	public?:boolean,
	/** Project part of the slug */
	slug?:string,
	/** Returns a connection object with source files in project

last is a string returned by previous call to Project.sources

limit sets a limit on how many objects can be returned */
	sources?:GraphQLTypes["FakerSourceConnection"],
	/** Project tags */
	tags?:string[],
	/** Team to which project belongs

Can be null if project belongs to a user */
	team?:GraphQLTypes["Team"]
};
	/** Project connection object

Used with paginated listing of projects */
["ProjectConnection"]: {
	__typename: "ProjectConnection",
	/** Current connection page info */
	pageInfo:GraphQLTypes["PageInfo"],
	/** List of projects in connection */
	projects?:GraphQLTypes["Project"][]
};
	/** type object node */
["ProjectOps"]: {
	__typename: "ProjectOps",
	/** Boolean object node */
	delete?:boolean,
	/** deploy project to faker */
	deployToFaker?:boolean,
	/** Boolean object node */
	update?:boolean
};
	/** ProjectsSortInput defines how projects from listProjects should be sorted. */
["ProjectsSortInput"]: {
		/** Sorts projects by team.

Sort behaviour for projects by team is implemenation depednant. */
	team?:GraphQLTypes["SortOrder"],
	/** Sort projects by creation date */
	createdAt?:GraphQLTypes["SortOrder"],
	/** Sort by name */
	name?:GraphQLTypes["SortOrder"],
	/** Sort by id */
	id?:GraphQLTypes["SortOrder"],
	/** Sort by owner */
	owner?:GraphQLTypes["SortOrder"],
	/** Sort by visisbility */
	public?:GraphQLTypes["SortOrder"],
	/** Sort by slug */
	slug?:GraphQLTypes["SortOrder"],
	/** Sort by tag */
	tags?:GraphQLTypes["SortOrder"]
};
	/** Root query type */
["Query"]: {
	__typename: "Query",
	/** Data needed by the current user to start payment flow */
	checkoutData?:string,
	/** Returns credentials to file server. If project ID is not provided returns a 
credentials that grants access to all projects owned by user, otherwise creates a
credentials that grants access to one project only if the project is public or
belongs to a user. */
	fileServerCredentials?:GraphQLTypes["FileServerCredentials"],
	/** Returns a project connection

query is a regular expresion matched agains project slug

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjects?:GraphQLTypes["ProjectConnection"],
	/** Find projects which contain tag

tag is a string

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	findProjectsByTag?:GraphQLTypes["ProjectConnection"],
	/** Return namespace matching slug */
	getNamespace?:GraphQLTypes["Namespace"],
	/** Return project by id */
	getProject?:GraphQLTypes["Project"],
	/** Return team by name */
	getTeam?:GraphQLTypes["Team"],
	/** Return user by name */
	getUser?:GraphQLTypes["User"],
	/** Returns a project connection

If owned is true, returns only project belonging to currently logged user

last is an id of the last project returned by previous call

limit limits the number of returned projects */
	listProjects?:GraphQLTypes["ProjectConnection"],
	/** List of current user teams */
	myTeams?:GraphQLTypes["TeamConnection"],
	/** List user payments */
	payments?:(GraphQLTypes["Payment"] | undefined)[],
	/** Calculate checkout information */
	predictCheckout?:GraphQLTypes["PredictCheckout"]
};
	/** RFC3339Date is a RFC3339 formated date-time string */
["RFC3339Date"]:any;
	/** Team member role */
["Role"]: Role;
	/** Sort order defines possible ordering of sorted outputs */
["SortOrder"]: SortOrder;
	/** Source upload info object */
["SourceUploadInfo"]: {
	__typename: "SourceUploadInfo",
	/** Source file name */
	filename?:string,
	/** List of headers that must be included in PUT request */
	headers?:(GraphQLTypes["Header"] | undefined)[],
	/** String with url used in PUT request */
	putUrl:string
};
	["Subscription"]: {
	__typename: "Subscription",
	/** Cancel subscription URL */
	cancelURL?:string,
	/** Subscription expiration date */
	expiration?:string,
	/** Number of seats in subscription */
	quantity?:number,
	/** List of seats in subscription */
	seats?:GraphQLTypes["UserConnection"],
	/** Status of subscription */
	status?:string,
	/** Subscription unique id */
	subscriptionID?:number,
	/** Subscription plan unique id */
	subscriptionPlanID?:number,
	/** Update subscription URL */
	updateURL?:string
};
	["SubscriptionConnection"]: {
	__typename: "SubscriptionConnection",
	/** Current conenction page info */
	pageInfo:GraphQLTypes["PageInfo"],
	/** List of subscriptions in connection */
	subscriptions?:GraphQLTypes["Subscription"][]
};
	/** Team object */
["Team"]: {
	__typename: "Team",
	/** Unique team id */
	id?:string,
	/** type object node */
	member?:GraphQLTypes["Member"],
	/** Paginated list of members in team */
	members?:GraphQLTypes["MemberConnection"],
	/** Team name */
	name:string,
	/** Team's namespace */
	namespace:GraphQLTypes["Namespace"]
};
	/** Teams connection */
["TeamConnection"]: {
	__typename: "TeamConnection",
	/** Pagination info used in next fetch */
	pageInfo:GraphQLTypes["PageInfo"],
	/** List of teams returned by current page in connection */
	teams?:GraphQLTypes["Team"][]
};
	/** Team operations */
["TeamOps"]: {
	__typename: "TeamOps",
	/** Add member to the team */
	addMember?:GraphQLTypes["Member"],
	/** Create new team project */
	createProject?:GraphQLTypes["Project"],
	/** Delete team */
	delete?:boolean,
	/** Unique team id */
	id?:string,
	/** type object node */
	member?:GraphQLTypes["MemberOps"],
	/** Paginated list of members in team */
	members?:GraphQLTypes["MemberConnection"],
	/** Team name */
	name?:string,
	/** Team's namespace */
	namespace?:GraphQLTypes["Namespace"],
	/** type object node */
	project?:GraphQLTypes["ProjectOps"]
};
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
};
	/** Editor user */
["User"]: {
	__typename: "User",
	/** User's account type */
	accountType:GraphQLTypes["AccountType"],
	/** Unique user id */
	id?:string,
	/** User's namespace */
	namespace?:GraphQLTypes["Namespace"],
	/** User's subscriptions */
	subscriptions?:GraphQLTypes["SubscriptionConnection"],
	/** Unique username */
	username?:string
};
	["UserConnection"]: {
	__typename: "UserConnection",
	/** Current connection page info */
	pageInfo:GraphQLTypes["PageInfo"],
	/** List of projects in connection */
	users?:GraphQLTypes["User"][]
};
	/** Vat information of a user */
["VatInput"]: {
		/** Vat company city address */
	city?:string,
	/** Vat company state address. Optional. */
	state?:string,
	/** Vat company country address. */
	country?:string,
	/** Vat company post code address. */
	postCode?:string,
	/** Vat number */
	number?:string,
	/** Vat company name */
	companyName?:string,
	/** Vat company street address */
	street?:string
}
    }
/** Defines user's account type */
export enum AccountType {
	FREE = "FREE",
	PREMIUM = "PREMIUM"
}
/** Team member role */
export enum Role {
	OWNER = "OWNER",
	ADMIN = "ADMIN",
	EDITOR = "EDITOR",
	VIEWER = "VIEWER",
	CONTRIBUTOR = "CONTRIBUTOR"
}
/** Sort order defines possible ordering of sorted outputs */
export enum SortOrder {
	Ascending = "Ascending",
	Descending = "Descending"
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
		marketingConsent:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
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
			public:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			namespace:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
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
		sync:{
			source:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			target:{
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
	PredictCheckoutInput:{
		planID:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		quantity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		coupon:{
			type:"String",
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
	ProjectsSortInput:{
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
		},
		tags:{
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
			tag:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
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
		},
		predictCheckout:{
			data:{
				type:"PredictCheckoutInput",
				array:false,
				arrayRequired:false,
				required:true
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
			loginCallback:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
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
	},
	VatInput:{
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
		},
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
		sync:"Boolean",
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
	PredictCheckout:{
		price:"Float",
		trialDays:"Int"
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
		payments:"Payment",
		predictCheckout:"PredictCheckout"
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


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
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

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};
type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

type UnionTypes<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof DST]: DST[P] extends true ? never : IsArray<SRC[P], DST[P]>;
}[keyof DST];
type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? UnionTypes<SRC, DST> &
      {
        [P in keyof SubType<DST, true>]: SRC[P];
      }
  : {
      [P in keyof DST]: DST[P] extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
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
type CastToGraphQL<V, T> = (resultOfYourQuery: any) => <Z extends V>(o: Z | V) => InputType<T, Z>;
type SelectionFunction<V> = <T>(t: T | V) => T;
type fetchOptions = ArgsType<typeof fetch>;
type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;


export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
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
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
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
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
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
  traverseToSeekArrays([type], a);


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
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


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
  Y extends (props: {
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : never;
    source?: unknown;
  }) => Z extends keyof GraphQLTypes[T] ? Omit<GraphQLTypes[T][Z], '__typename'> : never
>(
  type: T,
  field: Z,
  fn: Y,
) => fn;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
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
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>,
mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  GraphQLTypes["Mutation"]
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  

export const Gql = Chain('https://project-api.graphqleditor.com/graphql')