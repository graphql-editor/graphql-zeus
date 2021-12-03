declare type ZEUS_INTERFACES = GraphQLTypes["Nameable"];
declare type ZEUS_UNIONS = GraphQLTypes["ChangeCard"];
export declare type ValueTypes = {
    ["EffectCard"]: AliasType<{
        effectSize?: boolean;
        name?: boolean;
        __typename?: boolean;
    }>;
    /** Aws S3 File */
    ["S3Object"]: AliasType<{
        bucket?: boolean;
        key?: boolean;
        region?: boolean;
        __typename?: boolean;
    }>;
    ["ChangeCard"]: AliasType<{
        ["...on SpecialCard"]: ValueTypes["SpecialCard"];
        ["...on EffectCard"]: ValueTypes["EffectCard"];
        __typename?: boolean;
    }>;
    /** Stack of cards */
    ["CardStack"]: AliasType<{
        cards?: ValueTypes["Card"];
        name?: boolean;
        __typename?: boolean;
    }>;
    /** create card inputs<br> */
    ["createCard"]: {
        /** The attack power<br> */
        Attack: number;
        /** The defense power<br> */
        Defense: number;
        /** input skills */
        skills?: ValueTypes["SpecialSkills"][];
        /** The name of a card<br> */
        name: string;
        /** Description of a card<br> */
        description: string;
        /** <div>How many children the greek god had</div> */
        Children?: number | null;
    };
    ["Query"]: AliasType<{
        cardById?: [{
            cardId?: string | null;
        }, ValueTypes["Card"]];
        /** Draw a card<br> */
        drawCard?: ValueTypes["Card"];
        drawChangeCard?: ValueTypes["ChangeCard"];
        /** list All Cards availble<br> */
        listCards?: ValueTypes["Card"];
        myStacks?: ValueTypes["CardStack"];
        nameables?: ValueTypes["Nameable"];
        __typename?: boolean;
    }>;
    ["Mutation"]: AliasType<{
        addCard?: [{
            card: ValueTypes["createCard"];
        }, ValueTypes["Card"]];
        __typename?: boolean;
    }>;
    ["Subscription"]: AliasType<{
        deck?: ValueTypes["Card"];
        __typename?: boolean;
    }>;
    ["SpecialSkills"]: SpecialSkills;
    ["SpecialCard"]: AliasType<{
        effect?: boolean;
        name?: boolean;
        __typename?: boolean;
    }>;
    ["Nameable"]: AliasType<{
        name?: boolean;
        ['...on EffectCard']?: Omit<ValueTypes["EffectCard"], keyof ValueTypes["Nameable"]>;
        ['...on CardStack']?: Omit<ValueTypes["CardStack"], keyof ValueTypes["Nameable"]>;
        ['...on SpecialCard']?: Omit<ValueTypes["SpecialCard"], keyof ValueTypes["Nameable"]>;
        ['...on Card']?: Omit<ValueTypes["Card"], keyof ValueTypes["Nameable"]>;
        __typename?: boolean;
    }>;
    /** Card used in card game<br> */
    ["Card"]: AliasType<{
        /** The attack power<br> */
        Attack?: boolean;
        /** <div>How many children the greek god had</div> */
        Children?: boolean;
        /** The defense power<br> */
        Defense?: boolean;
        attack?: [
            {
                cardID: string[];
            },
            ValueTypes["Card"]
        ];
        /** Put your description here */
        cardImage?: ValueTypes["S3Object"];
        /** Description of a card<br> */
        description?: boolean;
        id?: boolean;
        image?: boolean;
        /** The name of a card<br> */
        name?: boolean;
        skills?: boolean;
        __typename?: boolean;
    }>;
};
export declare type ModelTypes = {
    ["EffectCard"]: {
        effectSize: number;
        name: string;
    };
    /** Aws S3 File */
    ["S3Object"]: {
        bucket: string;
        key: string;
        region: string;
    };
    ["ChangeCard"]: ModelTypes["SpecialCard"] | ModelTypes["EffectCard"];
    /** Stack of cards */
    ["CardStack"]: {
        cards?: ModelTypes["Card"][];
        name: string;
    };
    /** create card inputs<br> */
    ["createCard"]: GraphQLTypes["createCard"];
    ["Query"]: {
        cardById?: ModelTypes["Card"];
        /** Draw a card<br> */
        drawCard: ModelTypes["Card"];
        drawChangeCard: ModelTypes["ChangeCard"];
        /** list All Cards availble<br> */
        listCards: ModelTypes["Card"][];
        myStacks?: ModelTypes["CardStack"][];
        nameables: ModelTypes["Nameable"][];
    };
    ["Mutation"]: {
        /** add Card to Cards database<br> */
        addCard: ModelTypes["Card"];
    };
    ["Subscription"]: {
        deck?: ModelTypes["Card"][];
    };
    ["SpecialSkills"]: GraphQLTypes["SpecialSkills"];
    ["SpecialCard"]: {
        effect: string;
        name: string;
    };
    ["Nameable"]: ModelTypes["EffectCard"] | ModelTypes["CardStack"] | ModelTypes["SpecialCard"] | ModelTypes["Card"];
    /** Card used in card game<br> */
    ["Card"]: {
        /** The attack power<br> */
        Attack: number;
        /** <div>How many children the greek god had</div> */
        Children?: number;
        /** The defense power<br> */
        Defense: number;
        /** Attack other cards on the table , returns Cards after attack<br> */
        attack?: ModelTypes["Card"][];
        /** Put your description here */
        cardImage?: ModelTypes["S3Object"];
        /** Description of a card<br> */
        description: string;
        id: string;
        image: string;
        /** The name of a card<br> */
        name: string;
        skills?: ModelTypes["SpecialSkills"][];
    };
};
export declare type GraphQLTypes = {
    ["EffectCard"]: {
        __typename: "EffectCard";
        effectSize: number;
        name: string;
    };
    /** Aws S3 File */
    ["S3Object"]: {
        __typename: "S3Object";
        bucket: string;
        key: string;
        region: string;
    };
    ["ChangeCard"]: {
        __typename: "SpecialCard" | "EffectCard";
        ['...on SpecialCard']: '__union' & GraphQLTypes["SpecialCard"];
        ['...on EffectCard']: '__union' & GraphQLTypes["EffectCard"];
    };
    /** Stack of cards */
    ["CardStack"]: {
        __typename: "CardStack";
        cards?: Array<GraphQLTypes["Card"]>;
        name: string;
    };
    /** create card inputs<br> */
    ["createCard"]: {
        /** The attack power<br> */
        Attack: number;
        /** The defense power<br> */
        Defense: number;
        /** input skills */
        skills?: Array<GraphQLTypes["SpecialSkills"]>;
        /** The name of a card<br> */
        name: string;
        /** Description of a card<br> */
        description: string;
        /** <div>How many children the greek god had</div> */
        Children?: number;
    };
    ["Query"]: {
        __typename: "Query";
        cardById?: GraphQLTypes["Card"];
        /** Draw a card<br> */
        drawCard: GraphQLTypes["Card"];
        drawChangeCard: GraphQLTypes["ChangeCard"];
        /** list All Cards availble<br> */
        listCards: Array<GraphQLTypes["Card"]>;
        myStacks?: Array<GraphQLTypes["CardStack"]>;
        nameables: Array<GraphQLTypes["Nameable"]>;
    };
    ["Mutation"]: {
        __typename: "Mutation";
        /** add Card to Cards database<br> */
        addCard: GraphQLTypes["Card"];
    };
    ["Subscription"]: {
        __typename: "Subscription";
        deck?: Array<GraphQLTypes["Card"]>;
    };
    ["SpecialSkills"]: SpecialSkills;
    ["SpecialCard"]: {
        __typename: "SpecialCard";
        effect: string;
        name: string;
    };
    ["Nameable"]: {
        __typename: "EffectCard" | "CardStack" | "SpecialCard" | "Card";
        name: string;
        ['...on EffectCard']: '__union' & GraphQLTypes["EffectCard"];
        ['...on CardStack']: '__union' & GraphQLTypes["CardStack"];
        ['...on SpecialCard']: '__union' & GraphQLTypes["SpecialCard"];
        ['...on Card']: '__union' & GraphQLTypes["Card"];
    };
    /** Card used in card game<br> */
    ["Card"]: {
        __typename: "Card";
        /** The attack power<br> */
        Attack: number;
        /** <div>How many children the greek god had</div> */
        Children?: number;
        /** The defense power<br> */
        Defense: number;
        /** Attack other cards on the table , returns Cards after attack<br> */
        attack?: Array<GraphQLTypes["Card"]>;
        /** Put your description here */
        cardImage?: GraphQLTypes["S3Object"];
        /** Description of a card<br> */
        description: string;
        id: string;
        image: string;
        /** The name of a card<br> */
        name: string;
        skills?: Array<GraphQLTypes["SpecialSkills"]>;
    };
};
export declare const enum SpecialSkills {
    THUNDER = "THUNDER",
    RAIN = "RAIN",
    FIRE = "FIRE"
}
export declare class GraphQLError extends Error {
    response: GraphQLResponse;
    constructor(response: GraphQLResponse);
    toString(): string;
}
export declare type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export declare type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<UnwrapPromise<ReturnType<T>>>;
export declare type ZeusHook<T extends (...args: any[]) => Record<string, (...args: any[]) => Promise<any>>, N extends keyof ReturnType<T>> = ZeusState<ReturnType<T>[N]>;
declare type WithTypeNameValue<T> = T & {
    __typename?: boolean;
};
declare type AliasType<T> = WithTypeNameValue<T> & {
    __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
    data?: Record<string, any>;
    errors?: Array<{
        message: string;
    }>;
}
declare type DeepAnify<T> = {
    [P in keyof T]?: any;
};
declare type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
declare type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
declare type FlattenArray<T> = T extends Array<infer R> ? R : T;
declare type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS ? {
    [P in keyof SRC]: SRC[P] extends '__union' & infer R ? P extends keyof DST ? IsArray<R, '__typename' extends keyof DST ? DST[P] & {
        __typename: true;
    } : DST[P]> : {} : never;
}[keyof DST] & {
    [P in keyof Omit<Pick<SRC, {
        [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
    }[keyof DST]>, '__typename'>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
} : {
    [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
};
export declare type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export declare type InputType<SRC, DST> = IsPayLoad<DST> extends {
    __alias: infer R;
} ? {
    [P in keyof R]: MapType<SRC, R[P]>;
} & MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>> : MapType<SRC, IsPayLoad<DST>>;
declare type Func<P extends any[], R> = (...args: P) => R;
declare type AnyFunc = Func<any, any>;
export declare type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export declare type OperationOptions = {
    variables?: Record<string, any>;
    operationName?: string;
};
export declare type SubscriptionToGraphQL<Z, T> = {
    ws: WebSocket;
    on: (fn: (args: InputType<T, Z>) => void) => void;
    off: (fn: (e: {
        data?: InputType<T, Z>;
        code?: number;
        reason?: string;
        message?: string;
    }) => void) => void;
    error: (fn: (e: {
        data?: InputType<T, Z>;
        errors?: string[];
    }) => void) => void;
    open: () => void;
};
export declare type SelectionFunction<V> = <T>(t: T | V) => T;
export declare type fetchOptions = ArgsType<typeof fetch>;
declare type websocketOptions = typeof WebSocket extends new (...args: infer R) => WebSocket ? R : never;
export declare type chainOptions = [fetchOptions[0], fetchOptions[1] & {
    websocket?: websocketOptions;
}] | [fetchOptions[0]];
export declare type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;
export declare type SubscriptionFunction = (query: string) => any;
declare type NotUndefined<T> = T extends undefined ? never : T;
export declare type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;
export declare const ZeusSelect: <T>() => SelectionFunction<T>;
export declare const ScalarResolver: (scalar: string, value: any) => string | false;
export declare const TypesPropsResolver: ({ value, type, name, key, blockArrays }: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}) => string;
export declare const queryConstruct: (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) => string;
export declare const fullChainConstruct: (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>, options?: OperationOptions) => Promise<any>;
export declare const fullSubscriptionConstruct: (fn: SubscriptionFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>, options?: OperationOptions) => any;
export declare const $: (t: TemplateStringsArray) => any;
export declare const resolverFor: <X, T extends keyof ValueTypes, Z extends keyof ValueTypes[T]>(type: T, field: Z, fn: (args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any, source: any) => Z extends keyof ModelTypes[T] ? X | ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any) => (args?: any, source?: any) => any;
export declare const apiFetch: (options: [input: RequestInfo, init?: RequestInit]) => (query: string, variables?: Record<string, any>) => any;
export declare const apiSubscription: (options: chainOptions) => (query: string) => {
    ws: any;
    on: (e: (args: any) => void) => void;
    off: (e: (args: any) => void) => void;
    error: (e: (args: any) => void) => void;
    open: (e: () => void) => void;
};
export declare type GenericOperation<O> = O extends 'query' ? "Query" : O extends 'mutation' ? "Mutation" : "Subscription";
export declare const Thunder: (fn: FetchFunction) => <O extends "query" | "mutation" | "subscription", R extends keyof ValueTypes = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => Promise<InputType<GraphQLTypes[R], Z>>;
export declare const Chain: (...options: chainOptions) => <O extends "query" | "mutation" | "subscription", R extends keyof ValueTypes = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => Promise<InputType<GraphQLTypes[R], Z>>;
export declare const SubscriptionThunder: (fn: SubscriptionFunction) => <O extends "query" | "mutation" | "subscription", R extends keyof ValueTypes = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => SubscriptionToGraphQL<Z, GraphQLTypes[R]>;
export declare const Subscription: (...options: chainOptions) => <O extends "query" | "mutation" | "subscription", R extends keyof ValueTypes = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => SubscriptionToGraphQL<Z, GraphQLTypes[R]>;
export declare const Zeus: <Z extends ValueTypes[R], O extends "query" | "mutation" | "subscription", R extends keyof ValueTypes = GenericOperation<O>>(operation: O, o: Z | ValueTypes[R], operationName?: string) => string;
export declare const Selector: <T extends keyof ValueTypes>(key: T) => SelectionFunction<ValueTypes[T]>;
export declare const Gql: <O extends "query" | "mutation" | "subscription", R extends keyof ValueTypes = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => Promise<InputType<GraphQLTypes[R], Z>>;
export {};
