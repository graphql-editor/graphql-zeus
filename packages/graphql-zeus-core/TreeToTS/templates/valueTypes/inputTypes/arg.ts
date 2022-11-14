import { plusDescription } from '@/TreeToTS/templates/shared/description';
import { isTypeScriptPrimitive, toTypeScriptPrimitive } from '@/TreeToTS/templates/shared/primitive';
import { truthyType } from '@/TreeToTS/templates/truthy';
import { INPUTTYPES } from '@/TreeToTS/templates/valueTypes/models';
import { ParserField, Options, getTypeName, FieldType } from 'graphql-js-tree';

export const resolveInputArg = (f: ParserField): string => {
  const {
    type: { fieldType },
  } = f;
  const isRequiredName = (name: string): string => {
    if (fieldType.type === Options.required) {
      return name;
    }
    return `${name}?`;
  };
  const resolveArgsName = (name: string): string => {
    return isRequiredName(name) + ': ';
  };
  const typeName = getTypeName(f.type.fieldType);
  const tsp = toTypeScriptPrimitive(typeName);
  return `${plusDescription(f.description, '\t')}\t${resolveArgsName(f.name)}${resolveValueFieldType(
    isTypeScriptPrimitive(typeName) ? tsp : createInputType(typeName),
    f.type.fieldType,
  )}`;
};

export const createInputType = (t: string): string => `${INPUTTYPES}["${t}"]`;

export const resolveValueFieldType = (
  name: string,
  fType: FieldType,
  fn: (str: string) => string = (x) => x,
  isRequired = false,
): string => {
  if (fType.type === Options.name) {
    return fn(isRequired ? name : `${name} | undefined | null`);
  }
  if (fType.type === Options.array) {
    return resolveValueFieldType(
      name,
      fType.nest,
      isRequired ? (x) => `Array<${fn(x)}>` : (x) => `Array<${fn(x)}> | undefined | null`,
      false,
    );
  }
  if (fType.type === Options.required) {
    return resolveValueFieldType(name, fType.nest, fn, true);
  }
  throw new Error('Invalid field type');
};
export const resolveInputField = (f: ParserField, enumsAndScalars: string[]): string => {
  const { args } = f;
  const typeName = getTypeName(f.type.fieldType);
  const resolvedTypeName =
    isTypeScriptPrimitive(typeName) || enumsAndScalars.includes(typeName) ? truthyType : createInputType(typeName);
  if (args && args.length) {
    return `${f.name}?: [{${args.map(resolveInputArg).join(',')}},${resolvedTypeName}]`;
  }
  return `${plusDescription(f.description, '\t')}\t${`${f.name}?` + ':'}${resolvedTypeName}`;
};
