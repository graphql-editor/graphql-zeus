---
link: plugins/react-query
title: React Query
order: 2
---

#### Usage with React Query

It will generate `useTypedQuery` `useTypedMutation` etc... based on React Query . All types in data are inherited from zeus query

```sh
$ zeus schema.graphql ./  --reactQuery
```

```tsx
import { useTypedQuery } from './zeus/reactQuery';

const Main = () => {
  const { data } = useTypedQuery({
    drawCard: {
      name: true,
    },
  });
  return <div>{data.drawCard.name}</div>;
};
```
