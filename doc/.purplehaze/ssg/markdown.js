// src/ssg/markdown.ts
var htmlContent = {
  "markdown/plugins/stucco.md": {
    "content": "\n## Usage with Stucco Subscriptions\n\nZeus can generate types for the Stucco Subscription library by adding the --stuccoSubscriptions flag to the CLI. All types in `data` are then inherited from the Zeus Query\n\n```sh\n$ zeus schema.graphql ./  --stuccoSubscriptions\n```\n\n```typescript\nstuccoSubscriptions(\n  (apiFetchResult) => [apiFetchResult.url],\n  'https://my.backend/graphql',\n)({ drawCard: { Attack: true } }).on((args) => args.drawCard.Attack);\n```\n",
    "data": {
      "link": "plugins/stucco",
      "title": "Stucco",
      "order": 3,
      "category": "Plugins"
    },
    "excerpt": ""
  },
  "markdown/plugins/apollo.md": {
    "content": "\n## Usage with Apollo GraphQL\n\nZeus can generate type-safe versions of Apollo Client's `useQuery`, `useMutation`, `useSubscription` and `useLazyQuery` React hooks as `useTypedQuery`, `useTypedMutation` etc... by adding the `--apollo` flag to the CLI. All types in the `data` response are then inherited from the Zeus query. \u{1F680}\n\n### Generate Type-Safe Zeus Schema And Apollo Client Type-Safe Hooks\n\n```sh\n$ zeus schema.graphql ./  --apollo\n# apollo.ts file with typed hooks is now in the output destination\n```\n\n### Apollo Client `useTypedQuery` Hook Example\n\n```tsx\nimport { useTypedQuery } from './zeus/apollo';\n\nconst Main = () => {\n  const { data } = useTypedQuery({\n    // Get autocomplete here:\n    drawCard: {\n      name: true,\n    },\n  });\n  // data response is now typed\n  return <div>{data.drawCard.name}</div>;\n};\n```\n\n### Inferring the response type for Apollo Client\n\nIf you would like to infer the response type of your query for Apollo Client you can use the Zeus `Selector` function and `InputType` utility from the Zeus generated library\n\n```tsx\nimport { Selector, InputType, GraphQLTypes } from './zeus';\n\nexport const drawCardQuery = Selector('Card')({\n  drawCard: {\n    id: true,\n    name: true,\n    Attack: true,\n    Children: true,\n  },\n});\n\ntype DrawCardResponseType = InputType<GraphQLTypes['Card'], typeof drawCardQuery>;\n// DrawCardResponseType is now the response type from the query\n```\n\nNow `drawCardQuery` can be reused directly in the typed Apollo Client `useTypedQuery` later\n\n```tsx\nimport { useTypedQuery } from './zeus/apollo';\nimport { drawCardQuery } from './';\n\nconst Main = () => {\n  const { data } = useTypedQuery(drawCardQuery);\n  // data is of type DrawCardResponseType as per the above example\n  return <div>{data.drawCard.name}</div>;\n};\n```\n",
    "data": {
      "link": "plugins/apollo",
      "title": "Apollo",
      "order": 1,
      "category": "Plugins"
    },
    "excerpt": ""
  },
  "markdown/index.md": {
    "content": "\nStrongly Typed GraphQL from the team at [GraphQL Editor](https://graphqleditor.com/?utm_source=graphql_zeus_github)\n\nGraphQL Zeus is the absolute best way to interact with your GraphQL endpoints in a type-safe way. Zeus uses your schema to generate Typescript types and strongly typed clients to unlock the power, efficiency, productivity and safety of Typescript on your GraphQL requests.\n\n## Features\n\n\u26A1\uFE0F Types mapped from your schema <br/>\n\u26A1\uFE0F Works with Apollo Client, React Query, Stucco Subscriptions _(\\*more coming soon...)_<br/>\n\u26A1\uFE0F Works with Subscriptions <br/>\n\u26A1\uFE0F Infer complex response types <br/>\n\u26A1\uFE0F Create reusable selection sets (like fragments) for use across multiple queries <br/>\n\u26A1\uFE0F Supports GraphQL Unions, Interfaces, Aliases and Variables<br/>\n\u26A1\uFE0F Handles **massive** schemas <br/>\n\u26A1\uFE0F Supports Browsers, Node.js and React Native in Javascript and Typescript <br/>\n\u26A1\uFE0F Schema downloader <br/>\n\u26A1\uFE0F JSON schema generation <br/>\n\n## Generate Types With Zeus CLI Example\n\nSimply run Zeus in your terminal to output your types file based on your graphql schema\n\n![](/images/zeus-bash-command.png)\n\n## Usage Example\n\nExample using a generated `chain` client. Queries, mutations and subscriptions are now type-safe in arguments, field selections and response types.\n\n![](/images/example.png)\n\n## Support And Community\n\n[Join our GraphQL Editor Channel on Slack!](https://join.slack.com/t/graphqleditor/shared_invite/enQtNDkwOTgyOTM5OTc1LWI4YjU3N2U5NGVkNzQ2NzY5MGUxMTJiNjFlZDM1Zjc2OWRmNTI0NDM3OWUxYTk4Yjk3MzZlY2QwOWUzZmM2NDI)\n\nLeave a GitHub star \u2B50\uFE0F \u{1F60A}\n\nSpread the word!\n\n## Contribute\n\nFor a complete guide to contributing to GraphQL Editor, see the [Contribution Guide](CONTRIBUTING.md).\n\n1.  Fork this repo\n2.  Create your feature branch: git checkout -b feature-name\n3.  Commit your changes: git commit -am 'Add some feature'\n4.  Push to the branch: git push origin my-new-feature\n5.  Submit a pull request\n\n## License\n\nMIT \u{1F54A}\n",
    "data": {
      "link": "",
      "title": ""
    },
    "excerpt": ""
  },
  "markdown/plugins/react-query.md": {
    "content": "\n## Usage with React Query\n\nZeus can generate type-safe versions of React Query's `useQuery`, `useMutation` etc.. React hooks as `useTypedQuery`, `useTypedMutation` etc... by adding the `--reactQuery` flag to the CLI. All types `data` response are then inherited from the Zeus query. \u{1F680}\n\n```sh\n$ zeus schema.graphql ./  --reactQuery\n```\n\n```tsx\nimport { useTypedQuery } from './zeus/reactQuery';\n\nconst Main = () => {\n  const { data } = useTypedQuery({\n    // Get autocomplete here:\n    drawCard: {\n      name: true,\n    },\n  });\n  // data response is now typed\n  return <div>{data.drawCard.name}</div>;\n};\n```\n",
    "data": {
      "link": "plugins/react-query",
      "title": "React Query",
      "order": 2,
      "category": "Plugins"
    },
    "excerpt": ""
  },
  "markdown/graphql/variables.md": {
    "content": "\n## GraphQL Variables\n\nIt's simple to perform queries with variables by importing and using the `$` function from the Zeus output and calling it with the variable name in backticks.\n\n```ts\nimport { Gql, useZeusVariables } from './zeus';\nconst variables = useZeusVariables({ Attack: 'Int!', Defense: 'Int!' })({\n  card: {\n    Attack: 2,\n    Defense: 3,\n    description: 'Lord of the mountains',\n    name: 'Golrog',\n  },\n});\nconst { $ } = variables;\n\nconst addCardResult = await Gql('mutation')(\n  {\n    addCard: [\n      {\n        card: $('card'),\n      },\n      {\n        id: true,\n        description: true,\n        name: true,\n        Attack: true,\n        skills: true,\n        Children: true,\n        Defense: true,\n        cardImage: {\n          bucket: true,\n          region: true,\n          key: true,\n        },\n      },\n    ],\n  },\n  {\n    variables,\n  },\n);\n```\n\nNote: The mutation function created by the Zeus versions of React Hooks like the Apollo Client version of `useTypedMutation` can be supplied with variable values at invocation eg:\n\n```typescript\nconst [addCard, { data, loading, error }] = useTypedMutation({ ...myMutation });\n\nawait addCard({\n  variables: variables.values,\n});\n```\n",
    "data": {
      "link": "graphql/variables",
      "title": "Variables",
      "order": 2,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/graphql/interfaces-and-unions.md": {
    "content": '\n## GraphQL Unions\n\nYou can use Zeus with [GraphQL Unions](https://spec.graphql.org/June2018/#sec-Unions):\n\n```js\nconst { drawChangeCard } = await chain(\'query\')({\n  drawChangeCard: {\n    __typename: true,\n    \'...on EffectCard\': {\n      effectSize: true,\n      name: true,\n    },\n    \'...on SpecialCard\': {\n      effect: true,\n      name: true,\n    },\n  },\n});\n```\n\nResponse:\n\n```json\n{\n  "effectSize": 195.99532210956377,\n  "name": "Destinee",\n  "__typename": "EffectCard"\n}\n```\n\n## GraphQL Interfaces\n\nZeus works with [GraphQL Interfaces](http://spec.graphql.org/June2018/#sec-Interfaces)\n\n```ts\nconst { nameables } = await Gql(\'query\')({\n  nameables: {\n    __typename: true,\n    name: true,\n    \'...on CardStack\': {\n      cards: {\n        Defense: true,\n      },\n    },\n    \'...on Card\': {\n      Attack: true,\n    },\n  },\n});\n```\n\nResponse:\n\n```json\n{\n  "nameables": [\n    {\n      "__typename": "EffectCard",\n      "name": "Hector"\n    },\n    {\n      "__typename": "CardStack",\n      "name": "Scotty",\n      "cards": [\n        {\n          "Defense": 1950\n        },\n        {\n          "Defense": 76566\n        }\n      ]\n    },\n    {\n      "__typename": "SpecialCard",\n      "name": "Itzel"\n    }\n  ]\n}\n```\n',
    "data": {
      "link": "graphql/interfaces-and-unions",
      "title": "Interfaces and Unions",
      "order": 1,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/graphql/gql.md": {
    "content": "\n## Generate GraphQL Gql Strings\n\nUse the `Zeus` function to generate a gql string\n\n```js\nimport { Zeus } from './zeus';\n\nconst stringGql = Zeus('query', {\n  listCards: {\n    name: true,\n    skills: true,\n    Attack: true,\n  },\n});\n\n// stringGql value:\n// query{listCards{name skills Attack}}\n```\n",
    "data": {
      "link": "graphql/gql",
      "title": "Gql string",
      "order": 4,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/graphql/aliases.md": {
    "content": '\n## GraphQL Aliases\n\nZeus supports declaring aliases \u{1F978}\n\n```ts\nconst aliasedQueryExecute = await chain(\'query\')({\n  listCards: {\n    __alias: {\n      atak: {\n        attack: [\n          { cardID: [\'1\'] },\n          {\n            name: true,\n            description: true,\n          },\n        ],\n      },\n    },\n  },\n});\n```\n\nResponse:\n\n```json\n{\n  "listCards": [\n    {\n      "atak": [\n        {\n          "name": "Zelma",\n          "description": "Central"\n        }\n      ]\n    }\n  ]\n}\n```\n\nNow you can access properties type-safe like this\n\n```javascript\naliasedQueryExecute.listCards.map((c) => c.atak);\n```\n',
    "data": {
      "link": "graphql/aliases",
      "title": "Aliases",
      "order": 3,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/basics/use-as-a-library.md": {
    "content": "\n## Generate Code\n\nThis will be rarely used, but here you are! Generate Typescript and Javascript from GraphQL definitions\n\n```js\nimport { TreeToTS } from 'graphql-zeus';\nimport { Parser } from 'graphql-js-tree';\n\nconst schemaFileContents = `\ntype Query{\n    hello: String!\n}\nschema{\n    query: Query\n}\n`;\n\nconst typeScriptDefinition = TreeToTS.resolveTree(Parser.parse(schemaFileContents));\n```\n\n## Dynamically Fetch Schema\n\nThis is useful when you need your schema fetched from your GraphQL endpoint in-code\n\n```js\nimport { Utils } from 'graphql-zeus';\n\nUtils.getFromUrl('https://faker.graphqleditor.com/a-team/olympus/graphql').then((schemaContent) => {\n  // Use schema content here\n});\n```\n",
    "data": {
      "link": "library",
      "title": "Use as a library",
      "order": 5,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/spec.md": {
    "content": "\n## Zeus Spec\n\nPromise of type query data object is returned.\n\n```\nPROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({\n    ...FUNCTION_FIELD_PARAMS\n})(\n    ...QUERY_OBJECT\n).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )\n```\n\nSimple function params object\n\n```\nFUNCTION_FIELD_PARAMS = {\n  KEY: VALUE\n}\n```\n\nQuery object\n\n```\nQUERY_OBJECT = {\n    ...RETURN_PARAMS\n}\n```\n\nReturn params is an object containing RETURN_KEY - true if it is a `scalar`, RETURN_PARAMS if `type` otherwise it is a function where you pass field params and type return params.\n\n```\nRETURN_PARAMS = {\n    RETURN_KEY: true,\n    RETURN_KEY: {\n        ...RETURN_PARAMS\n    },\n    RETURN_FUNCTION_KEY:[\n        {\n            ...FUNCTION_FIELD_PARAMS\n        },\n        {\n            ...RETURN_PARAMS\n        }\n    ]\n}\n```\n\n### Use Alias Spec\n\n```\nRETURN_PARAMS = {\n  __alias: RETURN_PARAMS\n}\n```\n\nAccess aliased operation type-safe\n\n```\nPROMISE_RETURNING_OBJECT[ALIAS_STRING]\n```\n",
    "data": {
      "link": "spec",
      "title": "Specification",
      "order": 4,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/selector.md": {
    "content": "\n## Generate Reusable Selection Sets\n\nIn TypeScript Zeus can help make type-safe Zeus selection sets to reuse across queries.\n\n```ts\nimport { Selector, Chain } from './zeus';\n\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\nconst cardSelector = Selector('Card')({\n  name: true,\n  description: true,\n  Attack: true,\n  skills: true,\n  Defense: true,\n  cardImage: {\n    key: true,\n    bucket: true,\n  },\n});\n\nconst queryWithSelectionSet = await chain('query')({\n  drawCard: cardSelector,\n});\n```\n\n## Inferring the response type\n\nSometimes you would like to infer the response type. The it is best to use selectors\n\n```tsx\nimport { Selector, InputType, GraphQLTypes } from './zeus';\n\nexport const drawCardQuery = Selector(\"Query\"){\n  drawCard: {\n    Attack: true,\n    Children: true,\n    id: true,\n  },\n});\n\ntype InferredResponseType = InputType<GraphQLTypes['Query'], typeof drawCardQuery>;\n```\n",
    "data": {
      "link": "selector",
      "title": "Selector",
      "order": 1,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/javascript.md": {
    "content": "\n### JavaScript\n\nTo use with Javascript as an autocomplete tool you need to install Typescript, run the Zeus CLI, and then transform the result to JS using `tsc`\n\n```sh\n$ npm i -D typescript\n# OR\n# yarn add -D typescript\n```\n\nGenerate Zeus:\n\n```sh\n$ zeus schema.graphql ./\n```\n\nAnd transform it using Typescript:\n\n```sh\n$ npx tsc ./zeus/*.ts --declaration --target es5 --skipLibCheck\n# OR\n# yarn tsc ./zeus/*.ts --declaration --target es5 --skipLibCheck\n```\n\nThis will generate an `out.d.ts` file so that you can have autocompletion.\n",
    "data": {
      "link": "javascript",
      "title": "Javascript",
      "order": 6,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/getting-started.md": {
    "content": "\n## Getting Started\n\nUse the Zeus CLI to generate types and GraphQL clients based on your schema which you can then import into your projects to autocomplete, query and use GraphQL responses in a type-safe way.\n\n## Quick Start\n\n### Installation\n\n```sh\n$ npm i -g graphql-zeus\n# OR\n# yarn global add graphql-zeus\n```\n\nYou can also install locally to a project and then use as a npm or yarn script command or with `npx` or `yarn` directly eg:\n\n```sh\n$ npx zeus schema.graphql ./\n# OR\n# yarn zeus schema.graphql ./\n```\n\n### TypeScript\n\nZeus is Typescript native, you can refer to imported types directly from the generated output of the CLI\n\n```sh\n$ zeus schema.graphql ./\n```\n\n## Demo Endpoint\n\nAll demo code here is using the demo GraphQL endpoint of [Olympus Cards](https://app.graphqleditor.com/a-team/olympus) built with [GraphQL Editor](https://graphqleditor.com/). Feel free to check out the [GraphiQL interface](https://faker.graphqleditor.com/a-team/olympus/graphql) too.\n\n## Query With Zeus Chain Client\n\nYou can now use the Zeus `Chain` client from the generated output to make type-safe queries and mutations to your endpoint and receive type-safe responses.\n\n```ts\nimport { Chain } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst listCardsAndDraw = await chain('query')({\n  cardById: [\n    {\n      cardId: 'da21ce0a-40a0-43ba-85c2-6eec2bf1ae21',\n    },\n    {\n      name: true,\n      description: true,\n    },\n  ],\n  listCards: {\n    name: true,\n    skills: true,\n    attack: [\n      { cardID: ['66c1af53-7d5e-4d89-94b5-1ebf593508f6', 'fc0e5757-4d8a-4f6a-a23b-356ce167f873'] },\n      {\n        name: true,\n      },\n    ],\n  },\n  drawCard: {\n    name: true,\n    skills: true,\n    Attack: true,\n  },\n});\n// listCardsAndDraw is now typed as the response of the query.\n```\n\nWhen querying a GraphQL field which takes an argument such as `cardById` above, then the fields are defined in terms of a tuple eg: cardById: `[ {...arguments} , {...response_selection_set} ]` the equivalent in gql syntax would be:\n\n```text\ncardById (cardId: \"da21ce0a-40a0-43ba-85c2-6eec2bf1ae21\") {\n  name\n  description\n}\n```\n\nFor fields which have no argument they receive only the response selection set object values.\n\nNote: `Chain` will also accept a second argument of fetch-like options to configure the client with properties such as `credentials`, `mode`, `headers` etc...\n\nNote: There is also an exported Zeus `Gql` convenience function is a Chain client pre-configured with the endpoint specified in the CLI.\n\n## Listen on a WebSocket - GraphQL Subscriptions\n\nUse the Zeus `Subscription` client creator in your generated output to create WebSocket connections to your GraphQL socket.\n\n```ts\nimport { Subscription } from './zeus';\n\n// Create a Subscription client instance with the endpoint\nconst sub = Subscription('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Call the client instance and listen for responses\nsub('subscription')({\n  deck: {\n    id: true,\n  },\n}).on((response) => {\n  console.log(response.deck);\n});\n```\n\n## Usage with NodeJS\n\nGenerates clients for use with Node.js\n\n```sh\n$ zeus schema.graphql ./  --node\n```\n\n## Usage with React Native\n\nAs normal\n\n```sh\n$ zeus schema.graphql ./\n```\n\n## Other CLI Options\n\nSpecify the output folder with second argument\n\n```sh\n$ zeus schema.graphql ./generated\n```\n\nOutput Typescript Only with `--typescript` flag\n\n```sh\n$ zeus schema.graphql ./ --typescript\n```\n\nLoad your schema from an URL with an URL in the first argument\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./\n```\n\nDownload and save GraphQL schema to a local path with `--graphql=savePath` flag\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --graphql=generated\n```\n\nGenerate and save a JSON schema to a local path with `--jsonSchema=savePath` flag\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --graphql=generated\n```\n\nAdd a header value with `--header=value` flag\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --header=Authorization:myNiceAuthHeader\n```\n\nGet help with Zeus CLI with:\n\n```sh\n$ zeus help\n```\n\n### Tip:\n\nAdd a script entry in your `package.json` file for quickly calling Zeus generation:\n\n```json\n\"scripts\": {\n//...\n\"generate\": \"zeus https://faker.graphqleditor.com/a-team/olympus/graphql zeusGenerated --typescript --header='My-Auth-Secret:JsercjjJY5MmghtHww6UF' --apollo\"\n},\n```\n",
    "data": {
      "link": "getting-started",
      "title": "Getting Started",
      "order": 0,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/examples.md": {
    "content": "\n## Zeus Included Examples\n\nTo run the included examples navigate to: `./examples` and install packages with:\n\n```sh\n$ npm i\n# OR\n# yarn\n```\n\nthen run the examples with\n\n```sh\n$ npm run start\n# OR\n# yarn start\n```\n",
    "data": {
      "link": "examples",
      "title": "Examples",
      "order": 2,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/esmodule.md": {
    "content": "\n#### Return with .js import for esModules\n\nDue to validity of `.js` imports in TS for esmodules you can use flag `es` to generate `.js` imports\n\n```sh\n$ zeus schema.graphql ./ --es\n```\n",
    "data": {
      "link": "esmodules",
      "title": "EsModules",
      "order": 3,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/custom.-fetch.md": {
    "content": "\n## Perform Queries with Thunder - An Abstracted Fetch Function\n\nWith Zeus `Thunder` you have total control of fetch function but will not lose the result type. \u26A1\uFE0F\n\n```js\nimport { Thunder } from './zeus';\n\n// Create thunder fetch client with endpoint, options and response handlers\nconst thunder = Thunder(async (query) => {\n  const response = await fetch('https://faker.graphqleditor.com/a-team/olympus/graphql', {\n    body: JSON.stringify({ query }),\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  if (!response.ok) {\n    return new Promise((resolve, reject) => {\n      response\n        .text()\n        .then((text) => {\n          try {\n            reject(JSON.parse(text));\n          } catch (err) {\n            reject(text);\n          }\n        })\n        .catch(reject);\n    });\n  }\n\n  const json = await response.json();\n\n  return json.data;\n});\n\n// Call thunder client with type-safe arguments, fields and get type-safe result type\nconst listCardsAndDraw = await thunder('query')({\n  cardById: [\n    {\n      cardId: 'sdsd',\n    },\n    {\n      description: true,\n    },\n  ],\n  listCards: {\n    name: true,\n    skills: true,\n    attack: [\n      { cardID: ['s', 'sd'] },\n      {\n        name: true,\n      },\n    ],\n  },\n  drawCard: {\n    name: true,\n    skills: true,\n    Attack: true,\n  },\n});\n```\n",
    "data": {
      "link": "custom-fetch",
      "title": "Custom fetch",
      "order": 7,
      "category": "Basics"
    },
    "excerpt": ""
  }
};
export {
  htmlContent
};
