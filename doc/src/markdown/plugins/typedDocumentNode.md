---
link: plugins/typedDocumentNode
title: TypedDocumentNode
order: 4
category: Plugins
---

## Usage with Typed Document Node

Zeus can generate builders for [`TypedDocumentNode`][typed-document-node], a type-safe query
representation understood by most GraphQL clients (including Apollo, urql etc) by adding the
`--typedDocumentNode` or `--td` flag to the CLI.

### Generate Type-Safe Zeus Schema And TypedDocumentNode query builders

```sh
$ zeus https://yourschema.com/graphql ./  --typedDocumentNode
# typedDocumentNode.ts file with typed document node builders is now in the output destination
```

### TypedDocumentNode + Apollo Client useQuery examples

The following example demonstrates usage with Apollo. Other clients should work similarly.

```tsx
import { ZeusTD } from './zeus/typedDocumentNode';
import { Gql, SpecialSkills, Thunder, Zeus, InputType, Selector, GraphQLTypes, useZeusVariables } from './zeus';
import { useQuery } from '@apollo/client';

const variables = useZeusVariables({ cardId: 'String!' })({
  cardId: 'blabla',
});
const { $ } = variables;

const myQuery = ZeusTD(
  'query',
  {
    drawCard: {
      id: true,
      Attack: true,
      Defense: true,
    },
    cardById: [{ cardId: $('cardId') }, { id: true }],
  },
  { variables },
);

const Main = () => {
  const { data } = useQuery(myQuery, {
    variables: variables.values,
  });
  // data response is typed
  return <div>{data.drawCard.name}</div>;
};
```

[typed-document-node]: https://www.graphql-code-generator.com/plugins/typed-document-node
