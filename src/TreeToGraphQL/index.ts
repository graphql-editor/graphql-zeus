import { OperationType, ParserTree } from '../Models';
import { TemplateUtils } from './templates/TemplateUtils';

export class TreeToGraphQL {
  static parse(parserTree: ParserTree): string {
    const joinDefinitions = (...defintions: string[]): string => defintions.join('\n\n');
    const alldefs = parserTree.nodes.map(TemplateUtils.resolverForConnection);
    console.log(JSON.stringify(alldefs));
    const operations: Record<OperationType, string | null> = {
      [OperationType.query]: null,
      [OperationType.mutation]: null,
      [OperationType.subscription]: null,
    };
    parserTree.nodes
      .filter((n) => n.type.operations && n.type.operations.length > 0)
      .forEach((n) => {
        if (n.type.operations!.find((o) => o === OperationType.query)) {
          operations[OperationType.query] = n.name;
        }
        if (n.type.operations!.find((o) => o === OperationType.mutation)) {
          operations[OperationType.mutation] = n.name;
        }
        if (n.type.operations!.find((o) => o === OperationType.subscription)) {
          operations[OperationType.subscription] = n.name;
        }
      });
    const resolvedOperations = Object.keys(operations)
      .filter((k) => operations[k as OperationType])
      .map((k) => `\t${k}: ${operations[k as OperationType]}`)
      .join(',\n');
    return joinDefinitions(...alldefs)
      .concat('\n')
      .concat(operations[OperationType.query] ? `schema{\n${resolvedOperations}\n}` : '');
  }
}
