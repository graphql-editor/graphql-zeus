import { Environment } from '@/Models';
import {
  ZeusSelectFunction,
  inspectVariablesFunction,
  fullChainConstructFunction,
  VariableFunction,
  resolverForFunction,
  fullSubscriptionConstruct,
} from '@/TreeToTS/functions';

export const typescriptFunctions = (env: Environment): string => `
${ZeusSelectFunction.ts}
${inspectVariablesFunction.ts}
${fullChainConstructFunction.ts}
${fullSubscriptionConstruct.ts}
${VariableFunction.ts}
${resolverForFunction.ts}
${require(`./${env}/fetchFunction`).default}
${require(`./${env}/apiSubscription`).default}
`;
