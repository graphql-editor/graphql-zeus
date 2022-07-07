---
link: subscriptions
title: Subscriptions
order: 8
category: Basics
---

## Subscriptions

Zeus supports [GraphQL over WebSocket subscriptions](https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md) out-of-the-box and is compatible with many popular GraphQL servers.

Two implementations are supported:

- **graphql-ws**: the modern WebSocket-based transport, implemented by [the graphql-ws package](https://www.npmjs.com/package/graphql-ws). It is the standard [used by Apollo](https://www.apollographql.com/docs/react/data/subscriptions/#choosing-a-subscription-library).
- **legacy** (default): a transport based on raw WebSockets.

### Generating the client

To use [graphql-ws](https://www.npmjs.com/package/graphql-ws) as your subscription transport you'll need to do the following:

```sh
# Generate the client
zeus schema.gql ./ --subscriptions graphql-ws
# Add graphql-ws to your project's dependencies
npm install graphql-ws
```

If you want to use **legacy**, use `--subscriptions legacy` instead. You may need to install [ws](https://www.npmjs.com/package/ws) depending on your setup.

No matter what implementation you chose, usage is the same:

```ts
// Create a new Subscription with some authentication headers
const wsChain = Subscription('wss://localhost:4000/graphql', {
  get headers() {
    return { Authorization: `Bearer ${getToken()}` };
  },
});

// Subscribe to new messages
wsChain('subscription')({
  message: {
    body: true,
  },
}).on(({ message }) => {
  console.log(message.body);
});
```

If you need to unsubscribe from a subscription (e.g. you are developing as Single Page App), you can do as follows:

```ts
// Subscribe to new messages
const onMessage = wsChain('subscription')({
  message: {
    body: true,
  },
});
onMessage.on(({ message }) => {
  console.log(message.body);
});

// Close the underlying connection
onMessage.ws.close();
```

While you may use `wsChain('query')` or `wsChain('mutation')`, [Apollo strongly discourages this practice.](https://www.apollographql.com/docs/react/data/subscriptions/#3-split-communication-by-operation-recommended)
