/* eslint-disable */
import { Zeus } from './index';
import { gql, useQuery, useSubscription, useMutation } from '@apollo/client';


export function useTypedQuery(query, options) {
  return useQuery(gql(Zeus.query(query)), options);
}

export function useTypedSubscription(subscription, options) {
  return useSubscription(gql(Zeus.subscription(subscription)), options);
}

export function useTypedMutation(mutation, options) {
  return useMutation(gql(Zeus.mutation(mutation)), options);
}

