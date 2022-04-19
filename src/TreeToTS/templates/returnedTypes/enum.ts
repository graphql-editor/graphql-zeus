import { plusDescription } from '@/TreeToTS/templates/shared/description';
import { ParserField } from 'graphql-js-tree';

export const resolveEnum = (i: ParserField): string => {
  if (!i.args) {
    throw new Error('Empty enum error');
  }
  return `${plusDescription(i.description)}export const enum ${i.name} {\n${i.args
    .map((f) => `\t${f.name} = "${f.name}"`)
    .join(',\n')}\n}`;
};
