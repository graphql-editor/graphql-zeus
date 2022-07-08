#!/usr/bin/env node
import * as yargs from 'yargs';
import { CLI } from './CLIClass';
const args = yargs
  .usage(
    `
Zeus⚡⚡⚡
GraphQL Autocomplete Client Library generator

Load from file or url (url must start with http:// or https:// ):
zeus [path] [output_path] [options]
`,
  )
  .option('node', {
    alias: 'n',
    describe: 'Generate client for NodeJS( default is for browser and react-native )',
    boolean: true,
  })
  .option('esModule', {
    alias: 'es',
    describe: 'Use .js import in TypeScript to use with esModules',
    boolean: true,
  })
  .option('apollo', {
    alias: 'ap',
    describe: 'Generate Apollo useTypedQuery module',
    boolean: true,
  })
  .option('stuccoSubscriptions', {
    alias: 'ss',
    describe: 'Generate Stucco.js stuccoSubscriptions module',
    boolean: true,
  })
  .option('typedDocumentNode', {
    alias: 'td',
    describe: 'Generate TypedDocumentNode createQuery module',
    boolean: true,
  })
  .option('reactQuery', {
    alias: 'rq',
    describe: 'Generate React Query useTypedQuery module',
    boolean: true,
  })
  .option('header', {
    alias: 'h',
    describe:
      'Additional header flag. You can also pass multiple headers like this -h myheader:123123 -h myheader2:321321',
    string: true,
  })
  .option('graphql', {
    alias: 'g',
    describe: 'Download and save schema also. Path where .graphql schema file should be put. ',
    string: true,
  })
  .option('jsonSchema', {
    alias: 'j',
    describe:
      'Generate JSON Schema to create forms from inputs and type fields with args. Path where .json schema file should be put. ',
    string: true,
  })
  .option('subscriptions', {
    alias: 's',
    describe: 'The underlying implementation of realtime subscriptions.',
    choices: ['legacy', 'graphql-ws'],
    default: 'legacy',
  })
  .demandCommand(1).argv;
CLI.execute(args);
