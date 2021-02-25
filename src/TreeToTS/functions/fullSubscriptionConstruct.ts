import { StringFunction } from './models';

export const fullSubscriptionConstruct: StringFunction = {
  ts: `
const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, variables?: Record<string, any>) =>
  fn(queryConstruct(t, tName)(o), variables);

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullSubscriptionConstruct(fn)(operation, key)(o as any, variables)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;
`,
  js: `
const fullSubscriptionConstruct = (fn) => (
  t,
  tName,
) => (o, variables) =>
  fn(queryConstruct(t, tName)(o), variables);
  
export const fullSubscriptionConstructor = (
  fn,
  operation,
  key,
) =>
  ((o, variables) => fullSubscriptionConstruct(fn)(operation, key)(o, variables))
`,
};
