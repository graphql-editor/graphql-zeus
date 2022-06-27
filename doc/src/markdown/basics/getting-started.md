---
link: getting-started
title: Getting Started
order: 0
category: Basics
---

## Getting Started

Use the Zeus CLI to generate types and GraphQL clients based on your schema which you can then import into your projects to autocomplete, query and use GraphQL responses in a type-safe way.

## Quick Start

### Installation

```sh
$ npm i -g graphql-zeus
# OR
# yarn global add graphql-zeus
```

You can also install locally to a project and then use as a npm or yarn script command or with `npx` or `yarn` directly eg:

```sh
$ npx zeus schema.graphql ./
# OR
# yarn zeus schema.graphql ./
```

### TypeScript

Zeus is Typescript native, you can refer to imported types directly from the generated output of the CLI

```sh
$ zeus schema.graphql ./
```

## Demo Endpoint

All demo code here is using the demo GraphQL endpoint of [Olympus Cards](https://app.graphqleditor.com/a-team/olympus) built with [GraphQL Editor](https://graphqleditor.com/). Feel free to check out the [GraphiQL interface](https://faker.graphqleditor.com/a-team/olympus/graphql) too.

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
      { cardID: ['66c1af53-7d5e-4d89-94b5-1ebf593508f6', 'fc0e5757-4d8a-4f6a-a23b-356ce167f873'] },
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

When querying a GraphQL field which takes an argument such as `cardById` above, then the fields are defined in terms of a tuple eg: cardById: `[ {...arguments} , {...response_selection_set} ]` the equivalent in gql syntax would be:

```text
cardById (cardId: "da21ce0a-40a0-43ba-85c2-6eec2bf1ae21") {
  name
  description
}
```

For fields which have no argument they receive only the response selection set object values.

Note: `Chain` will also accept a second argument of fetch-like options to configure the client with properties such as `credentials`, `mode`, `headers` etc...

Note: There is also an exported Zeus `Gql` convenience function is a Chain client pre-configured with the endpoint specified in the CLI.

## Listen on a WebSocket - GraphQL Subscriptions

Use the Zeus `Subscription` client creator in your generated output to create WebSocket connections to your GraphQL socket.

```ts
import { Subscription } from './zeus';

// Create a Subscription client instance with the endpoint
const sub = Subscription('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Call the client instance and listen for responses
sub('subscription')({
  deck: {
    id: true,
  },
}).on((response) => {
  console.log(response.deck);
});
```

[Read more about subscriptions](./subscriptions)

## Usage with NodeJS

Generates clients for use with Node.js

```sh
$ zeus schema.graphql ./  --node
```

## Usage with React Native

As normal

```sh
$ zeus schema.graphql ./
```

## Other CLI Options

Specify the output folder with second argument

```sh
$ zeus schema.graphql ./generated
```

Output Typescript Only with `--typescript` flag

```sh
$ zeus schema.graphql ./ --typescript
```

Load your schema from an URL with an URL in the first argument

```sh
$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./
```

Download and save GraphQL schema to a local path with `--graphql=savePath` flag

```sh
$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --graphql=generated
```

Generate and save a JSON schema to a local path with `--jsonSchema=savePath` flag

```sh
$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --graphql=generated
```

Add a header value with `--header=value` flag

```sh
$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --header=Authorization:myNiceAuthHeader
```

Get help with Zeus CLI with:

```sh
$ zeus help
```

### Tip:

Add a script entry in your `package.json` file for quickly calling Zeus generation:

```json
"scripts": {
//...
"generate": "zeus https://faker.graphqleditor.com/a-team/olympus/graphql zeusGenerated --typescript --header='My-Auth-Secret:JsercjjJY5MmghtHww6UF' --apollo"
},
```
