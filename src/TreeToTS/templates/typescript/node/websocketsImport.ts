export default `import type WebSocket from 'ws';`;

export const esmImport = `await import('ws').then(module => module.default);`;
export const cjsImport = `require('ws');`;
