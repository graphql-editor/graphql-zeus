/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import type { QueryHookOptions, LazyQueryHookOptions } from '@apollo/client';


export function useTypedQuery<Z>(
  query: Z | ValueTypes['Query'],
  options?: QueryHookOptions<InputType<GraphQLTypes['Query'], Z>>,
) {
  return useQuery<InputType<GraphQLTypes['Query'], Z>>(gql(Zeus.query(query)), options);
}
export function useTypedLazyQuery<Z>(
  LazyQuery: Z | ValueTypes['Query'],
  options?: LazyQueryHookOptions<InputType<GraphQLTypes['Query'], Z>>,
) {
  return useLazyQuery<InputType<GraphQLTypes['Query'], Z>>(gql(Zeus.query(LazyQuery)), options);
}
