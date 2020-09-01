import { ParserField, TypeDefinition, TypeDefinitionDisplayMap, TypeSystemDefinitionDisplayStrings } from '@/Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * Templates for GraphQL Type definitions
 */
export class TypeDefinitionsTemplates {
  static resolveExtension: typeof TypeDefinitionsTemplates.resolve = ({
    name,
    description,
    data,
    interfaces,
    args,
    directives,
  }) =>
    TypeDefinitionsTemplates.extendedDefinitionTemplate({ name, description, data }) +
    `${TemplateUtils.resolveImplements(interfaces)}${TemplateUtils.resolveDirectives(directives)}${
      args && args.length ? `{\n${args.map((a) => TemplateUtils.resolverForConnection(a, 1)).join('\n')}\n}` : ''
    }`;
  /**
   * Basic TypeDefinition template with mapping to display `type` instead of `ObjectTypeDefinition`
   */
  static extendedDefinitionTemplate = ({
    description,
    name,
    data,
  }: Pick<ParserField, 'description' | 'name' | 'data'>): string =>
    `${TemplateUtils.descriptionResolver(description)}extend ${
      TypeDefinitionDisplayMap[data.type as TypeDefinition]
    } ${name}`;
  /**
   * Basic TypeDefinition template with mapping to display `type` instead of `ObjectTypeDefinition`
   */
  static definitionTemplate = ({
    description,
    name,
    data,
  }: Pick<ParserField, 'description' | 'name' | 'data'>): string =>
    `${TemplateUtils.descriptionResolver(description)}${TypeDefinitionDisplayMap[data.type as TypeDefinition]} ${name}`;
  /**
   * Resolve type
   */
  static resolve = ({ name, description, interfaces, args, directives, data }: ParserField): string =>
    TypeDefinitionsTemplates.definitionTemplate({ name, description, data }) +
    `${TemplateUtils.resolveImplements(interfaces)}${TemplateUtils.resolveDirectives(directives)}${
      args && args.length ? `{\n${args.map((a) => TemplateUtils.resolverForConnection(a, 1)).join('\n')}\n}` : ''
    }`;
  /**
   * Resolve directive
   */
  static resolveDirective = ({ name, description, type, args }: ParserField): string =>
    `${TemplateUtils.descriptionResolver(description)}${TypeSystemDefinitionDisplayStrings.directive} @${name}${
      args && args.length ? `(\n${args.map((a) => TemplateUtils.resolverForConnection(a, 1)).join('\n')}\n)` : ''
    } on ${(type.directiveOptions || []).join(' | ')}`;
  /**
   * Resolve union
   */
  static resolveUnion = ({ name, description, args, directives, data }: ParserField): string =>
    TypeDefinitionsTemplates.definitionTemplate({ name, description, data }) +
    `${TemplateUtils.resolveDirectives(directives)}${
      args && args.length ? ` = ${args.map((a) => TemplateUtils.resolverForConnection(a)).join(' | ')}` : ''
    }`;
}
