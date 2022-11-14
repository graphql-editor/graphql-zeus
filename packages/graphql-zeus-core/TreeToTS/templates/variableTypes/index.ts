import { VALUETYPES } from '@/TreeToTS/templates/valueTypes/models';
import { ParserField, TypeDefinition } from 'graphql-js-tree';
export const ZEUS_VARIABLES = `ZEUS_VARIABLES`;

export const resolveVariableTypes = (rootNodes: ParserField[]): string => {
  const variableTypes = rootNodes
    .filter(
      (rn) =>
        rn.data.type === TypeDefinition.InputObjectTypeDefinition ||
        rn.data.type === TypeDefinition.EnumTypeDefinition ||
        rn.data.type === TypeDefinition.ScalarTypeDefinition,
    )
    .map((rn) => `\t["${rn.name}"]: ${VALUETYPES}["${rn.name}"];`)
    .join('\n');
  return `type ${ZEUS_VARIABLES} = ${variableTypes ? `{\n${variableTypes}\n}` : '{}'}`;
};
