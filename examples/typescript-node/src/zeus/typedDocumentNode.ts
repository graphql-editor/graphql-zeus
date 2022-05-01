import { TypedQueryDocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { ValueTypes, GenericOperation, OperationOptions, InternalsBuildQuery, GraphQLTypes, InputType } from './';
import { Ops, AllTypesProps, ReturnTypes } from './const';

export const ZeusTD = <
  Z extends ValueTypes[R],
  O extends keyof typeof Ops,
  T extends Record<string, unknown>,
  R extends keyof ValueTypes = GenericOperation<O>,
>(
  operation: O,
  o: Z | ValueTypes[R],
  ops?: OperationOptions<T>,
) => {
  const varValues = ops?.variables?.values;

  return gql(InternalsBuildQuery(AllTypesProps, ReturnTypes, Ops, ops)(operation, o as any)) as TypedQueryDocumentNode<
    InputType<GraphQLTypes[R], Z>,
    typeof varValues
  >;
};