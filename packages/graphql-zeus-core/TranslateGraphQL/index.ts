import { Environment } from '@/Models';
import { Parser } from 'graphql-js-tree';
import { TreeToTS } from '@/TreeToTS';

export interface TranslateOptions {
  schema: string;
  env?: Environment;
  host?: string;
  esModule?: boolean;
  subscriptions?: 'legacy' | 'graphql-ws';
}

export class TranslateGraphQL {
  static typescript = ({ schema, env = 'browser', host, subscriptions = 'legacy' }: TranslateOptions) => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTree({ tree, env, host, subscriptions });
    return ts;
  };

  static typescriptSplit = ({
    schema,
    env = 'browser',
    host,
    esModule,
    subscriptions = 'legacy',
  }: TranslateOptions) => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTreeSplit({ tree, env, host, esModule, subscriptions });
    return {
      const: TreeToTS.resolveBasisHeader().concat(ts.const),
      index: TreeToTS.resolveBasisHeader().concat(ts.indexImports).concat('\n').concat(ts.index),
    };
  };
}
