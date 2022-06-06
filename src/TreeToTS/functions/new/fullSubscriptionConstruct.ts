import { InternalsBuildQuery } from '@/TreeToTS/functions/new/buildQuery';
import { decodeScalarsInResponse } from '@/TreeToTS/functions/new/decodeScalarsInResponse';
import { AllTypesProps, Ops, ReturnTypes } from '@/TreeToTS/functions/new/mocks';
import { OperationOptions, SubscriptionFunction } from '@/TreeToTS/functions/new/models';
import { ScalarDefinition } from '@/TreeToTS/functions/new/types';

export const fullSubscriptionConstruct =
  (fn: SubscriptionFunction) =>
  (t: keyof typeof Ops) =>
  (o: Record<any, any>, options?: OperationOptions & { scalars?: ScalarDefinition }) => {
    const builder = InternalsBuildQuery({ props: AllTypesProps, returns: ReturnTypes, ops: Ops, options });
    const returnedFunction = fn(builder(t, o));
    if (returnedFunction?.on) {
      returnedFunction.on = (fnToCall: (v: any) => void) =>
        returnedFunction.on((data: any) => {
          if (options?.scalars) {
            return fnToCall(
              decodeScalarsInResponse({
                response: data,
                initialOp: t,
                initialZeusQuery: o,
                returns: ReturnTypes,
                scalars: options.scalars,
                ops: Ops,
              }),
            );
          }
          return fnToCall(data);
        });
    }
    return returnedFunction;
  };
