import { StringFunction } from './models';

export const inspectVariablesFunction: StringFunction = {
  ts: `
const inspectVariables = (query: string) => {
  const regex = /\\\$\\b\\w*__ZEUS_VAR__\\[?[^!^\\]^\\s^,^\\)^\\}]*[!]?[\\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return \`(\${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => \`\${variableName}:\${variableType}\`)
    .join(', ')})\${filteredQuery}\`;
};
`,
  js: `
const inspectVariables = (query) => {
  const regex = /\\\$\\b\\w*__ZEUS_VAR__\\[?[^!^\\]^\\s^,^\\)^\\}]*[!]?[\\]]?[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return \`(\${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => \`\${variableName}:\${variableType}\`)
    .join(', ')})\${filteredQuery}\`;
};
`,
};
