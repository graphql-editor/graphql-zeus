---
link: selector
title: Selector
order: 1
category: Basics
---

## Generate Reusable Selection Sets

In TypeScript Zeus can help make type-safe Zeus selection sets to reuse across queries.

```ts
import { Selector, Chain } from './zeus';

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

## Inferring the response type

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
