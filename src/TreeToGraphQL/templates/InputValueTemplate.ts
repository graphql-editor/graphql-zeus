import { Options, ParserField } from '../../Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * template for input value and function arguments
 */
export class InputValueTemplate {
  static resolve(f: ParserField, prefix = ''): string {
    let argsString = '';
    if (f.args && f.args.length) {
      if (f.type.options && f.type.options.includes(Options.array)) {
        argsString = ` = [${f.args.map((a) => TemplateUtils.resolverForConnection(a, prefix + '\t')).join(',\n')}]`;
      } else {
        argsString = ` = ${f.args.map((a) => TemplateUtils.resolverForConnection(a, prefix + '\t')).join('\n')}`;
      }
    }
    return `${TemplateUtils.descriptionResolver(f.description, prefix)}${prefix}${f.name}: ${TemplateUtils.resolveType(
      f,
    )}${argsString}${TemplateUtils.resolveDirectives(f.directives)}`;
  }
}
