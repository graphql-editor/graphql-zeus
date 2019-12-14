import * as fs from 'fs';
import * as path from 'path';
import { Environment } from '../Models/Environment';
import { TranslateGraphQL } from '../TranslateGraphQL';
import { Utils } from '../Utils';

/**
 * basic yargs interface
 */
interface Yargs {
  [x: string]: unknown;
  _: string[];
  $0: string;
}

/**
 * Interface for yargs arguments
 */
interface Args extends Yargs {
  header?: string;
  typescript?: boolean;
  node?: boolean;
  url?: string;
  graphql?: string;

  output?: string;
}
/**
 * Main class for controlling CLI
 */
export class CLI {
  /**
   *  Execute yargs provided args
   */
  static execute = async (args: Args) => {
    const env: Environment = args.node ? 'node' : 'browser';
    const outputFilename = args.output;
    let schemaFileContents = '';
    const allArgs = args._;
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
      fs.writeFileSync(schemaPath, schemaFileContents);
    }
    if (args.typescript) {
      const outFile = `${outputFilename}.ts`;
      const typeScriptDefinition = TranslateGraphQL.typescript(schemaFileContents, env, host);
      fs.writeFileSync(path.join(pathToFile, outFile), typeScriptDefinition.code);
    } else {
      const outFile = `${outputFilename}.js`;
      const outFileDefinitions = `${outputFilename}.d.ts`;
      const jsDefinition = TranslateGraphQL.javascript(schemaFileContents, env, host);

      fs.writeFileSync(path.join(pathToFile, outFile), jsDefinition.code);
      fs.writeFileSync(path.join(pathToFile, outFileDefinitions), jsDefinition.typings);
    }
  };
}
