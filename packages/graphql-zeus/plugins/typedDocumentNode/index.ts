import { ProjectOptions } from '@/config.js';

export const pluginTypedDocumentNode = ({ esModule, node }: Partial<ProjectOptions>) => `/* eslint-disable */
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import ${esModule ? '{ gql }' : 'gql'} from 'graphql-tag';
import {
  type ValueTypes,
  type GenericOperation,
  type OperationOptions,
  type GraphQLTypes,
  type InputType,
  type ScalarDefinition,
  type ThunderGraphQLOptions,
  Zeus,
  type ExtractVariables,
} from './${esModule || !!node ? 'index.js' : ''}';
import { Ops } from './const${esModule || !!node ? '.js' : ''}';

export const typedGql =
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z & {
    [P in keyof Z]: P extends keyof ValueTypes[R] ? Z[P] : never;
  }, ops?: OperationOptions) => {
    const str = Zeus(operation, o, {
      operationOptions: ops,
      scalars: graphqlOptions?.scalars,
    });
    return gql(str) as TypedDocumentNode<InputType<GraphQLTypes[R], Z, SCLR>, ExtractVariables<Z>>;
  };
`;
