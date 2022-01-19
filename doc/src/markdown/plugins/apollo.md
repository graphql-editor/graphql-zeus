---
link: plugins/apollo
title: Apollo
order: 1
---

It will generate `useTypedQuery` `useTypedMutation` etc... based on Apollo useQuery thanks @GavinRay97. All types in data are inherited from zeus query

```sh
$ zeus schema.graphql ./  --apollo
```

```tsx
import { useTypedQuery } from './zeus/apollo';

const Main = () => {
  const { data } = useTypedQuery({
    drawCard: {
      name: true,
    },
  });
  return <div>{data.drawCard.name}</div>;
};
```
