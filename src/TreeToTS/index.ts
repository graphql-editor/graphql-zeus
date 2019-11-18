import { Environment, OperationType, ParserTree } from '../Models';
import { bodyJavascript, generateOperationsJavascript } from './templates/javascript';
import { resolveValueTypes } from './templates/resolveValueTypes';
import { resolvePlainObjects } from "./templates/returnedPlainObjects";
import { resolvePropTypeFromRoot } from './templates/returnedPropTypes';
import { resolveReturnFromRoot } from './templates/returnedReturns';
import { resolveTypeFromRoot } from './templates/returnedTypes';
import { bodyTypeScript, constantTypesTypescript } from './templates/typescript';

/**
 * Class Responsible for generating typescript and javascript code
 */
export class TreeToTS {
  static resolveOperations(tree: ParserTree) {
    return {
      queries: tree.nodes
        .filter(
          (n) => n.type.operations && n.type.operations.find((o) => o === OperationType.query)
        )
        .map((n) => (n.args ? n.args.map((f) => f.name) : []))
        .reduce((a, b) => a.concat(b), []),
      mutations: tree.nodes
        .filter(
          (n) => n.type.operations && n.type.operations.find((o) => o === OperationType.mutation)
        )
        .map((n) => (n.args ? n.args.map((f) => f.name) : []))
        .reduce((a, b) => a.concat(b), []),
      subscriptions: tree.nodes
        .filter(
          (n) =>
            n.type.operations && n.type.operations.find((o) => o === OperationType.subscription)
        )
        .map((n) => (n.args ? n.args.map((f) => f.name) : []))
        .reduce((a, b) => a.concat(b), [])
    };
  }
  static resolveBasisHeader() {
    const ignoreTSLINT = `/* tslint:disable */\n`;
    const ignoreESLINT = `/* eslint-disable */\n\n`;
    return ignoreTSLINT
      .concat(ignoreESLINT);
  }
  static resolveBasisCode(tree: ParserTree) {
    const propTypes = `export const AllTypesProps: Record<string,any> = {\n${tree.nodes
      .map(resolvePropTypeFromRoot)
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    const returnTypes = `export const ReturnTypes: Record<string,any> = {\n${tree.nodes
      .map(resolveReturnFromRoot)
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    return propTypes
      .concat('\n\n')
      .concat(returnTypes);
  }
  static resolveBasisTypes(tree: ParserTree) {
    const rootTypes = tree.nodes.map((n) => resolveTypeFromRoot(n, tree.nodes));
    const valueTypes = resolveValueTypes(tree.nodes, tree.nodes);
    const objectTypes = resolvePlainObjects(tree.nodes, tree.nodes);
    return valueTypes
      .concat('\n\n')
      .concat(objectTypes)
      .concat('\n\n')
      .concat(rootTypes.join('\n\n'));
  }
  /**
   * Generate javascript and ts declaration file
   */
  static javascript(tree: ParserTree, env: Environment = 'browser', host?: string) {
    const operationsBody = TreeToTS.resolveOperations(tree);
    const operations = bodyJavascript(env, operationsBody);

    return {
      javascript: TreeToTS.resolveBasisHeader()
        .concat(TreeToTS.resolveBasisCode(tree))
        .concat(operations)
        .concat(host ? '\n\n' : '')
        .concat(host ? `export const Gql = Chain('${host}')` : ''),
      definitions: TreeToTS.resolveBasisHeader()
        .concat(TreeToTS.resolveBasisTypes(tree))
        .concat('\n\n')
        .concat(constantTypesTypescript)
        .concat(generateOperationsJavascript(operationsBody))
    };
  }

  /**
   * Generate typescript file
   */
  static resolveTree(tree: ParserTree, env: Environment = 'browser', host?: string) {
    const operations = bodyTypeScript(env, TreeToTS.resolveOperations(tree));
    return TreeToTS.resolveBasisHeader()
      .concat(TreeToTS.resolveBasisTypes(tree))
      .concat(TreeToTS.resolveBasisCode(tree))
      .concat(operations)
      .concat(host ? '\n\n' : '')
      .concat(host ? `export const Gql = Chain('${host}')` : '');
  }
}
