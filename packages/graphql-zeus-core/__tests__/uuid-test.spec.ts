import { ZeusScalars } from '@/TreeToTS/functions/new/clientFunctions';
import { AllTypesPropsType, Operations, ReturnTypesType, ZeusArgsType } from '@/TreeToTS/functions/new/models';
import { InternalArgsBuilt } from '@/TreeToTS/functions/new/resolvePath';

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

  it('should correctly encode empty UUID arrays', () => {
    const arb = InternalArgsBuilt({ props, returns, ops, scalars, vars });
    const result = arb({ ids: [] } as ZeusArgsType, 'someMutation.ids', true);
    expect(result).toMatchInlineSnapshot(`"ids: []"`);
  });

  it('should correctly encode non-empty UUID arrays', () => {
    const uuid1 = '0170743b-6876-4ec2-839c-23480da37b28';
    const uuid2 = '3ed80968-a077-4e43-9552-21ee8812f615';

    const arb = InternalArgsBuilt({ props, returns, ops, scalars, vars });
    const result = arb({ ids: [uuid1, uuid2] } as ZeusArgsType, 'someMutation.ids', true);
    expect(result).toMatchInlineSnapshot(
      `"ids: ["0170743b-6876-4ec2-839c-23480da37b28", "3ed80968-a077-4e43-9552-21ee8812f615"]"`,
    );
  });
});
