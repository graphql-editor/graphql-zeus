import * as fs from 'fs';
import path = require('path');
import { CommandModule } from 'yargs';
export const CreateCommand = async ({ packagePath = './packages/zeus' }: { packagePath?: string }) => {
  const generatedPath = path.join(process.cwd(), packagePath);
  fs.mkdirSync(generatedPath, { recursive: true });
};

const create = (name = 'zeus-client') => {
  const common = {
    name,
    version: '0.0.1',
    main: 'lib/index.js',
  };
  const packageJsonNodeCommonJS = () => ({
    ...common,
    scripts: {
      build: 'zeus schema.xd',
    },
    dependencies: {
      'node-fetch': '^2.6.0',
      'react-query': '^3.27.0',
      ws: '^8.5.0',
    },
    devDependencies: {
      '': '',
    },
  });
  const packageJsonNodeEsModule = () => ({
    ...common,
    type: 'module',
    scripts: {
      build: 'zeus schema.xd',
    },
    dependencies: {
      'node-fetch': '^2.6.0',
      'react-query': '^3.27.0',
      ws: '^8.5.0',
    },
    devDependencies: {
      '': '',
    },
  });
  const packageJsonBrowser = () => ({
    ...common,
    scripts: {
      build: 'zeus schema.xd',
    },
    dependencies: {
      'node-fetch': '^2.6.0',
      'react-query': '^3.27.0',
      ws: '^8.5.0',
    },
    devDependencies: {
      typescript: '5.4.2',
    },
  });
  return {
    packageJsonBrowser,
    packageJsonNodeCommonJS,
    packageJsonNodeEsModule,
  };
};

export default {} as CommandModule;
