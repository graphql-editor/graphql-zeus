import { Options, ParserField } from '../../Models';
import { Helpers, TypeDefinition, TypeSystemDefinition } from '../../Models/Spec';

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
    f.type.name in typeScriptMap ? toTypeScriptPrimitive(f.type.name as GqlTypes) : resolveValueType(f.type.name),
  )}`;
};
const resolveField = (f: ParserField, enumsAndScalars: string[]): string => {
  const { args } = f;
  const resolvedTypeName =
    f.type.name in typeScriptMap || enumsAndScalars.includes(f.type.name) ? 'true' : resolveValueType(f.type.name);
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

  let args = i.args || [];

  if (i.data.type === 'ObjectTypeDefinition' || i.data.type === 'ObjectTypeExtension') {
    const interfaces = (i.interfaces || []).map((i) => {
      return rootNodes.find((n) => n.data.type === 'InterfaceTypeDefinition' && n.name === i);
    });

    if (interfaces.length) {
      args = args.filter((field) => {
        const isInterfaceField = interfaces.some((i) => {
          const ifields = (i && i.data.type === 'InterfaceTypeDefinition' && i.args) || [];

          return ifields.some((f) => f.name === field.name);
        });

        return !isInterfaceField;
      });
    }
  }

  if (!args.length) {
    if (!i.interfaces || !i.interfaces.length) {
      return `${plusDescription(i.description)}["${i.name}"]:unknown`;
    }

    // if an object implements an interface but has no unique fields
    return `${plusDescription(i.description)}["${i.name}"]: ${AliasType(`{\n\t\t__typename?: true\n}`)}`;
  }
  if (i.data.type === TypeDefinition.UnionTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: ${AliasType(
      `{${args
        .map((f) => `\t\t["...on ${f.type.name}"] : ${resolveValueType(f.type.name)}`)
        .join(',\n')}\n\t\t__typename?: true\n}`,
    )}`;
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:${i.name}`;
  }
  if (i.data.type === TypeDefinition.InputObjectTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: {\n${args.map((f) => resolveArg(f)).join(',\n')}\n}`;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `${plusDescription(i.description)}["${i.name}"]:${AliasType(
      `{
\t${args.map((f) => resolveField(f, enumsAndScalars)).join(',\n')};\n\t\t${typesImplementing
        .map((f) => `['...on ${f.name}']: ${resolveValueType(f.name)};`)
        .join('\n\t\t')}\n\t\t__typename?: true\n}`,
    )}`;
  }
  return `${plusDescription(i.description)}["${i.name}"]: ${AliasType(
    `{\n${args.map((f) => resolveField(f, enumsAndScalars)).join(',\n')}\n\t\t__typename?: true\n}`,
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
