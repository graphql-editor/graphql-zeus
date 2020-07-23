import { Environment, OperationType, ParserField, ParserTree, TypeDefinition } from '../Models';
import { bodyJavascript, generateOperationsJavascript } from './templates/javascript';
import { resolveValueTypes } from './templates/resolveValueTypes';
import { resolvePartialObjects } from './templates/returnedPartialObjects';
import { resolvePropTypeFromRoot } from './templates/returnedPropTypes';
import { resolveReturnFromRoot } from './templates/returnedReturns';
import { resolveTypeFromRoot } from './templates/returnedTypes';
import { bodyTypeScript, constantTypesTypescript } from './templates/typescript';

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

interface JSFilesOutput {
  javascript: string;
  definitions: string;
}

const disableLintersComments = ['tslint:disable', 'eslint-disable'];
/**
 * Class Responsible for generating typescript and javascript code
 */
export class TreeToTS {
  static findOperations(nodes: ParserField[], ot: OperationType): OperationDetails {
    const node: ParserField = nodes.filter((n) => n.type.operations && n.type.operations.find((o) => o === ot))[0];

    if (node === undefined) {
      return { operationName: undefined, operations: [] };
    }

    const args = node.args ? node.args : [];

    const operations = args.map((f: { name: string }) => f.name);

    return { operationName: { name: node.name, type: 'operation' }, operations };
  }
  static resolveOperations(tree: ParserTree): ResolvedOperations {
    const nodes = tree.nodes;
    return {
      query: TreeToTS.findOperations(nodes, OperationType.query),
      mutation: TreeToTS.findOperations(nodes, OperationType.mutation),
      subscription: TreeToTS.findOperations(nodes, OperationType.subscription),
    };
  }
  static resolveBasisHeader(): string {
    return `${disableLintersComments.map((rule) => `/* ${rule} */\n`).join('')}\n`;
  }
  static resolveBasisCodeJavascript(tree: ParserTree): string {
    const propTypes = `export const AllTypesProps = {\n${tree.nodes
      .map(resolvePropTypeFromRoot)
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    const returnTypes = `export const ReturnTypes = {\n${tree.nodes
      .map((f) =>
        resolveReturnFromRoot(
          f,
          f.data.type === TypeDefinition.InterfaceTypeDefinition
            ? tree.nodes.filter((n) => n.interfaces?.includes(f.name)).map((n) => n.name)
            : undefined,
        ),
      )
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    return propTypes.concat('\n\n').concat(returnTypes);
  }
  static resolveBasisCode(tree: ParserTree): string {
    const propTypes = `export const AllTypesProps: Record<string,any> = {\n${tree.nodes
      .map(resolvePropTypeFromRoot)
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    const returnTypes = `export const ReturnTypes: Record<string,any> = {\n${tree.nodes
      .map((f) =>
        resolveReturnFromRoot(
          f,
          f.data.type === TypeDefinition.InterfaceTypeDefinition
            ? tree.nodes.filter((n) => n.interfaces?.includes(f.name)).map((n) => n.name)
            : undefined,
        ),
      )
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    return propTypes.concat('\n\n').concat(returnTypes);
  }
  static resolveBasisTypes(tree: ParserTree): string {
    const rootTypes = tree.nodes.map((n) => resolveTypeFromRoot(n, tree.nodes));
    const valueTypes = resolveValueTypes(tree.nodes);
    const objectTypes = resolvePartialObjects(tree.nodes, tree.nodes);
    return valueTypes.concat('\n\n').concat(objectTypes).concat('\n\n').concat(rootTypes.join('\n\n'));
  }
  /**
   * Generate javascript and ts declaration file
   */
  static javascript(tree: ParserTree, env: Environment = 'browser', host?: string): JSFilesOutput {
    const operationsBody = TreeToTS.resolveOperations(tree);
    const operations = bodyJavascript(env, operationsBody);

    return {
      javascript: TreeToTS.resolveBasisHeader()
        .concat(TreeToTS.resolveBasisCodeJavascript(tree))
        .concat(operations)
        .concat(host ? '\n\n' : '')
        .concat(host ? `export const Gql = Chain(['${host}'])` : ''),
      definitions: TreeToTS.resolveBasisHeader()
        .concat(TreeToTS.resolveBasisTypes(tree))
        .concat('\n\n')
        .concat(constantTypesTypescript)
        .concat(generateOperationsJavascript(operationsBody)),
    };
  }

  /**
   * Generate typescript file
   */
  static resolveTree(tree: ParserTree, env: Environment = 'browser', host?: string): string {
    const operations = bodyTypeScript(env, TreeToTS.resolveOperations(tree));
    return TreeToTS.resolveBasisHeader()
      .concat(TreeToTS.resolveBasisTypes(tree))
      .concat('\n\n')
      .concat(TreeToTS.resolveBasisCode(tree))
      .concat(operations)
      .concat(host ? '\n\n' : '')
      .concat(host ? `export const Gql = Chain(['${host}'])` : '');
  }
}
