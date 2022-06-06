import { AllTypesProps, Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
import { ResolveFromPath } from '@/TreeToTS/functions/new/resolvePath';

const resolver = ResolveFromPath(AllTypesProps, ReturnTypes, Ops);

describe(`Resolves correct type from pregenerated AllTypesProps and ReturnTypes`, () => {
  test('It correctly resolves path for field argument', () => {
    const r = resolver('|field<>Query|field<>cardByStatus|status');
    expect(r).toEqual('enum');
  });
  test('It correctly resolves path for input field, which is enum', () => {
    const r = resolver('|field<>Mutation|field<>createCard|card|status');
    expect(r).toEqual('enum');
  });
  test('It correctly resolves path for input field, which is scalar', () => {
    const r = resolver('|field<>Mutation|field<>createCard|card|settings');
    expect(r).toEqual('scalar.JSON');
  });
  test('It correctly resolves path for input field which is not enum', () => {
    const r = resolver('|field<>Mutation|field<>createCard|card|name');
    expect(r).toEqual('not');
  });
  test('It correctly resolves path for TypeOfAttack enum', () => {
    const r = resolver('|field<>Query|field<>cards|attack');
    expect(r).toEqual('enum');
  });
  test('It correctly resolves path for type field argument', () => {
    const r = resolver('|field<>Query|field<>cards|field<>attack|by');
    expect(r).toEqual('enum');
  });
  test('It correctly resolves path for nested type field argument', () => {
    const r = resolver('|field<>Query|field<>cards|field<>attack|field<>attack|by');
    expect(r).toEqual('enum');
  });
});
