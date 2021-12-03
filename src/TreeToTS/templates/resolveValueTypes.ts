import { Options, ParserField } from '@/Models';
import { Helpers, TypeDefinition, TypeSystemDefinition } from '@/Models/Spec';
import { truthyType } from '@/TreeToTS/templates/truthy';

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
const resolveArg = (f: ParserField): string => {
  const {
    type: { options },
  } = f;
  const isArray = !!(options && options.find((o) => o === Options.array));
  const isArrayRequired = !!(options && options.find((o) => o === Options.arrayRequired));
  const isRequired = !!(options && options.find((o) => o === Options.required));
  const isRequiredName = (name: string): string => {
    if ((isArray && isArrayRequired) || (isRequired && !isArray)) {
      return name;
    }
    return `${name}?`;
  };
  const concatArray = (name: string): string => {
    if (isArray) {
      if (!isRequired) {
        return `(${name} | undefined | null)[]`;
      }
      return `${name}[]`;
    }
    if (!isRequired) {
      return `${name} | null`;
    }
    return name;
  };
  const resolveArgsName = (name: string): string => {
    return isRequiredName(name) + ':';
  };
  return `${plusDescription(f.description, '\t')}\t${resolveArgsName(f.name)}${concatArray(
    f.type.name in typeScriptMap ? toTypeScriptPrimitive(f.type.name as GqlTypes) : resolveValueType(f.type.name),
  )}`;
};
const resolveField = (f: ParserField, enumsAndScalars: string[]): string => {
  const { args } = f;
  const resolvedTypeName =
    f.type.name in typeScriptMap || enumsAndScalars.includes(f.type.name) ? truthyType : resolveValueType(f.type.name);
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
        .map((f) => `\t\t["...on ${f.type.name}"] : ${resolveValueType(f.type.name)}`)
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
