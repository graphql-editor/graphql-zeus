/* eslint-disable */
import { Gql } from './index';
import { useQuery, useMutation } from 'react-query';


export function useTypedQuery(queryKey, query, options, zeusOptions) {
  return useQuery(queryKey, () => Gql.query(query, zeusOptions), options);
}

export function useTypedMutation(mutationKey, mutation, options, zeusOptions) {
  return useMutation(mutationKey, () => Gql.mutation(mutation, zeusOptions), options);
}

