export const variablizer = <T>(variablesDict: T) => <Z extends keyof T>(variable: Z) => {
  return `$${variable}}` as any;
};
