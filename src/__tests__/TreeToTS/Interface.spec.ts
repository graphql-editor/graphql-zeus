import { replSpace } from '@/__tests__/TestUtils';
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
    const m = replSpace(TreeToTS.resolveTree({ tree }));
    // should have wheels as a field on vehicle
    m(
      `["Vehicle"]:AliasType<{
            wheels?:boolean; ['...on Car']?: Omit<ValueTypes["Car"],keyof ValueTypes["Vehicle"]>; 
            ['...on Motorcycle']?: Omit<ValueTypes["Motorcycle"],keyof ValueTypes["Vehicle"]>;
             __typename?: boolean 
          }>;`,
    );

    // since wheels already exists on vehicle and is common, should not be on subtypes
    m(`["Car"]: AliasType<{wheels?:boolean,color?:boolean, __typename?: boolean }>`);
    m(`["Motorcycle"]: AliasType<{wheels?:boolean,visor?:boolean, __typename?: boolean }>`);

    // full type should have all the fields
    m(`["Car"]: {__typename: "Car",wheels?: number | undefined,color?: string | undefined }`);
    m(`["Motorcycle"]: {__typename: "Motorcycle",wheels?: number | undefined,visor?: boolean | undefined}`);
  });

  it('TypeScript: Interfaces without Unique Fields', () => {
    const tree = Parser.parseAddExtensions(schema);
    const m = replSpace(TreeToTS.resolveTree({ tree }));

    // should have wheels as a field on vehicle
    m(
      `["Vehicle"]:AliasType<{ wheels?:boolean; ['...on Car']?: Omit<ValueTypes["Car"],keyof ValueTypes["Vehicle"]>; ['...on Motorcycle']?: Omit<ValueTypes["Motorcycle"],keyof ValueTypes["Vehicle"]>; __typename?: boolean }>;`,
    );

    // should support an empty subtype
    m(`["Car"]: AliasType<{wheels?:boolean, __typename?: boolean }>`);
    m(`["Motorcycle"]: AliasType<{wheels?:boolean, __typename?: boolean }>`);

    // full type should have all the fields
    m(`["Car"]: {__typename: "Car",wheels?: number | undefined }`);
    m(`["Motorcycle"]: {__typename: "Motorcycle",wheels?: number | undefined }`);
  });
});
