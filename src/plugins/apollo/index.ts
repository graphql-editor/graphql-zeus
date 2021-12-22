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

export const pluginApollo = ({ tree, esModule }: { tree: ParserTree; esModule?: boolean }) => {
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

import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index${esModule ? '.js' : ''}';
import { gql, ${capitalizedOps.map((o) => `use${o}`).join(', ')} } from '@apollo/client';
import type { ${capitalizedOps.map((o) => `${o}HookOptions`).join(', ')} } from '@apollo/client';

${o.ts}
`,
  };
};
