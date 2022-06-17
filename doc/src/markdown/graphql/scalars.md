---
link: graphql/scalars
title: Scalars
order: 6
category: GraphQL
---

## Scalars

In Zeus you can encode and decode scalars

### Decode

Decode function is called every time scalar returns from backend before passing the result from Chain,Subscription functions

```gql
scalar JSON
scalar Datetime
type Card{
    info: JSON!
    createdAt: Datetime
}
type Query:{
    drawCard: Card!
}
```

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const data = await chain('query', {
  scalars: {
    JSON: {
      encode: (e: unknown) => JSON.stringify(e),
      decode: (e: unknown) => JSON.parse(e as string),
    },
    Datetime: {
      decode: (e: unknown) => new Date(e as string),
      encode: (e: unknown) => (e as Date).toISOString(),
    },
  },
})({
  drawCard: {
    info: true,
  },
});
```

So the `data.drawCard.info` will be of type `Date` as provided by decoder `ReturnType`

### Encode Scalars

You can also encode scalars before sending them to backend

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query', {
  scalars: {
    JSON: {
      encode: (e: unknown) => JSON.stringify(e),
      decode: (e: unknown) => JSON.parse(e as string),
    },
    Datetime: {
      decode: (e: unknown) => new Date(e as string),
      encode: (e: unknown) => (e as Date).toISOString(),
    },
  },
})({
  drawCard: {
    info: true,
  },
});
```

Encoders require value to be encoded to string and don't work with variables yet.

## Place decoders and encoders in one place for reuse

```ts
import { Chain, ZeusScalars } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');
const scalars = ZeusScalars({
  JSON: {
    encode: (e: unknown) => JSON.stringify(e),
    decode: (e: unknown) => JSON.parse(e as string),
  },
  Datetime: {
    decode: (e: unknown) => new Date(e as string),
    encode: (e: unknown) => (e as Date).toISOString(),
  },
});

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query', {
  scalars,
})({
  drawCard: {
    info: true,
  },
});
```
