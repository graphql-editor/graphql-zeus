export const AllTypesProps = {
	Query:{
		cardById:{
			cardId:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
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
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
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
		skills:{
			type:"SpecialSkills",
			array:true,
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
		cardImage:"S3Object",
		description:"String",
		id:"ID",
		name:"String",
		skills:"SpecialSkills"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
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

  const isArrayFunction = (
    parent,
    a
  ) => {
    const [values, r] = a;
    const [mainKey, key, ...keys] = parent;
    const keyValues = Object.keys(values);

    if (!keys.length) {
        return keyValues.length > 0
          ? `(${keyValues
              .map(
                (v) =>
                  `${v}:${TypesPropsResolver({
                    value: values[v],
                    type: mainKey,
                    name: key,
                    key: v
                  })}`
              )
              .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
          : traverseToSeekArrays(parent, r);
      }

    const [typeResolverKey] = keys.splice(keys.length - 1, 1);
    let valueToResolve = ReturnTypes[mainKey][key];
    for (const k of keys) {
      valueToResolve = ReturnTypes[valueToResolve][k];
    }

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
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

  const buildQuery = (type, a) =>
    traverseToSeekArrays([type], a).replace(/\"([^{^,^\n^\"]*)\":([^{^,^\n^\"]*)/g, '$1:$2');

  const queryConstruct = (t) => (o) => `${t.toLowerCase()}${buildQuery(t, o)}`;

  const fullChainConstruct = (options) => (t) => (o) => apiFetch(options, queryConstruct(t)(o));
  const seekForAliases = (o) => {
    if (typeof o === 'object' && o) {
      const keys = Object.keys(o);
      if (keys.length < 1) {
        return;
      }
      keys.forEach((k) => {
        const value = o[k];
        if (k.indexOf('__alias__') !== -1) {
          const [operation, alias] = k.split('__alias__');
          o[alias] = {
            [operation]: value
          };
          delete o[k];
        } else {
          if (Array.isArray(value)) {
            value.forEach(seekForAliases);
          } else {
            if (typeof value === 'object') {
              seekForAliases(value);
            }
          }
        }
      });
    }
  };
  
const apiFetch = (options, query, name) => {
    let fetchFunction;
    let queryString = query;
    let fetchOptions = options[1] || {};
    try {
        fetchFunction = require('node-fetch');
    } catch (error) {
        throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
    }
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      try {
        queryString = require('querystring').stringify(query);
      } catch (error) {
        throw new Error("Something gone wrong 'querystring' is a part of nodejs environment");
      }
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then((response) => response.json())
        .then((response) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data)
          return response.data;
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
        seekForAliases(response.data)
        return response.data;
      });
  };
    

  export const Chain = (...options) => ({
    Query: (o) =>
    fullChainConstruct(options)('Query')(o).then(
      (response) => response
    ),
Mutation: (o) =>
    fullChainConstruct(options)('Mutation')(o).then(
      (response) => response
    )
  });
  export const Api = (...options) => ({
    Query: {
      cardById: (o) =>
      fullChainConstruct(options)('Query')({
        cardById: o
      }).then((response) => response.cardById),
drawCard: (o) =>
      fullChainConstruct(options)('Query')({
        drawCard: o
      }).then((response) => response.drawCard),
listCards: (o) =>
      fullChainConstruct(options)('Query')({
        listCards: o
      }).then((response) => response.listCards)
  },
Mutation: {
      addCard: (o) =>
      fullChainConstruct(options)('Mutation')({
        addCard: o
      }).then((response) => response.addCard)
  }
  });
  export const Zeus = {
    Query: (o) => queryConstruct('Query')(o),
Mutation: (o) => queryConstruct('Mutation')(o)
  };
  export const Cast = {
    Query: (o) => o,
Mutation: (o) => o
  };
    