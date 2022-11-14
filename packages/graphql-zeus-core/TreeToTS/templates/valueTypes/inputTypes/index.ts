import { truthyType } from '@/TreeToTS/templates/truthy';
import { ParserField, TypeSystemDefinition, Helpers, TypeDefinition } from 'graphql-js-tree';
import { createInputType, resolveInputArg, resolveInputField } from '@/TreeToTS/templates/valueTypes/inputTypes/arg';
import { plusDescription } from '@/TreeToTS/templates/shared/description';
import { INPUTTYPES } from '@/TreeToTS/templates/valueTypes/models';

const AliasType = (code: string): string => `AliasType<${code}>`;
const resolveValueTypeFromRoot = (i: ParserField, rootNodes: ParserField[], enumsAndScalars: string[]): string => {
  if (!i.args || !i.args.length) {
    return `["${i.name}"]:unknown`;
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `["${i.name}"]:${i.name}`;
  }
  if (i.data.type === TypeDefinition.InputObjectTypeDefinition) {
    return `["${i.name}"]: {\n${i.args.map((f) => resolveInputArg(f)).join(',\n')}\n}`;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `["${i.name}"]:${AliasType(
      `{
\t${i.args.map((f) => resolveInputField(f, enumsAndScalars)).join(',\n')};\n\t\t${typesImplementing
        .map((f) => `['...on ${f.name}']?: Omit<${createInputType(f.name)},keyof ${createInputType(i.name)}>;`)
        .join('\n\t\t')}\n\t\t__typename?: ${truthyType}\n}`,
    )}`;
  }
  return `["${i.name}"]: ${AliasType(
    `{\n${i.args.map((f) => resolveInputField(f, enumsAndScalars)).join(',\n')},\n\t\t__typename?: ${truthyType}\n}`,
  )}`;
};
const resolveInputType = (i: ParserField, rootNodes: ParserField[], enumsAndScalars: string[]): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === Helpers.Comment) {
    return '';
  }
  const output = resolveValueTypeFromRoot(i, rootNodes, enumsAndScalars);
  return `${plusDescription(i.description)}${output}`;
};
export const resolveInputTypes = (rootNodes: ParserField[]): string => {
  const enumsAndScalars = rootNodes
    .filter(
      (n) => n.data?.type === TypeDefinition.EnumTypeDefinition || n.data?.type === TypeDefinition.ScalarTypeDefinition,
    )
    .map((n) => n.name);
  return `export type ${INPUTTYPES} = {
    ${rootNodes
      .map((f) => resolveInputType(f, rootNodes, enumsAndScalars))
      .filter((v) => v)
      .join(';\n\t')}
  }`;
};
