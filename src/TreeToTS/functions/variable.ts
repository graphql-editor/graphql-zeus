import { StringFunction } from './models';

export const VariableFunction: StringFunction = {
  ts: `
export const \$ = (t: TemplateStringsArray): any => \`ZEUS_VAR\$\${t.join('')}\`;
`,
};
