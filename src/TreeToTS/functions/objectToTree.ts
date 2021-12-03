import { StringFunction } from './models';

export const objectToTreeFunction: StringFunction = {
  ts: `
const objectToTree = (o: { [x: string]: boolean | string }): string =>
  \`{\${Object.keys(o).map((k) => \`\${resolveKV(k, o[k])}\`).join(' ')}}\`;
`,
};
