/* eslint-disable */
import { Gql } from './index';
import { useMutation, useQuery } from 'react-query';


export function useTypedMutation(mutationKey, mutation, options, zeusOptions) {
  return useMutation(mutationKey, () => Gql.mutation(mutation, zeusOptions), options);
}

export function useTypedQuery(queryKey, query, options, zeusOptions) {
  return useQuery(queryKey, () => Gql.query(query, zeusOptions), options);
}

