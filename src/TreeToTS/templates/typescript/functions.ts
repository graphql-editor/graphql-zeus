import { Environment } from '@/Models';
import {
  ZeusSelectFunction,
  fullChainConstructFunction,
  resolverForFunction,
  fullSubscriptionConstruct,
} from '@/TreeToTS/functions';

export const typescriptFunctions = (env: Environment): string => `
${ZeusSelectFunction.ts}
${fullChainConstructFunction.ts}
${fullSubscriptionConstruct.ts}
${resolverForFunction.ts}
${require(`./${env}/fetchFunction`).default}
${require(`./${env}/apiSubscription`).default}
`;
