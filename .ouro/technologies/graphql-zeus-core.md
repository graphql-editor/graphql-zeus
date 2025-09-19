# graphql-zeus-core — README (from npm)

# Zeus | GraphQL TypeScript generator

Strongly Typed GraphQL from the team at [GraphQL Editor](https://graphqleditor.com/)

GraphQL Zeus is the absolute best way to interact with your GraphQL endpoints in a type-safe way. Zeus uses your schema to generate Typescript types and strongly typed clients to unlock the power, efficiency, productivity and safety of Typescript on your GraphQL requests.

## Features

⚡️ Types mapped from your schema\
⚡️ Works with Apollo Client, React Query, Stucco Subscriptions _(\*more coming soon...)_\
⚡️ Works with Subscriptions\
⚡️ Allows inferring complex response types\
⚡️ Creates reusable selection sets (like fragments) for use across multiple queries\
⚡️ Supports GraphQL Unions, Interfaces, Aliases and Variables\
⚡️ Handles **massive** schemas\
⚡️ Supports Browsers, Node.js and React Native in Javascript and Typescript\
⚡️ Has a schema downloader\
⚡️ Supports JSON schema generation\

## Getting Started | Zeus GraphQL TypeScript generator

Use the Zeus CLI to generate types and GraphQL clients based on your schema, which you can then import into your projects to autocomplete, query and use GraphQL responses in a type-safe way.

# Zeus Spec

To return the promise of type query for data object:

```
PROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({
    ...FUNCTION_FIELD_PARAMS
})(
    ...QUERY_OBJECT
).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )
```

The simple command for object function params:

```
FUNCTION_FIELD_PARAMS = {
  KEY: VALUE
}
```

Query object:

```
QUERY_OBJECT = {
    ...RETURN_PARAMS
}
```

Return params is an object containing RETURN_KEY - true if it is a `scalar`, RETURN_PARAMS if `type`. Otherwise it is a function where you pass field params and type return params.

```
RETURN_PARAMS = {
    RETURN_KEY: true,
    RETURN_KEY: {
        ...RETURN_PARAMS
    },
    RETURN_FUNCTION_KEY:[
        {
            ...FUNCTION_FIELD_PARAMS
        },
        {
            ...RETURN_PARAMS
        }
    ]
}
```

### Use Alias Spec

```
RETURN_PARAMS = {
  __alias: RETURN_PARAMS
}
```

Access aliased operation in a type-safe way:

```
PROMISE_RETURNING_OBJECT[ALIAS_STRING]
```


## Usage

Generated code from TranslateToTS specification

### Tip:

Add a script entry in your `package.json` file for quickly calling Zeus generation:

```json
"scripts": {
//...
"generate": "zeus https://faker.graphqleditor.com/a-team/olympus/graphql zeusGenerated --typescript --header='My-Auth-Secret:JsercjjJY5MmghtHww6UF' --apollo"
},
```

## Demo Endpoint

All demo code here is using the demo GraphQL endpoint of [Olympus Cards](https://app.graphqleditor.com/a-team/olympus){rel="nofollow"} built with [GraphQL Editor](https://graphqleditor.com/). Feel free to check out the [GraphiQL interface](https://faker.graphqleditor.com/a-team/olympus/graphql){rel="nofollow"} too.

## Query With Zeus Chain Client

You can now use the Zeus `Chain` client from the generated output to make type-safe queries and mutations to your endpoint and receive type-safe responses.

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  cardById: [
    {
      cardId: 'da21ce0a-40a0-43ba-85c2-6eec2bf1ae21',
    },
    {
      name: true,
      description: true,
    },
  ],
  listCards: {
    name: true,
    skills: true,
    attack: [
      {
        cardID: [
          '66c1af53-7d5e-4d89-94b5-1ebf593508f6',
          'fc0e5757-4d8a-4f6a-a23b-356ce167f873',
        ],
      },
      {
        name: true,
      },
    ],
  },
  drawCard: {
    name: true,
    skills: true,
    Attack: true,
  },
});
// listCardsAndDraw is now typed as the response of the query.
```

When querying a GraphQL field that takes an argument like `cardById` above, the fields are defined in terms of a tuple for example: cardById: `[ {...arguments} , {...response_selection_set} ]` and the equivalent in gql syntax would be:

```text
cardById (cardId: "da21ce0a-40a0-43ba-85c2-6eec2bf1ae21") {
  name
  description
}
```

For fields that have no argument, they receive only the response selection set object values.

Note: `Chain` will also accept a second argument of fetch-like options to configure the client with properties such as `credentials`, `mode`, `headers` etc...

Note: There is also an exported Zeus `Gql` convenience function in a `Chain` client, pre-configured with the endpoint specified in the CLI.

## Listen on a WebSocket - GraphQL Subscriptions

Use the Zeus `Subscription` client creator in your generated output to create WebSocket connections to your GraphQL socket.

```ts
import { Subscription } from './zeus';

// Create a Subscription client instance with the endpoint
const sub = Subscription(
  'https://faker.graphqleditor.com/a-team/olympus/graphql',
);

// Call the client instance and listen for responses
sub('subscription')({
  deck: {
    id: true,
  },
}).on((response) => {
  console.log(response.deck);
});
```

# Selectors | Zeus GraphQL TypeScript generator

### Generate Reusable Selection Sets

In TypeScript Zeus can help you make type-safe Zeus selection sets to reuse across queries.

```typescript
import { Selector, Chain } from './zeus';

const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

const cardSelector = Selector('Card')({
  name: true,
  description: true,
  Attack: true,
  skills: true,
  Defense: true,
  cardImage: {
    key: true,
    bucket: true,
  },
});

const queryWithSelectionSet = await chain('query')({
  drawCard: cardSelector,
});
```

### Inferring the response type

Sometimes you might want to infer the response type. In that case, it is best to use selectors:

```tsx
import { Selector, InputType, GraphQLTypes } from './zeus';

export const drawCardQuery = Selector("Query"){
  drawCard: {
    Attack: true,
    Children: true,
    id: true,
  },
});

type InferredResponseType = InputType<GraphQLTypes['Query'], typeof drawCardQuery>;
```

# Custom fetch

Use the Zeus `Thunder` to get total control over the fetch function and ensure you won't lose the result type. ⚡️

```typescript
import { Thunder } from './zeus';

// Create thunder fetch client with endpoint, options and response handlers
const thunder = Thunder(async (query) => {
  const response = await fetch(
    'https://faker.graphqleditor.com/a-team/olympus/graphql',
    {
      body: JSON.stringify({ query }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }

  const json = await response.json();

  return json.data;
});

// Call thunder client with type-safe arguments, fields and get type-safe result type
const listCardsAndDraw = await thunder('query')({
  cardById: [
    {
      cardId: 'sdsd',
    },
    {
      description: true,
    },
  ],
  listCards: {
    name: true,
    skills: true,
    attack: [
      { cardID: ['s', 'sd'] },
      {
        name: true,
      },
    ],
  },
  drawCard: {
    name: true,
    skills: true,
    Attack: true,
  },
});
```

# Interfaces and Unions

### GraphQL Unions

You can use Zeus with [GraphQL Unions](https://spec.graphql.org/June2018/#sec-Unions):

```typescript
const { drawChangeCard } = await chain('query')({
  drawChangeCard: {
    __typename: true,
    '...on EffectCard': {
      effectSize: true,
      name: true,
    },
    '...on SpecialCard': {
      effect: true,
      name: true,
    },
  },
});
```

and it will give you this response:

```json
{
  "effectSize": 195.99532210956377,
  "name": "Destinee",
  "__typename": "EffectCard"
}
```

### GraphQL Interfaces

Zeus also works with [GraphQL Interfaces](http://spec.graphql.org/June2018/#sec-Interfaces)

```typescript
const { nameables } = await Gql('query')({
  nameables: {
    __typename: true,
    name: true,
    '...on CardStack': {
      cards: {
        Defense: true,
      },
    },
    '...on Card': {
      Attack: true,
    },
  },
});
```

giving the following response:

```json
{
  "nameables": [
    {
      "__typename": "EffectCard",
      "name": "Hector"
    },
    {
      "__typename": "CardStack",
      "name": "Scotty",
      "cards": [
        {
          "Defense": 1950
        },
        {
          "Defense": 76566
        }
      ]
    },
    {
      "__typename": "SpecialCard",
      "name": "Itzel"
    }
  ]
}
```

# Aliases 

Zeus supports declaring aliases by using:

```graphql
const aliasedQueryExecute = await chain('query')({
  listCards: {
    __alias: {
      atak: {
        attack: [
          { cardID: ['1'] },
          {
            name: true,
            description: true,
          },
        ],
      },
    },
  },
});
```

and this is the response:

```json
{
  "listCards": [
    {
      "atak": [
        {
          "name": "Zelma",
          "description": "Central"
        }
      ]
    }
  ]
}
```

Now you can access properties in a type-safe way like this:

```javascript
aliasedQueryExecute.listCards.map((c) => c.atak);
```

# Directives

Zeus supports using directives on fields.

```typescript
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  drawCard: {
    name: true,
    skills: true,
    Attack: `@skip(if: true)`,
  },
});
```

remember that you need to put in the full string instead of `true`.

## Use on object field

Use directive on `drawCard`

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  drawCard: {
    __directives: `@skip(if:true)`,
    name: true,
    skills: true,
  },
});
```

## Use on function

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  drawCard: {
    name: true,
    skills: true,
    attack: [
      {
        cardId: ['2312321'],
      },
      {
        __directives: `@skip(if:true)`,
        name: true,
        skills: true,
      },
    ],
  },
});
```

## Use it with variables

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');
const variables = useZeusVariables({
    isDefense: 'Boolean!'
})({
    isDefense:true
});
const { $ } = variables;
// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  drawCard: {
    name: true,
    skills: true,
    Attack: `@skip(if: ${$('isDefense')})`,
  },
  {
      variables
  }
});
```

# Variables 

It's simple to perform queries with variables by using the `useZeusVariables` function. It also forces you to be type-safe.

```ts
import { Gql, $ } from './zeus';

const addCardResult = await Gql('mutation')(
  {
    addCard: [
      {
        card: $('card'),
      },
      {
        id: true,
        description: true,
        name: true,
        Attack: true,
        skills: true,
        Children: true,
        Defense: true,
        cardImage: {
          bucket: true,
          region: true,
          key: true,
        },
      },
    ],
  },
  {
    variables: {
      Attack: 2,
      Defense: 3,
      description: 'Lord of the mountains',
      name: 'Golrog',
    },
  },
);
```

## TypedDocumentNode + Apollo Client useMutation examples

The following example demonstrates usage with Apollo. Other clients should work similarly.

```tsx
import { typedGql } from './zeus/typedDocumentNode';
import { $ } from './zeus';
import { useMutation } from '@apollo/client';

const myMutation = typedGql('mutation')({
  cardById: [{ cardId: $('cardId', 'String!') }, { name: true }],
});

const Main = () => {
  const [mutate] = useMutation(myMutation);
  // data response is typed
  return (
    <div
      onClick={() => {
        // this are typesafe vars
        mutate({
          variables: {
            cardId: 'du1hn298u1eh',
          },
        });
      }}>
      Click
    </div>
  );
};
```

# Scalars

Zeus supports encoding and decoding scalars

## Decode

The decode function is called every time a scalar returns from the backend, before passing the result from `Chain` Subscription functions

```graphql
scalar JSON
scalar Datetime
type Card{
    info: JSON!
    createdAt: Datetime
}
type Query:{
    drawCard: Card!
}
```

```typescript
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const data = await chain('query', {
  scalars: {
    JSON: {
      encode: (e: unknown) => JSON.stringify(e),
      decode: (e: unknown) => JSON.parse(e as string),
    },
    Datetime: {
      decode: (e: unknown) => new Date(e as string),
      encode: (e: unknown) => (e as Date).toISOString(),
    },
  },
})({
  drawCard: {
    info: true,
  },
});
```

The `data.drawCard.info` will be of type `Date` as provided by the decoder `ReturnType`

## Encode Scalars

You can also encode scalars before sending them to the backend:

```typescript
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query', {
  scalars: {
    JSON: {
      encode: (e: unknown) => JSON.stringify(e),
      decode: (e: unknown) => JSON.parse(e as string),
    },
    Datetime: {
      decode: (e: unknown) => new Date(e as string),
      encode: (e: unknown) => (e as Date).toISOString(),
    },
  },
})({
  drawCard: {
    info: true,
  },
});
```

Encoders require values to be encoded to the string and don't work with variables yet.

## Place decoders and encoders in one place for reuse

```typescript
import { Chain, ZeusScalars } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');
const scalars = ZeusScalars({
  JSON: {
    encode: (e: unknown) => JSON.stringify(e),
    decode: (e: unknown) => JSON.parse(e as string),
  },
  Datetime: {
    decode: (e: unknown) => new Date(e as string),
    encode: (e: unknown) => (e as Date).toISOString(),
  },
});

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query', {
  scalars,
})({
  drawCard: {
    info: true,
  },
});
# Subscriptions

Zeus supports [GraphQL over WebSocket subscriptions](https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md) out-of-the-box and is compatible with many popular GraphQL servers.

Two implementations are supported:

* **graphql-ws**: the modern WebSocket-based transport, implemented by [the graphql-ws package](https://www.npmjs.com/package/graphql-ws). It is also the standard [used by Apollo](https://www.apollographql.com/docs/react/data/subscriptions/#choosing-a-subscription-library)
* **legacy** (default): a transport based on raw WebSockets

## Generating the client

To use [graphql-ws](https://www.npmjs.com/package/graphql-ws) as your subscription transport you'll need to do the following:

```
# Generate the client
zeus schema.gql ./ --subscriptions graphql-ws
# Add graphql-ws to your project's dependencies
npm install graphql-ws
```

If you want to use the **legacy** method, use the `--subscriptions legacy` flag instead. You may need to install [ws](https://www.npmjs.com/package/ws) depending on your setup.

No matter what implementation you chose, the usage remains the same:

```typescript
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

If you need to unsubscribe from a subscription (e.g. you are developing a Single Page App), you can do it as follows:

```typescript
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

While you can use `wsChain('query')` or `wsChain('mutation')`, [Apollo strongly discourages this practice.](https://www.apollographql.com/docs/react/data/subscriptions/#3-split-communication-by-operation-recommended)