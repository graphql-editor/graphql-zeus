import { StringFunction } from './models';

export const fullSubscriptionConstruct: StringFunction = {
  ts: `
const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, options) => fullSubscriptionConstruct(fn)(operation, key)(o as any, options)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;
`,
  js: `
const fullSubscriptionConstruct = (fn) => (
  t,
  tName,
) => (o, options) =>
  fn(queryConstruct(t, tName, options ? options.operationName : undefined)(o));
  
export const fullSubscriptionConstructor = (
  fn,
  operation,
  key,
) =>
  ((o, options) => fullSubscriptionConstruct(fn)(operation, key)(o, options))
`,
};
