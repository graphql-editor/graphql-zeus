import { ParserField } from '@/Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * resolve extension
 */
export class ExtendTemplate {
  static resolve(f: ParserField): string {
    if (f.args) {
      const extendedTypes = f.args
        .filter(
          (e) =>
            (e.args && e.args.length) || (e.directives && e.directives.length) || (e.interfaces && e.interfaces.length),
        )
        .map((e) =>
          TemplateUtils.resolverForConnection({
            ...e,
            type: {
              ...e.type,
              name: e.data.type!,
            },
          }),
        )
        .join('\n');
      return extendedTypes;
    }
    return '';
  }
}
