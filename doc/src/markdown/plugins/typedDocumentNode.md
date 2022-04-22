---
link: plugins/typedDocumentNode
title: TypedDocumentNode
order: 4
category: Plugins
---

## Usage with Typed Document Node

Zeus can generate builders for [`TypedDocumentNode`][typed-document-node], a type-safe query
representation understood by most GraphQL clients (including Apollo, urql etc) by adding the
`--typedDocumentNode` flag to the CLI.

### Generate Type-Safe Zeus Schema And TypedDocumentNode query builders

```sh
$ zeus schema.graphql ./  --typedDocumentNode
# typedDocumentNode.ts file with typed document node builders is now in the output destination
```

### TypedDocumentNode + Apollo Client useQuery examples

The following example demonstrates usage with Apollo. Other clients should work similarly.

```tsx
import { query, $ } from './zeus/typedDocumentNode';
import { useQuery } from '@apollo/client';

const myQuery = query({
  // Get autocomplete here:
  cardById: [
    { cardId: $('cardId') },
    {
      Attack: true,
      Defense: true,
    },
  ],
});

const Main = () => {
  const { data } = useQuery(myQuery, {
    variables: {
      // Get autocomplete and typechecking here:
      cardId: someId
    }
  });
  // data response is typed
  return <div>{data.drawCard.name}</div>;
};
```

### Variable support

Variables should be supported at any level of the query. Examples:

```typescript
const userMemberships = query({
  user: [
    { id: $('id') },
    { memberships: [
        { limit: $('limit') },
        { role: true },
      ],
    },
  ],
});

const mutate = mutation({
  insertBooking: [
    { object: $('booking') },
    { id: true, bookerName: true },
  ],
});
```

[typed-document-node]: https://www.graphql-code-generator.com/plugins/typed-document-node