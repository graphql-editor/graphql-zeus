import { OperationType, ParserTree } from 'graphql-js-tree';

const pluginReactQueryOps = ({
  queryName,
  operation,
  host,
}: {
  queryName: string;
  operation: OperationType | 'LazyQuery';
  host?: string;
}) => {
  const capitalized = operation[0].toUpperCase() + operation.slice(1);
  const isMutation = operation == OperationType.mutation;
  const variablesType = isMutation
    ? `, TVariables = keyof ExtractVariables<TData> extends never
    ? void
    : ExtractVariables<TData> extends Record<string, unknown>
    ? { variables: ExtractVariables<TData> }
    : void`
    : '';
  return {
    queryName,
    operation,
    ts: `export function useTyped${capitalized}<O extends "${queryName}", TData extends ValueTypes[O], TResult = InputType<GraphQLTypes[O], TData>${variablesType}>(
  ${operation}Key: string | unknown[],
  ${operation}: TData | ValueTypes[O],
  options?: Omit<Use${capitalized}Options<TResult, any, any>, '${operation}Key' | '${operation}Fn'>,
  zeusOptions?: OperationOptions,
  host = "${host || ''}",
  hostOptions: chainOptions[1] = {},
) {
  return use${capitalized}<TResult, any, ${isMutation ? 'TVariables' : 'any'}>(${operation}Key, (${
      isMutation ? 'variables?' : ''
    }) => Chain(host, hostOptions)("${operation}")(${operation}, ${
      isMutation ? '{...zeusOptions, ...variables}' : 'zeusOptions'
    }) as Promise<TResult>, options);
}`,
  };
};

export const pluginReactQuery = ({ tree, esModule, host }: { tree: ParserTree; esModule?: boolean; host?: string }) => {
  const operationNodes = tree.nodes.filter((n) => n.type.operations);
  const opsFunctions = operationNodes.flatMap((n) =>
    n.type
      .operations!.filter((o) => o !== OperationType.subscription)
      .map((o) => pluginReactQueryOps({ queryName: n.name, operation: o, host })),
  );
  const o = opsFunctions.reduce<Pick<ReturnType<typeof pluginReactQueryOps>, 'ts'>>(
    (a, b) => {
      a.ts = [a.ts, b.ts].join('\n');
      return a;
    },
    { ts: '' },
  );
  const capitalizedOps = opsFunctions.map((o) => o.operation[0].toUpperCase() + o.operation.slice(1));
  return {
    ts: `/* eslint-disable */

import { ValueTypes, GraphQLTypes, InputType, Chain, OperationOptions, chainOptions, ExtractVariables } from './index${
      esModule ? '.js' : ''
    }';
import { ${capitalizedOps.map((o) => `use${o}`).join(', ')} } from 'react-query';
import type { ${capitalizedOps.map((o) => `Use${o}Options`).join(', ')} } from 'react-query';

${o.ts}
`,
  };
};
