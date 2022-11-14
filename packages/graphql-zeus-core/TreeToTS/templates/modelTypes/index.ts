import { plusDescription } from '@/TreeToTS/templates/shared/description';
import { resolveField } from '@/TreeToTS/templates/shared/field';
import { ParserField, TypeSystemDefinition, TypeDefinition } from 'graphql-js-tree';

export const MODEL_TYPES = 'ModelTypes';

const resolveTypeFromRoot = (i: ParserField, rootNodes: ParserField[]): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `["${i.name}"]:${i.name}`;
  }
  if (i.data.type === TypeDefinition.ScalarTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:any`;
  }
  if (!i.args || !i.args.length) {
    return ``;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition) {
    const typesImplementing = rootNodes.filter((rn) => rn.interfaces && rn.interfaces.includes(i.name));
    return `${plusDescription(i.description)}["${i.name}"]: ${
      typesImplementing.length > 0 ? typesImplementing.map((ti) => `${MODEL_TYPES}["${ti.name}"]`).join(' | ') : 'never'
    }`;
  }
  if (i.data.type === TypeDefinition.UnionTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]:${i.args
      .map((f) => `${MODEL_TYPES}["${f.name}"]`)
      .join(' | ')}`;
  }
  if (i.data.type !== TypeDefinition.ObjectTypeDefinition) {
    return `${plusDescription(i.description)}["${i.name}"]: {\n${i.args
      .map((f) => resolveField(f, MODEL_TYPES))
      .join(',\n')}\n}`;
  }
  return `${plusDescription(i.description)}["${i.name}"]: {\n\t${i.args
    .map((f) => resolveField(f, MODEL_TYPES))
    .join(',\n')}\n}`;
};
export const resolveModelTypes = (rootNodes: ParserField[]): string => {
  return `export type ${MODEL_TYPES} = {
    ${rootNodes
      .map((f) => resolveTypeFromRoot(f, rootNodes))
      .filter((v) => v)
      .join(';\n\t')}
    }`;
};
