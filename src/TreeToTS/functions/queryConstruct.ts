import { StringFunction } from './models';

export const queryConstructFunction: StringFunction = {
  ts: `
export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  \`\${t.toLowerCase()}\${inspectVariables(buildQuery(tName, o))}\`;
`,
  js: `
export const queryConstruct = (t, tName) => (o) => \`\${t.toLowerCase()}\${inspectVariables(buildQuery(tName, o))}\`;  
`,
};
