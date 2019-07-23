
![](images/zeus.gif)


[![npm](https://img.shields.io/npm/v/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![npm downloads](https://img.shields.io/npm/dm/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus)

GraphQL Zeus creates autocomplete client library for `Javascript` or `Typescript` which provides autocompletion for strongly typed queries.

## How it works

Given the following schema [Olympus Cards](https://app.graphqleditor.com/aexol/olympus)

![](images/autocomplete-greek.gif)

Play with it

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated
```

```js
import { Api } from "./generated/graphql-zeus"
```

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

#### Usage with Javascript

```sh
$ zeus schema.graphql ./
```
It will also generate corresponding out.d.ts file so you can have autocompletion,

#### Usage with TypeScript
```sh
$ zeus schema.graphql ./  --ts 
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

```js
import { Api } from './graphql-zeus';

// This will return Card object with ID only
const createCards = async () => {
  let ZeusCard = await Api(
    'https://faker.graphqleditor.com/aexol/olympus/graphql'
  ).Mutation.addCard({
    card: {
      name: 'Zeus',
      description:
        "Sky and Thunder god, rules olympus. Hasn't devoured any children. Zeus' father, Cronus ate all of his children except for Zeus.",
      Attack: 10,
      Defense: 5,
      Children: 92 // YES!
    }
  })({
    id: true
  });
  let DionysusCard = await Api(
    'https://faker.graphqleditor.com/aexol/olympus/graphql'
  ).Mutation.addCard({
    card: {
      name: 'Dionysus',
      description:
        'Dionysus is the Greek god of wine, has the power to bring the dead back to life.',
      Attack: 1,
      Defense: 15,
      Children: 9
    }
  })({
    id: true,
    name: true
  });
   // Query chaining example
  const listCardsAndDraw = await chain.Query({
    listCards: {
      name: true,
      skills: true
    },
    drawCard: {
      name: true,
      skills: true,
      Attack: true
    }
  });
  console.log(listCardsAndDraw)
  // How to call graphql functions on objects
  const [UpdatedDionysusCard, UpdatedZeusCard] = (await Api(
    'https://faker.graphqleditor.com/aexol/olympus/graphql'
  ).Query.cardById({
    cardId: DionysusCard.id
  })({
    attack: [
      {
        cardID: [ZeusCard.id]
      },
      {
        id: true,
        Attack: true,
        Children: true,
        Defense: true,
        description: true,
        name: true
      }
    ]
  })).attack;
  console.log(UpdatedDionysusCard);
  console.log(UpdatedZeusCard);
};

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

### Spec

Promise of type query data object is returned.

```
PROMISE_RETURNING_OBJECT = Api.[OPERATION_NAME].[OPERATION_FIELD]({
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

## Contribute

For a complete guide to contributing to GraphQL Editor, see the [Contribution Guide](CONTRIBUTING.md).

1.  Fork this repo
2.  Create your feature branch: git checkout -b feature-name
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request

### Parsing

Simplier approach to GraphQL parsing. Using graphql-js library and parsing AST to simplier types.