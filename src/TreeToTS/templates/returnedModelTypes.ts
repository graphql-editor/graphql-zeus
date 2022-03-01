import { ParserField, Options, TypeSystemDefinition, TypeDefinition, FieldType, getTypeName } from 'graphql-js-tree';
import { TYPES } from './returnedTypes';

export const MODEL_TYPES = 'ModelTypes';

const typeScriptMap: Record<string, string> = {
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
  ID: 'string',
  String: 'string',
};
const toTypeScriptPrimitive = (a: string): string => typeScriptMap[a] || `${MODEL_TYPES}["${a}"]`;

const plusDescription = (description?: string, prefix = ''): string =>
  description ? `${prefix}/** ${description} */\n` : '';

const resolveFieldType = (
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
      isRequired ? (x) => `Array<${fn(x)}> | undefined` : (x) => `Array<${fn(x)}>`,
      false,
    );
  }
  if (fType.type === Options.required) {
    return resolveFieldType(name, fType.nest, fn, true);
  }
  throw new Error('Invalid field type');
};

const resolveField = (f: ParserField): string => {
  const isRequiredName = (name: string): string => {
    if (f.type.fieldType.type === Options.required) {
      return `${name}:`;
    }
    return `${name}?:`;
  };

  const resolveArgsName = (name: string): string => {
    return isRequiredName(name);
  };
  return `${plusDescription(f.description, '\t')}\t${resolveArgsName(f.name)}${resolveFieldType(
    toTypeScriptPrimitive(getTypeName(f.type.fieldType)),
    f.type.fieldType,
  )}`;
};

const resolveTypeFromRoot = (i: ParserField, rootNodes: ParserField[]): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === TypeDefinition.ScalarTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:any`;
  }
  if (!i.args || !i.args.length) {
    return ``;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `${plusDescription(i.description)}["${i.name}"]: ${
      typesImplementing.length > 0 ? typesImplementing.map((ti) => `${MODEL_TYPES}["${ti.name}"]`).join(' | ') : 'never'
    }`;
  }
  if (i.data.type === TypeDefinition.UnionTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:${i.args
      .map((f) => `${MODEL_TYPES}["${f.name}"]`)
      .join(' | ')}`;
  }
  if (i.data.type !== TypeDefinition.ObjectTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: ${TYPES}["${i.name}"]`;
  }

  return `${plusDescription(i.description)}["${i.name}"]: {\n\t${i.args.map((f) => resolveField(f)).join(',\n')}\n}`;
};
export const resolveModelTypes = (rootNodes: ParserField[]): string => {
  return `export type ${MODEL_TYPES} = {
    ${rootNodes
      .map((f) => resolveTypeFromRoot(f, rootNodes))
      .filter((v) => v)
      .join(';\n\t')}
    }`;
};
