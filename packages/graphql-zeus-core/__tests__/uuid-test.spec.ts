import { ZeusScalars } from '@/TreeToTS/functions/new/clientFunctions';
import { AllTypesPropsType, Operations, ReturnTypesType, ZeusArgsType } from '@/TreeToTS/functions/new/models';
import { InternalArgsBuilt } from '@/TreeToTS/functions/new/resolvePath';

// Define your scalars
const scalars = ZeusScalars({
  UUID: {
    encode: (e: unknown) => String(`"${e}"`),
    decode: (e: unknown) => e as string,
  },
});

describe('InternalArgsBuilt function', () => {
  let props: AllTypesPropsType;
  let returns: ReturnTypesType;
  let ops: Operations;
  let vars: Array<{ name: string; graphQLType: string }>;

  beforeEach(() => {
    props = {};
    returns = {};
    ops = {};
    vars = [];
  });

  it('should correctly encode UUIDs in a mutation input', () => {
    const uuidArrayInput = {
      ids: ['0170743b-6876-4ec2-839c-23480da37b28', '3ed80968-a077-4e43-9552-21ee8812f615'],
    } as ZeusArgsType;

    const arb = InternalArgsBuilt({ props, returns, ops, scalars, vars });
    const result = arb(uuidArrayInput, 'someMutation.ids', true);

    const expectedOutput = `ids: ["0170743b-6876-4ec2-839c-23480da37b28", "3ed80968-a077-4e43-9552-21ee8812f615"]`;

    expect(result).toEqual(expectedOutput);
  });

  it('should encode non-empty UUID arrays with consistent UUIDs', () => {
    const uuid1 = '0170743b-6876-4ec2-839c-23480da37b28';
    const uuid2 = '3ed80968-a077-4e43-9552-21ee8812f615';

    const nonEmptyUUIDArrayInput = { ids: [uuid1, uuid2] } as ZeusArgsType;
    const arb = InternalArgsBuilt({ props, returns, ops, scalars, vars });
    const result = arb(nonEmptyUUIDArrayInput, 'someMutation.ids', true);

    const expectedOutput = `ids: ["0170743b-6876-4ec2-839c-23480da37b28", "3ed80968-a077-4e43-9552-21ee8812f615"]`;

    expect(result).toEqual(expectedOutput);
  });

  it('should handle null input gracefully', () => {
    const nullInput = { ids: null } as ZeusArgsType;
    const arb = InternalArgsBuilt({ props, returns, ops, scalars, vars });
    const result = arb(nullInput, 'someMutation.ids', true);

    const expectedOutput = `ids: null`;

    expect(result).toEqual(expectedOutput);
  });

  it('should handle undefined input gracefully', () => {
    const arb = InternalArgsBuilt({ props, returns, ops, scalars, vars });
    const result = arb(undefined, 'someMutation.ids', true); // Pass undefined as input
    expect(result).toEqual('ids: null'); // Expect the result to be 'ids: null'
  });

});
