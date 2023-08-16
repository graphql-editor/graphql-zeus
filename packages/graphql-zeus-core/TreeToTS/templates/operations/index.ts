import { ParserTree, TypeSystemDefinition, getTypeName } from 'graphql-js-tree';

export interface OperationName {
  name: string;
  type: 'operation';
}

export interface ResolvedOperations {
  query: OperationDetails;
  mutation: OperationDetails;
  subscription: OperationDetails;
}

export interface OperationDetails {
  operationName?: OperationName;
  operations: string[];
}

export const resolveOperations = (tree: ParserTree) => {
  const schemaNode = tree.nodes.find((n) => n.data.type === TypeSystemDefinition.SchemaDefinition);
  if (!schemaNode) throw new Error('No operations in schema');
  const opsStrings = schemaNode.args.map((a) => `${a.name}: "${getTypeName(a.type.fieldType)}" as const`);
  const opsString = `export const Ops = {
${opsStrings.join(',\n\t')}
}`;
  return opsString;
};
