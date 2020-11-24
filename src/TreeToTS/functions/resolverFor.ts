import { StringFunction } from './models';

export const resolverForFunction: StringFunction = {
  ts: `
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
`,
  js: `
export const resolverFor = (
  type,
  field,
  fn
) => fn;
`,
};
