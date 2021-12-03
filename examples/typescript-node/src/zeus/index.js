"use strict";
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gql = exports.Selector = exports.Zeus = exports.Subscription = exports.SubscriptionThunder = exports.Chain = exports.Thunder = exports.apiSubscription = exports.apiFetch = exports.resolverFor = exports.$ = exports.fullSubscriptionConstruct = exports.fullChainConstruct = exports.queryConstruct = exports.TypesPropsResolver = exports.ScalarResolver = exports.ZeusSelect = exports.GraphQLError = void 0;
var const_1 = require("./const");
var GraphQLError = /** @class */ (function (_super) {
    __extends(GraphQLError, _super);
    function GraphQLError(response) {
        var _this = _super.call(this, "") || this;
        _this.response = response;
        console.error(response);
        return _this;
    }
    GraphQLError.prototype.toString = function () {
        return "GraphQL Response Error";
    };
    return GraphQLError;
}(Error));
exports.GraphQLError = GraphQLError;
var ZeusSelect = function () { return (function (t) { return t; }); };
exports.ZeusSelect = ZeusSelect;
var ScalarResolver = function (scalar, value) {
    switch (scalar) {
        case 'String':
            return "".concat(JSON.stringify(value));
        case 'Int':
            return "".concat(value);
        case 'Float':
            return "".concat(value);
        case 'Boolean':
            return "".concat(value);
        case 'ID':
            return "\"".concat(value, "\"");
        case 'enum':
            return "".concat(value);
        case 'scalar':
            return "".concat(value);
        default:
            return false;
    }
};
exports.ScalarResolver = ScalarResolver;
var TypesPropsResolver = function (_a) {
    var value = _a.value, type = _a.type, name = _a.name, key = _a.key, blockArrays = _a.blockArrays;
    if (value === null) {
        return "null";
    }
    var resolvedValue = const_1.AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error("Cannot resolve ".concat(type, " ").concat(name).concat(key ? " ".concat(key) : ''));
    }
    var typeResolved = resolvedValue.type;
    var isArray = resolvedValue.array;
    var isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith("ZEUS_VAR$")) {
        var isRequired = resolvedValue.required ? '!' : '';
        var t = "".concat(typeResolved);
        if (isArray) {
            if (isRequired) {
                t = "".concat(t, "!");
            }
            t = "[".concat(t, "]");
            if (isArrayRequired) {
                t = "".concat(t, "!");
            }
        }
        else {
            if (isRequired) {
                t = "".concat(t, "!");
            }
        }
        return "$".concat(value.split("ZEUS_VAR$")[1], "__ZEUS_VAR__").concat(t);
    }
    if (isArray && !blockArrays) {
        return "[".concat(value
            .map(function (v) { return (0, exports.TypesPropsResolver)({ value: v, type: type, name: name, key: key, blockArrays: true }); })
            .join(','), "]");
    }
    var reslovedScalar = (0, exports.ScalarResolver)(typeResolved, value);
    if (!reslovedScalar) {
        var resolvedType = const_1.AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
            var argsKeys = Object.keys(resolvedType);
            return "{".concat(argsKeys
                .filter(function (ak) { return value[ak] !== undefined; })
                .map(function (ak) { return "".concat(ak, ":").concat((0, exports.TypesPropsResolver)({ value: value[ak], type: typeResolved, name: ak })); }), "}");
        }
        return (0, exports.ScalarResolver)(const_1.AllTypesProps[typeResolved], value);
    }
    return reslovedScalar;
};
exports.TypesPropsResolver = TypesPropsResolver;
var isArrayFunction = function (parent, a) {
    var values = a[0], r = a[1];
    var mainKey = parent[0], key = parent[1], keys = parent.slice(2);
    var keyValues = Object.keys(values).filter(function (k) { return typeof values[k] !== 'undefined'; });
    if (!keys.length) {
        return keyValues.length > 0
            ? "(".concat(keyValues
                .map(function (v) {
                return "".concat(v, ":").concat((0, exports.TypesPropsResolver)({
                    value: values[v],
                    type: mainKey,
                    name: key,
                    key: v
                }));
            })
                .join(','), ")").concat(r ? traverseToSeekArrays(parent, r) : '')
            : traverseToSeekArrays(parent, r);
    }
    var typeResolverKey = keys.splice(keys.length - 1, 1)[0];
    var valueToResolve = const_1.ReturnTypes[mainKey][key];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        valueToResolve = const_1.ReturnTypes[valueToResolve][k];
    }
    var argumentString = keyValues.length > 0
        ? "(".concat(keyValues
            .map(function (v) {
            return "".concat(v, ":").concat((0, exports.TypesPropsResolver)({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
            }));
        })
            .join(','), ")").concat(r ? traverseToSeekArrays(parent, r) : '')
        : traverseToSeekArrays(parent, r);
    return argumentString;
};
var resolveKV = function (k, v) {
    return typeof v === 'boolean' ? k : typeof v === 'object' ? "".concat(k, "{").concat(objectToTree(v), "}") : "".concat(k).concat(v);
};
var objectToTree = function (o) {
    return "{".concat(Object.keys(o).map(function (k) { return "".concat(resolveKV(k, o[k])); }).join(' '), "}");
};
var traverseToSeekArrays = function (parent, a) {
    if (!a)
        return '';
    if (Object.keys(a).length === 0) {
        return '';
    }
    var b = {};
    if (Array.isArray(a)) {
        return isArrayFunction(__spreadArray([], parent, true), a);
    }
    else {
        if (typeof a === 'object') {
            Object.keys(a)
                .filter(function (k) { return typeof a[k] !== 'undefined'; })
                .forEach(function (k) {
                if (k === '__alias') {
                    Object.keys(a[k]).forEach(function (aliasKey) {
                        var aliasOperations = a[k][aliasKey];
                        var aliasOperationName = Object.keys(aliasOperations)[0];
                        var aliasOperation = aliasOperations[aliasOperationName];
                        b["".concat(aliasOperationName, "__alias__").concat(aliasKey, ": ").concat(aliasOperationName)] = traverseToSeekArrays(__spreadArray(__spreadArray([], parent, true), [aliasOperationName], false), aliasOperation);
                    });
                }
                else {
                    b[k] = traverseToSeekArrays(__spreadArray(__spreadArray([], parent, true), [k], false), a[k]);
                }
            });
        }
        else {
            return '';
        }
    }
    return objectToTree(b);
};
var buildQuery = function (type, a) {
    return traverseToSeekArrays([type], a);
};
var inspectVariables = function (query) {
    var regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
    var result;
    var AllVariables = [];
    while ((result = regex.exec(query))) {
        if (AllVariables.includes(result[0])) {
            continue;
        }
        AllVariables.push(result[0]);
    }
    if (!AllVariables.length) {
        return query;
    }
    var filteredQuery = query;
    AllVariables.forEach(function (variable) {
        while (filteredQuery.includes(variable)) {
            filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
        }
    });
    return "(".concat(AllVariables.map(function (a) { return a.split('__ZEUS_VAR__'); })
        .map(function (_a) {
        var variableName = _a[0], variableType = _a[1];
        return "".concat(variableName, ":").concat(variableType);
    })
        .join(', '), ")").concat(filteredQuery);
};
var queryConstruct = function (t, tName, operationName) { return function (o) {
    return "".concat(t.toLowerCase()).concat(operationName ? ' ' + operationName : '').concat(inspectVariables(buildQuery(tName, o)));
}; };
exports.queryConstruct = queryConstruct;
var fullChainConstruct = function (fn) { return function (t, tName) { return function (o, options) { return fn((0, exports.queryConstruct)(t, tName, options === null || options === void 0 ? void 0 : options.operationName)(o), options === null || options === void 0 ? void 0 : options.variables).then(function (r) {
    seekForAliases(r);
    return r;
}); }; }; };
exports.fullChainConstruct = fullChainConstruct;
var fullSubscriptionConstruct = function (fn) { return function (t, tName) { return function (o, options) {
    return fn((0, exports.queryConstruct)(t, tName, options === null || options === void 0 ? void 0 : options.operationName)(o));
}; }; };
exports.fullSubscriptionConstruct = fullSubscriptionConstruct;
var seekForAliases = function (response) {
    var traverseAlias = function (value) {
        if (Array.isArray(value)) {
            value.forEach(seekForAliases);
        }
        else {
            if (typeof value === 'object') {
                seekForAliases(value);
            }
        }
    };
    if (typeof response === 'object' && response) {
        var keys = Object.keys(response);
        if (keys.length < 1) {
            return;
        }
        keys.forEach(function (k) {
            var _a;
            var value = response[k];
            if (k.indexOf('__alias__') !== -1) {
                var _b = k.split('__alias__'), operation = _b[0], alias = _b[1];
                response[alias] = (_a = {},
                    _a[operation] = value,
                    _a);
                delete response[k];
            }
            traverseAlias(value);
        });
    }
};
var $ = function (t) { return "ZEUS_VAR$".concat(t.join('')); };
exports.$ = $;
var resolverFor = function (type, field, fn) { return fn; };
exports.resolverFor = resolverFor;
var handleFetchResponse = function (response) {
    if (!response.ok) {
        return new Promise(function (_, reject) {
            response.text().then(function (text) {
                try {
                    reject(JSON.parse(text));
                }
                catch (err) {
                    reject(text);
                }
            }).catch(reject);
        });
    }
    return response.json();
};
var apiFetch = function (options) { return function (query, variables) {
    if (variables === void 0) { variables = {}; }
    var fetchFunction;
    var queryString = query;
    var fetchOptions = options[1] || {};
    try {
        fetchFunction = require('node-fetch');
    }
    catch (error) {
        throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
    }
    if (fetchOptions.method && fetchOptions.method === 'GET') {
        try {
            queryString = require('querystring').stringify(query);
        }
        catch (error) {
            throw new Error("Something gone wrong 'querystring' is a part of nodejs environment");
        }
        return fetchFunction("".concat(options[0], "?query=").concat(queryString), fetchOptions)
            .then(handleFetchResponse)
            .then(function (response) {
            if (response.errors) {
                throw new GraphQLError(response);
            }
            return response.data;
        });
    }
    return fetchFunction("".concat(options[0]), __assign({ body: JSON.stringify({ query: queryString, variables: variables }), method: 'POST', headers: {
            'Content-Type': 'application/json'
        } }, fetchOptions))
        .then(handleFetchResponse)
        .then(function (response) {
        if (response.errors) {
            throw new GraphQLError(response);
        }
        return response.data;
    });
}; };
exports.apiFetch = apiFetch;
var apiSubscription = function (options) { return function (query) {
    var _a, _b, _c;
    try {
        var WebSocket_1 = require('ws');
        var queryString = options[0] + '?query=' + encodeURIComponent(query);
        var wsString = queryString.replace('http', 'ws');
        var host = (options.length > 1 && ((_b = (_a = options[1]) === null || _a === void 0 ? void 0 : _a.websocket) === null || _b === void 0 ? void 0 : _b[0])) || wsString;
        var webSocketOptions = ((_c = options[1]) === null || _c === void 0 ? void 0 : _c.websocket) || [host];
        var ws_1 = new (WebSocket_1.bind.apply(WebSocket_1, __spreadArray([void 0], webSocketOptions, false)))();
        return {
            ws: ws_1,
            on: function (e) {
                ws_1.onmessage = function (event) {
                    if (event.data) {
                        var parsed = JSON.parse(event.data);
                        var data = parsed.data;
                        if (data) {
                            seekForAliases(data);
                        }
                        return e(data);
                    }
                };
            },
            off: function (e) {
                ws_1.onclose = e;
            },
            error: function (e) {
                ws_1.onerror = e;
            },
            open: function (e) {
                ws_1.onopen = e;
            },
        };
    }
    catch (_d) {
        throw new Error('No websockets implemented. Please install ws');
    }
}; };
exports.apiSubscription = apiSubscription;
var allOperations = {
    "query": "Query",
    "mutation": "Mutation",
    "subscription": "Subscription"
};
var Thunder = function (fn) { return function (operation) { return function (o, ops) {
    return (0, exports.fullChainConstruct)(fn)(operation, allOperations[operation])(o, ops);
}; }; };
exports.Thunder = Thunder;
var Chain = function () {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    return (0, exports.Thunder)((0, exports.apiFetch)(options));
};
exports.Chain = Chain;
var SubscriptionThunder = function (fn) { return function (operation) { return function (o, ops) {
    return (0, exports.fullSubscriptionConstruct)(fn)(operation, allOperations[operation])(o, ops);
}; }; };
exports.SubscriptionThunder = SubscriptionThunder;
var Subscription = function () {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    return (0, exports.SubscriptionThunder)((0, exports.apiSubscription)(options));
};
exports.Subscription = Subscription;
var Zeus = function (operation, o, operationName) { return (0, exports.queryConstruct)(operation, allOperations[operation], operationName)(o); };
exports.Zeus = Zeus;
var Selector = function (key) { return (0, exports.ZeusSelect)(); };
exports.Selector = Selector;
exports.Gql = (0, exports.Chain)('https://faker.graphqleditor.com/a-team/olympus/graphql');
