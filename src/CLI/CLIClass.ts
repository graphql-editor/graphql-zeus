import * as fs from 'fs';
import * as path from 'path';
import { Environment } from '@/Models';
import { TranslateGraphQL } from '@/TranslateGraphQL';
import { Utils } from '@/Utils';

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
  output: string;
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
    const outputFilename = args.output;
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
    if (args.typescript) {
      const outFile = `${outputFilename}.ts`;
      const typeScriptDefinition = TranslateGraphQL.typescript(schemaFileContents, env, host);
      writeFileRecursive(pathToFile, outFile, typeScriptDefinition.code);
    } else {
      const outFile = `${outputFilename}.js`;
      const outFileDefinitions = `${outputFilename}.d.ts`;
      const jsDefinition = TranslateGraphQL.javascript(schemaFileContents, env, host);

      writeFileRecursive(pathToFile, outFile, jsDefinition.code);
      writeFileRecursive(pathToFile, outFileDefinitions, jsDefinition.typings);
    }
  };
}

function writeFileRecursive(pathToFile: string, filename: string, data?: string): void {
  fs.mkdirSync(pathToFile, { recursive: true });
  fs.writeFileSync(path.join(pathToFile, filename), data);
}
