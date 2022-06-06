import { getTypeName, ParserField, TypeDefinition, TypeSystemDefinition } from 'graphql-js-tree';

const resolveField = (f: ParserField): string => {
  const { type, name } = f;
  return `\t\t${name}:"${getTypeName(type.fieldType)}"`;
};

export const resolveReturnFromRoot = (i: ParserField, usages?: string[]): string => {
  if (i.data.type === TypeDefinition.ScalarTypeDefinition) {
    return `\t${i.name}: \`scalar.${i.name}\` as const`;
  }
  if (
    i.data.type !== TypeDefinition.ObjectTypeDefinition &&
    i.data.type !== TypeDefinition.UnionTypeDefinition &&
    i.data.type !== TypeDefinition.InterfaceTypeDefinition &&
    i.data.type !== TypeSystemDefinition.DirectiveDefinition
  ) {
    return '';
  }
  if (!i.args) {
    return '';
  }
  if (i.data.type === TypeDefinition.UnionTypeDefinition) {
    return `\t${i.name}:{\n${i.args
      .map((f) =>
        resolveField({
          ...f,
          name: `"...on ${f.name}"`,
        }),
      )
      .join(',\n')}\n\t}`;
  }
  if (i.data.type === TypeDefinition.InterfaceTypeDefinition && usages) {
    const usagesStrings = usages.length > 0 ? `${usages.map((u) => `\t\t"...on ${u}": "${u}"`).join(',\n')},\n` : ``;
    return `\t${i.name}:{\n${usagesStrings}${i.args.map((f) => resolveField(f)).join(',\n')}\n\t}`;
  }
  return `\t${i.name}:{\n${i.args.map((f) => resolveField(f)).join(',\n')}\n\t}`;
};
