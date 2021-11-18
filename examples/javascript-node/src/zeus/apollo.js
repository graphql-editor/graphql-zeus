/* eslint-disable */
import { Zeus } from './index';
import { gql, useSubscription, useQuery, useLazyQuery, useMutation } from '@apollo/client';


export function useTypedSubscription(subscription, options) {
  return useSubscription(gql(Zeus.subscription(subscription)), options);
}

export function useTypedQuery(query, options) {
  return useQuery(gql(Zeus.query(query)), options);
}

export function useTypedLazyQuery(LazyQuery, options) {
  return useLazyQuery(gql(Zeus.query(LazyQuery)), options);
}

export function useTypedMutation(mutation, options) {
  return useMutation(gql(Zeus.mutation(mutation)), options);
}

