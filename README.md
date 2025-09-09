![](images/zeus-logo.png)

[![npm](https://img.shields.io/npm/v/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![npm downloads](https://img.shields.io/npm/dt/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus)

Strongly Typed GraphQL from the team at [GraphQL Editor](https://graphqleditor.com/?utm_source=graphql_zeus_github)

# Install

```
$ npm i -g graphql-zeus
# OR
# yarn global add graphql-zeus
```
You can also install it locally to a project and then use it as an npm or yarn script command using `npx` or `yarn` directly like this:

```
$ npx zeus schema.graphql ./
# OR
# yarn zeus schema.graphql ./
```

## TypeScript

Zeus is TypeScript native, you can refer to imported types directly from the generated output of the CLI

```
$ zeus schema.graphql ./
```

# Generate
To generate clients simply run this command:

| For NodeJS                          | For React Native                 |
|-------------------------------------|----------------------------------|
| `$ zeus schema.graphql ./ --node`   | `$ zeus schema.graphql ./`       |


## How it works

![](Zeus.gif)

GraphQL Zeus is the absolute best way to interact with your GraphQL endpoints in a type-safe way. Zeus uses your schema to generate Typescript types and strongly typed clients to unlock the power, efficiency, productivity and safety of Typescript on your GraphQL requests.

GraphQL Syntax ( not type-safe 😢 )

```gql
query ($id: String!) {
  usersQuery {
    admin {
      sequenceById(_id: $id) {
        _id
        name
        analytics {
          sentMessages
          sentInvitations
          receivedReplies
          acceptedInvitations
        }
        replies {
          message
          createdAt
          _id
        }
        messages {
          _id
          content
          renderedContent
          sendAfterDays
        }
        tracks {
          _id
          createdAt
          inviteSent
          inviteAccepted
          contact {
            linkedInId
          }
        }
      }
    }
  }
}
```

Zeus syntax ( type-safe 😋 )
```tsx
{
  usersQuery: {
    admin: {
      sequenceById: [
        { id: $("id", "String!") },
        {
          _id: true,
          name: true,
          analytics: { ...fields("SequenceAnalytics") },
          replies: {
            ...fields("SequenceTrackReply"),
          },
          messages: {
            ...fields("Message"),
          },
          tracks: {
            ...fields("SequenceTrack"),
            contact: {
              linkedInId: true,
            },
          },
        },
      ],
    },
  },
}
```

## New! Composables
```ts
import {
  Gql,
  ComposableSelector,
} from './zeus/index.js';

const withComposable = <T extends ComposableSelector<'Card'>, Z extends T>(id: string, rest: Z | T) =>
  Gql('query')({
    cardById: [{ cardId: id }, rest],
  });
  const c1result = await withComposable('12', {
    id: true,
  });
  const c2result = await withComposable('12', {
    Defense: true,
    Attack: true,
  });
```

Both responses and inputs are safely typed

## Features
⚡️ Validates queries and selectors
⚡️ Types mapped from your schema <br/>
⚡️ Fetch all primitive fields with one function <br/>
⚡️ Works with Apollo Client, React Query, Stucco Subscriptions _(\*more coming soon...)_<br/>
⚡️ Works with Subscriptions <br/>
⚡️ Infer complex response types <br/>
⚡️ Create reusable selection sets (like fragments) for use across multiple queries <br/>
⚡️ Supports GraphQL Unions, Interfaces, Aliases and Variables<br/>
⚡️ Handles **massive** schemas <br/>
⚡️ Supports Browsers, Node.js and React Native in Javascript and Typescript <br/>
⚡️ Schema downloader <br/>
⚡️ JSON schema generation <br/>

## Full documentation

Our full documentation has all the use cases of:

- scalars
- selectors

and much more...

[Full documentation is available here](https://graphqleditor.com/docs/zeus/)

## Join the Zeus Community and Spread the Word

⚡️ [Join the Discussion forum on Dicord](https://discord.gg/bHf2cw8e) 📣

⚡️ Leave a GitHub star ⭐️ 👆

⚡️ Spread the word on your socials and with your networks! 🗣

## Contribute

For a complete guide to contributing to GraphQL Zeus, see the [Contribution Guide](CONTRIBUTING.md).

1.  Fork this repo
2.  Create your feature branch: git checkout -b feature-name
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request



## License

[MIT](https://opensource.org/licenses/MIT) 🕊
