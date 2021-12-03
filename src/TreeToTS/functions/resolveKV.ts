import { StringFunction } from './models';

export const resolveKVFunction: StringFunction = {
  ts: `
const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? \`\${k}{\${objectToTree(v)}}\` : \`\${k}\${v}\`;
`,
};
