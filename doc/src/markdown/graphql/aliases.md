---
link: graphql/aliases
title: Aliases
order: 3
---

Perform query with aliases

```ts
const aliasedQueryExecute = await chain("query"){
  listCards: {
    __alias: {
      atak: {
        attack: [
          { cardID: ['1'] },
          {
            name: true,
            description: true,
          },
        ],
      },
    },
  },
});
// RESULT
// {
//     "listCards": [
//         {
//             "atak": {
//                 "attack": [
//                     {
//                         "name": "Zelma",
//                         "description": "Central"
//                     }
//                 ]
//             }
//         }
//     ]
// }
```

So you can access properties type-safe like this

```ts
aliasedQueryExecute.listCards.map((c) => c.atak.attack);
```
