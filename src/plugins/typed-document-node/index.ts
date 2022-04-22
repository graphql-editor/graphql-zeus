import { OperationType, ParserTree } from 'graphql-js-tree';

const createOperationFunction = ({ queryName, operation }: { queryName: string; operation: OperationType }) => {
  // const firstLetter = operation[0];

  return {
    queryName,
    operation,
    ts: `export function ${operation}<Z extends QueryWithVariables<ValueTypes["${queryName}"]>>(
  ${operation}: Z,
):  TypedDocumentNode<InputType<GraphQLTypes["${queryName}"], Z>, ExtractVariables<Z>> {
  return gql(Zeus("${operation}", ${operation} as any));
}
`,
  };
};

export const pluginTypedDocumentNode = ({ tree, esModule }: { tree: ParserTree; esModule?: boolean }) => {
  const operationNodes = tree.nodes.filter((n) => n.type.operations);
  const opsFunctions = operationNodes.flatMap((n) =>
    n.type.operations!.map((o) => createOperationFunction({ queryName: n.name, operation: o })),
  );

  const o = opsFunctions.reduce(
    (a, b) => {
      a.ts = [a.ts, b.ts].join('\n');
      return a;
    },
    { ts: '' },
  );

  return {
    ts: `/* eslint-disable */

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { GraphQLTypes, InputType, ValueTypes, Zeus } from './index';

type Variable<T, Name extends string> = {
  ' __zeus_name': Name;
  ' __zeus_type': T;
};

type QueryInputWithVariables<T> = T extends string | number | Array<any>
  ? Variable<T, any> | T
  : Variable<T, any> | { [K in keyof T]: QueryInputWithVariables<T[K]> } | T;

type QueryWithVariables<T> = T extends [infer Input, infer Output]
  ? [QueryInputWithVariables<Input>, QueryWithVariables<Output>]
  : { [K in keyof T]: QueryWithVariables<T[K]> };

type ExtractVariables<Query> = Query extends Variable<infer VType, infer VName>
  ? { [key in VName]: VType }
  : Query extends [infer Inputs, infer Outputs]
  ? ExtractVariables<Inputs> & ExtractVariables<Outputs>
  : Query extends string | number | boolean
  ? {}
  : UnionToIntersection<{ [K in keyof Query]: ExtractVariables<Query[K]> }[keyof Query]>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export const $ = <Type, Name extends string>(name: Name) => {
  return ('ZEUS_VAR$' + name) as any as Variable<Type, Name>;
};

${o.ts}
`,
  };
};
