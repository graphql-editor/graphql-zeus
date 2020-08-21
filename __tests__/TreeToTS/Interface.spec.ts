import { Parser } from '../../src/Parser';
import { TreeToTS } from '../../src/TreeToTS';

const schema = `
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
describe('Interface tests', () => {
  it('TypeScript: Selectors', () => {
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree).replace(/\n\t/g, '').replace(/\s/g, ' ');

    // should have wheels as a field on vehicle
    expect(typeScriptCode).toContain(
      `["Vehicle"]:AliasType<{ wheels?:true; ['...on Car']: ValueTypes["Car"]; ['...on Motorcycle']: ValueTypes["Motorcycle"]; __typename?: true }>;`,
    );

    // since wheels already exists on vehicle and is common, should not be on subtypes
    expect(typeScriptCode).toContain(`["Car"]: AliasType<{color?:true __typename?: true }>`);
    expect(typeScriptCode).toContain(`["Motorcycle"]: AliasType<{visor?:true __typename?: true }>`);
  });

});
