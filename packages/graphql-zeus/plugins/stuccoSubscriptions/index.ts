import { OperationType, ParserTree, TypeSystemDefinition, getTypeName } from 'graphql-js-tree';

export const pluginStucco = ({ tree, esModule }: { tree: ParserTree; esModule?: boolean }) => {
  const subscriptionNode = tree.nodes
    .find((n) => n.data.type === TypeSystemDefinition.SchemaDefinition)
    ?.args.find((a) => a.name === OperationType.subscription);
  if (!subscriptionNode) {
    throw new Error('Schema does not have any subscriptions');
  }
  const sNodeType = getTypeName(subscriptionNode.type.fieldType);
  return {
    ts: `/* eslint-disable */
import { fullSubscriptionConstruct, chainOptions, GraphQLTypes, OperationOptions, SubscriptionToGraphQL, ValueTypes } from './index${
      esModule ? '.js' : ''
    }';

export type WebsocketSubscription = {
  ws: WebSocket;
  on: (...args: unknown[]) => void;
  off: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  open: (...args: unknown[]) => void;
};


export const stuccoSubscriptions = <S extends "${sNodeType}">(
  subscriptionConnectionFunction: (params: { result: unknown; query: string }) => Promise<WebsocketSubscription>,
  ...options: chainOptions
) => <Z extends ValueTypes[S]>(o: Z | ValueTypes[S], ops?: OperationOptions) =>
  fullSubscriptionConstruct(async (query) => {
    const result = await fetch(options[0], {
      body: JSON.stringify({ query }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options[1],
    }).then((r) => r.json());
    const sub = await subscriptionConnectionFunction({ result, query });
    return {
      ...sub,
      on: (fn: (args: any) => void) => {
        sub.on(async (subscriptionPayload?: unknown) => {
          const headers = options.length > 1 ? options[1]?.headers : {};
          const response = await fetch(options[0], {
            method: 'POST',
            headers,
            body: JSON.stringify({ query, rawSubscription: true, subscriptionPayload }),
          }).then((r) => r.json());
          fn(response.data);
        });
      },
    };
  })('subscription')(o as any, ops) as SubscriptionToGraphQL<Z, GraphQLTypes[S], {}>;
`,
  };
};
