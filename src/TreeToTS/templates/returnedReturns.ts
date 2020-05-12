import { ParserField } from '../../Models';
import { TypeDefinition } from '../../Models/Spec';

const resolveField = (f: ParserField): string => {
  const { type, name } = f;
  return `\t\t${name}:"${type.name}"`;
};

export const resolveReturnFromRoot = (i: ParserField, usages?: string[]): string => {
  if (
    i.data.type !== TypeDefinition.ObjectTypeDefinition &&
    i.data.type !== TypeDefinition.UnionTypeDefinition &&
    i.data.type !== TypeDefinition.InterfaceTypeDefinition
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
    return `\t${i.name}:{\n${usages.map((u) => `\t\t"...on ${u}": "${u}"`).join(',\n')},\n${i.args
      .map((f) => resolveField(f))
      .join(',\n')}\n\t}`;
  }
  return `\t${i.name}:{\n${i.args.map((f) => resolveField(f)).join(',\n')}\n\t}`;
};
