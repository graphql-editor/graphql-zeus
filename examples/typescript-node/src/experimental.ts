export interface Query {
  people?: {
    name?: true;
    age?: true;
    friends?: {
      args: { name: string };
      response: {
        name?: true;
        age?: true;
      };
    };
  };
}

interface Q {
  people: {
    name: string;
    age: number;
    friends: {
      response: {
        name: string;
        age: number;
      };
    };
  };
}

type MapType<SRC, DST extends { [P in keyof SRC]: DST[P] }> = SRC extends boolean
  ? DST
  : {
      [P in keyof Omit<SRC, 'args'>]: P extends keyof DST ? MapType<SRC[P], DST[P]> : never;
    };
type aa = MapType<Query, Q>;
function PType<T extends Query>(t: Query | T) {
  return t as MapType<T, Q>;
}
PType({
  people: {
    friends: { args: { name: 'Art' }, response: { age: true } },
  },
}).people.friends;
