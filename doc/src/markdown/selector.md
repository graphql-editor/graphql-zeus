---
link: selector
title: Selector
order: 1
---

#### Selector

In TypeScript you can make type-safe selection sets to reuse them across queries.

```ts
import { ZeusSelect, Selector, Chain, ValueTypes } from './zeus';
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
