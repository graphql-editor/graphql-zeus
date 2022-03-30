import { AllTypesProps } from './const';

export const ScalarResolver = (scalar: string, value: string) => {
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

export const extractType = (t: string) => {
  const chars = t.split('');
};
export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays,
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue: Record<string, string> | string = AllTypesProps[type][name];
  if (key && typeof resolvedValue === 'object') {
    resolvedValue = resolvedValue[key as keyof typeof resolvedValue];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`);
  }
  // resolvedValue moze byc np [SpecialSkills!]
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

export const getTypeName = (f: FieldType): string => {
  if (f.type === Options.name) {
    return f.name;
  }
  return getTypeName(f.nest);
};

export const compileType = (f: FieldType, fn: (x: string) => string = (x) => x): string => {
  if (f.type === Options.name) {
    return fn(f.name);
  } else if (f.type === Options.array) {
    return compileType(f.nest, (x) => `[${fn(x)}]`);
  } else {
    return compileType(f.nest, (x) => `${fn(x)}!`);
  }
};

export type FieldType =
  | { type: Options.name; name: string }
  | { type: Options.required; nest: FieldType }
  | { type: Options.array; nest: FieldType };

export enum Options {
  array = 'array',
  required = 'required',
  name = 'name',
}
