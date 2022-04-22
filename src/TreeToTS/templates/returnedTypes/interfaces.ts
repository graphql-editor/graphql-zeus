import { TYPES, ZEUS_INTERFACES } from '@/TreeToTS/templates/returnedTypes/models';
import { ParserField, TypeDefinition } from 'graphql-js-tree';

export const resolveInterfaces = (rootNodes: ParserField[]): string => {
  const interfaceTypes = rootNodes
    .filter((rn) => rn.data.type === TypeDefinition.InterfaceTypeDefinition)
    .map((rn) => `${TYPES}["${rn.name}"]`)
    .join(' | ');
  return `type ${ZEUS_INTERFACES} = ${interfaceTypes || 'never'}`;
};
