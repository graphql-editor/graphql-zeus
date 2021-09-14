/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = GraphQLTypes["PageInterface"] | GraphQLTypes["AssetInterface"] | GraphQLTypes["EntryInterface"] | GraphQLTypes["TermInterface"] | GraphQLTypes["GlobalSetInterface"]
type ZEUS_UNIONS = GraphQLTypes["Sets_Content"]

export type ValueTypes = {
    ["CollectionTreeBranch"]: AliasType<{
	children?:ValueTypes["CollectionTreeBranch"],
	depth?:true,
	entry?:ValueTypes["EntryInterface"],
	page?:ValueTypes["EntryInterface"],
		__typename?: true
}>;
	["Entry_Articles_Articles"]: AliasType<{
	author?:ValueTypes["User"],
	collection?:ValueTypes["Collection"],
	content?:ValueTypes["Sets_Content"],
date?: [{	format?:string | null},true],
	edit_url?:true,
	id?:true,
last_modified?: [{	format?:string | null},true],
	locale?:true,
	parent?:ValueTypes["EntryInterface"],
	permalink?:true,
	private?:true,
	published?:true,
	site?:ValueTypes["Site"],
	slug?:true,
	status?:true,
	title?:true,
	uri?:true,
	url?:true,
		__typename?: true
}>;
	["Role"]: AliasType<{
	handle?:true,
	title?:true,
		__typename?: true
}>;
	["Query"]: AliasType<{
asset?: [{	container?:string | null,	id?:string | null,	path?:string | null},ValueTypes["AssetInterface"]],
assetContainer?: [{	handle?:string | null},ValueTypes["AssetContainer"]],
	assetContainers?:ValueTypes["AssetContainer"],
assets?: [{	container:string,	limit?:number | null,	page?:number | null,	sort?:(string | undefined | null)[]},ValueTypes["AssetInterfacePagination"]],
collection?: [{	handle?:string | null},ValueTypes["Collection"]],
	collections?:ValueTypes["Collection"],
entries?: [{	sort?:(string | undefined | null)[],	collection?:(string | undefined | null)[],	filter?:ValueTypes["JsonArgument"] | null,	limit?:number | null,	page?:number | null},ValueTypes["EntryInterfacePagination"]],
entry?: [{	uri?:string | null,	collection?:string | null,	id?:string | null,	site?:string | null,	slug?:string | null},ValueTypes["EntryInterface"]],
globalSet?: [{	handle?:string | null,	site?:string | null},ValueTypes["GlobalSetInterface"]],
	globalSets?:ValueTypes["GlobalSetInterface"],
nav?: [{	handle?:string | null},ValueTypes["Navigation"]],
	navs?:ValueTypes["Navigation"],
	ping?:true,
	taxonomies?:ValueTypes["Taxonomy"],
taxonomy?: [{	handle?:string | null},ValueTypes["Taxonomy"]],
term?: [{	id?:string | null},ValueTypes["TermInterface"]],
terms?: [{	filter?:ValueTypes["JsonArgument"] | null,	limit?:number | null,	page?:number | null,	sort?:(string | undefined | null)[],	taxonomy?:(string | undefined | null)[]},ValueTypes["TermInterfacePagination"]],
		__typename?: true
}>;
	["Entry_Authors_Authors"]: AliasType<{
	collection?:ValueTypes["Collection"],
content?: [{	/** How the value should be formatted. Either "markdown" or "html". Defaults to "html". */
	format?:string | null},true],
date?: [{	format?:string | null},true],
	edit_url?:true,
	id?:true,
last_modified?: [{	format?:string | null},true],
	locale?:true,
	parent?:ValueTypes["EntryInterface"],
	permalink?:true,
	private?:true,
	published?:true,
	site?:ValueTypes["Site"],
	slug?:true,
	status?:true,
	title?:true,
	uri?:true,
	url?:true,
		__typename?: true
}>;
	["Site"]: AliasType<{
	handle?:true,
	locale?:true,
	name?:true,
	short_locale?:true,
	url?:true,
		__typename?: true
}>;
	["AssetContainer"]: AliasType<{
	handle?:true,
	title?:true,
		__typename?: true
}>;
	["Set_Content_Vimeo"]: AliasType<{
	type?:true,
	url?:true,
		__typename?: true
}>;
	["PageInterface"]:AliasType<{
		id?:true,
	permalink?:true,
	title?:true,
	url?:true,
	entry_id?:true;
		
		__typename?: true
}>;
	["AssetInterface"]:AliasType<{
		size?:true,
	size_megabytes?:true,
	orientation?:true,
	size_b?:true,
	url?:true,
	is_video?:true,
	permalink?:true,
	size_mb?:true,
	size_kilobytes?:true,
	ratio?:true,
	last_modified?:true,
	edit_url?:true,
	extension?:true,
	path?:true,
	size_bytes?:true,
	width?:true,
	folder?:true,
	size_gb?:true,
	size_gigabytes?:true,
	height?:true,
	is_audio?:true,
	blueprint?:true,
	size_kb?:true,
	focus_css?:true,
	container?:ValueTypes["AssetContainer"],
	id?:true,
	is_image?:true;
		['...on Asset_Images']?: Omit<ValueTypes["Asset_Images"],keyof ValueTypes["AssetInterface"]>;
		['...on Asset_Assets']?: Omit<ValueTypes["Asset_Assets"],keyof ValueTypes["AssetInterface"]>;
		__typename?: true
}>;
	["UserGroup"]: AliasType<{
	handle?:true,
	title?:true,
		__typename?: true
}>;
	["Entry_Issues_Issues"]: AliasType<{
	collection?:ValueTypes["Collection"],
content?: [{	/** How the value should be formatted. Either "markdown" or "html". Defaults to "html". */
	format?:string | null},true],
date?: [{	format?:string | null},true],
	edit_url?:true,
	id?:true,
last_modified?: [{	format?:string | null},true],
	locale?:true,
	parent?:ValueTypes["EntryInterface"],
	permalink?:true,
	private?:true,
	published?:true,
	site?:ValueTypes["Site"],
	slug?:true,
	status?:true,
	title?:true,
	uri?:true,
	url?:true,
		__typename?: true
}>;
	["CollectionStructure"]: AliasType<{
	expects_root?:true,
	handle?:true,
	max_depth?:true,
	title?:true,
tree?: [{	site?:string | null},ValueTypes["CollectionTreeBranch"]],
		__typename?: true
}>;
	["Taxonomy"]: AliasType<{
	handle?:true,
	title?:true,
		__typename?: true
}>;
	["EntryInterface"]:AliasType<{
		published?:true,
	status?:true,
	edit_url?:true,
	uri?:true,
	collection?:ValueTypes["Collection"],
	site?:ValueTypes["Site"],
	title?:true,
date?: [{	format?:string | null},true],
	locale?:true,
last_modified?: [{	format?:string | null},true],
	id?:true,
	parent?:ValueTypes["EntryInterface"],
	url?:true,
	permalink?:true,
	private?:true,
	slug?:true;
		['...on Entry_Articles_Articles']?: Omit<ValueTypes["Entry_Articles_Articles"],keyof ValueTypes["EntryInterface"]>;
		['...on Entry_Authors_Authors']?: Omit<ValueTypes["Entry_Authors_Authors"],keyof ValueTypes["EntryInterface"]>;
		['...on Entry_Issues_Issues']?: Omit<ValueTypes["Entry_Issues_Issues"],keyof ValueTypes["EntryInterface"]>;
		__typename?: true
}>;
	["NavTreeBranch"]: AliasType<{
	children?:ValueTypes["NavTreeBranch"],
	depth?:true,
	page?:ValueTypes["PageInterface"],
		__typename?: true
}>;
	["AssetInterfacePagination"]: AliasType<{
	/** Current page of the cursor */
	current_page?:true,
	/** List of items on the current page */
	data?:ValueTypes["AssetInterface"],
	/** Number of the first item returned */
	from?:true,
	/** Determines if cursor has more pages after the current page */
	has_more_pages?:true,
	/** The last page (number of pages) */
	last_page?:true,
	/** Number of items returned per page */
	per_page?:true,
	/** Number of the last item returned */
	to?:true,
	/** Number of total items selected by the query */
	total?:true,
		__typename?: true
}>;
	["TermInterface"]:AliasType<{
		uri?:true,
	url?:true,
	edit_url?:true,
	id?:true,
	permalink?:true,
	slug?:true,
	taxonomy?:ValueTypes["Taxonomy"],
	title?:true;
		
		__typename?: true
}>;
	["Collection"]: AliasType<{
	handle?:true,
	structure?:ValueTypes["CollectionStructure"],
	title?:true,
		__typename?: true
}>;
	["TermInterfacePagination"]: AliasType<{
	/** Current page of the cursor */
	current_page?:true,
	/** List of items on the current page */
	data?:ValueTypes["TermInterface"],
	/** Number of the first item returned */
	from?:true,
	/** Determines if cursor has more pages after the current page */
	has_more_pages?:true,
	/** The last page (number of pages) */
	last_page?:true,
	/** Number of items returned per page */
	per_page?:true,
	/** Number of the last item returned */
	to?:true,
	/** Number of total items selected by the query */
	total?:true,
		__typename?: true
}>;
	["User"]: AliasType<{
	avatar?:ValueTypes["AssetInterface"],
	edit_url?:true,
	email?:true,
	groups?:ValueTypes["UserGroup"],
	id?:true,
	initials?:true,
	name?:true,
	roles?:ValueTypes["Role"],
		__typename?: true
}>;
	["GlobalSetInterface"]:AliasType<{
		title?:true,
	handle?:true,
	site?:ValueTypes["Site"];
		
		__typename?: true
}>;
	["EntryInterfacePagination"]: AliasType<{
	/** Current page of the cursor */
	current_page?:true,
	/** List of items on the current page */
	data?:ValueTypes["EntryInterface"],
	/** Number of the first item returned */
	from?:true,
	/** Determines if cursor has more pages after the current page */
	has_more_pages?:true,
	/** The last page (number of pages) */
	last_page?:true,
	/** Number of items returned per page */
	per_page?:true,
	/** Number of the last item returned */
	to?:true,
	/** Number of total items selected by the query */
	total?:true,
		__typename?: true
}>;
	["Asset_Images"]: AliasType<{
	alt?:true,
	blueprint?:true,
	container?:ValueTypes["AssetContainer"],
	edit_url?:true,
	extension?:true,
	focus_css?:true,
	folder?:true,
	height?:true,
	id?:true,
	is_audio?:true,
	is_image?:true,
	is_video?:true,
	last_modified?:true,
	orientation?:true,
	path?:true,
	permalink?:true,
	ratio?:true,
	size?:true,
	size_b?:true,
	size_bytes?:true,
	size_gb?:true,
	size_gigabytes?:true,
	size_kb?:true,
	size_kilobytes?:true,
	size_mb?:true,
	size_megabytes?:true,
	url?:true,
	width?:true,
		__typename?: true
}>;
	["BardText"]: AliasType<{
	text?:true,
	type?:true,
		__typename?: true
}>;
	["Asset_Assets"]: AliasType<{
	alt?:true,
	blueprint?:true,
	container?:ValueTypes["AssetContainer"],
	edit_url?:true,
	extension?:true,
	focus_css?:true,
	folder?:true,
	height?:true,
	id?:true,
	is_audio?:true,
	is_image?:true,
	is_video?:true,
	last_modified?:true,
	orientation?:true,
	path?:true,
	permalink?:true,
	ratio?:true,
	size?:true,
	size_b?:true,
	size_bytes?:true,
	size_gb?:true,
	size_gigabytes?:true,
	size_kb?:true,
	size_kilobytes?:true,
	size_mb?:true,
	size_megabytes?:true,
	url?:true,
	width?:true,
		__typename?: true
}>;
	["Navigation"]: AliasType<{
	expects_root?:true,
	handle?:true,
	max_depth?:true,
	title?:true,
tree?: [{	site?:string | null},ValueTypes["NavTreeBranch"]],
		__typename?: true
}>;
	["JsonArgument"]:unknown;
	["Sets_Content"]: AliasType<{		["...on BardText"] : ValueTypes["BardText"],
		["...on Set_Content_Vimeo"] : ValueTypes["Set_Content_Vimeo"]
		__typename?: true
}>
  }

export type ModelTypes = {
    ["CollectionTreeBranch"]: {
		children?:(ModelTypes["CollectionTreeBranch"] | undefined)[],
	depth:number,
	entry?:ModelTypes["EntryInterface"],
	page?:ModelTypes["EntryInterface"]
};
	["Entry_Articles_Articles"]: {
		author?:ModelTypes["User"],
	collection:ModelTypes["Collection"],
	content?:ModelTypes["Sets_Content"][],
	date?:string,
	edit_url:string,
	id:string,
	last_modified?:string,
	locale:string,
	parent?:ModelTypes["EntryInterface"],
	permalink?:string,
	private:boolean,
	published:boolean,
	site:ModelTypes["Site"],
	slug:string,
	status:string,
	title:string,
	uri?:string,
	url?:string
};
	["Role"]: {
		handle?:string,
	title?:string
};
	["Query"]: {
		asset?:ModelTypes["AssetInterface"],
	assetContainer?:ModelTypes["AssetContainer"],
	assetContainers?:(ModelTypes["AssetContainer"] | undefined)[],
	assets?:ModelTypes["AssetInterfacePagination"],
	collection?:ModelTypes["Collection"],
	collections?:(ModelTypes["Collection"] | undefined)[],
	entries?:ModelTypes["EntryInterfacePagination"],
	entry?:ModelTypes["EntryInterface"],
	globalSet?:ModelTypes["GlobalSetInterface"],
	globalSets?:(ModelTypes["GlobalSetInterface"] | undefined)[],
	nav?:ModelTypes["Navigation"],
	navs?:(ModelTypes["Navigation"] | undefined)[],
	ping?:string,
	taxonomies?:(ModelTypes["Taxonomy"] | undefined)[],
	taxonomy?:ModelTypes["Taxonomy"],
	term?:ModelTypes["TermInterface"],
	terms?:ModelTypes["TermInterfacePagination"]
};
	["Entry_Authors_Authors"]: {
		collection:ModelTypes["Collection"],
	content?:string,
	date?:string,
	edit_url:string,
	id:string,
	last_modified?:string,
	locale:string,
	parent?:ModelTypes["EntryInterface"],
	permalink?:string,
	private:boolean,
	published:boolean,
	site:ModelTypes["Site"],
	slug:string,
	status:string,
	title:string,
	uri?:string,
	url?:string
};
	["Site"]: {
		handle:string,
	locale:string,
	name:string,
	short_locale:string,
	url:string
};
	["AssetContainer"]: {
		handle:string,
	title:string
};
	["Set_Content_Vimeo"]: {
		type:string,
	url:string
};
	["PageInterface"]: ;
	["AssetInterface"]: ModelTypes["Asset_Images"] | ModelTypes["Asset_Assets"];
	["UserGroup"]: {
		handle?:string,
	title?:string
};
	["Entry_Issues_Issues"]: {
		collection:ModelTypes["Collection"],
	content?:string,
	date?:string,
	edit_url:string,
	id:string,
	last_modified?:string,
	locale:string,
	parent?:ModelTypes["EntryInterface"],
	permalink?:string,
	private:boolean,
	published:boolean,
	site:ModelTypes["Site"],
	slug:string,
	status:string,
	title:string,
	uri?:string,
	url?:string
};
	["CollectionStructure"]: {
		expects_root:boolean,
	handle:string,
	max_depth?:number,
	title:string,
	tree?:(ModelTypes["CollectionTreeBranch"] | undefined)[]
};
	["Taxonomy"]: {
		handle:string,
	title:string
};
	["EntryInterface"]: ModelTypes["Entry_Articles_Articles"] | ModelTypes["Entry_Authors_Authors"] | ModelTypes["Entry_Issues_Issues"];
	["NavTreeBranch"]: {
		children?:(ModelTypes["NavTreeBranch"] | undefined)[],
	depth:number,
	page?:ModelTypes["PageInterface"]
};
	["AssetInterfacePagination"]: {
		/** Current page of the cursor */
	current_page:number,
	/** List of items on the current page */
	data?:(ModelTypes["AssetInterface"] | undefined)[],
	/** Number of the first item returned */
	from?:number,
	/** Determines if cursor has more pages after the current page */
	has_more_pages:boolean,
	/** The last page (number of pages) */
	last_page:number,
	/** Number of items returned per page */
	per_page:number,
	/** Number of the last item returned */
	to?:number,
	/** Number of total items selected by the query */
	total:number
};
	["TermInterface"]: ;
	["Collection"]: {
		handle:string,
	structure?:ModelTypes["CollectionStructure"],
	title:string
};
	["TermInterfacePagination"]: {
		/** Current page of the cursor */
	current_page:number,
	/** List of items on the current page */
	data?:(ModelTypes["TermInterface"] | undefined)[],
	/** Number of the first item returned */
	from?:number,
	/** Determines if cursor has more pages after the current page */
	has_more_pages:boolean,
	/** The last page (number of pages) */
	last_page:number,
	/** Number of items returned per page */
	per_page:number,
	/** Number of the last item returned */
	to?:number,
	/** Number of total items selected by the query */
	total:number
};
	["User"]: {
		avatar?:ModelTypes["AssetInterface"],
	edit_url?:string,
	email?:string,
	groups?:(ModelTypes["UserGroup"] | undefined)[],
	id?:string,
	initials?:string,
	name?:string,
	roles?:(ModelTypes["Role"] | undefined)[]
};
	["GlobalSetInterface"]: ;
	["EntryInterfacePagination"]: {
		/** Current page of the cursor */
	current_page:number,
	/** List of items on the current page */
	data?:(ModelTypes["EntryInterface"] | undefined)[],
	/** Number of the first item returned */
	from?:number,
	/** Determines if cursor has more pages after the current page */
	has_more_pages:boolean,
	/** The last page (number of pages) */
	last_page:number,
	/** Number of items returned per page */
	per_page:number,
	/** Number of the last item returned */
	to?:number,
	/** Number of total items selected by the query */
	total:number
};
	["Asset_Images"]: {
		alt?:string,
	blueprint?:string,
	container:ModelTypes["AssetContainer"],
	edit_url?:string,
	extension:string,
	focus_css?:string,
	folder?:string,
	height?:number,
	id:string,
	is_audio?:boolean,
	is_image?:boolean,
	is_video?:boolean,
	last_modified?:string,
	orientation?:string,
	path:string,
	permalink?:string,
	ratio?:number,
	size?:string,
	size_b?:number,
	size_bytes?:number,
	size_gb?:number,
	size_gigabytes?:number,
	size_kb?:number,
	size_kilobytes?:number,
	size_mb?:number,
	size_megabytes?:number,
	url?:string,
	width?:number
};
	["BardText"]: {
		text?:string,
	type:string
};
	["Asset_Assets"]: {
		alt?:string,
	blueprint?:string,
	container:ModelTypes["AssetContainer"],
	edit_url?:string,
	extension:string,
	focus_css?:string,
	folder?:string,
	height?:number,
	id:string,
	is_audio?:boolean,
	is_image?:boolean,
	is_video?:boolean,
	last_modified?:string,
	orientation?:string,
	path:string,
	permalink?:string,
	ratio?:number,
	size?:string,
	size_b?:number,
	size_bytes?:number,
	size_gb?:number,
	size_gigabytes?:number,
	size_kb?:number,
	size_kilobytes?:number,
	size_mb?:number,
	size_megabytes?:number,
	url?:string,
	width?:number
};
	["Navigation"]: {
		expects_root:boolean,
	handle:string,
	max_depth?:number,
	title:string,
	tree?:(ModelTypes["NavTreeBranch"] | undefined)[]
};
	["JsonArgument"]:any;
	["Sets_Content"]:ModelTypes["BardText"] | ModelTypes["Set_Content_Vimeo"]
    }

export type GraphQLTypes = {
    ["CollectionTreeBranch"]: {
	__typename: "CollectionTreeBranch",
	children?: Array<GraphQLTypes["CollectionTreeBranch"] | undefined>,
	depth: number,
	entry?: GraphQLTypes["EntryInterface"],
	page?: GraphQLTypes["EntryInterface"]
};
	["Entry_Articles_Articles"]: {
	__typename: "Entry_Articles_Articles",
	author?: GraphQLTypes["User"],
	collection: GraphQLTypes["Collection"],
	content?: Array<GraphQLTypes["Sets_Content"]>,
	date?: string,
	edit_url: string,
	id: string,
	last_modified?: string,
	locale: string,
	parent?: GraphQLTypes["EntryInterface"],
	permalink?: string,
	private: boolean,
	published: boolean,
	site: GraphQLTypes["Site"],
	slug: string,
	status: string,
	title: string,
	uri?: string,
	url?: string
};
	["Role"]: {
	__typename: "Role",
	handle?: string,
	title?: string
};
	["Query"]: {
	__typename: "Query",
	asset?: GraphQLTypes["AssetInterface"],
	assetContainer?: GraphQLTypes["AssetContainer"],
	assetContainers?: Array<GraphQLTypes["AssetContainer"] | undefined>,
	assets?: GraphQLTypes["AssetInterfacePagination"],
	collection?: GraphQLTypes["Collection"],
	collections?: Array<GraphQLTypes["Collection"] | undefined>,
	entries?: GraphQLTypes["EntryInterfacePagination"],
	entry?: GraphQLTypes["EntryInterface"],
	globalSet?: GraphQLTypes["GlobalSetInterface"],
	globalSets?: Array<GraphQLTypes["GlobalSetInterface"] | undefined>,
	nav?: GraphQLTypes["Navigation"],
	navs?: Array<GraphQLTypes["Navigation"] | undefined>,
	ping?: string,
	taxonomies?: Array<GraphQLTypes["Taxonomy"] | undefined>,
	taxonomy?: GraphQLTypes["Taxonomy"],
	term?: GraphQLTypes["TermInterface"],
	terms?: GraphQLTypes["TermInterfacePagination"]
};
	["Entry_Authors_Authors"]: {
	__typename: "Entry_Authors_Authors",
	collection: GraphQLTypes["Collection"],
	content?: string,
	date?: string,
	edit_url: string,
	id: string,
	last_modified?: string,
	locale: string,
	parent?: GraphQLTypes["EntryInterface"],
	permalink?: string,
	private: boolean,
	published: boolean,
	site: GraphQLTypes["Site"],
	slug: string,
	status: string,
	title: string,
	uri?: string,
	url?: string
};
	["Site"]: {
	__typename: "Site",
	handle: string,
	locale: string,
	name: string,
	short_locale: string,
	url: string
};
	["AssetContainer"]: {
	__typename: "AssetContainer",
	handle: string,
	title: string
};
	["Set_Content_Vimeo"]: {
	__typename: "Set_Content_Vimeo",
	type: string,
	url: string
};
	["PageInterface"]: {
	__typename:never
	id: string,
	permalink?: string,
	title?: string,
	url?: string,
	entry_id?: string
	
};
	["AssetInterface"]: {
	__typename:"Asset_Images" | "Asset_Assets"
	size?: string,
	size_megabytes?: number,
	orientation?: string,
	size_b?: number,
	url?: string,
	is_video?: boolean,
	permalink?: string,
	size_mb?: number,
	size_kilobytes?: number,
	ratio?: number,
	last_modified?: string,
	edit_url?: string,
	extension: string,
	path: string,
	size_bytes?: number,
	width?: number,
	folder?: string,
	size_gb?: number,
	size_gigabytes?: number,
	height?: number,
	is_audio?: boolean,
	blueprint?: string,
	size_kb?: number,
	focus_css?: string,
	container: GraphQLTypes["AssetContainer"],
	id: string,
	is_image?: boolean
	['...on Asset_Images']: '__union' & GraphQLTypes["Asset_Images"];
	['...on Asset_Assets']: '__union' & GraphQLTypes["Asset_Assets"];
};
	["UserGroup"]: {
	__typename: "UserGroup",
	handle?: string,
	title?: string
};
	["Entry_Issues_Issues"]: {
	__typename: "Entry_Issues_Issues",
	collection: GraphQLTypes["Collection"],
	content?: string,
	date?: string,
	edit_url: string,
	id: string,
	last_modified?: string,
	locale: string,
	parent?: GraphQLTypes["EntryInterface"],
	permalink?: string,
	private: boolean,
	published: boolean,
	site: GraphQLTypes["Site"],
	slug: string,
	status: string,
	title: string,
	uri?: string,
	url?: string
};
	["CollectionStructure"]: {
	__typename: "CollectionStructure",
	expects_root: boolean,
	handle: string,
	max_depth?: number,
	title: string,
	tree?: Array<GraphQLTypes["CollectionTreeBranch"] | undefined>
};
	["Taxonomy"]: {
	__typename: "Taxonomy",
	handle: string,
	title: string
};
	["EntryInterface"]: {
	__typename:"Entry_Articles_Articles" | "Entry_Authors_Authors" | "Entry_Issues_Issues"
	published: boolean,
	status: string,
	edit_url: string,
	uri?: string,
	collection: GraphQLTypes["Collection"],
	site: GraphQLTypes["Site"],
	title: string,
	date?: string,
	locale: string,
	last_modified?: string,
	id: string,
	parent?: GraphQLTypes["EntryInterface"],
	url?: string,
	permalink?: string,
	private: boolean,
	slug: string
	['...on Entry_Articles_Articles']: '__union' & GraphQLTypes["Entry_Articles_Articles"];
	['...on Entry_Authors_Authors']: '__union' & GraphQLTypes["Entry_Authors_Authors"];
	['...on Entry_Issues_Issues']: '__union' & GraphQLTypes["Entry_Issues_Issues"];
};
	["NavTreeBranch"]: {
	__typename: "NavTreeBranch",
	children?: Array<GraphQLTypes["NavTreeBranch"] | undefined>,
	depth: number,
	page?: GraphQLTypes["PageInterface"]
};
	["AssetInterfacePagination"]: {
	__typename: "AssetInterfacePagination",
	/** Current page of the cursor */
	current_page: number,
	/** List of items on the current page */
	data?: Array<GraphQLTypes["AssetInterface"] | undefined>,
	/** Number of the first item returned */
	from?: number,
	/** Determines if cursor has more pages after the current page */
	has_more_pages: boolean,
	/** The last page (number of pages) */
	last_page: number,
	/** Number of items returned per page */
	per_page: number,
	/** Number of the last item returned */
	to?: number,
	/** Number of total items selected by the query */
	total: number
};
	["TermInterface"]: {
	__typename:never
	uri?: string,
	url?: string,
	edit_url: string,
	id: string,
	permalink?: string,
	slug: string,
	taxonomy: GraphQLTypes["Taxonomy"],
	title: string
	
};
	["Collection"]: {
	__typename: "Collection",
	handle: string,
	structure?: GraphQLTypes["CollectionStructure"],
	title: string
};
	["TermInterfacePagination"]: {
	__typename: "TermInterfacePagination",
	/** Current page of the cursor */
	current_page: number,
	/** List of items on the current page */
	data?: Array<GraphQLTypes["TermInterface"] | undefined>,
	/** Number of the first item returned */
	from?: number,
	/** Determines if cursor has more pages after the current page */
	has_more_pages: boolean,
	/** The last page (number of pages) */
	last_page: number,
	/** Number of items returned per page */
	per_page: number,
	/** Number of the last item returned */
	to?: number,
	/** Number of total items selected by the query */
	total: number
};
	["User"]: {
	__typename: "User",
	avatar?: GraphQLTypes["AssetInterface"],
	edit_url?: string,
	email?: string,
	groups?: Array<GraphQLTypes["UserGroup"] | undefined>,
	id?: string,
	initials?: string,
	name?: string,
	roles?: Array<GraphQLTypes["Role"] | undefined>
};
	["GlobalSetInterface"]: {
	__typename:never
	title: string,
	handle: string,
	site: GraphQLTypes["Site"]
	
};
	["EntryInterfacePagination"]: {
	__typename: "EntryInterfacePagination",
	/** Current page of the cursor */
	current_page: number,
	/** List of items on the current page */
	data?: Array<GraphQLTypes["EntryInterface"] | undefined>,
	/** Number of the first item returned */
	from?: number,
	/** Determines if cursor has more pages after the current page */
	has_more_pages: boolean,
	/** The last page (number of pages) */
	last_page: number,
	/** Number of items returned per page */
	per_page: number,
	/** Number of the last item returned */
	to?: number,
	/** Number of total items selected by the query */
	total: number
};
	["Asset_Images"]: {
	__typename: "Asset_Images",
	alt?: string,
	blueprint?: string,
	container: GraphQLTypes["AssetContainer"],
	edit_url?: string,
	extension: string,
	focus_css?: string,
	folder?: string,
	height?: number,
	id: string,
	is_audio?: boolean,
	is_image?: boolean,
	is_video?: boolean,
	last_modified?: string,
	orientation?: string,
	path: string,
	permalink?: string,
	ratio?: number,
	size?: string,
	size_b?: number,
	size_bytes?: number,
	size_gb?: number,
	size_gigabytes?: number,
	size_kb?: number,
	size_kilobytes?: number,
	size_mb?: number,
	size_megabytes?: number,
	url?: string,
	width?: number
};
	["BardText"]: {
	__typename: "BardText",
	text?: string,
	type: string
};
	["Asset_Assets"]: {
	__typename: "Asset_Assets",
	alt?: string,
	blueprint?: string,
	container: GraphQLTypes["AssetContainer"],
	edit_url?: string,
	extension: string,
	focus_css?: string,
	folder?: string,
	height?: number,
	id: string,
	is_audio?: boolean,
	is_image?: boolean,
	is_video?: boolean,
	last_modified?: string,
	orientation?: string,
	path: string,
	permalink?: string,
	ratio?: number,
	size?: string,
	size_b?: number,
	size_bytes?: number,
	size_gb?: number,
	size_gigabytes?: number,
	size_kb?: number,
	size_kilobytes?: number,
	size_mb?: number,
	size_megabytes?: number,
	url?: string,
	width?: number
};
	["Navigation"]: {
	__typename: "Navigation",
	expects_root: boolean,
	handle: string,
	max_depth?: number,
	title: string,
	tree?: Array<GraphQLTypes["NavTreeBranch"] | undefined>
};
	["JsonArgument"]:any;
	["Sets_Content"]:{
	['...on BardText']: '__union' & GraphQLTypes["BardText"];
	['...on Set_Content_Vimeo']: '__union' & GraphQLTypes["Set_Content_Vimeo"];
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
export interface GraphQLResponse {
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

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, DST[P] & { __typename: true }>
          : {}
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
        >]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  variables?: Record<string, any>,
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn:(e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (e: { data?: InputType<T, Z>; message?: string }) => void;
  open: () => void;
};
export type CastToGraphQL<V, T> = (resultOfYourQuery: any) => <Z extends V>(o: Z | V) => InputType<T, Z>;
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (
  query: string,
  variables?: Record<string, any>,
) => void;
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
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
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


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullChainConstruct(fn)(operation, key)(o as any, variables)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, variables?: Record<string, any>) =>
  fn(queryConstruct(t, tName)(o), variables);

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullSubscriptionConstruct(fn)(operation, key)(o as any, variables)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


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
) => fn as (args?: any,source?: any) => any;


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

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
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
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
    variables: Record<string, any> = {},
  ) => {
    try {
      const WebSocket =  require('ws');
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
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
      throw new Error('No websockets implemented. Please install ws');
    }
  };


export const Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction) => ({
  query: fullChainConstructor(fn,'query', 'Query')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'Query')
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>()
};
  

export const Gql = Chain('https://faker.graphqleditor.com/a-team/aaaa/graphql')