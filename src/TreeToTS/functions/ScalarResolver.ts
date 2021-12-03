import { StringFunction } from './models';

export const ScalarResolverFunction: StringFunction = {
  ts: `
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  \`\${JSON.stringify(value)}\`;
    case 'Int':
      return \`\${value}\`;
    case 'Float':
      return \`\${value}\`;
    case 'Boolean':
      return \`\${value}\`;
    case 'ID':
      return \`"\${value}"\`;
    case 'enum':
      return \`\${value}\`;
    case 'scalar':
      return \`\${value}\`;
    default:
      return false;
  }
};
`,
};
