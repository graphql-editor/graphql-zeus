
/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useQuery } from '@apollo/client';
import type { QueryHookOptions } from '@apollo/client';

export function useTypedQuery<Z>(
  query: Z | ValueTypes['Query'],
  options?: QueryHookOptions<InputType<GraphQLTypes['Query'], Z>>,
) {
  return useQuery<InputType<GraphQLTypes['Query'], Z>>(gql(Zeus.query(query)), options);
}
