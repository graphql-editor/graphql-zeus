export default `import type fetch from 'node-fetch';`;

export const esmImport = `await import('node-fetch').then(module => module.default);`;
export const cjsImport = `require('node-fetch');`;
