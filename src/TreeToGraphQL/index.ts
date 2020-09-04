import { OperationType, ParserTree } from '@/Models';
import { TemplateUtils } from './templates/TemplateUtils';

export class TreeToGraphQL {
  static parse(parserTree: ParserTree): string {
    const joinDefinitions = (...defintions: string[]): string => defintions.join('\n\n');
    const alldefs = parserTree.nodes.map((a) => TemplateUtils.resolverForConnection(a));
    const schemaOperations: Record<OperationType, string | null> = {
      [OperationType.query]: null,
      [OperationType.mutation]: null,
      [OperationType.subscription]: null,
    };
    parserTree.nodes.forEach((n) => {
      const { operations } = n.type;
      if (operations && operations.length > 0) {
        if (operations.find((o) => o === OperationType.query)) {
          schemaOperations[OperationType.query] = n.name;
        }
        if (operations.find((o) => o === OperationType.mutation)) {
          schemaOperations[OperationType.mutation] = n.name;
        }
        if (operations.find((o) => o === OperationType.subscription)) {
          schemaOperations[OperationType.subscription] = n.name;
        }
      }
    });
    const resolvedOperations = Object.keys(schemaOperations)
      .filter((k) => schemaOperations[k as OperationType])
      .map((k) => `\t${k}: ${schemaOperations[k as OperationType]}`)
      .join(',\n');
    return joinDefinitions(...alldefs)
      .concat('\n')
      .concat(schemaOperations[OperationType.query] ? `schema{\n${resolvedOperations}\n}` : '');
  }
}
