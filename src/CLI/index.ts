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
  .option('typescript', {
    alias: 'ts',
    describe: 'output typescript only',
    boolean: true
  })
  .option('header', {
    alias: 'h',
    describe: 'additional header',
    string: true
  })
  .demandCommand(1).argv;
CLI.execute(args);
