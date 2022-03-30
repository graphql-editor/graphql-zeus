import { AllTypesPropsType, ReturnTypesType, InputValueType, VType, Operations } from '@/TreeToTS/functions/new/models';
import { purifyGraphQLKey } from '@/TreeToTS/functions/new/purifyGraphQLKey';
import { InternalArgsBuilt } from '@/TreeToTS/functions/new/resolvePath';

export const InternalsBuildQuery = (props: AllTypesPropsType, returns: ReturnTypesType, ops: Operations) => {
  const ibb = (k: string, o: InputValueType | VType, p = ''): string => {
    const keyForPath = purifyGraphQLKey(k);
    const newPath = [p, keyForPath].join('.');
    if (typeof o === 'boolean') {
      return k;
    }
    if (Array.isArray(o)) {
      return `${ibb(`${k}(${InternalArgsBuilt(props, returns, ops)(o[0], newPath)})`, o[1], p)}`;
    }
    if (k === '__alias') {
      const alias = Object.keys(o)[0];
      const objectUnderAlias = o[alias];
      if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
        throw new Error('Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}');
      }
      const operationName = Object.keys(objectUnderAlias)[0];
      const operation = objectUnderAlias[operationName];
      return ibb(`${alias}:${operationName}`, operation, p);
    }
    return `${k}{${Object.entries(o)
      .map((e) => ibb(...e, [p, `field<>${keyForPath}`].join('.')))
      .join('\n')}}`;
  };
  return ibb;
};
