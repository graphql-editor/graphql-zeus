---
link: graphql/variables
title: Variables
order: 2
category: GraphQL
---

## GraphQL Variables

It's simple to perform queries with variables by using `useZeusVariables` function. It forces you to be type-safe also

```ts
import { Gql, useZeusVariables } from './zeus';
const variables = useZeusVariables({ Attack: 'Int!', Defense: 'Int!' })({
  card: {
    Attack: 2,
    Defense: 3,
    description: 'Lord of the mountains',
    name: 'Golrog',
  },
});
const { $ } = variables;

const addCardResult = await Gql('mutation')(
  {
    addCard: [
      {
        card: $('card'),
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
    variables,
  },
);
```

Note: The mutation function created by the Zeus versions of React Hooks like the Apollo Client version of `useTypedMutation` can be supplied with variable values at invocation eg:

```typescript
const [addCard, { data, loading, error }] = useTypedMutation({ ...myMutation });

await addCard({
  variables: variables.values,
});
```
