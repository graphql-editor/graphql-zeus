export const AllTypesProps = {
	Query:{
		cardById:{
			cardId:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Card:{
		attack:{
			cardID:{
				type:"String",
				array:true,
				arrayRequired:false,
				required:true
			}
		}
	},
	SpecialSkills: "enum",
	Mutation:{
		addCard:{
			card:{
				type:"createCard",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	createCard:{
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		Children:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		Attack:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		Defense:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes = {
	Query:{
		cardById:"Card",
		drawCard:"Card",
		listCards:"Card"
	},
	Card:{
		Attack:"Int",
		Children:"Int",
		Defense:"Int",
		attack:"Card",
		description:"String",
		id:"ID",
		name:"String",
		skills:"SpecialSkills"
	},
	Mutation:{
		addCard:"Card"
	}
}

export class GraphQLError extends Error {
    constructor(response) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }

const joinArgs = (q) => {
    return Array.isArray(q)
      ? `[${q.map(joinArgs).join(',')}]`
      : typeof q === 'object'
      ? `{${Object.keys(q)
          .map((k) => `${k}:${joinArgs(q[k])}`)
          .join(',')}}`
      : typeof q === 'string'
      ? `"${q}"`
      : q;
  };

  export const ScalarResolver = (scalar, value) => {
    switch (scalar) {
      case 'String':
        return `"${value}"`;
      case 'Int':
        return `${value}`;
      case 'Float':
        return `${value}`;
      case 'Boolean':
        return `${value}`;
      case 'ID':
        return `"${value}"`;
      case 'enum':
        return `${value}`;
      case 'scalar':
        return `${value}`;
      default:
        return false;
    }
  };

  export const ReturnGraphQLTypeOfArgument = (type, name, key) => {
    return AllTypesProps[type][name][key].type;
  };

  export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
  }) => {
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
      resolvedValue = resolvedValue[key];
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    if (isArray && !blockArrays) {
      return `[${value
        .map((v) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
      const resolvedType = AllTypesProps[typeResolved];
      if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
          .filter((ak) => value[ak] !== undefined)
          .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
          )}}`;
      }
      return ScalarResolver(AllTypesProps[typeResolved], value);
    }
    return reslovedScalar;
  };

  const resolveArgs = (q, t, name) => {
    const argsKeys = Object.keys(q);
    if (argsKeys.length === 0) {
      return '';
    }
    return `(${argsKeys
      .map((k) => `${k}:${TypesPropsResolver({ value: q[k], type: t, name, key: k })}`)
      .join(',')})`;
  };

  const isArrayFunction = (
    parent,
    a
  ) => {
    const [values, r] = a;
    const [mainKey, key, ...keys] = parent;
    const [typeResolverKey] = keys.splice(keys.length - 1, 1);
    let valueToResolve = ReturnTypes[mainKey][key];
    for (const k of keys) {
      valueToResolve = ReturnTypes[valueToResolve][k];
    }

    const keyValues = Object.keys(values);
    const argumentString =
      keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: valueToResolve,
                  name: typeResolverKey,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    return argumentString;
  };

  const resolveKV = (k, v) =>
    typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

  const objectToTree = (o) =>
    `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

  const traverseToSeekArrays = (parent, a) => {
    if (!a) return '';
    if (Object.keys(a).length === 0) {
      return '';
    }
    let b = {};
    Object.keys(a).map((k) => {
      if (Array.isArray(a[k])) {
        b[k] = isArrayFunction([...parent, k], a[k]);
      } else {
        if (typeof a[k] === 'object') {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        } else {
          b[k] = a[k];
        }
      }
    });
    return objectToTree(b);
  };

  const buildQuery = (type, name, a) =>
    traverseToSeekArrays([type, name], a).replace(/\"([^{^,^\n^\"]*)\":([^{^,^\n^\"]*)/g, '$1:$2');

  const construct = (t, name, args) => (
    returnedQuery
  ) => `
          ${t.toLowerCase()}{
            ${name}${resolveArgs(args, t, name)}${returnedQuery}
          }
    `;

  const fullConstruct = (options) => (
    t,
    name
  ) => (props) => (o) =>
    apiFetch(options, construct(t, name, props)(buildQuery(t, name, o)), name);


  const apiFetch = (options, query, name) => {
    let fetchFunction;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (typeof fetch !== 'undefined') {
      fetchFunction = fetch;
    } else {
      try {
        fetchFunction = require('node-fetch');
      } catch (error) {
        throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
      }
    }
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      if (typeof encodeURIComponent !== 'undefined') {
        queryString = encodeURIComponent(query);
      } else {
        queryString = require('querystring').stringify(query);
      }
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then((response) => response.json())
        .then((response) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data && response.data[name];
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data && response.data[name];
      });
  };

  export const Api = (...options) => ({
      Query: {	cardById: ((props) => (o) =>
    		fullConstruct(options)('Query', 'cardById')(props)(o).then(
    			(response) => response
    		)),
	drawCard: ((props) => (o) =>
    		fullConstruct(options)('Query', 'drawCard')(props)(o).then(
    			(response) => response
    		)),
	listCards: ((props) => (o) =>
    		fullConstruct(options)('Query', 'listCards')(props)(o).then(
    			(response) => response
    		))},
Mutation: {	addCard: ((props) => (o) =>
    		fullConstruct(options)('Mutation', 'addCard')(props)(o).then(
    			(response) => response
    		))},
Subscription: {}
  });
    