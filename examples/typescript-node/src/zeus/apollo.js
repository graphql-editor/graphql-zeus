"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypedSubscription = exports.useTypedMutation = exports.useTypedLazyQuery = exports.useTypedQuery = void 0;
var index_1 = require("./index");
var client_1 = require("@apollo/client");
function useTypedQuery(query, options) {
    return (0, client_1.useQuery)((0, client_1.gql)((0, index_1.Zeus)("query", query)), options);
}
exports.useTypedQuery = useTypedQuery;
function useTypedLazyQuery(LazyQuery, options) {
    return (0, client_1.useLazyQuery)((0, client_1.gql)((0, index_1.Zeus)("query", LazyQuery)), options);
}
exports.useTypedLazyQuery = useTypedLazyQuery;
function useTypedMutation(mutation, options) {
    return (0, client_1.useMutation)((0, client_1.gql)((0, index_1.Zeus)("mutation", mutation)), options);
}
exports.useTypedMutation = useTypedMutation;
function useTypedSubscription(subscription, options) {
    return (0, client_1.useSubscription)((0, client_1.gql)((0, index_1.Zeus)("subscription", subscription)), options);
}
exports.useTypedSubscription = useTypedSubscription;
