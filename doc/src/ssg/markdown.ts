export const htmlContent = {
    "markdown/use-as-a-library.md": {
        "content": "\n### Use In your Project to generate code\n\nThis will be rarely used, but here you are!\n\n```js\nimport { TreeToTS } from 'graphql-zeus';\nimport { Parser } from 'graphql-js-tree';\n\nconst schemaFileContents = `\ntype Query{\n    hello: String!\n}\nschema{\n    query: Query\n}\n`;\n\nconst typeScriptDefinition = TreeToTS.resolveTree(Parser.parse(schemaFileContents));\n\nconst jsDefinition = TreeToTS.javascript(Parser.parse(schemaFileContents));\n```\n\n### Use in your project to dynamically fetch schema\n\nThis is useful when you need some schema fetched from your GraphQL endpoint\n\n```js\nimport { Utils } from 'graphql-zeus';\n\nUtils.getFromUrl('https://faker.graphqleditor.com/a-team/olympus/graphql').then((schemaContent) => {\n  // Use schema content here\n});\n```\n",
        "data": {
            "link": "library",
            "title": "Use as a library",
            "order": 5
        },
        "excerpt": ""
    },
    "markdown/spec.md": {
        "content": "\nPromise of type query data object is returned.\n\n```\nPROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({\n    ...FUNCTION_FIELD_PARAMS\n})(\n    ...QUERY_OBJECT\n).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )\n```\n\nSimple function params object\n\n```\nFUNCTION_FIELD_PARAMS = {\n  KEY: VALUE\n}\n```\n\nQuery object\n\n```\nQUERY_OBJECT = {\n    ...RETURN_PARAMS\n}\n```\n\nReturn params is an object containg RETURN_KEY - true if it is a `scalar`, RETURN_PARAMS if `type` otherwise it is a function where you pass Fiel params and type return params.\n\n```\nRETURN_PARAMS = {\n    RETURN_KEY: true,\n    RETURN_KEY: {\n        ...RETURN_PARAMS\n    },\n    RETURN_FUNCTION_KEY:[\n        {\n            ...FUNCTION_FIELD_PARAMS\n        },\n        {\n            ...RETURN_PARAMS\n        }\n    ]\n}\n```\n\n#### Use Alias Spec\n\n```\nRETURN_PARAMS = {\n  __alias: RETURN_PARAMS\n}\n```\n\nAccess aliased operation type-safe\n\n```\nPROMISE_RETURNING_OBJECT[ALIAS_STRING][OPERATION_NAME]\n```\n",
        "data": {
            "link": "spec",
            "title": "Specification",
            "order": 4
        },
        "excerpt": ""
    },
    "markdown/plugins/react-query.md": {
        "content": "\n#### Usage with React Query\n\nIt will generate `useTypedQuery` `useTypedMutation` etc... based on React Query . All types in data are inherited from zeus query\n\n```sh\n$ zeus schema.graphql ./  --reactQuery\n```\n\n```tsx\nimport { useTypedQuery } from './zeus/reactQuery';\n\nconst Main = () => {\n  const { data } = useTypedQuery({\n    drawCard: {\n      name: true,\n    },\n  });\n  return <div>{data.drawCard.name}</div>;\n};\n```\n",
        "data": {
            "link": "plugins/react-query",
            "title": "React Query",
            "order": 2
        },
        "excerpt": ""
    },
    "markdown/plugins/stucco.md": {
        "content": "\n#### Usage with Stucco Subscriptions\n\nIt will generate stucco subscription library. All types in data are inherited from zeus quer\n\n```sh\n$ zeus schema.graphql ./  --stuccoSubscriptions\n```\n\n```\nstuccoSubscriptions((apiFetchResult) => [apiFetchResult.url], 'https://my.backend/graphql')({ drawCard: { Attack: true } }).on((args) => args.drawCard.Attack);\n```\n",
        "data": {
            "link": "plugins/stucco",
            "title": "Stucco",
            "order": 3
        },
        "excerpt": ""
    },
    "markdown/selector.md": {
        "content": "\n#### Selector\n\nIn TypeScript you can make type-safe selection sets to reuse them across queries.\n\n```ts\nimport { ZeusSelect, Selector, Chain, ValueTypes } from './zeus';\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\nconst cardSelector = Selector('Card')({\n  name: true,\n  description: true,\n  Attack: true,\n  skills: true,\n  Defense: true,\n  cardImage: {\n    key: true,\n    bucket: true,\n  },\n});\n\nconst queryWithSelectionSet = await chain('query')({\n  drawCard: cardSelector,\n});\n```\n",
        "data": {
            "link": "selector",
            "title": "Selector",
            "order": 1
        },
        "excerpt": ""
    },
    "markdown/plugins/apollo.md": {
        "content": "\nIt will generate `useTypedQuery` `useTypedMutation` etc... based on Apollo useQuery thanks @GavinRay97. All types in data are inherited from zeus query\n\n```sh\n$ zeus schema.graphql ./  --apollo\n```\n\n```tsx\nimport { useTypedQuery } from './zeus/apollo';\n\nconst Main = () => {\n  const { data } = useTypedQuery({\n    drawCard: {\n      name: true,\n    },\n  });\n  return <div>{data.drawCard.name}</div>;\n};\n```\n",
        "data": {
            "link": "plugins/apollo",
            "title": "Apollo",
            "order": 1
        },
        "excerpt": ""
    },
    "markdown/index.md": {
        "content": "\n![](images/zeus.gif)\n\n[![npm](https://img.shields.io/npm/v/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![npm downloads](https://img.shields.io/npm/dt/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus)\n\nGraphQL Zeus creates autocomplete client library for `JavaScript` or `TypeScript` which provides autocompletion for strongly typed queries.\n\n⚡⚡ From version 2.0 Zeus support mapped types\n\n⚡⚡⚡ From version 3.0 Zeus supportsnp\n\n- JSON schema generation\n- Subscriptions\n- ZeusHook Type for extracting the response type\n\nSupported Languages:\n\n- Javascript\n  - Browser\n  - NodeJS\n  - React Native\n- TypeScript\n  - Browser\n  - NodeJS\n  - React Native\n\n⚡⚡⚡⚡ From version 4.0 Zeus supports\n\n- huuuuuge schemas\n\n## How it works\n\nGiven the following schema [Olympus Cards](https://app.graphqleditor.com/a-team/olympus)\n\n![](images/zeusexample.gif)\n\n## Table of contents\n\n- [How it works](#how-it-works)\n- [Table of contents](#table-of-contents)\n- [License](#license)\n- [How to use](#how-to-use)\n  - [As a CLI](#as-a-cli)\n    - [Installation](#installation)\n    - [Usage with JavaScript](#usage-with-javascript)\n    - [Usage with TypeScript](#usage-with-typescript)\n      - [Inferring the response type](#inferring-the-response-type)\n    - [Usage with NodeJS](#usage-with-nodejs)\n    - [Usage with React Native](#usage-with-react-native)\n    - [Load from URL](#load-from-url)\n  - [Use generated client example](#use-generated-client-example)\n    - [Perform query with Chain](#perform-query-with-chain)\n    - [Listen on a websocket - GraphQL Subscription](#listen-on-a-websocket---graphql-subscription)\n    - [Perform query with Thunder - Abstracted Fetch function](#perform-query-with-thunder---abstracted-fetch-function)\n- [Support](#support)\n- [Contribute](#contribute)\n- [Parsing](#parsing)\n- [4.0](#40)\n\n## License\n\nMIT\n\n## How to use\n\nMain usage of graphql zeus should be as a CLI.\n\n### As a CLI\n\n#### Installation\n\nInstall globally\n\n```sh\n$ npm i -g graphql-zeus\n```\n\nOf course you can install locally to a project and then use as a npm command or with `npx`\n\n#### Usage with JavaScript\n\nTo use with javascript you need to install typescript and transpile generated code to return declaration files\n\n```sh\n$ npm i -D typescript\n```\n\nGenerate zeus\n\n```sh\n$ zeus schema.graphql ./\n```\n\nAnd transform it using typescript\n\n```sh\n$ npx tsc ./zeus/*.ts --declaration --target es5 --skipLibCheck\n```\n\nIt will also generate corresponding out.d.ts file so you can have autocompletion,\n\n#### Usage with TypeScript\n\nZeus is typescript native so just use it normally\n\n```sh\n$ zeus schema.graphql ./\n```\n\n##### Inferring the response type\n\nSometimes you would like to infer the response type. The it is best to use selectors\n\n```tsx\nimport { Selector, InputType, GraphQLTypes } from './zeus';\n\nexport const drawCardQuery = Selector(\"Query\"){\n  drawCard: {\n    Attack: true,\n    Children: true,\n    id: true,\n  },\n});\n\ntype InferredResponseType = InputType<GraphQLTypes['Query'], typeof drawCardQuery>;\n```\n\nYou can also use it in useTypedQuery later\n\n```tsx\nimport { useTypedQuery } from './zeus/apollo';\nimport { drawCardQuery } from './';\n\nconst Main = () => {\n  const { data } = useTypedQuery(drawCardQuery);\n  return <div>{data.drawCard.name}</div>;\n};\n```\n\n#### Usage with NodeJS\n\n```sh\n$ zeus schema.graphql ./  --node\n```\n\n#### Usage with React Native\n\nSame as browser\n\n```sh\n$ zeus schema.graphql ./\n```\n\n#### Load from URL\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./generated\n```\n\nWith Authorization header\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./generated --header=Authorization:dsadasdASsad\n```\n\n### Use generated client example\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./generated\n```\n\n#### Perform query with Chain\n\n```ts\nimport { Chain } from './zeus';\nconst createCards = async () => {\n  const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n  const listCardsAndDraw = await chain('query')({\n    cardById: [\n      {\n        cardId: 'sdsd',\n      },\n      {\n        description: true,\n      },\n    ],\n    listCards: {\n      name: true,\n      skills: true,\n      attack: [\n        { cardID: ['s', 'sd'] },\n        {\n          name: true,\n        },\n      ],\n    },\n    drawCard: {\n      name: true,\n      skills: true,\n      Attack: true,\n    },\n  });\n};\ncreateCards();\n// Result of a query\n// {\n//     \"drawCard\": {\n//         \"Attack\": 83920,\n//         \"name\": \"Raphaelle\",\n//         \"skills\": [\n//             \"RAIN\",\n//         ]\n//     },\n//     \"cardById\": {\n//         \"description\": \"Customer\"\n//     },\n//     \"listCards\": [\n//         {\n//             \"name\": \"Lon\",\n//             \"skills\": [\n//                 \"THUNDER\"\n//             ],\n//             \"attack\": [\n//                 {\n//                     \"name\": \"Christop\"\n//                 },\n//                 {\n//                     \"name\": \"Marcelle\"\n//                 }\n//             ]\n//         },\n//         {\n//             \"name\": \"Etha\",\n//             \"skills\": null,\n//             \"attack\": [\n\n//                 {\n//                     \"name\": \"Naomie\"\n//                 }\n//             ]\n//         },\n//     ]\n// }\n```\n\n#### Listen on a websocket - GraphQL Subscription\n\nThis creates websocket connection between your backend GraphQL socket and web browser one.\n\n```ts\nconst sub = Subscription('https://faker.graphqleditor.com/a-team/olympus/graphql');\nsub('subscription')({\n  deck: {\n    id: true,\n  },\n}).on((response) => {\n  console.log(response.deck);\n});\n```\n\n#### Perform query with Thunder - Abstracted Fetch function\n\nWith thunder you have total control of fetch function not losing the result format the same time.\n\n```js\nimport { Thunder } from './zeus';\nconst createCards = async () => {\n  const thunder = Thunder(async (query) => {\n    const response = await fetch('https://faker.graphqleditor.com/a-team/olympus/graphql', {\n      body: JSON.stringify({ query }),\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n    if (!response.ok) {\n      return new Promise((resolve, reject) => {\n        response\n          .text()\n          .then((text) => {\n            try {\n              reject(JSON.parse(text));\n            } catch (err) {\n              reject(text);\n            }\n          })\n          .catch(reject);\n      });\n    }\n    const json = await response.json();\n    return json.data;\n  });\n  const listCardsAndDraw = await thunder('query')({\n    drawCard: {\n      name: true,\n      skills: true,\n      Attack: true,\n    },\n  });\n};\ncreateCards();\n// Result of a query\n// {\n//     \"drawCard\": {\n//         \"Attack\": 83920,\n//         \"name\": \"Raphaelle\",\n//         \"skills\": [\n//             \"RAIN\",\n//             \"THUNDER\",\n//         ]\n//     },\n// }\n```\n\n## Support\n\n[Join our GraphQL Editor Channel](https://join.slack.com/t/graphqleditor/shared_invite/enQtNDkwOTgyOTM5OTc1LWI4YjU3N2U5NGVkNzQ2NzY5MGUxMTJiNjFlZDM1Zjc2OWRmNTI0NDM3OWUxYTk4Yjk3MzZlY2QwOWUzZmM2NDI)\n\nLeave a star ;)\n\n## Contribute\n\nFor a complete guide to contributing to GraphQL Editor, see the [Contribution Guide](CONTRIBUTING.md).\n\n1.  Fork this repo\n2.  Create your feature branch: git checkout -b feature-name\n3.  Commit your changes: git commit -am 'Add some feature'\n4.  Push to the branch: git push origin my-new-feature\n5.  Submit a pull request\n\n## Parsing\n\nSimplier approach to GraphQL parsing. Using graphql-js library and parsing AST to simplier types.\n\n## 4.0\n\nIn 4.0 version syntax changed a little bit to support bigger schemas. We are also supporting huuuuuge schemas now.\n",
        "data": {
            "link": "",
            "title": ""
        },
        "excerpt": ""
    },
    "markdown/graphql/variables.md": {
        "content": "\n#### Variables\n\nTo perform query with variables please import `$` function and pass the variables to query\n\n```ts\nconst test = await Gql('mutation')(\n  {\n    addCard: [\n      {\n        card: $`card`,\n      },\n      {\n        id: true,\n        description: true,\n        name: true,\n        Attack: true,\n        skills: true,\n        Children: true,\n        Defense: true,\n        cardImage: {\n          bucket: true,\n          region: true,\n          key: true,\n        },\n      },\n    ],\n  },\n  {\n    card: {\n      Attack: 2,\n      Defense: 3,\n      description: 'Lord of the mountains',\n      name: 'Golrog',\n    },\n  },\n);\n```\n",
        "data": {
            "link": "graphql/variables",
            "title": "Variables",
            "order": 2
        },
        "excerpt": ""
    },
    "markdown/graphql/interfaces-and-unions.md": {
        "content": "\n#### Unions\n\nYou can use Zeus with unions:\n\n```js\nconst { drawChangeCard } = await chain('query')({\n  drawChangeCard: {\n    __typename: true,\n    '...on EffectCard': {\n      effectSize: true,\n      name: true,\n    },\n    '...on SpecialCard': {\n      effect: true,\n      name: true,\n    },\n  },\n});\n// drawChangeCard result:\n// {\n//     \"effectSize\": 195.99532210956377,\n//     \"name\": \"Destinee\",\n//     \"__typename\": \"EffectCard\"\n// }\n```\n\n#### Interfaces\n\nAnd interfaces.\n\n```ts\nconst { nameables } = await Gql('query')({\n  nameables: {\n    __typename: true,\n    name: true,\n    '...on CardStack': {\n      cards: {\n        Defense: true,\n      },\n    },\n    '...on Card': {\n      Attack: true,\n    },\n  },\n});\n// result\n// {\n//     \"nameables\": [\n//         {\n//             \"__typename\": \"EffectCard\",\n//             \"name\": \"Hector\"\n//         },\n//         {\n//             \"__typename\": \"CardStack\",\n//             \"name\": \"Scotty\",\n//             \"cards\": [\n//                 {\n//                     \"Defense\": 1950\n//                 },\n//                 {\n//                     \"Defense\": 76566\n//                 },\n//                 {\n//                     \"Defense\": 64261\n//                 }\n//             ]\n//         },\n//         {\n//             \"__typename\": \"SpecialCard\",\n//             \"name\": \"Itzel\"\n//         },\n//     ]\n// }\n```\n",
        "data": {
            "link": "graphql/interfaces-and-unions",
            "title": "Interfaces and Unions",
            "order": 1
        },
        "excerpt": ""
    },
    "markdown/graphql/gql.md": {
        "content": "\nUse Zeus to generate gql string\n\n```js\nimport { Zeus } from './zeus';\nconst createCards = async () => {\n  const stringGql = Zeus('query', {\n    listCards: {\n      name: true,\n      skills: true,\n      Attack: true,\n    },\n  });\n  // query{listCards{name skills Attack}}\n};\ncreateCards();\n```\n",
        "data": {
            "link": "graphql/gql",
            "title": "Gql string",
            "order": 4
        },
        "excerpt": ""
    },
    "markdown/graphql/aliases.md": {
        "content": "\nPerform query with aliases\n\n```ts\nconst aliasedQueryExecute = await chain(\"query\"){\n  listCards: {\n    __alias: {\n      atak: {\n        attack: [\n          { cardID: ['1'] },\n          {\n            name: true,\n            description: true,\n          },\n        ],\n      },\n    },\n  },\n});\n// RESULT\n// {\n//     \"listCards\": [\n//         {\n//             \"atak\": {\n//                 \"attack\": [\n//                     {\n//                         \"name\": \"Zelma\",\n//                         \"description\": \"Central\"\n//                     }\n//                 ]\n//             }\n//         }\n//     ]\n// }\n```\n\nSo you can access properties type-safe like this\n\n```ts\naliasedQueryExecute.listCards.map((c) => c.atak.attack);\n```\n",
        "data": {
            "link": "graphql/aliases",
            "title": "Aliases",
            "order": 3
        },
        "excerpt": ""
    },
    "markdown/esmodule.md": {
        "content": "\nDue to validity of `.js` imports in TS for esmodules you can use flag `es` to generate `.js` imports\n\n```sh\n$ zeus schema.graphql ./ --es\n```\n",
        "data": {
            "link": "esmodules",
            "title": "EsModules",
            "order": 3
        },
        "excerpt": ""
    },
    "markdown/examples.md": {
        "content": "\nTo run the example navigate to: `./examples` and run\n\n```sh\n$ npm i\n```\n\nthen run\n\n```\n$ npm run start\n```\n\nUse `Api` for single queries mutations and `Chain` for query chaining\n",
        "data": {
            "link": "examples",
            "title": "Examples",
            "order": 2
        },
        "excerpt": ""
    }
} as const