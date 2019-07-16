import { ParserTree } from '../Models';
import { OperationType } from '../Models/Spec';
import { constantTypes } from './templates/constantTypes';
import {
  body,
  generateOperationsJavascriptDefinitions,
  javascriptBody
} from './templates/operations';
import { resolvePropTypeFromRoot } from './templates/returnedPropTypes';
import { resolveReturnFromRoot } from './templates/returnedReturns';
import { resolveTypeFromRoot } from './templates/returnedTypes';

export class TreeToTS {
  static javascript(tree: ParserTree) {
    const rootTypes = tree.nodes.map(resolveTypeFromRoot);
    const propTypes = `export const AllTypesProps = {\n${tree.nodes
      .map(resolvePropTypeFromRoot)
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    const returnTypes = `export const ReturnTypes = {\n${tree.nodes
      .map(resolveReturnFromRoot)
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    const operationsBody = {
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
    const operations = javascriptBody(operationsBody);

    return {
      javascript: propTypes
        .concat('\n\n')
        .concat(returnTypes)
        .concat(operations),
      definitions: rootTypes
        .join('\n\n')
        .concat('\n\n')
        .concat(constantTypes)
        .concat(
          `
export declare function Api(
  ...options: fetchOptions
): {
  ${generateOperationsJavascriptDefinitions(operationsBody)}
};
`
        )
    };
  }
  static resolveTree(tree: ParserTree) {
    const rootTypes = tree.nodes.map(resolveTypeFromRoot);
    const ignoreTSLINT = `/* tslint:disable */\n\n`;
    const propTypes = `export const AllTypesProps: Record<string,any> = {\n${tree.nodes
      .map(resolvePropTypeFromRoot)
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    const returnTypes = `export const ReturnTypes: Record<string,any> = {\n${tree.nodes
      .map(resolveReturnFromRoot)
      .filter((pt) => pt)
      .join(',\n')}\n}`;
    const operations = body({
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
    });
    return ignoreTSLINT
      .concat(propTypes)
      .concat('\n\n')
      .concat(returnTypes)
      .concat('\n\n')
      .concat(rootTypes.join('\n\n'))
      .concat(operations);
  }
}
