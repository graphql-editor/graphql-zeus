import { TypeDefinition, TypeExtension, TypeSystemDefinition } from './Spec';

export enum TypeDefinitionDisplayStrings {
  type = 'type',
  enum = 'enum',
  interface = 'interface',
  input = 'input',
  scalar = 'scalar',
  union = 'union',
  directive = 'directive',
}
export enum TypeSystemDefinitionDisplayStrings {
  directive = 'directive',
  schema = 'schema',
  definition = 'definition',
  field = 'field',
  member = 'member',
}

export const TypeDefinitionDisplayMap: Record<
  TypeDefinition | TypeExtension | TypeSystemDefinition.DirectiveDefinition,
  TypeDefinitionDisplayStrings
> = {
  [TypeDefinition.ObjectTypeDefinition]: TypeDefinitionDisplayStrings.type,
  [TypeDefinition.EnumTypeDefinition]: TypeDefinitionDisplayStrings.enum,
  [TypeDefinition.InterfaceTypeDefinition]: TypeDefinitionDisplayStrings.interface,
  [TypeDefinition.InputObjectTypeDefinition]: TypeDefinitionDisplayStrings.input,
  [TypeDefinition.ScalarTypeDefinition]: TypeDefinitionDisplayStrings.scalar,
  [TypeDefinition.UnionTypeDefinition]: TypeDefinitionDisplayStrings.union,
  [TypeExtension.ObjectTypeExtension]: TypeDefinitionDisplayStrings.type,
  [TypeExtension.EnumTypeExtension]: TypeDefinitionDisplayStrings.enum,
  [TypeExtension.InterfaceTypeExtension]: TypeDefinitionDisplayStrings.interface,
  [TypeExtension.InputObjectTypeExtension]: TypeDefinitionDisplayStrings.input,
  [TypeExtension.ScalarTypeExtension]: TypeDefinitionDisplayStrings.scalar,
  [TypeExtension.UnionTypeExtension]: TypeDefinitionDisplayStrings.union,
  [TypeSystemDefinition.DirectiveDefinition]: TypeDefinitionDisplayStrings.directive,
};

export const TypeSystemDefinitionDisplayMap: Record<TypeSystemDefinition, TypeSystemDefinitionDisplayStrings> = {
  [TypeSystemDefinition.DirectiveDefinition]: TypeSystemDefinitionDisplayStrings.directive,
  [TypeSystemDefinition.FieldDefinition]: TypeSystemDefinitionDisplayStrings.field,
  [TypeSystemDefinition.SchemaDefinition]: TypeSystemDefinitionDisplayStrings.schema,
  [TypeSystemDefinition.TypeDefinition]: TypeSystemDefinitionDisplayStrings.definition,
  [TypeSystemDefinition.UnionMemberDefinition]: TypeSystemDefinitionDisplayStrings.member,
};
