import { Parser } from '../../Parser';
import { TreeToTS } from '../../TreeToTS';

describe('TypeDefintion declarations tests on TypeScript type generator', () => {
  test('ObjectTypeDefinition - type keyword', () => {
    const schema = 'type Person';
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    const mockType = `["Person"]`;
    expect(typeScriptCode).toContain(mockType);
  });
  test('InterfaceTypeDefinition - interface keyword', () => {
    const schema = 'interface Person';
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    const mockType = `["Person"]`;
    expect(typeScriptCode).toContain(mockType);
  });
  test('InputObjectTypeDefinition - input keyword', () => {
    const schema = 'input Person';
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    const mockType = `["Person"]`;
    expect(typeScriptCode).toContain(mockType);
  });
  test('EnumTypeDefinition - enum keyword', () => {
    const schema = `enum Status{
      ACTIVE
      PAUSED
    }`;
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    const mockType = `enum Status`;
    const mockValueActive = `ACTIVE = "ACTIVE"`;
    const mockValuePaused = `PAUSED = "PAUSED"`;
    expect(typeScriptCode).toContain(mockValueActive);
    expect(typeScriptCode).toContain(mockValuePaused);
    expect(typeScriptCode).toContain(mockType);
  });
  test('UnionTypeDefinition - union keyword', () => {
    const schema = 'union Person';
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    const mockType = `["Person"]`;
    expect(typeScriptCode).toContain(mockType);
  });
  test('ScalarTypeDefinition - scalar keyword', () => {
    const schema = 'scalar Person';
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    const mockType = `["Person"]`;
    expect(typeScriptCode).toContain(mockType);
  });
});
