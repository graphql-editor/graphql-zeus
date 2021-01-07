import { StringFunction } from './models';

export const fullChainConstructFunction: StringFunction = {
  ts: `
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullChainConstruct(fn)(operation, key)(o as any, variables)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;
`,
  js: `
const fullChainConstruct = (fn) => (t,tName) => (o, variables) => fn(queryConstruct(t, tName)(o), variables).then(r => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = (
  fn,
  operation,
  key,
) =>
  ((o, variables) => fullChainConstruct(fn)(operation, key)(o, variables))
`,
};
