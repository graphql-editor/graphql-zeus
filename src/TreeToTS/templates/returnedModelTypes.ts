import { Options, ParserField } from '@/Models';
import { TypeDefinition } from '@/Models/Spec';
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

const resolveTypeFromRoot = (i: ParserField, rootNodes: ParserField[]): string => {
  if (!i.args || !i.args.length) {
    return ``;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `${plusDescription(i.description)}["${i.name}"]: ${typesImplementing
      .map((ti) => `${MODEL_TYPES}["${ti.name}"]`)
      .join(' | ')}`;
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
