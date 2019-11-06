interface MMS {
  name?: string;
  age: number;
  id: string;
  www: {
    m: string;
    z: string;
  };
}
type Statess<T> = {
  [P in keyof T]?: true;
};
type Boolify<T> = { [P in keyof T]?: T[P] extends Record<string, any> ? Boolify<T[P]> : true };

type Anify<T> = { [P in keyof T]?: any };
type MapType<SRC extends Anify<DST>, DST> = {
  [Key in keyof DST]-?: DST[Key] extends boolean ? SRC[Key] : MapType<SRC[Key], DST[Key]>;
};

type PropertyNames<T, Z> = {
  [K in keyof T]: K extends keyof Z ? K : never;
}[keyof T];

type Picker<Z> = <T>(a: T | Boolify<Z>) => MapType<Z, T>;
const Query: Picker<MMS> = (param) => {
  return {} as any;
};
const cc = Query({
  name: true,
  age: true,
  www: {
    m: true,
  },
});
