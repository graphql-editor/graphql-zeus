# Repository Technology Graph

High-level technologies per package/repository.

## Mermaid Graph

```mermaid
graph LR
  %% Modules
  subgraph Modules
    m_root["graphql-zeus-repo\n(.)"]
    m_examples_typescript_node["typescript-node\n(examples/typescript-node)"]
    m_packages_graphql_zeus_core["graphql-zeus-core\n(packages/graphql-zeus-core)"]
    m_packages_graphql_zeus_jsonschema["graphql-zeus-jsonschema\n(packages/graphql-zeus-jsonschema)"]
    m_packages_graphql_zeus["graphql-zeus\n(packages/graphql-zeus)"]
  end
  %% Technologies
  subgraph Technologies
    t_commitlint_cli["@commitlint/cli"]
    t_commitlint_config_conventional["@commitlint/config-conventional"]
    t_apollo_client["Apollo Client"]
    t_config_maker["config-maker"]
    t_cross_fetch["cross-fetch"]
    t_cz_conventional_changelog["cz-conventional-changelog"]
    t_eslint["ESLint"]
    t_graphql["GraphQL"]
    t_jest["Jest"]
    t_json_schema["json-schema"]
    t_node_fetch["node-fetch"]
    t_prettier["Prettier"]
    t_react_query["react-query"]
    t_ts_jest["ts-jest"]
    t_ts_node["ts-node"]
    t_tsx["tsx"]
    t_ttypescript["ttypescript"]
    t_typescript["TypeScript"]
    t_typescript_transform_paths["typescript-transform-paths"]
    t_ws["ws"]
    t_yargs["yargs"]
  end
  %% Module -> Technology edges
  m_root-->t_commitlint_cli
  m_root-->t_commitlint_config_conventional
  m_root-->t_eslint
  m_root-->t_cz_conventional_changelog
  m_root-->t_graphql
  m_root-->t_jest
  m_root-->t_prettier
  m_root-->t_ts_jest
  m_root-->t_ts_node
  m_root-->t_ttypescript
  m_root-->t_typescript
  m_root-->t_typescript_transform_paths
  m_examples_typescript_node-->t_apollo_client
  m_examples_typescript_node-->t_graphql
  m_examples_typescript_node-->t_node_fetch
  m_examples_typescript_node-->t_react_query
  m_examples_typescript_node-->t_ws
  m_examples_typescript_node-->t_tsx
  m_packages_graphql_zeus_core-->t_graphql
  m_packages_graphql_zeus_jsonschema-->t_graphql
  m_packages_graphql_zeus_jsonschema-->t_json_schema
  m_packages_graphql_zeus-->t_config_maker
  m_packages_graphql_zeus-->t_cross_fetch
  m_packages_graphql_zeus-->t_graphql
  m_packages_graphql_zeus-->t_yargs
  %% Module -> Module edges (internal dependencies)
  m_packages_graphql_zeus-->m_packages_graphql_zeus_core
  m_packages_graphql_zeus-->m_packages_graphql_zeus_jsonschema
```

## graphql-zeus-repo (.)
- @commitlint/cli: @commitlint/cli
- @commitlint/config-conventional: @commitlint/config-conventional
- cz-conventional-changelog: cz-conventional-changelog
- ESLint: @typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint, eslint-config-prettier, eslint-plugin-prettier
- GraphQL: graphql-ws
- Jest: jest
- Prettier: prettier
- ts-jest: ts-jest
- ts-node: ts-node
- ttypescript: ttypescript
- TypeScript: typescript
- typescript-transform-paths: typescript-transform-paths

## typescript-node (examples/typescript-node)
- Apollo Client: @apollo/client
- GraphQL: @graphql-typed-document-node/core, graphql-tag
- node-fetch: node-fetch
- react-query: react-query
- tsx: tsx
- ws: ws

## graphql-zeus (packages/graphql-zeus)
- config-maker: config-maker
- cross-fetch: cross-fetch
- GraphQL: graphql-zeus-core, graphql-zeus-jsonschema
- yargs: yargs

## graphql-zeus-core (packages/graphql-zeus-core)
- GraphQL: graphql, graphql-js-tree, graphql-ws

## graphql-zeus-jsonschema (packages/graphql-zeus-jsonschema)
- GraphQL: graphql, graphql-js-tree, graphql-ws
- json-schema: json-schema
