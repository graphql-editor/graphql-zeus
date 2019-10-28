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
`
  )
  .option('node', {
    alias: 'n',
    describe: 'Generate client for NodeJS( default is for browser and react-native )',
    boolean: true
  })
  .option('typescript', {
    alias: 'ts',
    describe: 'Output TypeScript only',
    boolean: true
  })
  .option('header', {
    alias: 'h',
    describe:
      'Additional header flag. You can also pass multiple headers like this -h myheader:123123 -h myheader2:321321',
    string: true
  })
  .demandCommand(1).argv;
CLI.execute(args);
