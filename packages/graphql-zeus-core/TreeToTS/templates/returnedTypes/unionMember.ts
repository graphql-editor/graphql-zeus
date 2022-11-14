import { TYPES } from '@/TreeToTS/templates/returnedTypes/models';
import { getTypeName, ParserField } from 'graphql-js-tree';

export const resolveUnionMember = (f: ParserField) =>
  `['...on ${getTypeName(f.type.fieldType)}']: '__union' & ${TYPES}["${getTypeName(f.type.fieldType)}"];`;
