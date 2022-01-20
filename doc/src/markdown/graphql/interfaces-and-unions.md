---
link: graphql/interfaces-and-unions
title: Interfaces and Unions
order: 1
category: GraphQL
---

## GraphQL Unions

You can use Zeus with [GraphQL Unions](https://spec.graphql.org/June2018/#sec-Unions):

```js
const { drawChangeCard } = await chain('query')({
  drawChangeCard: {
    __typename: true,
    '...on EffectCard': {
      effectSize: true,
      name: true,
    },
    '...on SpecialCard': {
      effect: true,
      name: true,
    },
  },
});
```

Response:

```json
{
  "effectSize": 195.99532210956377,
  "name": "Destinee",
  "__typename": "EffectCard"
}
```

## GraphQL Interfaces

Zeus works with [GraphQL Interfaces](http://spec.graphql.org/June2018/#sec-Interfaces)

```ts
const { nameables } = await Gql('query')({
  nameables: {
    __typename: true,
    name: true,
    '...on CardStack': {
      cards: {
        Defense: true,
      },
    },
    '...on Card': {
      Attack: true,
    },
  },
});
```

Response:

```json
{
  "nameables": [
    {
      "__typename": "EffectCard",
      "name": "Hector"
    },
    {
      "__typename": "CardStack",
      "name": "Scotty",
      "cards": [
        {
          "Defense": 1950
        },
        {
          "Defense": 76566
        }
      ]
    },
    {
      "__typename": "SpecialCard",
      "name": "Itzel"
    }
  ]
}
```
