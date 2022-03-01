import { truthyType } from '@/TreeToTS/templates/truthy';
import {
  ParserField,
  Options,
  TypeSystemDefinition,
  Helpers,
  TypeDefinition,
  getTypeName,
  FieldType,
} from 'graphql-js-tree';

export const VALUETYPES = 'ValueTypes';

const resolveValueType = (t: string): string => `${VALUETYPES}["${t}"]`;

type GqlTypes = 'Int' | 'Float' | 'Boolean' | 'ID' | 'String';
type TSTypes = 'number' | 'boolean' | 'string';

const typeScriptMap: Record<GqlTypes, TSTypes> = {
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
  ID: 'string',
  String: 'string',
};
const toTypeScriptPrimitive = (a: GqlTypes): string => typeScriptMap[a] || a;

const plusDescription = (description?: string, prefix = ''): string =>
  description ? `${prefix}/** ${description} */\n` : '';
const resolveFieldType = (
  name: string,
  fType: FieldType,
  fn: (str: string) => string = (x) => x,
  isRequired = false,
): string => {
  if (fType.type === Options.name) {
    return fn(isRequired ? name : `${name} | undefined | null`);
  }
  if (fType.type === Options.array) {
    return resolveFieldType(
      name,
      fType.nest,
      isRequired ? (x) => `(${fn(x)})[] | undefined | null` : (x) => `(${fn(x)})[]`,
      false,
    );
  }
  if (fType.type === Options.required) {
    return resolveFieldType(name, fType.nest, fn, true);
  }
  throw new Error('Invalid field type');
};
const resolveArg = (f: ParserField): string => {
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
  return `${plusDescription(f.description, '\t')}\t${resolveArgsName(f.name)}${resolveFieldType(
    typeName in typeScriptMap ? toTypeScriptPrimitive(typeName as GqlTypes) : resolveValueType(typeName),
    f.type.fieldType,
  )}`;
};
const resolveField = (f: ParserField, enumsAndScalars: string[]): string => {
  const { args } = f;
  const typeName = getTypeName(f.type.fieldType);
  const resolvedTypeName =
    typeName in typeScriptMap || enumsAndScalars.includes(typeName) ? truthyType : resolveValueType(typeName);
  if (args && args.length) {
    return `${f.name}?: [{${args.map(resolveArg).join(',')}},${resolvedTypeName}]`;
  }
  return `${plusDescription(f.description, '\t')}\t${`${f.name}?` + ':'}${resolvedTypeName}`;
};

const AliasType = (code: string): string => `AliasType<${code}>`;

const resolveValueTypeFromRoot = (i: ParserField, rootNodes: ParserField[], enumsAndScalars: string[]): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === Helpers.Comment) {
    return '';
  }

  if (!i.args || !i.args.length) {
    return `${plusDescription(i.description)}["${i.name}"]:unknown`;
  }
  if (i.data.type === TypeDefinition.UnionTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: ${AliasType(
      `{${i.args
        .map(
          (f) => `\t\t["...on ${getTypeName(f.type.fieldType)}"] : ${VALUETYPES}["${getTypeName(f.type.fieldType)}"]`,
        )
        .join(',\n')}\n\t\t__typename?: ${truthyType}\n}`,
    )}`;
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:${i.name}`;
  }
  if (i.data.type === TypeDefinition.InputObjectTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: {\n${i.args.map((f) => resolveArg(f)).join(',\n')}\n}`;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `${plusDescription(i.description)}["${i.name}"]:${AliasType(
      `{
\t${i.args.map((f) => resolveField(f, enumsAndScalars)).join(',\n')};\n\t\t${typesImplementing
        .map((f) => `['...on ${f.name}']?: Omit<${resolveValueType(f.name)},keyof ${resolveValueType(i.name)}>;`)
        .join('\n\t\t')}\n\t\t__typename?: ${truthyType}\n}`,
    )}`;
  }
  return `${plusDescription(i.description)}["${i.name}"]: ${AliasType(
    `{\n${i.args.map((f) => resolveField(f, enumsAndScalars)).join(',\n')},\n\t\t__typename?: ${truthyType}\n}`,
  )}`;
};
export const resolveValueTypes = (rootNodes: ParserField[]): string => {
  const enumsAndScalars = rootNodes
    .filter(
      (n) => n.data?.type === TypeDefinition.EnumTypeDefinition || n.data?.type === TypeDefinition.ScalarTypeDefinition,
    )
    .map((n) => n.name);
  return `export type ${VALUETYPES} = {
    ${rootNodes
      .map((f) => resolveValueTypeFromRoot(f, rootNodes, enumsAndScalars))
      .filter((v) => v)
      .join(';\n\t')}
  }`;
};
