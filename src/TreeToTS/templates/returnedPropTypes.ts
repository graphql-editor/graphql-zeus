import { ParserField, TypeSystemDefinition, TypeDefinition, compileType } from 'graphql-js-tree';

const resolveArg = (f: ParserField, tabs = '\t\t\t'): string => {
  const {
    type: { fieldType },
  } = f;
  const aTabs = `\n${tabs}\t`;

  return `${tabs}${f.name}:{${aTabs}type:"${compileType(fieldType)}"\n${tabs}}`;
};
const resolveField = (f: ParserField): string => {
  const { args, name } = f;
  return `\t\t${name}:{\n${args.map((a) => resolveArg(a)).join(',\n')}\n\t\t}`;
};

export const resolvePropTypeFromRoot = (i: ParserField): string => {
  if (i.data.type === TypeSystemDefinition.DirectiveDefinition) {
    return '';
  }
  if (i.data.type === TypeDefinition.EnumTypeDefinition) {
    return `\t${i.name}: "enum"`;
  }
  if (i.data.type === TypeDefinition.ScalarTypeDefinition) {
    return `\t${i.name}: "String"`;
  }
  if (i.data.type === TypeDefinition.InputObjectTypeDefinition) {
    return `\t${i.name}:{\n${i.args.map((f) => resolveArg(f, '\t\t')).join(',\n')}\n\t}`;
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
    .join(',\n')}\n\t}`;
};
