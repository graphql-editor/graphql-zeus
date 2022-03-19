import { OperationType, ParserTree } from 'graphql-js-tree';

const createOperationFunction = ({ queryName, operation }: { queryName: string; operation: OperationType }) => {
  const firstLetter = operation[0];

  return {
    queryName,
    operation,
    ts: `export function t${firstLetter}<Z extends ValueTypes["${queryName}"]>(
  ${operation}: Z | ValueTypes["${queryName}"],
):  TypedDocumentNode<InputType<GraphQLTypes["${queryName}"], Z>, {}> {
  return gql(Zeus("${operation}", ${operation}));
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

${o.ts}
`,
  };
};
