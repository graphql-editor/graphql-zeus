import { Options, ParserField } from '@/Models';
import { Helpers, TypeDefinition, TypeSystemDefinition } from '@/Models/Spec';

const typeScriptMap: Record<string, string> = {
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
  ID: 'string',
  String: 'string',
};
const toTypeScriptPrimitive = (a: string): string => typeScriptMap[a] || a;

const plusDescription = (description?: string, prefix = ''): string =>
  description ? `${prefix}/** ${description} */\n` : '';

const resolveField = (f: ParserField): string => {
  const {
    type: { options },
  } = f;
  const isArray = !!(options && options.find((o) => o === Options.array));
  const isArrayRequired = !!(options && options.find((o) => o === Options.arrayRequired));
  const isRequired = !!(options && options.find((o) => o === Options.required));
  const isRequiredName = (name: string): string => {
    if (isArray) {
      if (isArrayRequired) {
        return name;
      }
      return `${name}?`;
    }
    if (isRequired) {
      return name;
    }
    return `${name}?`;
  };
  const concatArray = (name: string): string => {
    if (isArray) {
      if (!isRequired) {
        return `(${name} | undefined)[]`;
      }
      return `${name}[]`;
    }
    return name;
  };
  const resolveArgsName = (name: string): string => {
    return isRequiredName(name) + ':';
  };
  return `${plusDescription(f.description, '\t')}\t${resolveArgsName(f.name)}${concatArray(
    toTypeScriptPrimitive(f.type.name),
  )}`;
};
export const resolveUnions = (rootNodes: ParserField[]): string => {
  const unionTypes = rootNodes
    .filter((rn) => rn.data.type === TypeDefinition.UnionTypeDefinition)
    .map((rn) => rn.name)
    .join(' | ');
  return `type ZEUS_UNIONS = ${unionTypes}`;
};
export const resolveInterfaces = (rootNodes: ParserField[]): string => {
  const interfaceTypes = rootNodes
    .filter((rn) => rn.data.type === TypeDefinition.InterfaceTypeDefinition)
    .map((rn) => rn.name)
    .join(' | ');
  return `type ZEUS_INTERFACES = ${interfaceTypes}`;
};
export const resolveTypeFromRoot = (i: ParserField, rootNodes: ParserField[]): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === Helpers.Comment) {
    return `// ${i.description}`;
  }
  if (!i.args || !i.args.length) {
    return `${plusDescription(i.description)}export type ${i.name} = any`;
  }
  if (i.data.type === TypeDefinition.UnionTypeDefinition) {
    return `${plusDescription(i.description)}export type ${i.name} = {
\t${i.args.map((f) => `['...on ${f.type.name}']: ${f.type.name};`).join('\n\t')}\n}`;
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `${plusDescription(i.description)}export enum ${i.name} {\n${i.args
      .map((f) => `\t${f.name} = "${f.name}"`)
      .join(',\n')}\n}`;
  }
  if (i.data.type === TypeDefinition.InputObjectTypeDefinition) {
    return `${plusDescription(i.description)}export type ${i.name} = {\n\t${i.args
      .map((f) => resolveField(f))
      .join(',\n')}\n}`;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `${plusDescription(i.description)}export type ${i.name} = {
\t__typename:${typesImplementing.map((ti) => `"${ti.name}"`).join(' | ')}
${i.args.map((f) => resolveField(f)).join(',\n')}
\t${typesImplementing.map((f) => `['...on ${f.name}']: ${f.name};`).join('\n\t')}\n}`;
  }
  return `${plusDescription(i.description)}export type ${i.name} = {\n\t__typename: "${i.name}",\n${i.args
    .map((f) => resolveField(f))
    .join(',\n')}\n}`;
};
