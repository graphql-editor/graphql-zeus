import { Environment } from '@/Models';
import {
  ZeusSelectFunction,
  TypePropsResolverFunction,
  traverseToSeekArraysFunction,
  seekForAliasesFunction,
  ScalarResolverFunction,
  resolveKVFunction,
  queryConstructFunction,
  objectToTreeFunction,
  isArrayFunctionFunction,
  inspectVariablesFunction,
  buildQueryFunction,
  fullChainConstructFunction,
  VariableFunction,
  resolverForFunction,
} from '@/TreeToTS/functions';

export const typescriptFunctions = (env: Environment): string => `
${ZeusSelectFunction.ts}
${ScalarResolverFunction.ts}
${TypePropsResolverFunction.ts}
${isArrayFunctionFunction.ts}
${resolveKVFunction.ts}
${objectToTreeFunction.ts}
${traverseToSeekArraysFunction.ts}
${buildQueryFunction.ts}
${inspectVariablesFunction.ts}
${queryConstructFunction.ts}  
${fullChainConstructFunction.ts}
${seekForAliasesFunction.ts}
${VariableFunction.ts}
${resolverForFunction.ts}
${require(`./${env}/fetchFunction`).default}
`;
