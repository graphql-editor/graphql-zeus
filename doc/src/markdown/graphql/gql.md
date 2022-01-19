---
link: graphql/gql
title: Gql string
order: 4
---

Use Zeus to generate gql string

```js
import { Zeus } from './zeus';
const createCards = async () => {
  const stringGql = Zeus('query', {
    listCards: {
      name: true,
      skills: true,
      Attack: true,
    },
  });
  // query{listCards{name skills Attack}}
};
createCards();
```
