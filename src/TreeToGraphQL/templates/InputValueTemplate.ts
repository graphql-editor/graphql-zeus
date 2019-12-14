import { Options, ParserField } from '../../Models';
import { TemplateUtils } from './TemplateUtils';
import { Template } from './Template';

/**
 * template for input value and function arguments
 */
export class InputValueTemplate implements Template {
  static resolve(f: ParserField): string {
    let argsString = '';
    if (f.args && f.args.length) {
      if (f.type.options && f.type.options.includes(Options.array)) {
        argsString = ` = [${f.args.map(TemplateUtils.resolverForConnection).join(',\n')}]`;
      } else {
        argsString = ` = ${f.args.map(TemplateUtils.resolverForConnection).join('\n')}`;
      }
    }
    return `${TemplateUtils.descriptionResolver(f.description, `\t`)}\t${f.name}: ${TemplateUtils.resolveType(
      f,
    )}${argsString}${TemplateUtils.resolveDirectives(f.directives)}`;
  }
}
