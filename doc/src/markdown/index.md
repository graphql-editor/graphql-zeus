---
link: ''
title: ''
---

![](images/zeus.gif)

[![npm](https://img.shields.io/npm/v/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![npm downloads](https://img.shields.io/npm/dt/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus)

GraphQL Zeus creates autocomplete client library for `JavaScript` or `TypeScript` which provides autocompletion for strongly typed queries.

⚡⚡ From version 2.0 Zeus support mapped types

⚡⚡⚡ From version 3.0 Zeus supportsnp

- JSON schema generation
- Subscriptions
- ZeusHook Type for extracting the response type

Supported Languages:

- Javascript
  - Browser
  - NodeJS
  - React Native
- TypeScript
  - Browser
  - NodeJS
  - React Native

⚡⚡⚡⚡ From version 4.0 Zeus supports

- huuuuuge schemas

## How it works

Given the following schema [Olympus Cards](https://app.graphqleditor.com/a-team/olympus)

![](images/zeusexample.gif)

## Table of contents

- [How it works](#how-it-works)
- [Table of contents](#table-of-contents)
- [License](#license)
- [How to use](#how-to-use)
  - [As a CLI](#as-a-cli)
    - [Installation](#installation)
    - [Usage with JavaScript](#usage-with-javascript)
    - [Usage with TypeScript](#usage-with-typescript)
      - [Inferring the response type](#inferring-the-response-type)
    - [Usage with NodeJS](#usage-with-nodejs)
    - [Usage with React Native](#usage-with-react-native)
    - [Load from URL](#load-from-url)
  - [Use generated client example](#use-generated-client-example)
    - [Perform query with Chain](#perform-query-with-chain)
    - [Listen on a websocket - GraphQL Subscription](#listen-on-a-websocket---graphql-subscription)
    - [Perform query with Thunder - Abstracted Fetch function](#perform-query-with-thunder---abstracted-fetch-function)
- [Support](#support)
- [Contribute](#contribute)
- [Parsing](#parsing)
- [4.0](#40)

## License

MIT

## How to use

Main usage of graphql zeus should be as a CLI.

### As a CLI

#### Installation

Install globally

```sh
$ npm i -g graphql-zeus
```

Of course you can install locally to a project and then use as a npm command or with `npx`

#### Usage with JavaScript

To use with javascript you need to install typescript and transpile generated code to return declaration files

```sh
$ npm i -D typescript
```

Generate zeus

```sh
$ zeus schema.graphql ./
```

And transform it using typescript

```sh
$ npx tsc ./zeus/*.ts --declaration --target es5 --skipLibCheck
```

It will also generate corresponding out.d.ts file so you can have autocompletion,

#### Usage with TypeScript

Zeus is typescript native so just use it normally

```sh
$ zeus schema.graphql ./
```

##### Inferring the response type

Sometimes you would like to infer the response type. The it is best to use selectors

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

You can also use it in useTypedQuery later

```tsx
import { useTypedQuery } from './zeus/apollo';
import { drawCardQuery } from './';

const Main = () => {
  const { data } = useTypedQuery(drawCardQuery);
  return <div>{data.drawCard.name}</div>;
};
```

#### Usage with NodeJS

```sh
$ zeus schema.graphql ./  --node
```

#### Usage with React Native

Same as browser

```sh
$ zeus schema.graphql ./
```

#### Load from URL

```sh
$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./generated
```

With Authorization header

```sh
$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./generated --header=Authorization:dsadasdASsad
```

### Use generated client example

```sh
$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./generated
```

#### Perform query with Chain

```ts
import { Chain } from './zeus';
const createCards = async () => {
  const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');
  const listCardsAndDraw = await chain('query')({
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
};
createCards();
// Result of a query
// {
//     "drawCard": {
//         "Attack": 83920,
//         "name": "Raphaelle",
//         "skills": [
//             "RAIN",
//         ]
//     },
//     "cardById": {
//         "description": "Customer"
//     },
//     "listCards": [
//         {
//             "name": "Lon",
//             "skills": [
//                 "THUNDER"
//             ],
//             "attack": [
//                 {
//                     "name": "Christop"
//                 },
//                 {
//                     "name": "Marcelle"
//                 }
//             ]
//         },
//         {
//             "name": "Etha",
//             "skills": null,
//             "attack": [

//                 {
//                     "name": "Naomie"
//                 }
//             ]
//         },
//     ]
// }
```

#### Listen on a websocket - GraphQL Subscription

This creates websocket connection between your backend GraphQL socket and web browser one.

```ts
const sub = Subscription('https://faker.graphqleditor.com/a-team/olympus/graphql');
sub('subscription')({
  deck: {
    id: true,
  },
}).on((response) => {
  console.log(response.deck);
});
```

#### Perform query with Thunder - Abstracted Fetch function

With thunder you have total control of fetch function not losing the result format the same time.

```js
import { Thunder } from './zeus';
const createCards = async () => {
  const thunder = Thunder(async (query) => {
    const response = await fetch('https://faker.graphqleditor.com/a-team/olympus/graphql', {
      body: JSON.stringify({ query }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
  const listCardsAndDraw = await thunder('query')({
    drawCard: {
      name: true,
      skills: true,
      Attack: true,
    },
  });
};
createCards();
// Result of a query
// {
//     "drawCard": {
//         "Attack": 83920,
//         "name": "Raphaelle",
//         "skills": [
//             "RAIN",
//             "THUNDER",
//         ]
//     },
// }
```

## Support

[Join our GraphQL Editor Channel](https://join.slack.com/t/graphqleditor/shared_invite/enQtNDkwOTgyOTM5OTc1LWI4YjU3N2U5NGVkNzQ2NzY5MGUxMTJiNjFlZDM1Zjc2OWRmNTI0NDM3OWUxYTk4Yjk3MzZlY2QwOWUzZmM2NDI)

Leave a star ;)

## Contribute

For a complete guide to contributing to GraphQL Editor, see the [Contribution Guide](CONTRIBUTING.md).

1.  Fork this repo
2.  Create your feature branch: git checkout -b feature-name
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request

## Parsing

Simplier approach to GraphQL parsing. Using graphql-js library and parsing AST to simplier types.

## 4.0

In 4.0 version syntax changed a little bit to support bigger schemas. We are also supporting huuuuuge schemas now.
