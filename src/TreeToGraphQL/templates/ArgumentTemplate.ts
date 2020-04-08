import { Options, ParserField } from '../../Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * resolve function argument
 */
export class ArgumentTemplate {
  static resolve({ args, type }: ParserField, prefix = 0): string {
    let argsString = '';
    if (args && args.length) {
      if (type.options && type.options.includes(Options.array)) {
        argsString = `[${args.map((a) => TemplateUtils.resolverForConnection(a, prefix)).join(',\n')}]`;
      } else {
        argsString = `${args.map((a) => TemplateUtils.resolverForConnection(a, prefix)).join('\n')}`;
      }
    }
    return `${type.name}: ${argsString}`;
  }
}
