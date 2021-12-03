import * as fs from 'fs';
import * as path from 'path';
import { Environment } from '@/Models';
import { TranslateGraphQL } from '@/TranslateGraphQL';
import { Utils } from '@/Utils';
import { TreeToJSONSchema } from '@/TreeToJSONSchema';
import { Parser } from 'graphql-js-tree';
import { pluginApollo } from '@/plugins/apollo';
import { pluginReactQuery } from '@/plugins/react-query';
import { pluginStucco } from '@/plugins/stuccoSubscriptions';

/**
 * basic yargs interface
 */
interface Yargs {
  [x: string]: unknown;
  _: (string | number)[];
  $0: string;
}

/**
 * Interface for yargs arguments
 */
interface CliArgs extends Yargs {
  header?: string;
  esModule?: boolean;
  node?: boolean;
  graphql?: string;
  jsonSchema?: string;
  apollo?: boolean;
  reactQuery?: boolean;
  stuccoSubscriptions?: boolean;
}
/**
 * Main class for controlling CLI
 */
export class CLI {
  /**
   *  Execute yargs provided args
   */
  static execute = async <T extends CliArgs>(args: T): Promise<void> => {
    const env: Environment = args.node ? 'node' : 'browser';
    let schemaFileContents = '';
    const allArgs = args._ as string[];
    const schemaFile: string = allArgs[0];
    let host: string | undefined;
    if (schemaFile.startsWith('http://') || schemaFile.startsWith('https://')) {
      const { header } = args;
      host = schemaFile;
      schemaFileContents = await Utils.getFromUrl(schemaFile, header);
    }
    schemaFileContents = schemaFileContents || fs.readFileSync(schemaFile).toString();
    const pathToFile = allArgs[1] || '';
    const tree = Parser.parse(schemaFileContents);
    if (args.graphql) {
      const schemaPath =
        args.graphql.endsWith('.graphql') || args.graphql.endsWith('.gql')
          ? args.graphql
          : path.join(args.graphql, 'schema.graphql');

      const pathToSchema = path.dirname(schemaPath);
      const schemaFile = path.basename(schemaPath);

      writeFileRecursive(pathToSchema, schemaFile, schemaFileContents);
    }
    if (args.jsonSchema) {
      const schemaPath = args.jsonSchema.endsWith('.json')
        ? args.jsonSchema
        : path.join(args.jsonSchema, 'schema.json');

      const pathToSchema = path.dirname(schemaPath);
      const schemaFile = path.basename(schemaPath);

      const content = TreeToJSONSchema.parse(tree);
      writeFileRecursive(pathToSchema, schemaFile, JSON.stringify(content, null, 4));
    }
    const typeScriptDefinition = TranslateGraphQL.typescriptSplit({
      schema: schemaFileContents,
      env,
      host,
      esModule: !!args.esModule,
    });
    Object.keys(typeScriptDefinition).forEach((k) =>
      writeFileRecursive(
        path.join(pathToFile, 'zeus'),
        `${k}.ts`,
        typeScriptDefinition[k as keyof typeof typeScriptDefinition],
      ),
    );
    if (args.apollo) {
      writeFileRecursive(path.join(pathToFile, 'zeus'), `apollo.ts`, pluginApollo({ tree }).ts);
    }
    if (args.reactQuery) {
      writeFileRecursive(path.join(pathToFile, 'zeus'), `reactQuery.ts`, pluginReactQuery({ tree, host }).ts);
    }
    if (args.stuccoSubscriptions) {
      writeFileRecursive(path.join(pathToFile, 'zeus'), `stuccoSubscriptions.ts`, pluginStucco({ tree }).ts);
    }
  };
}

function writeFileRecursive(pathToFile: string, filename: string, data?: string): void {
  fs.mkdirSync(pathToFile, { recursive: true });
  fs.writeFileSync(path.join(pathToFile, filename), data);
}
