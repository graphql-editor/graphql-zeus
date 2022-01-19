---
link: graphql/interfaces-and-unions
title: Interfaces and Unions
order: 1
---

#### Unions

You can use Zeus with unions:

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
// drawChangeCard result:
// {
//     "effectSize": 195.99532210956377,
//     "name": "Destinee",
//     "__typename": "EffectCard"
// }
```

#### Interfaces

And interfaces.

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
// result
// {
//     "nameables": [
//         {
//             "__typename": "EffectCard",
//             "name": "Hector"
//         },
//         {
//             "__typename": "CardStack",
//             "name": "Scotty",
//             "cards": [
//                 {
//                     "Defense": 1950
//                 },
//                 {
//                     "Defense": 76566
//                 },
//                 {
//                     "Defense": 64261
//                 }
//             ]
//         },
//         {
//             "__typename": "SpecialCard",
//             "name": "Itzel"
//         },
//     ]
// }
```
