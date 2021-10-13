import { Environment } from '@/Models';
import { Parser } from 'graphql-js-tree';
import { TreeToTS } from '@/TreeToTS';

export class TranslateGraphQL {
  static typescript = ({
    schema,
    env = 'browser',
    host,
  }: {
    schema: string;
    env?: Environment;
    host?: string;
    esModule?: boolean;
  }) => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTree({ tree, env, host });
    return ts;
  };
  static typescriptSplit = ({
    schema,
    env = 'browser',
    host,
    esModule,
  }: {
    schema: string;
    env?: Environment;
    host?: string;
    esModule?: boolean;
  }) => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTreeSplit({ tree, env, host, esModule });
    return {
      const: TreeToTS.resolveBasisHeader().concat(ts.const),
      index: TreeToTS.resolveBasisHeader().concat(ts.indexImports).concat('\n').concat(ts.index),
    };
  };
  static javascriptSplit = ({
    schema,
    env = 'browser',
    host,
  }: {
    schema: string;
    env?: Environment;
    host?: string;
  }) => {
    const tree = Parser.parseAddExtensions(schema);
    const js = TreeToTS.javascriptSplit({ tree, env, host });
    return {
      index: TreeToTS.resolveBasisHeader().concat(js.indexImports).concat(js.index),
      const: TreeToTS.resolveBasisHeader().concat(js.const),
      ['index.d']: js.definitions,
    };
  };
}
