import { ParserField, ParserTree } from 'graphql-js-tree';

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

export const operationNodeToKV = (node: ParserField) => {
  if (node.type.operations && node.type.operations.length > 0) {
    const operationType = node.type.operations[0];
    return `${operationType}: "${node.name}" as const`;
  }
  return '';
};

export const resolveOperations = (tree: ParserTree) => {
  const opsStrings = tree.nodes.map(operationNodeToKV).filter((n) => !!n);
  const opsString = `export const Ops = {
${opsStrings.join(',\n\t')}
}`;
  return opsString;
};
