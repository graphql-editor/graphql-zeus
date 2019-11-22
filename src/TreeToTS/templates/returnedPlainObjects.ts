import { Options, ParserField } from '../../Models';
import { Helpers, TypeDefinition, TypeSystemDefinition } from '../../Models/Spec';

export const PLAINOBJECTS = 'PlainObjects';

const resolveValueType = (t: string) => `${PLAINOBJECTS}["${t}"]`;

const typeScriptMap: Record<string, string> = {
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
  ID: 'string',
  String: 'string',
};
const toTypeScriptPrimitive = (a: string): string => typeScriptMap[a] || a;

const plusDescription = (description?: string, prefix = '') => (description ? `${prefix}/** ${description} */\n` : '');

const resolveField = (f: ParserField, resolveArgs = true) => {
  const {
    type: { options },
  } = f;
  const isArray = !!(options && options.find((o) => o === Options.array));
  const isArrayRequired = !!(options && options.find((o) => o === Options.arrayRequired));
  const isRequired = !!(options && options.find((o) => o === Options.required));
  const isRequiredName = (name: string) => {
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
  const concatArray = (name: string) => {
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
    f.type.name in typeScriptMap ? toTypeScriptPrimitive(f.type.name) : resolveValueType(f.type.name),
  )}`;
};

const resolveValueTypeFromRoot = (i: ParserField, rootNodes: ParserField[]) => {
  if (i.data!.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data!.type === Helpers.Comment) {
    return '';
  }
  if (!i.args || !i.args.length) {
    return `${plusDescription(i.description)}["${i.name}"]:any`;
  }
  if (i.data!.type === TypeDefinition.UnionTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: ${i.args.map((a) => resolveValueType(a.name)).join(' | ')}`;
  }
  if (i.data!.type === TypeDefinition.EnumTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:${i.name}`;
  }
  if (i.data!.type === TypeDefinition.InputObjectTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: {\n${i.args
      .map((f) => resolveField(f, false))
      .join(',\n')}\n}`;
  }
  if (i.data!.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `${plusDescription(i.description)}["${i.name}"]:{
\t${i.args.map((f) => resolveField(f)).join(';\n')}\n} & (${`${typesImplementing
      .map((a) => resolveValueType(a.name))
      .join(' | ')}`})`;
  }
  return `${plusDescription(i.description)}["${i.name}"]: {\n\t\t__typename?: "${i.name}";\n\t\t${i.args
    .map((f) => resolveField(f))
    .join(',\n\t\t')}\n\t}`;
};
export const resolvePlainObjects = (fields: ParserField[], rootNodes: ParserField[]) => {
  return `export type ${PLAINOBJECTS} = {
    ${fields
      .map((f) => resolveValueTypeFromRoot(f, rootNodes))
      .filter((v) => v)
      .join(',\n\t')}
  }`;
};
