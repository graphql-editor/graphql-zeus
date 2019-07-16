#!/usr/bin/env node
import * as yargs from 'yargs';
import { CLI } from './CLIClass';
const args = yargs
  .usage(
    `
Zeus⚡⚡⚡
GraphQL Autocomplete Client Library generator

Load from file or url (url must start with http:// or https:// ):
zeus [path] [output_path] [flags]

Flags:
  --ts Output typescript only
`
  )
  .demandCommand(1).argv;
CLI.execute(args);
