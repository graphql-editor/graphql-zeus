
![](images/zeus.gif)


[![npm](https://img.shields.io/npm/v/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![npm downloads](https://img.shields.io/npm/dt/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus)

GraphQL Zeus creates autocomplete client library for `JavaScript` or `TypeScript` which provides autocompletion for strongly typed queries.

Supported Languages:
- Javascript
  - Browser
  - NodeJS
  - React Native
- TypeScript
  - Browser
  - NodeJS
  - React Native
## How it works

Given the following schema [Olympus Cards](https://app.graphqleditor.com/aexol/olympus)

![](images/autocomplete-greek.gif)

## Table of contents
- [How it works](#how-it-works)
- [Table of contents](#table-of-contents)
- [License](#license)
- [How to use](#how-to-use)
  - [As a CLI](#as-a-cli)
    - [Installation](#installation)
    - [Usage with JavaScript](#usage-with-javascript)
    - [Usage with TypeScript](#usage-with-typescript)
    - [Usage with NodeJS](#usage-with-nodejs)
    - [Usage with React Native](#usage-with-react-native)
    - [Load from URL](#load-from-url)
  - [Use generated client example](#use-generated-client-example)
    - [Perform query with Chain](#perform-query-with-chain)
    - [Unions](#unions)
    - [Perform query with aliases](#perform-query-with-aliases)
    - [Gql string](#gql-string)
    - [JavaScript Type Casting](#javascript-type-casting)
    - [Typescript SelectionSet](#typescript-selectionset)
  - [Spec](#spec)
    - [Use Alias Spec](#use-alias-spec)
  - [Use In your Project to generate code](#use-in-your-project-to-generate-code)
  - [Use in your project to dynamically fetch schema](#use-in-your-project-to-dynamically-fetch-schema)
- [Support](#support)
- [Contribute](#contribute)
- [Parsing](#parsing)


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

```sh
$ zeus schema.graphql ./
```
It will also generate corresponding out.d.ts file so you can have autocompletion,

#### Usage with TypeScript
```sh
$ zeus schema.graphql ./  --ts 
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
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated
```

With Authorization header

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated --header=Authorization:dsadasdASsad
```

### Use generated client example

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated
```

#### Perform query with Chain

```js
import { Chain } from './graphql-zeus';
const createCards = async () => {
  const chain = Chain('https://faker.graphqleditor.com/aexol/olympus/graphql');
  const listCardsAndDraw = await chain.Query({
    cardById: [
      {
        cardId: 'sdsd'
      },
      {
        description: true
      }
    ],
    listCards: {
      name: true,
      skills: true,
      attack: [
        { cardID: ['s', 'sd'] },
        {
          name: true
        }
      ]
    },
    drawCard: {
      name: true,
      skills: true,
      Attack: true
    }
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
//                     "name": "Theodore"
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
//         {
//             "attack": [
//                 {
//                     "name": "Kyle"
//                 },
//             ],
//             "name": "Arlene",
//             "skills": [
//                 "FIRE",
//             ]
//         }
//     ]
// }
```

#### Unions

You can use Zeus with unions:

```js
const { drawChangeCard } = await chain.Query({
    drawChangeCard: {
      __typename: true,
      '...on EffectCard': {
        effectSize: true,
        name: true
      },
      '...on SpecialCard': {
        effect: true,
        name: true
      }
    }
});
// drawChangeCard result:
// {
//     "effectSize": 195.99532210956377,
//     "name": "Destinee",
//     "__typename": "EffectCard"
// }
```

#### Perform query with aliases

```js
const aliasedQueryExecute = await chain.Query({
    listCards: {
      __alias: {
        atak: {
          attack: [
            { cardID: ["1"] },
            {
              name: true,
              description: true,
            },
          ],
        },
      },
    },
  });
// RESULT
// {
//     "listCards": [
//         {
//             "atak": {
//                 "attack": [
//                     {
//                         "name": "Zelma",
//                         "description": "Central"
//                     }
//                 ]
//             }
//         }
//     ]
// }
```
So you can access properties type-safe like this

```js
aliasedQueryExecute.listCards.map(c=>c.atak.attack)
```


#### Gql string
Use Zeus to generate gql string

```js
import { Zeus } from './graphql-zeus';
const createCards = async () => {
  const stringGql = Zeus.Query({
    listCards: {
      name: true,
      skills: true,
      Attack: true
    }
  });
  // query{listCards{name skills Attack}}
};
createCards();

```

To run the example navigate to: `./example` and run
```sh
$ npm i
```

then run 

```
$ npm run start
```

Use `Api` for single queries mutations and `Chain` for query chaining

#### JavaScript Type Casting
You can cast your response from fetch/apollo/other-lib  to correct type even if you are using JavaScript:

```js
import { Cast } from './graphql-zeus';
const myQuery = Cast.Query(myLib("somegraphqlendpoint"))
```

#### Typescript SelectionSet

In TypeScript you can make type-safe selection sets to reuse them across queries
You can use Selectors on operations or ZeusSelect on concrete type
```ts
import { ZeusSelect, Selectors, Chain, Card } from './graphql-zeus';
const chain = Chain('https://faker.graphqleditor.com/aexol/olympus/graphql');

const { drawCard: cardSelector } = Selectors.Query({
  drawCard: {
    name: true,
    description: true,
    Attack: true,
    skills: true,
    Defense: true,
    cardImage: {
      key: true,
      bucket: true
    }
  }
});

const cardSelector2 = ZeusSelect<Card>()({
  name: true,
  description: true,
  Attack: true,
  skills: true,
  Defense: true,
  cardImage: {
    key: true,
    bucket: true
  }
});

const queryWithSelectionSet = await chain.Query({
  drawCard: cardSelector,
  listCards: cardSelector2,
});
```

### Spec

Promise of type query data object is returned.

```
PROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({
    ...FUNCTION_FIELD_PARAMS
})(
    ...QUERY_OBJECT
).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )
```

Simple function params object

```
FUNCTION_FIELD_PARAMS = {
  KEY: VALUE
}
```

Query object 

```
QUERY_OBJECT = {
    ...RETURN_PARAMS
}
```

Return params is an object containg RETURN_KEY - true if it is a `scalar`, RETURN_PARAMS if `type` otherwise it is a function where you pass Fiel params and type return params.


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

#### Use Alias Spec

```
RETURN_PARAMS = {
  __alias: RETURN_PARAMS
}
```

Access aliased operation type-safe
```
PROMISE_RETURNING_OBJECT[ALIAS_STRING][OPERATION_NAME]
```

### Use In your Project to generate code 

This will be rarely used, but here you are!

```js
import { Parser,TreeToTS } from 'graphql-zeus';

const schemaFileContents = `
type Query{
    hello: String!
}
schema{
    query: Query
}
`

const typeScriptDefinition = TreeToTS.resolveTree(Parser.parse(schemaFileContents));

const jsDefinition = TreeToTS.javascript(Parser.parse(schemaFileContents));
```

### Use in your project to dynamically fetch schema

This is useful when you need some schema fetched from your GraphQL endpoint

```js
import { Utils } from 'graphql-zeus';

Utils.getFromUrl("https://faker.graphqleditor.com/aexol/olympus/graphql").then(schemaContent => {
  // Use schema content here
})

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
