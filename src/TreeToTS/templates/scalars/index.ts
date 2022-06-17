import { ParserField, TypeDefinition } from 'graphql-js-tree';
export const SCALAR_TYPES = 'ScalarCoders';
export const generateScalars = (nodes: ParserField[]) =>
  `export type ${SCALAR_TYPES} = {${nodes
    .filter((n) => n.data.type === TypeDefinition.ScalarTypeDefinition)
    .map((n) => [n.name, `ScalarResolver`])
    .reduce((a, b) => {
      return `${a}\n\t${b[0]}?: ${b[1]};`;
    }, '')}\n}`;
