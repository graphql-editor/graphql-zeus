import { ParserField } from '@/Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * Template for GraphQL Field
 */
export class FieldTemplate {
  static resolve(f: ParserField, prefix = 0): string {
    let argsString = '';
    if (f.args && f.args.length) {
      argsString = `(\n${f.args
        .map((a) => TemplateUtils.resolverForConnection(a, prefix + 1))
        .map((a) => `${a}`)
        .join('\n')}\n\t)`;
    }
    return `${TemplateUtils.descriptionResolver(f.description, prefix)}${'\t'.repeat(prefix)}${
      f.name
    }${argsString}: ${TemplateUtils.resolveType(f)}${TemplateUtils.resolveDirectives(f.directives)}`;
  }
}
