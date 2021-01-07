import { Environment } from '@/Models';
import { Parser } from '@/Parser';
import { TreeToTS } from '@/TreeToTS';

export class TranslateGraphQL {
  static typescript = (schema: string, env: Environment = 'browser', host?: string) => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTree(tree, env, host);
    return ts;
  };
  static typescriptSplit = (schema: string, env: Environment = 'browser', host?: string) => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTreeSplit(tree, env, host);
    return {
      typings: TreeToTS.resolveBasisHeader().concat(ts.typings),
      const: TreeToTS.resolveBasisHeader().concat(ts.const),
      builtInFunctions: TreeToTS.resolveBasisHeader()
        .concat(ts.builtInFunctionsImports)
        .concat('\n')
        .concat(ts.builtInFunctions),
      index: TreeToTS.resolveBasisHeader().concat(ts.indexImports).concat('\n').concat(ts.index),
    };
  };
  static javascriptSplit = (schema: string, env: Environment = 'browser', host?: string) => {
    const tree = Parser.parseAddExtensions(schema);
    const js = TreeToTS.javascriptSplit(tree, env, host);
    return {
      index: TreeToTS.resolveBasisHeader().concat(js.indexImports).concat(js.index),
      ['index.d']: js.definitions,
    };
  };
}
