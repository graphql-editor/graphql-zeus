import { Parser } from '../../Parser';
import { TreeToTS } from '../../TreeToTS';

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
      `["Vehicle"]:AliasType<{ wheels?:true; ['...on Car']?: Omit<ValueTypes["Car"],keyof ValueTypes["Vehicle"]>; ['...on Motorcycle']?: Omit<ValueTypes["Motorcycle"],keyof ValueTypes["Vehicle"]>; __typename?: true }>;`,
    );

    // since wheels already exists on vehicle and is common, should not be on subtypes
    expect(typeScriptCode).toContain(`["Car"]: AliasType<{wheels?:true,color?:true, __typename?: true }>`);
    expect(typeScriptCode).toContain(`["Motorcycle"]: AliasType<{wheels?:true,visor?:true, __typename?: true }>`);

    // full type should have all the fields
    expect(typeScriptCode).toContain(
      `["Car"]: {__typename: "Car",wheels: number | undefined,color: string | undefined }`,
    );
    expect(typeScriptCode).toContain(
      `["Motorcycle"]: {__typename: "Motorcycle",wheels: number | undefined,visor: boolean | undefined }`,
    );
  });

  it('TypeScript: Interfaces without Unique Fields', () => {
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree(tree).replace(/\n\t/g, '').replace(/\s/g, ' ');

    // should have wheels as a field on vehicle
    expect(typeScriptCode).toContain(
      `["Vehicle"]:AliasType<{ wheels?:true; ['...on Car']?: Omit<ValueTypes["Car"],keyof ValueTypes["Vehicle"]>; ['...on Motorcycle']?: Omit<ValueTypes["Motorcycle"],keyof ValueTypes["Vehicle"]>; __typename?: true }>;`,
    );

    // should support an empty subtype
    expect(typeScriptCode).toContain(`["Car"]: AliasType<{wheels?:true, __typename?: true }>`);
    expect(typeScriptCode).toContain(`["Motorcycle"]: AliasType<{wheels?:true, __typename?: true }>`);

    // full type should have all the fields
    expect(typeScriptCode).toContain(`["Car"]: {__typename: "Car",wheels: number | undefined }`);
    expect(typeScriptCode).toContain(`["Motorcycle"]: {__typename: "Motorcycle",wheels: number | undefined }`);
  });
});
