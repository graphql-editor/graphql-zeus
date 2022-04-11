import { ValueTypes, ModelTypes } from '@/TreeToTS/functions/new/mocks';

export const resolverFor = <X, T extends keyof ValueTypes, Z extends keyof ValueTypes[T]>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any, source?: any) => any;
