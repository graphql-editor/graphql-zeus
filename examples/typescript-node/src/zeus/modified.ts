/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type DictArrayFunction = [Record<string, any>, Dict];
type DictValue = boolean | DictArrayFunction | Dict;
type Dict = {
  [x: string]: DictValue;
};

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return `${JSON.stringify(value)}`;
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

export const TypesPropsResolver = <
  T extends keyof typeof AllTypesProps,
  U extends keyof typeof AllTypesProps[T],
  L extends keyof typeof AllTypesProps[T][U]
>({
  value,
  type,
  name,
  key,
  blockArrays,
}: {
  value: any;
  type: T;
  name: U;
  key?: L;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  if (!(type in AllTypesProps)) {
    throw new Error(`No type inside type props`);
  }
  const typeRecord = AllTypesProps[type];
  if (typeRecord === 'enum') {
    throw new Error(`AllTypesProps type cannot be a string`);
  }
  if (!(name in typeRecord)) {
    throw new Error(`No type inside type props`);
  }
  const resolvedValue = key ? typeRecord[name][key] : typeRecord[name];
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`);
  }

  const typeResolved = resolvedValue.type;
  const isArray = resolvedValue.array;
  const isArrayRequired = resolvedValue.arrayRequired;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : '';
    let t = `${typeResolved}`;
    if (isArray) {
      if (isRequired) {
        t = `${t}!`;
      }
      t = `[${t}]`;
      if (isArrayRequired) {
        t = `${t}!`;
      }
    } else {
      if (isRequired) {
        t = `${t}!`;
      }
    }
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
  }
  if (isArray && !blockArrays) {
    return `[${value.map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true })).join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map((ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`)}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (parent: string[], a: DictArrayFunction) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
    return keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: mainKey,
                name: key,
                key: v,
              })}`,
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
                key: v,
              })}`,
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o)
    .map((k) => `${resolveKV(k, o[k])}`)
    .join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: Dict): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
          if (k === '__alias') {
            Object.keys(a[k]).forEach((aliasKey) => {
              const aliasOperations = a[k][aliasKey];
              const aliasOperationName = Object.keys(aliasOperations)[0];
              const aliasOperation = aliasOperations[aliasOperationName];
              b[`${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`] = traverseToSeekArrays(
                [...parent, aliasOperationName],
                aliasOperation,
              );
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

const buildQuery = (type: string, a?: Dict) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (
  o: Dict,
) => `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Dict,
  options?: OperationOptions,
) =>
  fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r: any) => {
    seekForAliases(r);
    return r;
  });

export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Dict, options?: OperationOptions) => fn(queryConstruct(t, tName, options?.operationName)(o));

const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};
