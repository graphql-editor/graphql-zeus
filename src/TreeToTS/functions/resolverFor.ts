import { MODEL_TYPES } from '@/TreeToTS/templates/returnedModelTypes';
import { StringFunction } from './models';

export const resolverForFunction: StringFunction = {
  ts: `
export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ${MODEL_TYPES}[T] ? ${MODEL_TYPES}[T][Z] | Promise<${MODEL_TYPES}[T][Z]> : any
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
