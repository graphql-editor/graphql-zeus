import { resolveModelTypes } from '@/TreeToTS/templates/modelTypes';
import { resolveOperations } from '@/TreeToTS/templates/operations';
import { resolveInterfaces } from '@/TreeToTS/templates/returnedTypes/interfaces';
import { resolveUnions } from '@/TreeToTS/templates/returnedTypes/unions';
import { generateScalars } from '@/TreeToTS/templates/scalars';
import { resolveValueTypes } from '@/TreeToTS/templates/valueTypes';
import { resolveInputTypes } from '@/TreeToTS/templates/valueTypes/inputTypes';
import { resolveVariableTypes } from '@/TreeToTS/templates/variableTypes';
import { ParserTree, TypeDefinition } from 'graphql-js-tree';
import { Environment } from '../Models';
import { default as typescriptFunctions, subscriptionFunctions } from './functions/generated';
import { resolvePropTypeFromRoot } from './templates/returnedPropTypes';
import { resolveReturnFromRoot } from './templates/returnedReturns';
import { resolveTypes } from './templates/returnedTypes';

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

export interface ResolveOptions {
  tree: ParserTree;
  env?: Environment;
  host?: string;
  headers?: Record<string, string>;
  esModule?: boolean;
  subscriptions?: 'legacy' | 'graphql-ws';
}

const disableLintersComments = ['eslint-disable'];
/**
 * Class Responsible for generating typescript and javascript code
 */
export class TreeToTS {
  static resolveBasisHeader(): string {
    return `${disableLintersComments.map((rule) => `/* ${rule} */\n`).join('')}\n`;
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
    const opsString = resolveOperations(tree);
    return propTypes.concat('\n\n').concat(returnTypes).concat('\n\n').concat(opsString);
  }

  static resolveBasisTypes(tree: ParserTree): string {
    const rootTypes = resolveTypes(tree.nodes);
    const valueTypes = resolveValueTypes(tree.nodes);
    const inputTypes = resolveInputTypes(tree.nodes);
    const modelTypes = resolveModelTypes(tree.nodes);
    const unionTypes = resolveUnions(tree.nodes);
    const interfaceTypes = resolveInterfaces(tree.nodes);
    const scalarTypes = generateScalars(tree.nodes);
    const variableTypes = resolveVariableTypes(tree.nodes);
    return interfaceTypes
      .concat('\n')
      .concat(scalarTypes)
      .concat('\n')
      .concat(unionTypes)
      .concat('\n\n')
      .concat(valueTypes)
      .concat('\n\n')
      .concat(inputTypes)
      .concat('\n\n')
      .concat(modelTypes)
      .concat('\n\n')
      .concat(rootTypes)
      .concat('\n\n')
      .concat(variableTypes);
  }

  /**
   * Generate typescript file
   */
  static resolveTreeSplit({
    tree,
    env = 'browser',
    host,
    esModule,
    headers,
    subscriptions = 'legacy',
  }: ResolveOptions) {
    return {
      indexImports: `import { AllTypesProps, ReturnTypes, Ops } from './const${
        esModule || env === 'node' ? '.js' : ''
      }';`.concat(
        env === 'node'
          ? `
import fetch, { Response } from 'node-fetch';
import WebSocket from 'ws';`
          : ``,
      ),
      const: TreeToTS.resolveBasisCode(tree),
      index: ''
        .concat(host ? `export const HOST = "${host}"` : '\n\nexport const HOST="Specify host"')
        .concat('\n')
        .concat(headers ? `export const HEADERS = ${JSON.stringify(headers)}` : '\n\nexport const HEADERS = {}')
        .concat('\n')
        .concat(subscriptionFunctions[subscriptions])
        .concat('\n')
        .concat(typescriptFunctions)
        .concat('\n')
        .concat(TreeToTS.resolveBasisTypes(tree)),
    };
  }

  static resolveTree(options: ResolveOptions) {
    const t = TreeToTS.resolveTreeSplit(options);
    return TreeToTS.resolveBasisHeader().concat(t.const).concat('\n').concat(t.index);
  }
}
