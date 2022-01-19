---
link: graphql/variables
title: Variables
order: 2
---

#### Variables

To perform query with variables please import `$` function and pass the variables to query

```ts
const test = await Gql('mutation')(
  {
    addCard: [
      {
        card: $`card`,
      },
      {
        id: true,
        description: true,
        name: true,
        Attack: true,
        skills: true,
        Children: true,
        Defense: true,
        cardImage: {
          bucket: true,
          region: true,
          key: true,
        },
      },
    ],
  },
  {
    card: {
      Attack: 2,
      Defense: 3,
      description: 'Lord of the mountains',
      name: 'Golrog',
    },
  },
);
```
