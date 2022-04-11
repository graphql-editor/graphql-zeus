#!/bin/node
import * as fs from 'fs';
import path = require('path');

const toTemplateString = (s: string) => '`' + s.replace(/\$\{/gm, '\\${').replace(/`/gm, '\\`') + '`';
const toExport = (s: string) => `export default ${s};`;

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
      return (
        content
          .toString('utf-8')
          .replace(/import\s(\n|\w|{|}|\s|,)*.*;/gm, '')
          // .replace(/export\s/gm, '')
          .replace(/\\/gm, '\\\\')
      );
    });
  const content = toTemplateString(allFunctions.join('\n\n'));
  fs.writeFileSync(path.join(baseDirFunctions, 'generated.ts'), toExport(content));
};

bundleFunctions();
