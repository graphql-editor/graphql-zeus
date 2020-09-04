import { ParserField } from '@/Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * Template for enum value defintion
 */
export class EnumValueDefinitionTemplate {
  /**
   * Resolve field to enum value definiton
   */
  static resolve(f: ParserField): string {
    return `${TemplateUtils.descriptionResolver(f.description, 1)}\t${f.name}${TemplateUtils.resolveDirectives(
      f.directives,
    )}`;
  }
}
