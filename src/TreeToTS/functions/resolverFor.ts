import { MODEL_TYPES } from '@/TreeToTS/templates/returnedModelTypes';
import { StringFunction } from './models';

export const resolverForFunction: StringFunction = {
  ts: `
export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ${MODEL_TYPES}[T] ? ${MODEL_TYPES}[T][Z] | Promise<${MODEL_TYPES}[T][Z]> | X : any
>(
  type: T,
  field: Z,
  fn: Y,
) => fn as (args?: any,source?: any) => any;
`,
  js: `
export const resolverFor = (
  type,
  field,
  fn
) => fn;
`,
};
