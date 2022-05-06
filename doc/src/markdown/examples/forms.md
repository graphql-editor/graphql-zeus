---
link: forms
title: Forms
order: 1
category: Examples
---

To use zeus with forms you should make use of it's generated ValueTypes. When submitting form using a mutation It is much easier and type-safe to do it using `ValueTypes`.

Having the following schema:

```graphql
type Mutation {
  createUser(user: CreateUser!): String
}

input CreateUser {
  firstName: String!
  lastName: String!
  age: Int
  username: String!
}
```

You can use `ValueTypes['CreateUser']` as params for submit form function

```ts
const submitForm = (values: ValueTypes['CreateUser']) => {
  // ..,rest of the code, validation
  return Chain('https://yourschemaurl.com/graphql', {
    headers: {
      Authorization: 'yourtoken',
    },
  })('mutation')({
    createUser: [{ user: values }, true],
  });
};
```
