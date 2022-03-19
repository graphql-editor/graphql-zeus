import { OperationType, ParserTree } from 'graphql-js-tree';

const pluginApolloOps = ({ queryName, operation }: { queryName: string; operation: OperationType | 'LazyQuery' }) => {
  const capitalized = operation[0].toUpperCase() + operation.slice(1);
  const zeusOperation = operation === 'LazyQuery' ? OperationType.query : operation;

  return {
    queryName,
    operation,
    ts: `export function useTyped${capitalized}<Z extends ValueTypes[O], O extends "${queryName}">(
  ${operation}: Z | ValueTypes[O],
  options?: ${capitalized}HookOptions<InputType<GraphQLTypes[O], Z>>,
  operationName?: string,
) {
  return use${capitalized}<InputType<GraphQLTypes[O], Z>>(gql(Zeus("${zeusOperation}",${operation}, operationName)), options);
}`,
  };
};

export const pluginTypedDocumentNode = ({ tree, esModule }: { tree: ParserTree; esModule?: boolean }) => {
  const operationNodes = tree.nodes.filter((n) => n.type.operations);
  const opsFunctions = operationNodes.flatMap((n) =>
    n.type.operations!.map((o) => pluginApolloOps({ queryName: n.name, operation: o })),
  );
  for (const [index, o] of opsFunctions.entries()) {
    if (o.operation === OperationType.query) {
      opsFunctions.splice(index + 1, 0, pluginApolloOps({ queryName: o.queryName, operation: 'LazyQuery' }));
      break;
    }
  }
  const o = opsFunctions.reduce<Pick<ReturnType<typeof pluginApolloOps>, 'ts'>>(
    (a, b) => {
      a.ts = [a.ts, b.ts].join('\n');
      return a;
    },
    { ts: '' },
  );
  const capitalizedOps = opsFunctions.map((o) => o.operation[0].toUpperCase() + o.operation.slice(1));
  const jsDefsImports: string[] = [];
  if (capitalizedOps.includes('LazyQuery')) {
    jsDefsImports.push('QueryTuple');
  }
  if (capitalizedOps.includes('Query')) {
    jsDefsImports.push('QueryResult');
  }
  if (capitalizedOps.includes('Mutation')) {
    jsDefsImports.push('MutationTuple');
  }
  return {
    ts: `/* eslint-disable */

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { GraphQLTypes, InputType, Selectors, ValueTypes, Zeus } from './index${esModule ? '.js' : ''}';

export const constructQuery = <T extends ValueTypes['Query']>(q: T) => {
  const gqlString = Zeus.query(q);
  const selector = Selectors.query(q);
  type InferredResponseType = InputType<GraphQLTypes['Query'], typeof selector>;
  return gql(gqlString) as TypedDocumentNode<InferredResponseType, {}>;
};

const drawCardDocument = constructQuery({
  drawCard: {
    Attack: true,
    Children: true,
    id: true,
  },
});

${o.ts}
`,
  };
};
