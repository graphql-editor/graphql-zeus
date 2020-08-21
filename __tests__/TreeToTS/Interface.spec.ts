import { Parser } from '../../src/Parser';
import { TreeToTS } from '../../src/TreeToTS';

const schemaWithUnique = `
interface Vehicle {
  wheels: Int
}

type Car implements Vehicle {
  wheels: Int
  color: String
}

type Motorcycle implements Vehicle {
  wheels: Int
  visor: Boolean
}
`;

const schema = `
interface Vehicle {
  wheels: Int
}

type Car implements Vehicle {
  wheels: Int
}

type Motorcycle implements Vehicle {
  wheels: Int
}
`;
describe('Interface tests', () => {
  it('TypeScript: Interfaces with Unique Fields', () => {
    const tree = Parser.parseAddExtensions(schemaWithUnique);
    const typeScriptCode = TreeToTS.resolveTree(tree).replace(/\n\t/g, '').replace(/\s/g, ' ');

    // should have wheels as a field on vehicle
    expect(typeScriptCode).toContain(
      `["Vehicle"]:AliasType<{ wheels?:true; ['...on Car']?: Omit<ValueTypes["Car"],ValueTypes["Vehicle"]>; ['...on Motorcycle']?: Omit<ValueTypes["Motorcycle"],ValueTypes["Vehicle"]>; __typename?: true }>;`,
    );
  });

  it('TypeScript: Interfaces without Unique Fields', () => {
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree).replace(/\n\t/g, '').replace(/\s/g, ' ');

    // should have wheels as a field on vehicle
    expect(typeScriptCode).toContain(
      `["Vehicle"]:AliasType<{ wheels?:true; ['...on Car']?: Omit<ValueTypes["Car"],ValueTypes["Vehicle"]>; ['...on Motorcycle']?: Omit<ValueTypes["Motorcycle"],ValueTypes["Vehicle"]>; __typename?: true }>;`,
    );
  });

});
