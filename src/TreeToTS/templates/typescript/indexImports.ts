export const commonImports = (esModule?: boolean): string =>
  `import { AllTypesProps, ReturnTypes } from './const${esModule ? '.js' : ''}';`;

export const envSpecificImports = (env: string) => `
${require(`./${env}/fetchImport`).default}
${require(`./${env}/websocketsImport`).default}
`;
