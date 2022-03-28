import { replSpace } from '@/__tests__/TestUtils';
import { Parser } from 'graphql-js-tree';
import { TreeToTS } from '../../TreeToTS';

describe('TypeDefintion declarations tests on TypeScript type generator', () => {
  test('ObjectTypeDefinition - type keyword', () => {
    const schema = 'type Person';
    const tree = Parser.parse(schema);
    const m = replSpace(TreeToTS.resolveTree({ tree }));
    const mockType = `["Person"]`;
    m(mockType);
  });
  test('InterfaceTypeDefinition - interface keyword', () => {
    const schema = 'interface Person';
    const tree = Parser.parse(schema);
    const m = replSpace(TreeToTS.resolveTree({ tree }));
    const mockType = `["Person"]`;
    m(mockType);
  });
  test('InputObjectTypeDefinition - input keyword', () => {
    const schema = 'input Person';
    const tree = Parser.parse(schema);
    const m = replSpace(TreeToTS.resolveTree({ tree }));
    const mockType = `["Person"]`;
    m(mockType);
  });
  test('EnumTypeDefinition - enum keyword', () => {
    const schema = `enum Status{
      ACTIVE
      PAUSED
    }`;
    const tree = Parser.parse(schema);
    const m = replSpace(TreeToTS.resolveTree({ tree }));
    const mockType = `enum Status`;
    const mockValueActive = `ACTIVE = "ACTIVE"`;
    const mockValuePaused = `PAUSED = "PAUSED"`;
    m(mockValueActive);
    m(mockValuePaused);
    m(mockType);
  });
  test('UnionTypeDefinition - union keyword', () => {
    const schema = 'union Person';
    const tree = Parser.parse(schema);
    const m = replSpace(TreeToTS.resolveTree({ tree }));
    const mockType = `["Person"]`;
    m(mockType);
  });
  test('ScalarTypeDefinition - scalar keyword', () => {
    const schema = 'scalar Person';
    const tree = Parser.parse(schema);
    const m = replSpace(TreeToTS.resolveTree({ tree }));
    const mockType = `["Person"]`;
    m(mockType);
  });
});
