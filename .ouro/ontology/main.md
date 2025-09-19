# Ouro Ontology

## Technologies

- @commitlint/cli
- @commitlint/config-conventional
- @graphql-typed-document-node/core
- Apollo Client
- config-maker
- cross-fetch
- cz-conventional-changelog
- ESLint
- GraphQL
- graphql-js-tree
- graphql-tag
- graphql-ws
- Jest
- json-schema
- node-fetch
- Prettier
- react-query
- ts-jest
- ts-node
- tsx
- ttypescript
- TypeScript
- typescript-transform-paths
- ws
- yargs

## Overview

Monorepo organized into independently publishable packages plus an example app:

- packages/graphql-zeus (CLI)
  - Entry point/binary: packages/graphql-zeus/index.ts (bin "zeus" -> lib/index.js)
  - Orchestration: packages/graphql-zeus/CLIClass.ts
  - Config: packages/graphql-zeus/config.ts (ConfigMaker<ProjectOptions>)
  - Utils: packages/graphql-zeus/Utils/index.ts (introspection HTTP helpers)
  - Plugin(s): packages/graphql-zeus/plugins/typedDocumentNode (generates TypedDocumentNode helpers)
  - Outputs generated client files to consumer path (e.g., ./src/zeus/*.ts)

- packages/graphql-zeus-core (code generation engine)
  - Public API: packages/graphql-zeus-core/index.ts
  - TranslateGraphQL: packages/graphql-zeus-core/TranslateGraphQL/index.ts (parses schema and drives TS emit)
  - TreeToTS pipeline: packages/graphql-zeus-core/TreeToTS/index.ts with templates and embedded runtime helpers (functions/generated.ts)
  - Models: packages/graphql-zeus-core/Models (Environment, etc.)

- packages/graphql-zeus-jsonschema (JSON Schema generator)
  - Public API: packages/graphql-zeus-jsonschema/index.ts
  - TreeToJSONSchema: packages/graphql-zeus-jsonschema/TreeToJSONSchema/index.ts

- examples/typescript-node (consumer example)
  - Demonstrates generated client usage (Node/ESM, tsx/ts-node)

Build and tooling:

- TypeScript project references at repo root (tsconfig.json) wiring package builds
- Per-package build to lib/ directories; ttypescript with typescript-transform-paths for path aliasing (@/)
- libBuilder.ts bundles runtime helper functions into a single generated template string in core
- Jest (ts-jest preset) projects configured per package (core and jsonschema); root jest.config.js delegates to per-package configs
- Jest test scope (unit tests):
  - Core codegen: query builder, scalar decode/encode helpers, scalar path preparation, key/path utilities, TS codegen templates (fields/args/primitives, enums/unions/interfaces, operations/prop types), and a minimal API types smoke test (no network)
  - JSON Schema generator: TreeToJSONSchema conversion sanity (inputs/mutations structure)
  - No tests for the CLI package; no end-to-end or network/browser tests; no explicit coverage reporting configuration

Key data models/types and how they’re accessed:

- Data models are generated from a GraphQL schema; there is no ORM in this repo.
- Generated per-schema type families:
  - GraphQLTypes: concrete response models keyed by GraphQL type name (includes unions/interfaces)
  - ValueTypes: selection object shapes used to build queries/mutations/subscriptions
  - ResolverInputTypes: input/argument shapes for resolvers
  - ModelTypes: model-view keyed by type name (used by helpers)
  - Runtime maps used by the builder/runtime: AllTypesProps (args/value typing by path), ReturnTypes (return typing by path), Ops (operation-to-root mapping), ZEUS_INTERFACES, ZEUS_UNIONS
- Access is via the generated GraphQL client helpers, not an ORM:
  - Zeus: pure GraphQL string builder from type-checked selections
  - Chain: fetch-based typed client (browser fetch or node-fetch)
  - Thunder: same as Chain with injectable fetch/scalar codecs
  - Subscription: WebSocket-based subscriptions (legacy ws or graphql-ws)
  - Gql: preconfigured Chain with baked-in HOST/HEADERS
  - Helpers: Selector/ZeusSelect, fields, ZeusScalars (custom scalar codecs), $ (typed variables)
  - Optional plugin emits typedGql (TypedDocumentNode) using graphql-tag and @graphql-typed-document-node/core

## Communication

- Inter-module communication (in-repo):
  - Plain TypeScript imports and function calls across packages (no HTTP routing or RPC inside the monorepo).
  - CLI (packages/graphql-zeus) invokes core generator APIs (packages/graphql-zeus-core/TranslateGraphQL).
  - Core composes templates and embeds a small runtime used by the generated client.

- GraphQL over HTTP (RPC in generated clients):
  - The generated client sends GraphQL operations via fetch using a small wrapper (apiFetch).
  - Supports POST or GET (configurable via CLI flag like --method).
  - Access helpers:
    - Zeus: builds GraphQL query strings from typed selection objects
    - Chain/Thunder: typed HTTP clients on top of fetch (browser global fetch or node-fetch)
    - Gql: preconfigured Chain with HOST/HEADERS constants
  - Error handling behavior:
    - Non-2xx HTTP responses: rejected promise with parsed JSON body when possible, otherwise raw text (not wrapped in Error).
    - 2xx responses with GraphQL errors array: throws a GraphQLError that carries the original GraphQL response payload.
    - Callers should catch promise rejections; branch on instanceof GraphQLError to read GraphQL errors vs handling generic HTTP failures.
  - Libraries:
    - Browser: global fetch
    - Node: node-fetch (imported in generated code for Node targets)

- Subscriptions (WebSockets in generated clients):
  - Two selectable transports emitted by the generator:
    - Legacy WebSocket: uses native WebSocket (browser) or ws (Node) with ws://...?...query=...
    - Modern graphql-ws: uses graphql-ws createClient with proper protocol
  - Error handling:
    - Consumer-level callbacks: on, error, off, open handlers provided by the generated subscription utility.
    - In graphql-ws mode, a minimal ws proxy is exposed that only supports close(); accessing unsupported members throws a descriptive Error.
  - Libraries:
    - graphql-ws for modern protocol
    - ws for Node legacy/native WebSocket fallback

- CLI to GraphQL servers:
  - HTTP introspection (POST or GET) using cross-fetch to load schemas
  - Reads schema from URL or local file; writes generated TypeScript files to output directory
  - Error handling:
    - Invalid header declarations and introspection responses with errors result in thrown Error instances (stringified details when available).

- Not present in-repo:
  - No HTTP routing frameworks (Express/Koa/Fastify/etc.)
  - No server-side GraphQL resolvers; the repo generates clients for existing GraphQL endpoints
  - No database layer/ORM; data access is exclusively via generated GraphQL HTTP/WS clients

## Patterns

- Modular monorepo with workspaces and TypeScript project references
- Layered architecture:
  - CLI (presentation/orchestration)
  - Core code generation engine (translation, templates, runtime emit)
  - Optional JSON Schema generation
- Plugin pattern for optional emitters (e.g., TypedDocumentNode plugin)
- Code generation via template composition (TreeToTS templates and embedded runtime helpers)
- Build-time bundling of helper functions into template literals (libBuilder.ts)
- Dual subscription transport support in generated clients (legacy WebSocket and graphql-ws)
- Intra-repo coordination via direct imports/function calls; external communication via GraphQL over HTTP/WebSocket
- Data modeling pattern: all domain types derive from the GraphQL schema into generated TS families (GraphQLTypes, ValueTypes, ResolverInputTypes, ModelTypes) plus runtime maps (AllTypesProps, ReturnTypes, Ops); access pattern is via generated HTTP/WS client helpers rather than an ORM
- Testing pattern:
  - Framework: Jest with ts-jest for TypeScript
  - Focus: unit tests of pure codegen functions and string outputs (whitespace-insensitive assertions via TestUtils.replSpace)
  - Scope: core codegen and jsonschema conversion; no CLI tests; no network/e2e/browser tests; no explicit coverage reporting
- Error handling pattern:
  - Uses native exceptions and promise rejections; no Result/Either abstraction or global error boundary.
  - Network boundary (HTTP): non-OK fetch responses reject with parsed JSON or text; OK responses with GraphQL errors throw GraphQLError.
  - Subscription boundary: error events flow through provided error(...) callback; graphql-ws transport exposes a constrained ws proxy and throws on unsupported properties.
  - Build/codegen boundary: invalid inputs/AST states throw descriptive Error messages early (e.g., invalid field type, alias shape, missing operations, variable type conflicts).
  - Consumer guidance: wrap Chain/Thunder calls in try/catch; check instanceof GraphQLError to access response.errors; handle generic HTTP failures as unknown shapes.

## Components

- CLI (packages/graphql-zeus)
  - index.ts: yargs-based argument parsing and command wiring; binary published as zeus
  - CLIClass.ts: main flow (load schema, call core translator, emit files; handles flags like --node/--es/--td/--method)
  - Utils/index.ts: GraphQL introspection helpers (getIntrospectionQuery, buildClientSchema, printSchema; HTTP via cross-fetch)
    - Error handling: throws Error on incorrect header definitions and when introspection responses contain errors (details stringified where possible)
  - config.ts: ConfigMaker<ProjectOptions> holding defaults and decoders
  - plugins/typedDocumentNode: generates typedGql utilities using graphql-tag and @graphql-typed-document-node/core
  - Tests: none currently in this package

- Core codegen (packages/graphql-zeus-core)
  - TranslateGraphQL: single entry to produce TypeScript client given schema, environment, subscriptions mode (legacy or graphql-ws), etc.
  - TreeToTS: composes types (model/value/variable/returned types), operations, scalars; includes runtime helpers
  - functions/generated.ts: bundled runtime (fetch/subscription/helpers) injected into emitted client
    - HTTP/RPC:
      - handleFetchResponse: rejects non-2xx HTTP with parsed JSON or text
      - apiFetch: wraps fetch; throws GraphQLError when a 2xx GraphQL response has errors; otherwise returns data
      - Zeus: pure, typed GraphQL string builder from selection objects
      - Chain/Thunder: compose typed API callers on top of apiFetch (Chain uses provided/global fetch; Thunder allows custom fetch and scalar codecs)
      - Gql: Chain preconfigured with HOST/HEADERS constants
    - Error helpers:
      - GraphQLError: custom Error subclass; toString() yields "GraphQL Response Error"; instance carries the original GraphQL response for inspection
    - Subscriptions helpers:
      - apiSubscription/legacy: uses native WebSocket or ws in Node; consumer registers on/error/off/open handlers
      - apiSubscription/graphql-ws: uses graphql-ws createClient; exposes a minimal ws proxy (close() only) and throws on unsupported members
    - Selection/typing helpers:
      - ZeusSelect/Selector/TypeFromSelector: build reusable selection sets and infer response types
      - fields: convenience field-picking helper
      - ZeusScalars: register encode/decode for custom scalars
      - $: typed variables factory for query construction
    - Environment-specific imports in generated code:
      - Node: node-fetch (fetch, Response), ws (WebSocket)
      - Browser: globals for fetch and WebSocket
  - Generated type families and runtime maps (per schema):
    - GraphQLTypes, ValueTypes, ResolverInputTypes, ModelTypes (MODEL_TYPES)
    - AllTypesProps, ReturnTypes, Ops, ZEUS_INTERFACES, ZEUS_UNIONS
  - Models: Environment types and related shared model definitions
  - Tests (Jest + ts-jest):
    - Functions: buildQuery, decodeScalarsInResponse, PrepareScalarPaths, purifyGraphQLKey, ResolveFromPath
    - Templates: field/arg TS typing, primitive mappings, scalars object, enums, unions, interfaces, operations constants (Ops), returned prop types
    - Smoke: minimal API types usage (Chain/Selector) without network

- JSON Schema generation (packages/graphql-zeus-jsonschema)
  - TreeToJSONSchema: converts GraphQL trees (via graphql-js-tree) to JSON Schema (json-schema)
  - Tests (Jest + ts-jest): validates TreeToJSONSchema conversion (inputs/mutations structure and refs)

- Example app (examples/typescript-node)
  - Shows generating and using the client in a Node/ESM setup with tsx/ts-node and optional TypedDocumentNode support

Monolith vs modules:

- Modular monorepo. Each package (CLI, core, jsonschema) is separable and publishable. The CLI depends on core (and uses jsonschema when requested). The generated client is consumed by external projects.

Technologies (for reference): @commitlint/cli, @commitlint/config-conventional, Apollo Client, config-maker, cross-fetch, cz-conventional-changelog, ESLint, GraphQL, Jest, json-schema, node-fetch, Prettier, react-query, ts-jest, ts-node, tsx, ttypescript, TypeScript, typescript-transform-paths, ws, yargs

Technologies (for reference): @commitlint/cli, @commitlint/config-conventional, Apollo Client, config-maker, cross-fetch, cz-conventional-changelog, ESLint, GraphQL, Jest, json-schema, node-fetch, Prettier, react-query, ts-jest, ts-node, tsx, ttypescript, TypeScript, typescript-transform-paths, ws, yargs

Technologies (for reference): @commitlint/cli, @commitlint/config-conventional, Apollo Client, config-maker, cross-fetch, cz-conventional-changelog, ESLint, GraphQL, Jest, json-schema, node-fetch, Prettier, react-query, ts-jest, ts-node, tsx, ttypescript, TypeScript, typescript-transform-paths, ws, yargs