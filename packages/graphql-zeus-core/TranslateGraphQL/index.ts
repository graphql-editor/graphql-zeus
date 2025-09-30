import { Environment } from '@/Models';
import { Parser } from 'graphql-js-tree';
import { TreeToTS } from '@/TreeToTS';

export interface TranslateOptions {
  schema: string;
  env?: Environment;
  host?: string;
  esModule?: boolean;
  deno?: boolean;
  subscriptions?: 'legacy' | 'graphql-ws';
  constEnums?: boolean;
}

export class TranslateGraphQL {
  static typescript = ({ schema, env = 'browser', host, subscriptions = 'legacy', constEnums }: TranslateOptions) => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTree({ tree, env, host, subscriptions, constEnums });
    return ts;
  };

  static typescriptSplit = ({
    schema,
    env = 'browser',
    host,
    esModule,
    deno,
    subscriptions = 'legacy',
    constEnums,
  }: TranslateOptions) => {
    const tree = Parser.parseAddExtensions(schema);
    const ts = TreeToTS.resolveTreeSplit({ tree, env, host, esModule, subscriptions, constEnums, deno });
    return {
      const: TreeToTS.resolveBasisHeader().concat(ts.const),
      index: TreeToTS.resolveBasisHeader().concat(ts.indexImports).concat('\n').concat(ts.index),
    };
  };
}
