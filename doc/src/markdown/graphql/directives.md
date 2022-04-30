---
link: graphql/directives
title: Directives
order: 5
category: GraphQL
---

## GraphQL Directives

Zeus supports using directives on fields.

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  drawCard: {
    name: true,
    skills: true,
    Attack: `@skip(if: true)`,
  },
});
```

So you need to put full string instead of `true`.

### Use on object field

Use directive on `drawCard`

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  drawCard: {
    __directives: `@skip(if:true)`,
    name: true,
    skills: true,
  },
});
```

### Use on function

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  drawCard: {
    name: true,
    skills: true,
    attack:[
      {
        cardId:['2312321']
      },
      {
        __directives: `@skip(if:true)`,
        name: true,
        skills: true,
      }
    ]
  }
});
```

### Use it with variables

```ts
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');
const variables = useZeusVariables({
    isDefense: 'Boolean!'
})({
    isDefense:true
});
const { $ } = variables;
// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  drawCard: {
    name: true,
    skills: true,
    Attack: `@skip(if: ${$('isDefense')})`,
  },
  {
      variables
  }
});
```
