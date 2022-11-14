import { resolveEnum } from '@/TreeToTS/templates/returnedTypes/enum';
import { TYPES } from '@/TreeToTS/templates/returnedTypes/models';
import { resolveUnionMember } from '@/TreeToTS/templates/returnedTypes/unionMember';
import { plusDescription } from '@/TreeToTS/templates/shared/description';
import { resolveField } from '@/TreeToTS/templates/shared/field';
import { ParserField, TypeDefinition, TypeSystemDefinition, Helpers } from 'graphql-js-tree';

const resolveType = ({ data, name, args }: ParserField, rootNodes: ParserField[]) => {
  switch (data.type) {
    case TypeDefinition.EnumTypeDefinition:
      return `["${name}"]: ${name}`;
    case TypeDefinition.InputObjectTypeDefinition:
      return `["${name}"]: {\n\t${args.map((f) => resolveField(f)).join(',\n')}\n}`;

    case TypeDefinition.InterfaceTypeDefinition:
      const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(name));
      return `["${name}"]: {
\t__typename:${typesImplementing.length === 0 ? 'never' : typesImplementing.map((ti) => `"${ti.name}"`).join(' | ')},
${args.map((f) => resolveField(f)).join(',\n')}
\t${typesImplementing.map((f) => `['...on ${f.name}']: '__union' & ${TYPES}["${f.name}"];`).join('\n\t')}\n}`;
    case TypeDefinition.ObjectTypeDefinition:
      return `["${name}"]: {\n\t__typename: "${name}",\n${args.map((f) => resolveField(f)).join(',\n')}\n}`;
    case TypeDefinition.ScalarTypeDefinition:
      return `["${name}"]: "scalar" & { name: "${name}" }`;
    case TypeDefinition.UnionTypeDefinition:
      return `["${name}"]:{
        \t__typename:${args.length ? args.map((ti) => `"${ti.name}"`).join(' | ') : 'never'}
        \t${args.map(resolveUnionMember).join('\n\t')}\n}`;
    default:
      return '';
      break;
  }
};

export const resolveTypeFromRoot = (i: ParserField, rootNodes: ParserField[]): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === Helpers.Comment) {
    return `// ${i.description}`;
  }

  return `${plusDescription(i.description)}${resolveType(i, rootNodes)}`;
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
