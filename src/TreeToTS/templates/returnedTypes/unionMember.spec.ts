import { TYPES } from '@/TreeToTS/templates/returnedTypes/models';
import { resolveUnionMember } from '@/TreeToTS/templates/returnedTypes/unionMember';
import { Options, ParserField, TypeSystemDefinition, getTypeName } from 'graphql-js-tree';

test('resolve union members', () => {
  const ob: ParserField = {
    data: {
      type: TypeSystemDefinition.UnionMemberDefinition,
    },
    name: 'Friend',
    args: [],
    directives: [],
    interfaces: [],
    type: {
      fieldType: {
        name: 'Friend',
        type: Options.name,
      },
    },
  };
  const member = resolveUnionMember(ob);
  expect(member).toEqual(
    `['...on ${getTypeName(ob.type.fieldType)}']: '__union' & ${TYPES}["${getTypeName(ob.type.fieldType)}"];`,
  );
});
