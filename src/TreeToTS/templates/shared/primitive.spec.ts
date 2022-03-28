import { toTypeScriptPrimitive } from '@/TreeToTS/templates/shared/primitive';

describe('TypeScript primitive generation', () => {
  test('for inexistent Ts type', () => {
    const primitive = toTypeScriptPrimitive('Person');
    expect(primitive).toContain('Person');
  });
  test('for GraphQL String type', () => {
    const primitive = toTypeScriptPrimitive('String');
    expect(primitive).toEqual('string');
  });
  test('for GraphQL Int type', () => {
    const primitive = toTypeScriptPrimitive('Int');
    expect(primitive).toEqual('number');
  });
  test('for GraphQL Float type', () => {
    const primitive = toTypeScriptPrimitive('Float');
    expect(primitive).toEqual('number');
  });
  test('for GraphQL Boolean type', () => {
    const primitive = toTypeScriptPrimitive('Boolean');
    expect(primitive).toEqual('boolean');
  });
  test('for GraphQL ID type', () => {
    const primitive = toTypeScriptPrimitive('ID');
    expect(primitive).toEqual('string');
  });
});
