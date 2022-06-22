export const pluginTypedDocumentNode = `import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import {
  ValueTypes,
  GenericOperation,
  OperationOptions,
  GraphQLTypes,
  InputType,
  ScalarDefinition,
  ThunderGraphQLOptions,
  Zeus,
} from './';
import { Ops } from './const';

export const typedGql =
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => {
    const str = Zeus(operation, o, {
      operationOptions: ops,
      scalars: graphqlOptions?.scalars,
    });
    const vars = ops?.variables?.values;
    return gql(str) as TypedDocumentNode<InputType<GraphQLTypes[R], Z, SCLR>, typeof vars>;
  };
`;
