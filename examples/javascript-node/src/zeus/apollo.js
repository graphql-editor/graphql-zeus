/* eslint-disable */

import { Zeus } from './index';
import { gql, useQuery } from '@apollo/client';

export function useTypedQuery(query, options) {
  return useQuery(gql(Zeus.query(query)), options);
}
