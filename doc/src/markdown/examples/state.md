---
link: state
title: React State
order: 2
category: Examples
---

When query returns an object and you want to store it in React State, you can use zeus to have 100% type-safe objects in your state.

Having the following schema:

```graphql
type Query {
  listUsers: [User!]
}

type User {
  createdAt: String!
  firstName: String!
  lastName: String!
  age: Int
  username: String!
  id: String!
}
```

You can use zeus types to get the type of the objects received from GraphQL Backend

```tsx
import React, { useState } from 'react';
import { GraphQLTypes, InputType, Selector, Chain } from './zeus';

const userSelector = Selector('User')({
  createdAt: true,
  firstName: true,
  lastName: true,
  id: true,
});

type StoredUser = InputType<GraphQLTypes['User'], typeof userSelector>

const getFullName = (u:StoredUser) => u.firstName + ' ' + u.lastName

export const UsersList: React.FC = () => {
  const [users, setUsers] = useState<Array<StoredUser>>([]);

  useEffect(()=>{
      Chain('https://yourschemaurl.com/graphql', {})('query')({
        listUsers: userSelector
      }).then( response => {
        // 100% type-safe
        setUsers(response.data)
      })
    };
  },[])

  return (
    <div>
      {users.map((u) => (
        <div key={u.id} className="flex items-center">
          <div className="font-bold p-4 flex-1">{getFullName(u)}</div>
          <div className="p-4">{u.createdAt}</div>
        </div>
      ))}
    </div>
  );
};
```
