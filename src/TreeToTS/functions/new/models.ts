export type AllTypesPropsType = {
  [x: string]:
    | undefined
    | boolean
    | {
        [x: string]:
          | undefined
          | string
          | {
              [x: string]: string | undefined;
            };
      };
};

export type ReturnTypesType = {
  [x: string]:
    | {
        [x: string]: string | undefined;
      }
    | undefined;
};
export type InputValueType = {
  [x: string]: boolean | [any, boolean | InputValueType] | InputValueType;
};
export type VType = boolean | [any, boolean | InputValueType] | InputValueType;

export type PlainType = boolean | number | string | null | undefined;
export type ZeusArgsType =
  | PlainType
  | Array<PlainType>
  | {
      [x: string]: ZeusArgsType;
    };

export type Operations = Record<string, string | undefined>;
