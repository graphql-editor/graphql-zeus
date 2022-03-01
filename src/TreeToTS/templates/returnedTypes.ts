import {
  ParserField,
  Options,
  TypeDefinition,
  TypeSystemDefinition,
  Helpers,
  FieldType,
  getTypeName,
} from 'graphql-js-tree';

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
  const isNullType = (type: string): string => {
    return f.type.fieldType.type === Options.required ? `: ${type}` : `?: ${type}`;
  };
  return `${plusDescription(f.description, '\t')}\t${f.name}${isNullType(
    resolveFieldType(toTypeScriptPrimitive(getTypeName(f.type.fieldType)), f.type.fieldType),
  )}`;
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
  return `${plusDescription(i.description)}export const enum ${i.name} {\n${i.args
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
\t__typename:${i.args.length ? i.args.map((ti) => `"${ti.name}"`).join(' | ') : 'never'}
\t${i.args
      .map(
        (f) => `['...on ${getTypeName(f.type.fieldType)}']: '__union' & ${TYPES}["${getTypeName(f.type.fieldType)}"];`,
      )
      .join('\n\t')}\n}`;
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
\t__typename:${typesImplementing.length === 0 ? 'never' : typesImplementing.map((ti) => `"${ti.name}"`).join(' | ')},
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
