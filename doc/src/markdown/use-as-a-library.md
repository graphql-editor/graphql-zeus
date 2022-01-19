---
link: library
title: Use as a library
order: 5
---

### Use In your Project to generate code

This will be rarely used, but here you are!

```js
import { TreeToTS } from 'graphql-zeus';
import { Parser } from 'graphql-js-tree';

const schemaFileContents = `
type Query{
    hello: String!
}
schema{
    query: Query
}
`;

const typeScriptDefinition = TreeToTS.resolveTree(Parser.parse(schemaFileContents));

const jsDefinition = TreeToTS.javascript(Parser.parse(schemaFileContents));
```

### Use in your project to dynamically fetch schema

This is useful when you need some schema fetched from your GraphQL endpoint

```js
import { Utils } from 'graphql-zeus';

Utils.getFromUrl('https://faker.graphqleditor.com/a-team/olympus/graphql').then((schemaContent) => {
  // Use schema content here
});
```
