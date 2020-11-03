type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

export type ValueTypes = {
  /** Card used in card game<br> */
  ['Card']: AliasType<{
    Attack?: true;
    Children?: true;
    Defense?: true;
    card2?: true;
    attack?: [
      {
        cardID: string[];
      },
      ValueTypes['Card'],
    ];
  }>;
  ['Card2']: AliasType<{
    Attack?: true;
    Defense?: true;
    Children?: true;
  }>;
  ['ChangeCard']: AliasType<{
    ['...on Card']: ValueTypes['Card'];
    ['...on Card2']: ValueTypes['Card2'];
  }>;
  ['Nameable']: AliasType<{
    ['...on Card']?: Omit<ValueTypes['Card'], 'Attack' | '__typename'>;
    ['...on Card2']?: Omit<ValueTypes['Card2'], 'Attack' | '__typename'>;
    Attack?: true;
  }>;
  ['Query']: AliasType<{
    card: ValueTypes['Card'];
    nameable: ValueTypes['Nameable'];
    nameables: ValueTypes['Nameable'];
  }>;
};
export type Types = {
  ['Nameable']: {
    [`...on Card`]: Omit<Types['Card'], 'Attack' | '__typename'>;
    ['...on Card2']: Omit<Types['Card2'], 'Attack' | '__typename'>;
    Attack: number;
  };
  ['Card']: {
    Attack: number;
    Children?: number;
    Defense: number;
    card2?: Types['Card2'];
    attack: Types['Card'];
    __typename?: 'Card';
  };
  ['ChangeCard']: AliasType<{
    ['...on Card']: Types['Card'];
    ['...on Card2']: Types['Card2'];
  }>;

  ['Card2']: {
    Attack: number;
    Children?: number;
    Defense: number;
    __typename?: 'Card2';
  };
  ['Query']: {
    card: Types['Card'];
    carders: Types['ChangeCard'][];
    nameable: Types['Nameable'];
    nameables: Types['Nameable'][];
  };
};

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super('');
    console.error(response);
  }
  toString() {
    return 'GraphQL Response Error';
  }
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type MapType<SRC, DST> = SRC extends DeepAnify<DST>
  ? {
      [P in keyof DST]: DST[P] extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    }
  : never;
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

type AA = InputType<
  Types['Query'],
  {
    card: {
      card2: {
        __alias: {
          ddd: {
            Children: true;
          };
        };
        Attack: true;
      };
      attack: [
        {},
        {
          Attack: true;
          __alias: {
            aa: {
              Defense: true;
            };
          };
        },
      ];
    };
    nameable: {
      ['...on Card']: {
        Defense: true;
      };
      Attack: true;
    };
    carders: {
      ['...on Card']: {
        Defense: true;
      };
    };
  }
>;
let aa: AA = ({} as unknown) as AA;
aa.carders.map((c) => c['...on Card'].Defense);
