import { StringFunction } from './models';

export const isArrayFunctionFunction: StringFunction = {
  ts: `
const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? \`(\${keyValues
            .map(
              (v) =>
                \`\${v}:\${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}\`
            )
            .join(',')})\${r ? traverseToSeekArrays(parent, r) : ''}\`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? \`(\${keyValues
          .map(
            (v) =>
              \`\${v}:\${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}\`
          )
          .join(',')})\${r ? traverseToSeekArrays(parent, r) : ''}\`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};
`,
};
