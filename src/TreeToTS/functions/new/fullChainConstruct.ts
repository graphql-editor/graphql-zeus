import { InternalsBuildQuery } from '@/TreeToTS/functions/new/buildQuery';
import { decodeScalarsInResponse } from '@/TreeToTS/functions/new/decodeScalarsInResponse';
import { AllTypesProps, Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
import { FetchFunction, OperationOptions } from '@/TreeToTS/functions/new/models';
import { ScalarDefinition } from '@/TreeToTS/functions/new/types';

export const fullChainConstruct =
  (fn: FetchFunction) =>
  (t: keyof typeof Ops) =>
  (o: Record<any, any>, options?: OperationOptions & { scalars?: ScalarDefinition }) => {
    const builder = InternalsBuildQuery({ props: AllTypesProps, returns: ReturnTypes, ops: Ops, options });
    return fn(builder(t, o), options?.variables?.values).then((data) => {
      if (options?.scalars) {
        return decodeScalarsInResponse({
          response: data,
          initialOp: t,
          initialZeusQuery: o,
          returns: ReturnTypes,
          scalars: options.scalars,
          ops: Ops,
        });
      }
      return data;
    });
  };
