---
link: plugins/react-query
title: React Query
order: 2
category: Plugins
---

## Usage with React Query

Zeus can generate type-safe versions of React Query's `useQuery`, `useMutation` etc.. React hooks as `useTypedQuery`, `useTypedMutation` etc... by adding the `--reactQuery` flag to the CLI. All types `data` response are then inherited from the Zeus query. 🚀

```sh
$ zeus schema.graphql ./  --reactQuery
```

```tsx
import { useTypedQuery } from './zeus/reactQuery';

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
