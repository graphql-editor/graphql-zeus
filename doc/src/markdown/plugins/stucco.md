---
link: plugins/stucco
title: Stucco
order: 3
category: Plugins
---

## Usage with Stucco Subscriptions

Zeus can generate types for the Stucco Subscription library by adding the --stuccoSubscriptions flag to the CLI. All types in `data` are then inherited from the Zeus Query

```sh
$ zeus schema.graphql ./  --stuccoSubscriptions
```

```typescript
stuccoSubscriptions(
  (apiFetchResult) => [apiFetchResult.url],
  'https://my.backend/graphql',
)({ drawCard: { Attack: true } }).on((args) => args.drawCard.Attack);
```
