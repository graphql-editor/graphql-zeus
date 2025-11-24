I want my system of variables in new zeus to work like this


Given:
```graphql
type Todo {
  _id: String!
  content: String!
  done: Boolean
}

type TodoOps {
  markDone: Boolean
}

type User {
  _id: String!
  username: String!
}

type AuthorizedUserMutation {
  createTodo(content: String!): String!
  todoOps(_id: String!): TodoOps!
  changePassword(newPassword: String!): Boolean
}

type AuthorizedUserQuery {
  todos: [Todo!]
  todo(_id: String!): Todo!
  me: User!
}

type Mutation {
  user: AuthorizedUserMutation!
  login(username: String!, password: String!): String!
  register(username: String!, password: String!): String!
}

type Subscription {
  countdown(from: Int!): Int!
}a

type Query {
  user: AuthorizedUserQuery!
}
schema{
	query: Query,
	mutation: Mutation,
	subscription: Subscription
}
```

We can do

```ts
chain('mutation')({
  login: [{
    username: $("username", "String!"),
    password: $("password", "String!")
  }, true]
})({
    variables:{
        // this username is type safe String!
        username: "artur"
        // this password is type safe String!
        password: "pass"
    }
})
```

So instead of providing the variable type we infer it from usage