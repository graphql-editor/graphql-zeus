import { StringFunction } from './models';

export const fullChainConstructFunction: StringFunction = {
  ts: `
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, options) => fullChainConstruct(fn)(operation, key)(o as any, options)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;
`,
  js: `
const fullChainConstruct = (fn) => (t,tName) => (o, options) => fn(queryConstruct(t, tName, options ? options.operationName : undefined)(o), options ? options.variables : undefined).then(r => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = (
  fn,
  operation,
  key,
) =>
  ((o, options) => fullChainConstruct(fn)(operation, key)(o, options))
`,
};
