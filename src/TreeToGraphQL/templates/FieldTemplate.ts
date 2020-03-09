import { ParserField } from '../../Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * Template for GraphQL Field
 */
export class FieldTemplate {
  static resolve(f: ParserField, prefix = ''): string {
    let argsString = '';
    if (f.args && f.args.length) {
      argsString = `(\n${f.args
        .map((a) => TemplateUtils.resolverForConnection(a, prefix + '\t'))
        .map((a) => `${a}`)
        .join('\n')}\n\t)`;
    }
    return `${TemplateUtils.descriptionResolver(f.description, prefix)}${prefix}${
      f.name
    }${argsString}: ${TemplateUtils.resolveType(f)}${TemplateUtils.resolveDirectives(f.directives)}`;
  }
}
