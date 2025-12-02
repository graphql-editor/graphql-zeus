#!/usr/bin/env node
import yargs from 'yargs';
import { CLI } from '@/CLIClass.js';
import { createProject } from '@/commands/create.js';

yargs(process.argv.slice(2))
  .usage(
    `
Zeus⚡⚡⚡
GraphQL Autocomplete Client Library generator

Load from file or url (url must start with http:// or https:// ):
zeus [path] [output_path] [options]

Create a new project with Zeus:
zeus create
`,
  )
  .command(
    'create',
    'Create a new project with Zeus pre-configured',
    () => {},
    () => {
      createProject();
    },
  )
  .command(
    '$0 <path> [output_path]',
    'Generate TypeScript client from GraphQL schema',
    (yargs) => {
      return yargs
        .positional('path', {
          describe: 'Path to GraphQL schema file or URL',
          type: 'string',
        })
        .positional('output_path', {
          describe: 'Output directory for generated files',
          type: 'string',
        });
    },
    (args) => {
      CLI.execute(args);
    },
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
  .option('deno', {
    alias: 'de',
    describe: 'Use .ts import in TypeScript to use with deno',
    boolean: true,
  })
  .option('constEnums', {
    alias: 'ce',
    describe: 'Use .js import in TypeScript to use with esModules',
    boolean: true,
  })
  .option('typedDocumentNode', {
    alias: 'td',
    describe: 'Generate TypedDocumentNode createQuery module',
    boolean: true,
  })
  .option('method', {
    alias: 'm',
    describe: 'provide request method "GET" or "POST" post by default',
    choices: ['POST', 'GET'],
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
  .help().argv;
