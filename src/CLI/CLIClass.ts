import * as fs from 'fs';
import * as path from 'path';
import { Parser } from '../Parser';
import { TreeToTS } from '../TreeToTS';
import { Utils } from '../Utils';

interface Yargs {
  [x: string]: unknown;
  _: string[];
  $0: string;
}

interface Args extends Yargs {
  url?: string;
  u?: string;
  ts?: string;
  typescript?: string;
  header?: string;
}
export class CLI {
  static execute = async (args: Args) => {
    let schemaFileContents: string = '';
    const allArgs = args._;
    const schemaFile: string = allArgs[0];
    if (schemaFile.startsWith('http://') || schemaFile.startsWith('https://')) {
      const { header } = args;
      schemaFileContents = await Utils.getFromUrl(schemaFile, header);
    }
    schemaFileContents = schemaFileContents || fs.readFileSync(schemaFile).toString();
    const pathToFile = allArgs[1] || '';
    if ('typescript' in args || 'ts' in args) {
      const outFile = 'graphql-zeus.ts';
      const typeScriptDefinition = TreeToTS.resolveTree(Parser.parse(schemaFileContents));
      fs.writeFileSync(path.join(pathToFile, outFile), typeScriptDefinition);
    } else {
      const outFile = 'graphql-zeus.js';
      const outFileDefinitions = 'graphql-zeus.d.ts';
      const jsDefinition = TreeToTS.javascript(Parser.parse(schemaFileContents));
      fs.writeFileSync(path.join(pathToFile, outFile), jsDefinition.javascript);
      fs.writeFileSync(path.join(pathToFile, outFileDefinitions), jsDefinition.definitions);
    }
  }
}
