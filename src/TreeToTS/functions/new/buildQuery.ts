import {
  AllTypesPropsType,
  ReturnTypesType,
  InputValueType,
  VType,
  Operations,
  SEPARATOR,
  OperationOptions,
} from '@/TreeToTS/functions/new/models';
import { purifyGraphQLKey } from '@/TreeToTS/functions/new/purifyGraphQLKey';
import { InternalArgsBuilt } from '@/TreeToTS/functions/new/resolvePath';

export const InternalsBuildQuery = (
  props: AllTypesPropsType,
  returns: ReturnTypesType,
  ops: Operations,
  options?: OperationOptions,
) => {
  const ibb = (k: string, o: InputValueType | VType, p = '', root = true): string => {
    const keyForPath = purifyGraphQLKey(k);
    const newPath = [p, keyForPath].join(SEPARATOR);
    if (!o) {
      return '';
    }
    if (typeof o === 'boolean' || typeof o === 'number') {
      return k;
    }
    if (typeof o === 'string') {
      return `${k} ${o}`;
    }
    if (Array.isArray(o)) {
      return `${ibb(
        `${k}(${InternalArgsBuilt(props, returns, ops, options?.variables?.values)(o[0], newPath)})`,
        o[1],
        p,
        false,
      )}`;
    }
    if (k === '__alias') {
      const alias = Object.keys(o)[0];
      const objectUnderAlias = o[alias];
      if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
        throw new Error('Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}');
      }
      const operationName = Object.keys(objectUnderAlias)[0];
      const operation = objectUnderAlias[operationName];
      return ibb(`${alias}:${operationName}`, operation, p, false);
    }
    const hasOperationName = root && options?.operationName ? ' ' + options.operationName : '';
    const hasVariables = root && options?.variables?.$params ? `(${options.variables?.$params})` : '';

    return `${k}${hasOperationName}${hasVariables}{${Object.entries(o)
      .map((e) => ibb(...e, [p, `field<>${keyForPath}`].join(SEPARATOR), false))
      .join('\n')}}`;
  };
  return ibb;
};
