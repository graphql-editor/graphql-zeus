import { OperationType, ParserTree } from 'graphql-js-tree';

export const pluginStucco = ({ tree, esModule }: { tree: ParserTree; esModule?: boolean }) => {
  const subscriptionNode = tree.nodes.find(
    (n) => n.type.operations && n.type.operations.includes(OperationType.subscription),
  );
  if (!subscriptionNode) {
    throw new Error('Schema does not have any subscriptions');
  }
  return {
    ts: `/* eslint-disable */
import { fullSubscriptionConstructor, chainOptions, apiFetch, apiSubscription } from './index${esModule ? '.js' : ''}';
export const stuccoSubscriptions = (extractPayload: (result: unknown) => chainOptions, ...options: chainOptions) =>
fullSubscriptionConstructor(
  async (query) => {
    const result: unknown = await apiFetch(options)(query);
    const sub = apiSubscription(extractPayload(result))(query);
    return {
      ...sub,
      on: (fn: (args: any) => void) => {
        sub.on(async (subscriptionPayload) => {
          const headers = options.length > 1 ? options[1]?.headers : {};
          const response = await fetch(options[0], {
            method: 'POST',
            headers,
            body: JSON.stringify({ query, rawSubscription: true, subscriptionPayload }),
          }).then((r) => r.json());
          fn(response);
        });
      },
    };
  },
  'subscription',
  '${subscriptionNode.name}',
);
`,
    js: {
      code: `/* eslint-disable */
import { fullSubscriptionConstructor, chainOptions, apiFetch, apiSubscription } from './index';
export const stuccoSubscriptions = (extractPayload, ...options) =>
fullSubscriptionConstructor(
  async (query) => {
    const result = await apiFetch(options)(query);
    const sub = apiSubscription(extractPayload(result))(query);
    return {
      ...sub,
      on: (fn) => {
        sub.on(async (subscriptionPayload) => {
          const headers = options.length > 1 ? options[1]?.headers : {};
          const response = await fetch(options[0], {
            method: 'POST',
            headers,
            body: JSON.stringify({ query, rawSubscription: true, subscriptionPayload }),
          }).then((r) => r.json());
          fn(response);
        });
      },
    };
  },
  'subscription',
  '${subscriptionNode.name}',
);`,
      definitions: `/* eslint-disable */
import { SubscriptionToGraphQL, GraphQLTypes, ValueTypes } from './index';

export declare const stuccoSubscriptions: <R extends keyof ValueTypes>(
  extractPayload: (result: unknown) => chainOptions,
  ...options: chainOptions
) => SubscriptionToGraphQL<ValueTypes[R], GraphQLTypes[R]>;
`,
    },
  };
};
