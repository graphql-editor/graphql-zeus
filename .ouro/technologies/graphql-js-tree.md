# graphql-js-tree — README (from npm)

![](images/zeus.gif)

[![npm](https://img.shields.io/npm/v/graphql-js-tree.svg?style=flat-square)](https://www.npmjs.com/package/graphql-js-tree) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![npm downloads](https://img.shields.io/npm/dt/graphql-js-tree.svg?style=flat-square)](https://www.npmjs.com/package/graphql-js-tree)

Simplier approach to GraphQL parsing. Using graphql-js library and parsing AST to simplier types. It is a backbone of `graphql-zeus` and `graphql-editor`

## How it works

### SDL GraphQL

It creates very simple `ParserTree` from GraphQL schema

```js
import { Parser, TreeToGraphQL } from 'graphql-js-tree';

const schemaFileContents = `
type Query{
    hello: String!
}
schema{
    query: Query
}
`;

const parsedSchema = Parser.parse(schemaFileContents);

// Backwards

const graphqlString = TreeToGraphQL.parse(parsedSchema);
```

### GQL

```js
import { parseGql } from 'graphql-js-tree';

const schemaFileContents = `
type Query{
    hello: String!
}
schema{
    query: Query
}
`;

const gqlQuery = `
    query MyQuery{
        hello
    }
`;

const parsedTrees = parseGql(gqlQuery, schemaFileContents);

// Backwards

const gqlString = parseGqlTrees(parsedTrees);
```

## Table of contents

- [How it works](#how-it-works)
  - [SDL GraphQL](#sdl-graphql)
  - [GQL](#gql)
- [Table of contents](#table-of-contents)
- [License](#license)
- [Support](#support)
- [Contribute](#contribute)

## License

MIT

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
