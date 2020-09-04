import { StringFunction } from './models';

export const buildQueryFunction: StringFunction = {
  ts: `
const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);
`,
  js: `
const buildQuery = (type, a) =>
  traverseToSeekArrays([type], a)  
`,
};
