import { ParserField, TypeSystemDefinition, TypeDefinition, getTypeName, ScalarTypes } from 'graphql-js-tree';

const resolveArg = (f: ParserField, tabs = '\t\t\t'): string => {
  const {
    type: { fieldType },
  } = f;
  const fType = getTypeName(fieldType);
  if (Object.keys(ScalarTypes).includes(fType)) {
    return '';
  }
  return `${tabs}${f.name}:"${fType}"`;
};
const resolveField = (f: ParserField): string => {
  const { args, name } = f;
  return `\t\t${name}:{\n${args
    .map((a) => resolveArg(a))
    .filter((f) => !!f)
    .join(',\n')}\n\t\t}`;
};

export const resolvePropTypeFromRoot = (i: ParserField): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `\t${i.name}: "enum" as const`;
  }
  if (i.data.type === TypeDefinition.ScalarTypeDefinition) {
    return `\t${i.name}: \`scalar.${i.name}\` as const`;
  }
  if (i.data.type === TypeDefinition.InputObjectTypeDefinition) {
    return `\t${i.name}:{\n${i.args
      .map((f) => resolveArg(f, '\t\t'))
      .filter((f) => !!f)
      .join(',\n')}\n\t}`;
  }
  if (!i.args.length) {
    return '';
  }
  if (i.args.filter((f) => f.args && f.args.length > 0).length === 0) {
    return '';
  }
  return `\t${i.name}:{\n${i.args
    .filter((f) => f.args && f.args.length)
    .map((f) => resolveField(f))
    .filter((f) => !!f)
    .join(',\n')}\n\t}`;
};
