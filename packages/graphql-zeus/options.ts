import { Options } from 'yargs';

export const options: Record<string, Options> = {
  node: {
    alias: 'n',
    describe: 'Generate client for NodeJS( default is for browser and react-native )',
    boolean: true,
  },
  esModule: {
    alias: 'es',
    describe: 'Use .js import in TypeScript to use with esModules',
    boolean: true,
  },
  stuccoSubscriptions: {
    alias: 'ss',
    describe: 'Generate Stucco.js stuccoSubscriptions module',
    boolean: true,
  },
  typedDocumentNode: {
    alias: 'td',
    describe: 'Generate TypedDocumentNode createQuery module',
    boolean: true,
  },
  header: {
    alias: 'h',
    describe:
      'Additional header flag. You can also pass multiple headers like this -h myheader:123123 -h myheader2:321321',
    string: true,
  },
  graphql: {
    alias: 'g',
    describe: 'Download and save schema also. Path where .graphql schema file should be put. ',
    string: true,
  },
  jsonSchema: {
    alias: 'j',
    describe:
      'Generate JSON Schema to create forms from inputs and type fields with args. Path where .json schema file should be put. ',
    string: true,
  },
  subscriptions: {
    alias: 's',
    describe: 'The underlying implementation of realtime subscriptions.',
    choices: ['legacy', 'graphql-ws'],
    default: 'legacy',
  },
};
