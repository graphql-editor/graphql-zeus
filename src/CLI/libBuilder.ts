#!/bin/node
import * as fs from 'fs';
import path = require('path');

const bundleFunctions = () => {
  const baseDirFunctions = path.join(process.cwd(), 'src/TreeToTS/functions');
  const baseDir = path.join(baseDirFunctions, 'new');
  const directories = fs.readdirSync(baseDir);
  const allFunctions = directories
    .filter((d) => d !== 'mocks.ts')
    .filter((d) => !d.endsWith('spec.ts'))
    .map((d) => path.join(baseDir, d))
    .map((d) => {
      const content = fs.readFileSync(d);
      return content
        .toString('utf-8')
        .replace(/import.*$/gm, '')
        .replace(/export\s/gm, '');
    });
  const content = allFunctions.join('\n\n');
  fs.writeFileSync(path.join(baseDirFunctions, 'generated.ts'), content);
};

bundleFunctions();
