export const pluginApollo = () => ({
  ts: `/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useQuery } from '@apollo/client';
import type { QueryHookOptions } from '@apollo/client';

export function useTypedQuery<Z>(
  query: Z | ValueTypes['Query'],
  options?: QueryHookOptions<InputType<GraphQLTypes['Query'], Z>>,
) {
  return useQuery<InputType<GraphQLTypes['Query'], Z>>(gql(Zeus.query(query)), options);
}
`,
  js: {
    code: `/* eslint-disable */
import { Zeus } from './index';
import { gql, useQuery } from '@apollo/client';

export function useTypedQuery(query, options) {
  return useQuery(gql(Zeus.query(query)), options);
}
`,
    definitions: `/* eslint-disable */
import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useQuery } from '@apollo/client';
import type { QueryHookOptions } from '@apollo/client';

export declare function useTypedQuery<Z>(
  query: Z | ValueTypes['Query'],
  options?: QueryHookOptions<InputType<GraphQLTypes['Query'], Z>>,
) {
  return useQuery<InputType<GraphQLTypes['Query'], Z>>(gql(Zeus.query(query)), options);
};
`,
  },
});
