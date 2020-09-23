import { StringFunction } from './models';

export const ScalarResolverFunction: StringFunction = {
  ts: `
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  \`"\${value.replace(/"/g, '\\\\\\"').replace(/\\\\/g,"\\\\\\\\")}"\`;
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
  js: `
export const ScalarResolver = (scalar, value) => {
  switch (scalar) {
    case 'String':
      return  \`"\${value.replace(/"/g, '\\\\\\"').replace(/\\\\/g,"\\\\\\\\")}"\`;
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
