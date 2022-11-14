import { TYPES } from '@/TreeToTS/templates/returnedTypes/models';
import { plusDescription } from '@/TreeToTS/templates/shared/description';
import { toTypeScriptPrimitive } from '@/TreeToTS/templates/shared/primitive';
import { ParserField, Options, getTypeName, FieldType } from 'graphql-js-tree';

export const resolveFieldType = (
  name: string,
  fType: FieldType,
  fn: (str: string) => string = (x) => x,
  isRequired = false,
): string => {
  if (fType.type === Options.name) {
    return fn(isRequired ? name : `${name} | undefined`);
  }
  if (fType.type === Options.array) {
    return resolveFieldType(
      name,
      fType.nest,
      isRequired ? (x) => `Array<${fn(x)}>` : (x) => `Array<${fn(x)}> | undefined`,
      false,
    );
  }
  if (fType.type === Options.required) {
    return resolveFieldType(name, fType.nest, fn, true);
  }
  throw new Error('Invalid field type');
};

export const resolveField = (f: ParserField, t = TYPES): string => {
  const isNullType = (type: string): string => {
    return f.type.fieldType.type === Options.required ? `: ${type}` : `?: ${type}`;
  };
  return `${plusDescription(f.description, '\t')}\t${f.name}${isNullType(
    resolveFieldType(toTypeScriptPrimitive(getTypeName(f.type.fieldType), t), f.type.fieldType),
  )}`;
};
