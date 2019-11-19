import { Options, ParserField } from '../../Models';
import { Helpers, TypeDefinition, TypeSystemDefinition } from '../../Models/Spec';

export const VALUETYPES = 'ValueTypes';

const resolveValueType = (t: string) => `${VALUETYPES}["${t}"]`;

const typeScriptMap: Record<string, string> = {
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
  ID: 'string',
  String: 'string'
};
const toTypeScriptPrimitive = (a: string): string => typeScriptMap[a] || a;

const plusDescription = (description?: string, prefix: string = '') =>
  description ? `${prefix}/** ${description} */\n` : '';
const resolveArg = (f: ParserField, resolveArgs = true) => {
  const {
    type: { options },
    args
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
    if (resolveArgs && args && args.length) {
      return `${name}:(props:{${args.map((a) => resolveField(a, false))}}) => `;
    }
    return isRequiredName(name) + ':';
  };
  return `${plusDescription(f.description, '\t')}\t${resolveArgsName(f.name)}${concatArray(
    f.type.name in typeScriptMap
      ? toTypeScriptPrimitive(f.type.name)
      : resolveValueType(f.type.name)
  )}`;
};
const resolveField = (f: ParserField, resolveArgs = true) => {
  const {
    type: { options },
    args
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
    return name;
  };
  if (resolveArgs && args && args.length) {
    return `${f.name}:[{${args.map((a) => resolveArg(a, false))}},${concatArray(
      f.type.name in typeScriptMap
        ? 'true'
        : resolveValueType(f.type.name)
    )}]`;
  }
  return `${plusDescription(f.description, '\t')}\t${isRequiredName(f.name) + ':'}${concatArray(
    f.type.name in typeScriptMap
      ? 'true'
      : resolveValueType(f.type.name)
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
    return `${plusDescription(i.description)}["${i.name}"]: AliasType<{${i.args
      .map((f) => `\t\t["...on ${f.type.name}"] : ${resolveValueType(f.type.name)}`)
      .join(',\n')}\n\t\t__typename?: true\n}>`;
  }
  if (i.data!.type === TypeDefinition.EnumTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:${i.name}`;
  }
  if (i.data!.type === TypeDefinition.InputObjectTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: {\n${i.args
      .map((f) => resolveArg(f, false))
      .join(',\n')}\n}`;
  }
  if (i.data!.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter(
      (rn) => rn.interfaces && rn.interfaces.includes(i.name)
    );
    return `${plusDescription(i.description)}["${i.name}"]:AliasType<{
\t${i.args.map((f) => resolveField(f)).join(',\n')};\n\t\t${typesImplementing
        .map((f) => `['...on ${f.name}']: ${resolveValueType(f.name)};`)
        .join('\n\t\t')}\n\t\t__typename?: true\n}>`;
  }
  return `${plusDescription(i.description)}["${i.name}"]: AliasType<{\n${i.args
    .map((f) => resolveField(f))
    .join(',\n')}\n\t\t__typename?: true\n}>`;
};
export const resolveValueTypes = (fields: ParserField[], rootNodes: ParserField[]) => {
  return `export type ${VALUETYPES} = {
    ${fields
      .map((f) => resolveValueTypeFromRoot(f, rootNodes))
      .filter((v) => v)
      .join(';\n\t')}
  }`;
};
