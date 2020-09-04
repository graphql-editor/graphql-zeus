import { Options, ParserField } from '@/Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * template for input value and function arguments
 */
export class InputValueTemplate {
  static resolve(f: ParserField, prefix = 0): string {
    let argsString = '';
    if (f.args) {
      const isArray = f.type.options?.includes(Options.array);
      if (f.args.length) {
        if (f.type.options && isArray) {
          argsString = ` = [${f.args.map((a) => TemplateUtils.resolverForConnection(a, prefix + 1)).join(',\n')}]`;
        } else {
          argsString = ` = ${f.args.map((a) => TemplateUtils.resolverForConnection(a, prefix + 1)).join('\n')}`;
        }
      } else {
        if (isArray) {
          argsString = ` = []`;
        }
      }
    }
    return `${TemplateUtils.descriptionResolver(f.description, prefix)}${'\t'.repeat(prefix)}${
      f.name
    }: ${TemplateUtils.resolveType(f)}${argsString}${TemplateUtils.resolveDirectives(f.directives)}`;
  }
}
