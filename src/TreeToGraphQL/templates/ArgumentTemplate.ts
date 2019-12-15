import { Options, ParserField } from '../../Models';
import { TemplateUtils } from './TemplateUtils';
import { Template } from './Template';

/**
 * resolve function argument
 */
export class ArgumentTemplate extends Template {
  static resolve({ args, type }: ParserField): string {
    let argsString = '';
    if (args && args.length) {
      if (type.options && type.options!.includes(Options.array)) {
        argsString = `[${args.map(TemplateUtils.resolverForConnection).join(',\n')}]`;
      } else {
        argsString = `${args.map(TemplateUtils.resolverForConnection).join('\n')}`;
      }
    }
    return `${type.name}: ${argsString}`;
  }
}
