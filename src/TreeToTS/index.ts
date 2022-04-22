import { resolveModelTypes } from '@/TreeToTS/templates/modelTypes';
import { resolveOperations } from '@/TreeToTS/templates/operations';
import { resolveInterfaces } from '@/TreeToTS/templates/returnedTypes/interfaces';
import { resolveUnions } from '@/TreeToTS/templates/returnedTypes/unions';
import { resolveValueTypes } from '@/TreeToTS/templates/valueTypes';
import { ParserTree, TypeDefinition } from 'graphql-js-tree';
import { Environment } from '../Models';
import { resolvePropTypeFromRoot } from './templates/returnedPropTypes';
import { resolveReturnFromRoot } from './templates/returnedReturns';
import { resolveTypes } from './templates/returnedTypes';
import { typescriptFunctions } from './templates/typescript';

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
    return {
      indexImports: `import { AllTypesProps, ReturnTypes, Ops } from './const${esModule ? '.js' : ''}';`.concat(
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
        .concat(typescriptFunctions())
        .concat('\n')
        .concat(TreeToTS.resolveBasisTypes(tree)),
    };
  }
  static resolveTree({ tree, env = 'browser', host }: { tree: ParserTree; env?: Environment; host?: string }) {
    const t = TreeToTS.resolveTreeSplit({ tree, env, host });
    return TreeToTS.resolveBasisHeader().concat(t.const).concat('\n').concat(t.index);
  }
}
