---
link: graphql/gql
title: Gql string
order: 4
category: GraphQL
---

## Generate GraphQL Gql Strings

Use the `Zeus` function to generate a gql string

```js
import { Zeus } from './zeus';

const stringGql = Zeus('query', {
  listCards: {
    name: true,
    skills: true,
    Attack: true,
  },
});

// stringGql value:
// query{listCards{name skills Attack}}
```
