import { Options, ParserField } from '@/Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * resolve function argument
 */
export class ArgumentTemplate {
  static resolve({ args, type }: ParserField, prefix = 0): string {
    let argsString = '';
    if (args) {
      const isArray = type.options?.includes(Options.array);
      if (args.length) {
        if (type.options && isArray) {
          argsString = `[${args.map((a) => TemplateUtils.resolverForConnection(a, prefix)).join(',\n')}]`;
        } else {
          argsString = `${args.map((a) => TemplateUtils.resolverForConnection(a, prefix)).join('\n')}`;
        }
      } else {
        if (isArray) {
          argsString = '[]';
        }
      }
    }
    return `${type.name}: ${argsString}`;
  }
}
