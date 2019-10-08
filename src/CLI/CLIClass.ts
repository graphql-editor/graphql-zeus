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
    let schemaFileContents: string = '';
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
    if (args.typescript) {
      const outFile = 'graphql-zeus.ts';
      const typeScriptDefinition = TranslateGraphQL.typescript(schemaFileContents, env, host);
      fs.writeFileSync(path.join(pathToFile, outFile), typeScriptDefinition.code);
    } else {
      const outFile = 'graphql-zeus.js';
      const outFileDefinitions = 'graphql-zeus.d.ts';
      const jsDefinition = TranslateGraphQL.javascript(schemaFileContents, env, host);

      fs.writeFileSync(path.join(pathToFile, outFile), jsDefinition.code);
      fs.writeFileSync(path.join(pathToFile, outFileDefinitions), jsDefinition.typings);
    }
  }
}
