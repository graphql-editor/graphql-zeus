import { TYPES } from '@/TreeToTS/templates/returnedTypes/models';

const typeScriptMap: Record<string, string> = {
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
  ID: 'string',
  String: 'string',
};
export const isTypeScriptPrimitive = (a: string) => !!typeScriptMap[a];
export const toTypeScriptPrimitive = (a: string, t = TYPES): string => typeScriptMap[a] || `${t}["${a}"]`;
