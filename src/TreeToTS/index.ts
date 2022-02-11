import { Environment, OperationType, ParserField, ParserTree, TypeDefinition } from '../Models';
import { resolveValueTypes } from './templates/resolveValueTypes';
import { resolveModelTypes } from './templates/returnedModelTypes';
import { resolvePropTypeFromRoot } from './templates/returnedPropTypes';
import { resolveReturnFromRoot } from './templates/returnedReturns';
import { resolveInterfaces, resolveUnions, resolveTypes } from './templates/returnedTypes';
import {
  bodyTypeScript,
  constantTypesTypescript,
  graphqlErrorTypeScript,
  typescriptFunctions,
} from './templates/typescript';
import { commonImports, envSpecificImports } from './templates/typescript/indexImports';

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

const disableLintersComments = ['eslint-disable'];
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
    const rootTypes = resolveTypes(tree.nodes);
    const valueTypes = resolveValueTypes(tree.nodes);
    const modelTypes = resolveModelTypes(tree.nodes);
    const unionTypes = resolveUnions(tree.nodes);
    const interfaceTypes = resolveInterfaces(tree.nodes);
    return interfaceTypes
      .concat('\n')
      .concat(unionTypes)
      .concat('\n\n')
      .concat(valueTypes)
      .concat('\n\n')
      .concat(modelTypes)
      .concat('\n\n')
      .concat(rootTypes);
  }
  /**
   * Generate typescript file
   */
  static resolveTreeSplit({
    tree,
    env = 'browser',
    host,
    esModule,
  }: {
    tree: ParserTree;
    env?: Environment;
    host?: string;
    esModule?: boolean;
  }) {
    const operations = bodyTypeScript(env, TreeToTS.resolveOperations(tree));
    return {
      indexImports: commonImports(esModule).concat(envSpecificImports(env)),
      const: TreeToTS.resolveBasisCode(tree),
      index: TreeToTS.resolveBasisTypes(tree)
        .concat(graphqlErrorTypeScript.concat('\n').concat(constantTypesTypescript).concat('\n\n'))
        .concat(typescriptFunctions(env))
        .concat(operations)
        .concat(host ? '\n\n' : '')
        .concat(host ? `export const Gql = Chain('${host}')` : ''),
    };
  }
  static resolveTree({ tree, env = 'browser', host }: { tree: ParserTree; env?: Environment; host?: string }) {
    const t = TreeToTS.resolveTreeSplit({ tree, env, host });
    return TreeToTS.resolveBasisHeader().concat(t.const).concat('\n').concat(t.index);
  }
}
