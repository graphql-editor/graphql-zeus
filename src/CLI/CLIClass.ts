import * as fs from 'fs';
import * as path from 'path';
import { Environment } from '@/Models';
import { TranslateGraphQL } from '@/TranslateGraphQL';
import { Utils } from '@/Utils';
import { TreeToJSONSchema } from '@/TreeToJSONSchema';
import { Parser } from '@/Parser';

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
  typescript?: boolean;
  node?: boolean;
  graphql?: string;
  jsonSchema?: string;
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

      const content = TreeToJSONSchema.parse(Parser.parse(schemaFileContents));
      writeFileRecursive(pathToSchema, schemaFile, JSON.stringify(content, null, 4));
    }
    if (args.typescript) {
      const typeScriptDefinition = TranslateGraphQL.typescriptSplit(schemaFileContents, env, host);
      Object.keys(typeScriptDefinition).forEach((k) =>
        writeFileRecursive(
          path.join(pathToFile, 'zeus'),
          `${k}.ts`,
          typeScriptDefinition[k as keyof typeof typeScriptDefinition],
        ),
      );
    } else {
      const jsDefinition = TranslateGraphQL.javascriptSplit(schemaFileContents, env, host);
      writeFileRecursive(path.join(pathToFile, 'zeus'), `const.js`, jsDefinition.const);
      writeFileRecursive(path.join(pathToFile, 'zeus'), `index.js`, jsDefinition.index);
      writeFileRecursive(path.join(pathToFile, 'zeus'), `index.d.ts`, jsDefinition['index.d']);
    }
  };
}

function writeFileRecursive(pathToFile: string, filename: string, data?: string): void {
  fs.mkdirSync(pathToFile, { recursive: true });
  fs.writeFileSync(path.join(pathToFile, filename), data);
}
