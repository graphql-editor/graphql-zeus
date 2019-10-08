import { Environment, TranslatedCode } from 'Models';
import { Parser } from '../Parser';
import { TreeToTS } from '../TreeToTS';

export class TranslateGraphQL {
  static typescript = (
    schema: string,
    env: Environment = 'browser',
    host?: string
  ): TranslatedCode => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTree(tree, env, host);
    return {
      code: ts
    };
  }
  static javascript = (
    schema: string,
    env: Environment = 'browser',
    host?: string
  ): TranslatedCode => {
    const tree = Parser.parseAddExtensions(schema);
    const js = TreeToTS.javascript(tree, env, host);
    return {
      code: js.javascript,
      typings: js.definitions
    };
  }
}
