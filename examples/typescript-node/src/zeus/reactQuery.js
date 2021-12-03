"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypedMutation = exports.useTypedQuery = void 0;
var index_1 = require("./index");
var react_query_1 = require("react-query");
function useTypedQuery(queryKey, query, options, zeusOptions, host) {
    if (host === void 0) { host = "https://faker.graphqleditor.com/a-team/olympus/graphql"; }
    return (0, react_query_1.useQuery)(queryKey, function () { return (0, index_1.Chain)(host)("query")(query, zeusOptions); }, options);
}
exports.useTypedQuery = useTypedQuery;
function useTypedMutation(mutationKey, mutation, options, zeusOptions, host) {
    if (host === void 0) { host = "https://faker.graphqleditor.com/a-team/olympus/graphql"; }
    return (0, react_query_1.useMutation)(mutationKey, function () { return (0, index_1.Chain)(host)("mutation")(mutation, zeusOptions); }, options);
}
exports.useTypedMutation = useTypedMutation;
