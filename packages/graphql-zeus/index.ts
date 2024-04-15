#!/usr/bin/env node
import { createZeusFiles } from '@/createZeusFiles';
import { options } from '@/options';
import path = require('path');
import * as yargs from 'yargs';
const args = yargs
  .usage(
    `
Zeus⚡⚡⚡
GraphQL Autocomplete Client Library generator

Load from file or url (url must start with http:// or https:// ):
zeus [path] [output_path] [options]
`,
  )
  .command(
    '$0 <path_or_url>',
    'create zeus typings folder',
    async (y) => {
      y.options(options);
    },
    async (argv) => {
      await createZeusFiles(argv);
    },
  )
  .command(
    'create <path_or_url> ',
    'Create a package with generated SDK with regeneration scripts to further update it when you update the schema.graphql or schema URL. Useful wit monorepos',
    async (y) => {
      await y.options({
        path: {
          string: true,
          describe: 'path to generated package for example packages/client',
        },
        name: {
          string: true,
          describe: 'name of the generated npm package folder',
        },
        ...options,
      });
    },
    async (argv) => {
      const packagePath = argv.path || './packages/zeus';
      const generatedPath = path.join(process.cwd(), pacakagePath);
      fs.mkdirSync(generatedPath, { recursive: true });
      await createZeusFiles(argv);
    },
  )
  .demandCommand(1).argv;
