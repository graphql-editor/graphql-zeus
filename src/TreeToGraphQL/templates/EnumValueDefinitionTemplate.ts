import { ParserField } from '../../Models';
import { TemplateUtils } from './TemplateUtils';
import { Template } from './Template';

/**
 * Template for enum value defintion
 */
export class EnumValueDefinitionTemplate implements Template {
  /**
   * Resolve field to enum value definiton
   */
  static resolve(f: ParserField): string {
    return `${TemplateUtils.descriptionResolver(f.description, `\t`)}\t${f.name}${TemplateUtils.resolveDirectives(
      f.directives,
    )}`;
  }
}
