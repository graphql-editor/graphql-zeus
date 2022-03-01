import { Parser } from 'graphql-js-tree';
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
    const typeScriptCode = TreeToTS.resolveTree({ tree });
    // should have wheels as a field on vehicle
    expect(typeScriptCode).toContain(
      `["Vehicle"]:AliasType<{ wheels?:boolean; ['...on Car']?: Omit<ValueTypes["Car"],keyof ValueTypes["Vehicle"]>; ['...on Motorcycle']?: Omit<ValueTypes["Motorcycle"],keyof ValueTypes["Vehicle"]>; __typename?: boolean }>;`,
    );

    // since wheels already exists on vehicle and is common, should not be on subtypes
    expect(typeScriptCode).toContain(`["Car"]: AliasType<{wheels?:boolean,color?:boolean, __typename?: boolean }>`);
    expect(typeScriptCode).toContain(
      `["Motorcycle"]: AliasType<{wheels?:boolean,visor?:boolean, __typename?: boolean }>`,
    );

    // full type should have all the fields
    expect(typeScriptCode).toContain(`["Car"]: {__typename: "Car",wheels?: number,color?: string }`);
    expect(typeScriptCode).toContain(`["Motorcycle"]: {__typename: "Motorcycle",wheels?: number,visor?: boolean }`);
  });

  it('TypeScript: Interfaces without Unique Fields', () => {
    const tree = Parser.parseAddExtensions(schema);
    const typeScriptCode = TreeToTS.resolveTree({ tree });

    // should have wheels as a field on vehicle
    expect(typeScriptCode).toContain(
      `["Vehicle"]:AliasType<{ wheels?:boolean; ['...on Car']?: Omit<ValueTypes["Car"],keyof ValueTypes["Vehicle"]>; ['...on Motorcycle']?: Omit<ValueTypes["Motorcycle"],keyof ValueTypes["Vehicle"]>; __typename?: boolean }>;`,
    );

    // should support an empty subtype
    expect(typeScriptCode).toContain(`["Car"]: AliasType<{wheels?:boolean, __typename?: boolean }>`);
    expect(typeScriptCode).toContain(`["Motorcycle"]: AliasType<{wheels?:boolean, __typename?: boolean }>`);

    // full type should have all the fields
    expect(typeScriptCode).toContain(`["Car"]: {__typename: "Car",wheels?: number }`);
    expect(typeScriptCode).toContain(`["Motorcycle"]: {__typename: "Motorcycle",wheels?: number }`);
  });
});
