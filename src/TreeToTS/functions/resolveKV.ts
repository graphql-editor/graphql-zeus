import { StringFunction } from './models';

export const resolveKVFunction: StringFunction = {
  ts: `
const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) => {
  if (typeof v === "boolean") return k;
  if (typeof v === "object") return \`\${k}{\${objectToTree(v)}}\`;
  if (typeof v === "string") return \`\${k} \${v}\`;
  return \`\${k}\${v}\`;
};
`,
};
