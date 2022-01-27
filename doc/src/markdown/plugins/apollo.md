---
link: plugins/apollo
title: Apollo
order: 1
category: Plugins
---

## Usage with Apollo GraphQL

Zeus can generate type-safe versions of Apollo Client's `useQuery`, `useMutation`, `useSubscription` and `useLazyQuery` React hooks as `useTypedQuery`, `useTypedMutation` etc... by adding the `--apollo` flag to the CLI. All types in the `data` response are then inherited from the Zeus query. 🚀

### Generate Type-Safe Zeus Schema And Apollo Client Type-Safe Hooks

```sh
$ zeus schema.graphql ./  --apollo
# apollo.ts file with typed hooks is now in the output destination
```

### Apollo Client `useTypedQuery` Hook Example

```tsx
import { useTypedQuery } from './zeus/apollo';

const Main = () => {
  const { data } = useTypedQuery({
    // Get autocomplete here:
    drawCard: {
      name: true,
    },
  });
  // data response is now typed
  return <div>{data.drawCard.name}</div>;
};
```

### Apollo Client @client directive


```tsx
import { useTypedQuery } from './zeus/apollo';

const Main = () => {
  const { data } = useTypedQuery({
    // Get autocomplete here:
    drawCard: {
      isCardSelected: '@client'
    },
  });
  // this data comes from the local-only fields
  // https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/
  return <div>{data.drawCard.isCardSelected}</div>;
};
```

### Inferring the response type for Apollo Client

If you would like to infer the response type of your query for Apollo Client you can use the Zeus `Selector` function and `InputType` utility from the Zeus generated library

```tsx
import { Selector, InputType, GraphQLTypes } from './zeus';

export const drawCardQuery = Selector('Card')({
  drawCard: {
    id: true,
    name: true,
    Attack: true,
    Children: true,
  },
});

type DrawCardResponseType = InputType<GraphQLTypes['Card'], typeof drawCardQuery>;
// DrawCardResponseType is now the response type from the query
```

Now `drawCardQuery` can be reused directly in the typed Apollo Client `useTypedQuery` later

```tsx
import { useTypedQuery } from './zeus/apollo';
import { drawCardQuery } from './';

const Main = () => {
  const { data } = useTypedQuery(drawCardQuery);
  // data is of type DrawCardResponseType as per the above example
  return <div>{data.drawCard.name}</div>;
};
```
