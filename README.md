
![](images/zeus.gif)


[![npm](https://img.shields.io/npm/v/graphql-zeus.svg)](https://www.npmjs.com/package/graphql-zeus) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

GraphQL Zeus creates autocomplete client library for `Javascript` or `Typescript` which provides autocompletion for strongly typed queries.

## How it works

Given the following schema [Olympus Cards](https://app.graphqleditor.com/aexol/olympus)

![](images/autocomplete-greek.gif)

Play with it

```sh
$ zeus -u https://faker.graphqleditor.com/aexol/olympus/graphql ./generated
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

### In Project

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