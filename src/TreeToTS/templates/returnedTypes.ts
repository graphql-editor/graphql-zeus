import { Options, ParserField } from '@/Models';
import { Helpers, TypeDefinition, TypeSystemDefinition } from '@/Models/Spec';

export const TYPES = 'GraphQLTypes';

const typeScriptMap: Record<string, string> = {
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
  ID: 'string',
  String: 'string',
};
const toTypeScriptPrimitive = (a: string): string => typeScriptMap[a] || `${TYPES}["${a}"]`;

const plusDescription = (description?: string, prefix = ''): string =>
  description ? `${prefix}/** ${description} */\n` : '';

const resolveField = (f: ParserField): string => {
  const {
    type: { options },
  } = f;
  const isArray = !!(options && options.find((o) => o === Options.array));
  const isArrayRequired = !!(options && options.find((o) => o === Options.arrayRequired));
  const isRequired = !!(options && options.find((o) => o === Options.required));
  const isNullType = (type: string): string => {
    if (isArray && isRequired && isArrayRequired) {
      return `: Array<${type}>`;
    }
    if (isArray && isRequired && !isArrayRequired) {
      return `?: Array<${type}>`;
    }
    if (isArray && !isRequired && isArrayRequired) {
      return `: Array<${type} | undefined>`;
    }
    if (isArray && !isRequired && !isArrayRequired) {
      return `?: Array<${type} | undefined>`;
    }
    if (isRequired) {
      return `: ${type}`;
    }
    return `?: ${type}`;
  };
  return `${plusDescription(f.description, '\t')}\t${f.name}${isNullType(toTypeScriptPrimitive(f.type.name))}`;
};
export const resolveUnions = (rootNodes: ParserField[]): string => {
  const unionTypes = rootNodes
    .filter((rn) => rn.data.type === TypeDefinition.UnionTypeDefinition)
    .map((rn) => `${TYPES}["${rn.name}"]`)
    .join(' | ');
  return `type ZEUS_UNIONS = ${unionTypes || 'never'}`;
};
export const resolveInterfaces = (rootNodes: ParserField[]): string => {
  const interfaceTypes = rootNodes
    .filter((rn) => rn.data.type === TypeDefinition.InterfaceTypeDefinition)
    .map((rn) => `${TYPES}["${rn.name}"]`)
    .join(' | ');
  return `type ZEUS_INTERFACES = ${interfaceTypes || 'never'}`;
};
const resolveEnum = (i: ParserField): string => {
  if (!i.args) {
    throw new Error('Empty enum error');
  }
  return `${plusDescription(i.description)}export enum ${i.name} {\n${i.args
    .map((f) => `\t${f.name} = "${f.name}"`)
    .join(',\n')}\n}`;
};

export const resolveTypeFromRoot = (i: ParserField, rootNodes: ParserField[]): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === Helpers.Comment) {
    return `// ${i.description}`;
  }
  if (!i.args || !i.args.length) {
    return `${plusDescription(i.description)}["${i.name}"]:any`;
  }
  if (i.data.type === TypeDefinition.UnionTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:{
\t${i.args.map((f) => `['...on ${f.type.name}']: '__union' & ${TYPES}["${f.type.name}"];`).join('\n\t')}\n}`;
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: ${i.name}`;
  }
  if (i.data.type === TypeDefinition.InputObjectTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: {\n\t${i.args.map((f) => resolveField(f)).join(',\n')}\n}`;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `${plusDescription(i.description)}["${i.name}"]: {
\t__typename:${typesImplementing.map((ti) => `"${ti.name}"`).join(' | ')}
${i.args.map((f) => resolveField(f)).join(',\n')}
\t${typesImplementing.map((f) => `['...on ${f.name}']: '__union' & ${TYPES}["${f.name}"];`).join('\n\t')}\n}`;
  }
  return `${plusDescription(i.description)}["${i.name}"]: {\n\t__typename: "${i.name}",\n${i.args
    .map((f) => resolveField(f))
    .join(',\n')}\n}`;
};
export const resolveTypes = (rootNodes: ParserField[]): string => {
  return `export type ${TYPES} = {
    ${rootNodes
      .map((f) => resolveTypeFromRoot(f, rootNodes))
      .filter((v) => v)
      .join(';\n\t')}
    }`
    .concat('\n')
    .concat(
      rootNodes
        .filter((rn) => rn.data.type === TypeDefinition.EnumTypeDefinition)
        .map(resolveEnum)
        .join('\n'),
    );
};
