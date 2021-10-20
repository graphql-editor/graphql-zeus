import { OperationType, ParserTree } from 'graphql-js-tree';

const pluginReactQueryOps = ({
  queryName,
  operation,
}: {
  queryName: string;
  operation: OperationType | 'LazyQuery';
}) => {
  const capitalized = operation[0].toUpperCase() + operation.slice(1);
  return {
    queryName,
    operation,
    ts: `export function useTyped${capitalized}<TData, TResult = InputType<GraphQLTypes['${queryName}'], TData>>(
  ${operation}Key: string,
  ${operation}: TData | ValueTypes['${queryName}'],
  options?: Omit<Use${capitalized}Options<TResult>, '${operation}Key' | '${operation}Fn'>,
  zeusOptions?: OperationOptions,
) {
  return use${capitalized}<TResult>(${operation}Key, () => Gql.${operation}(${operation}, zeusOptions) as Promise<TResult>, options);
}`,
    js: {
      code: `export function useTyped${capitalized}(${operation}Key, ${operation}, options, zeusOptions) {
  return use${capitalized}(${operation}Key, () => Gql.${operation}(${operation}, zeusOptions), options);
}
`,
      definitions: `export declare function useTyped${capitalized}<TData, TResult = InputType<GraphQLTypes['${queryName}'], TData>>(
  ${operation}Key: string,
  ${operation}: TData | ValueTypes['${queryName}'],
  options?: Omit<Use${capitalized}Options<TResult>, '${operation}Key' | '${operation}Fn'>,
  zeusOptions?: OperationOptions,
): Use${capitalized}Result<TResult>`,
    },
  };
};

export const pluginReactQuery = ({ tree, esModule }: { tree: ParserTree; esModule?: boolean }) => {
  const operationNodes = tree.nodes.filter((n) => n.type.operations);
  const opsFunctions = operationNodes.flatMap((n) =>
    n.type
      .operations!.filter((o) => o !== OperationType.subscription)
      .map((o) => pluginReactQueryOps({ queryName: n.name, operation: o })),
  );
  const o = opsFunctions.reduce<Pick<ReturnType<typeof pluginReactQueryOps>, 'js' | 'ts'>>(
    (a, b) => {
      a.ts = [a.ts, b.ts].join('\n');
      a.js.code = [a.js.code, b.js.code].join('\n');
      a.js.definitions = [a.js.definitions, b.js.definitions].join('\n');
      return a;
    },
    { ts: '', js: { code: '', definitions: '' } },
  );
  const capitalizedOps = opsFunctions.map((o) => o.operation[0].toUpperCase() + o.operation.slice(1));
  return {
    ts: `/* eslint-disable */

import { ValueTypes, GraphQLTypes, InputType, Gql, OperationOptions } from './index${esModule ? '.js' : ''}';
import { ${capitalizedOps.map((o) => `use${o}`).join(', ')} } from 'react-query';
import type { ${capitalizedOps.map((o) => `Use${o}Options`).join(', ')} } from 'react-query';

${o.ts}
`,
    js: {
      code: `/* eslint-disable */
import { Gql } from './index';
import { ${capitalizedOps.map((o) => `use${o}`).join(', ')} } from 'react-query';

${o.js.code}
`,
      definitions: `/* eslint-disable */
import type { ValueTypes, GraphQLTypes, InputType, OperationOptions } from './index';
import type { ${capitalizedOps.map((o) => `Use${o}Options, Use${o}Result`).join(', ')} } from 'react-query';
${o.js.definitions}
`,
    },
  };
};
