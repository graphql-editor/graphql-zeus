import { StringFunction } from './models';

export const queryConstructFunction: StringFunction = {
  ts: `
const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  \`\${t.toLowerCase()}\${inspectVariables(buildQuery(tName, o))}\`;
`,
  js: `
const queryConstruct = (t, tName) => (o) => \`\${t.toLowerCase()}\${inspectVariables(buildQuery(tName, o))}\`;  
`,
};
