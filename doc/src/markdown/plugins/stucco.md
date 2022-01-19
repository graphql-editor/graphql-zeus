---
link: plugins/stucco
title: Stucco
order: 3
---

#### Usage with Stucco Subscriptions

It will generate stucco subscription library. All types in data are inherited from zeus quer

```sh
$ zeus schema.graphql ./  --stuccoSubscriptions
```

```
stuccoSubscriptions((apiFetchResult) => [apiFetchResult.url], 'https://my.backend/graphql')({ drawCard: { Attack: true } }).on((args) => args.drawCard.Attack);
```
