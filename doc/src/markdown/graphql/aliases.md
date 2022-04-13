---
link: graphql/aliases
title: Aliases
order: 3
category: GraphQL
---

## GraphQL Aliases

Zeus supports declaring aliases 🥸

```ts
const aliasedQueryExecute = await chain('query')({
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
```

Response:

```json
{
  "listCards": [
    {
      "atak": [
        {
          "name": "Zelma",
          "description": "Central"
        }
      ]
    }
  ]
}
```

Now you can access properties type-safe like this

```javascript
aliasedQueryExecute.listCards.map((c) => c.atak);
```
