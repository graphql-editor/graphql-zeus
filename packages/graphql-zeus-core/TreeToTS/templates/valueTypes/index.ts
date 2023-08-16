import { truthyType } from '@/TreeToTS/templates/truthy';
import { ParserField, TypeSystemDefinition, Helpers, TypeDefinition, getTypeName } from 'graphql-js-tree';
import { createValueType, resolveArg, resolveValueField } from '@/TreeToTS/templates/valueTypes/arg';
import { plusDescription } from '@/TreeToTS/templates/shared/description';
import { VALUETYPES } from '@/TreeToTS/templates/valueTypes/models';

const AliasType = (code: string): string => `AliasType<${code}>`;
const resolveValueTypeFromRoot = (i: ParserField, rootNodes: ParserField[], enumsAndScalars: string[]): string => {
  if (!i.args || !i.args.length) {
    return `["${i.name}"]:unknown`;
  }
  if (i.data.type === TypeDefinition.UnionTypeDefinition) {
    return `["${i.name}"]: ${AliasType(
      `{${i.args
        .map(
          (f) => `\t\t["...on ${getTypeName(f.type.fieldType)}"] : ${VALUETYPES}["${getTypeName(f.type.fieldType)}"]`,
        )
        .join(',\n')}\n\t\t__typename?: ${truthyType}\n}`,
    )}`;
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `["${i.name}"]:${i.name}`;
  }
  if (i.data.type === TypeDefinition.InputObjectTypeDefinition) {
    return `["${i.name}"]: {\n${i.args.map((f) => resolveArg(f)).join(',\n')}\n}`;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `["${i.name}"]:${AliasType(
      `{
\t${i.args.map((f) => resolveValueField(f, enumsAndScalars)).join(',\n')};\n\t\t${typesImplementing
        .map((f) => `['...on ${f.name}']?: Omit<${createValueType(f.name)},keyof ${createValueType(i.name)}>;`)
        .join('\n\t\t')}\n\t\t__typename?: ${truthyType}\n}`,
    )}`;
  }
  if (i.data.type === TypeDefinition.ObjectTypeDefinition) {
    return `["${i.name}"]: ${AliasType(
      `{\n${i.args.map((f) => resolveValueField(f, enumsAndScalars)).join(',\n')},\n\t\t__typename?: ${truthyType}\n}`,
    )}`;
  }
  return ``;
};
export const resolveValueType = (i: ParserField, rootNodes: ParserField[], enumsAndScalars: string[]): string => {
  if (
    i.data.type === TypeSystemDefinition.DirectiveDefinition ||
    i.data.type === TypeSystemDefinition.SchemaDefinition
  ) {
    return '';
  }
  if (i.data.type === Helpers.Comment) {
    return '';
  }
  const output = resolveValueTypeFromRoot(i, rootNodes, enumsAndScalars);
  return `${plusDescription(i.description)}${output}`;
};
export const resolveValueTypes = (rootNodes: ParserField[]): string => {
  const enumsAndScalars = rootNodes
    .filter(
      (n) => n.data?.type === TypeDefinition.EnumTypeDefinition || n.data?.type === TypeDefinition.ScalarTypeDefinition,
    )
    .map((n) => n.name);
  return `export type ${VALUETYPES} = {
    ${rootNodes
      .map((f) => resolveValueType(f, rootNodes, enumsAndScalars))
      .filter((v) => v)
      .join(';\n\t')}
  }`;
};
