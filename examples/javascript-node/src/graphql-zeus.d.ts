/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    /** Card used in card game<br> */
["Card"]: AliasType<{
	/** The attack power<br> */
	Attack?:true,
	/** <div>How many children the greek god had</div> */
	Children?:true,
	/** The defense power<br> */
	Defense?:true,
attack?: [{	/** Attacked card/card ids<br> */
	cardID:string[]},ValueTypes["Card"]],
	/** Put your description here */
	cardImage?:ValueTypes["S3Object"],
	/** Description of a card<br> */
	description?:true,
	id?:true,
	/** The name of a card<br> */
	name?:true,
	skills?:true
		__typename?: true
}>;
	/** Stack of cards */
["CardStack"]: AliasType<{
	cards?:ValueTypes["Card"],
	name?:true
		__typename?: true
}>;
	["ChangeCard"]: AliasType<{		["...on SpecialCard"] : ValueTypes["SpecialCard"],
		["...on EffectCard"] : ValueTypes["EffectCard"]
		__typename?: true
}>;
	/** create card inputs<br> */
["createCard"]: {
	/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:ValueTypes["SpecialSkills"][],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number
};
	["EffectCard"]: AliasType<{
	effectSize?:true,
	name?:true
		__typename?: true
}>;
	["Mutation"]: AliasType<{
addCard?: [{	card:ValueTypes["createCard"]},ValueTypes["Card"]]
		__typename?: true
}>;
	["Nameable"]:AliasType<{
		name?:true;
		['...on Card']: ValueTypes["Card"];
		['...on CardStack']: ValueTypes["CardStack"];
		['...on EffectCard']: ValueTypes["EffectCard"];
		['...on SpecialCard']: ValueTypes["SpecialCard"];
		__typename?: true
}>;
	["Query"]: AliasType<{
cardById?: [{	cardId?:string},ValueTypes["Card"]],
	/** Draw a card<br> */
	drawCard?:ValueTypes["Card"],
	drawChangeCard?:ValueTypes["ChangeCard"],
	/** list All Cards availble<br> */
	listCards?:ValueTypes["Card"],
	myStacks?:ValueTypes["CardStack"],
	nameables?:ValueTypes["Nameable"]
		__typename?: true
}>;
	/** Aws S3 File */
["S3Object"]: AliasType<{
	bucket?:true,
	key?:true,
	region?:true
		__typename?: true
}>;
	["SpecialCard"]: AliasType<{
	effect?:true,
	name?:true
		__typename?: true
}>;
	["SpecialSkills"]:SpecialSkills
  }

export type PlainObjects = {
    /** Card used in card game<br> */
["Card"]: {
		__typename?: "Card";
			/** The attack power<br> */
	Attack:number,
			/** <div>How many children the greek god had</div> */
	Children?:number,
			/** The defense power<br> */
	Defense:number,
			/** Attack other cards on the table , returns Cards after attack<br> */
	attack?:PlainObjects["Card"][],
			/** Put your description here */
	cardImage?:PlainObjects["S3Object"],
			/** Description of a card<br> */
	description:string,
			id:string,
			/** The name of a card<br> */
	name:string,
			skills?:PlainObjects["SpecialSkills"][]
	},
	/** Stack of cards */
["CardStack"]: {
		__typename?: "CardStack";
			cards?:PlainObjects["Card"][],
			name:string
	},
	["ChangeCard"]: PlainObjects["SpecialCard"] | PlainObjects["EffectCard"],
	/** create card inputs<br> */
["createCard"]: {
	/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:PlainObjects["SpecialSkills"][],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number
},
	["EffectCard"]: {
		__typename?: "EffectCard";
			effectSize:number,
			name:string
	},
	["Mutation"]: {
		__typename?: "Mutation";
			/** add Card to Cards database<br> */
	addCard:PlainObjects["Card"]
	},
	["Nameable"]:{
		name:string
} & (PlainObjects["Card"] | PlainObjects["CardStack"] | PlainObjects["EffectCard"] | PlainObjects["SpecialCard"]),
	["Query"]: {
		__typename?: "Query";
			cardById?:PlainObjects["Card"],
			/** Draw a card<br> */
	drawCard:PlainObjects["Card"],
			drawChangeCard:PlainObjects["ChangeCard"],
			/** list All Cards availble<br> */
	listCards:PlainObjects["Card"][],
			myStacks?:PlainObjects["CardStack"][],
			nameables:PlainObjects["Nameable"][]
	},
	/** Aws S3 File */
["S3Object"]: {
		__typename?: "S3Object";
			bucket:string,
			key:string,
			region:string
	},
	["SpecialCard"]: {
		__typename?: "SpecialCard";
			effect:string,
			name:string
	},
	["SpecialSkills"]:SpecialSkills
  }

/** Card used in card game<br> */
export type Card = {
	__typename?: "Card",
	/** The attack power<br> */
	Attack:number,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The defense power<br> */
	Defense:number,
	/** Attack other cards on the table , returns Cards after attack<br> */
	attack:(props:{	/** Attacked card/card ids<br> */
	cardID:string[]}) => Card[],
	/** Put your description here */
	cardImage?:S3Object,
	/** Description of a card<br> */
	description:string,
	id:string,
	/** The name of a card<br> */
	name:string,
	skills?:SpecialSkills[]
}

/** Stack of cards */
export type CardStack = {
	__typename?: "CardStack",
	cards?:Card[],
	name:string
}

export type ChangeCard = {
	__union:SpecialCard | EffectCard;
	__resolve:{
		['...on SpecialCard']: SpecialCard;
		['...on EffectCard']: EffectCard;
	}
}

/** create card inputs<br> */
export type createCard = {
		/** The defense power<br> */
	Defense:number,
	/** input skills */
	skills?:SpecialSkills[],
	/** The name of a card<br> */
	name:string,
	/** Description of a card<br> */
	description:string,
	/** <div>How many children the greek god had</div> */
	Children?:number,
	/** The attack power<br> */
	Attack:number
}

export type EffectCard = {
	__typename?: "EffectCard",
	effectSize:number,
	name:string
}

export type Mutation = {
	__typename?: "Mutation",
	/** add Card to Cards database<br> */
	addCard:(props:{	card:createCard}) => Card
}

export type Nameable = {
	__interface:{
			name:string
	};
	__resolve:{
		['...on Card']: Card;
		['...on CardStack']: CardStack;
		['...on EffectCard']: EffectCard;
		['...on SpecialCard']: SpecialCard;
	}
}

export type Query = {
	__typename?: "Query",
	cardById:(props:{	cardId?:string}) => Card,
	/** Draw a card<br> */
	drawCard:Card,
	drawChangeCard:ChangeCard,
	/** list All Cards availble<br> */
	listCards:Card[],
	myStacks?:CardStack[],
	nameables:Nameable[]
}

/** Aws S3 File */
export type S3Object = {
	__typename?: "S3Object",
	bucket:string,
	key:string,
	region:string
}

export type SpecialCard = {
	__typename?: "SpecialCard",
	effect:string,
	name:string
}

export enum SpecialSkills {
	THUNDER = "THUNDER",
	RAIN = "RAIN",
	FIRE = "FIRE"
}


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

export type ResolverType<F> = F extends Func<infer P, any> ? P[0] : undefined;

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
  ? never
  : SRC extends AnyFunc
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

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
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

type OperationToGraphQL<V, T> = <Z>(o: Z | V) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;


export declare function Chain(
  ...options: fetchOptions
):{
  Query: OperationToGraphQL<ValueTypes["Query"],Query>,Mutation: OperationToGraphQL<ValueTypes["Mutation"],Mutation>
}

export declare const Zeus: {
  Query: (o: ValueTypes["Query"]) => string,Mutation: (o: ValueTypes["Mutation"]) => string
}

export declare const Cast: {
  Query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,Mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
}

export declare const Gql: ReturnType<typeof Chain>
