import { TYPES } from '@/TreeToTS/templates/returnedTypes';
import { ScalarTypes } from '../../Models';
import { Parser } from '../../Parser';
import { TreeToTS } from '../../TreeToTS';

describe('Fields tests on TypeScript code', () => {
  test(`Built in ScalarTypes - ${Object.keys(ScalarTypes).join(', ')}`, () => {
    const schema = `type Person{
        id: ${ScalarTypes.ID}
        name: ${ScalarTypes.String}
        age: ${ScalarTypes.Int}
        weight: ${ScalarTypes.Float}
        verified: ${ScalarTypes.Boolean}
    }`;
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    const mockFields = [`id?:string`, `name?:string`, `age?:number`, `weight?:number`, `verified?:boolean`];
    mockFields.forEach((mf) => expect(typeScriptCode).toContain(mf));
  });
  test('Type objects', () => {
    const schema = `
    type Car
    type Person{
        car: Car
    }`;
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`car?:${TYPES}["Car"]`);
  });
  test('Interface objects', () => {
    const schema = `
    interface Car
    type Person{
        car: Car
    }`;
    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`car?:${TYPES}["Car"]`);
  });
  test('Enum objects', () => {
    const schema = `
    enum Car
    type Person{
        car: Car
    }`;

    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`car?:${TYPES}["Car"]`);
  });
  test('Custom scalar objects', () => {
    const schema = `
    scalar Car
    type Person{
        car: Car
    }`;

    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`car?:${TYPES}["Car"]`);
  });
  test('Union objects', () => {
    const schema = `
    type Car
    type Plane
    union Machine = Car | Plane
    type Person{
        machine: Machine
    }`;

    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`machine?:${TYPES}["Machine"]`);
  });
  test(`Required fields`, () => {
    const schema = `type Person{
        id: ${ScalarTypes.ID}!
    }`;

    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`id:string`);
  });
  test(`ListType fields`, () => {
    const schema = `type Person{
        name: [${ScalarTypes.String}]
        friends: [Person!]!
    }`;

    const tree = Parser.parse(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree);
    expect(typeScriptCode).toContain(`name?:(string | undefined)[]`);
    expect(typeScriptCode).toContain(`friends:${TYPES}["Person"][]`);
  });
});
