import { Environment } from '@/Models';
import generated from '@/TreeToTS/functions/generated';

export const typescriptFunctions = (env: Environment): string => `
${require(`./${env}/fetchFunction`).default}
${require(`./${env}/apiSubscription`).default}
${generated}
`;
