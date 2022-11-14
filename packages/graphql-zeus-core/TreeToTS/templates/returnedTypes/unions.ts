import { TYPES } from '@/TreeToTS/templates/returnedTypes/models';
import { ParserField, TypeDefinition } from 'graphql-js-tree';

export const resolveUnions = (rootNodes: ParserField[]): string => {
  const unionTypes = rootNodes
    .filter((rn) => rn.data.type === TypeDefinition.UnionTypeDefinition)
    .map((rn) => `${TYPES}["${rn.name}"]`)
    .join(' | ');
  return `type ZEUS_UNIONS = ${unionTypes || 'never'}`;
};
