import { StringFunction } from './models';

export const TypePropsResolverFunction: StringFunction = {
  ts: `
export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return \`null\`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(\`Cannot resolve \${type} \${name}\${key ? \` \${key}\` : ''}\`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(\`ZEUS_VAR$\`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = \`\${typeResolved}\`;
        if (isArray) {
        if (isArrayRequired) {
            t = \`\${t}!\`;
        }
        t = \`[\${t}]\`;
        }
        if (isRequired) {
        t = \`\${t}!\`;
        }
        return \`\\\$\${value.split(\`ZEUS_VAR$\`)[1]}__ZEUS_VAR__\${t}\`;
    }
    if (isArray && !blockArrays) {
        return \`[\${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]\`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return \`{\${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => \`\${ak}:\${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}\`
            )}}\`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};
`,
  js: `
export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}) => {
    if (value === null) {
        return \`null\`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(\`Cannot resolve \${type} \${name}\${key ? \` \${key}\` : ''}\`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(\`ZEUS_VAR$\`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = \`\${typeResolved}\`;
        if (isArray) {
        if (isArrayRequired) {
            t = \`\${t}!\`;
        }
        t = \`[\${t}]\`;
        }
        if (isRequired) {
        t = \`\${t}!\`;
        }
        return \`\\\$\${value.split(\`ZEUS_VAR$\`)[1]}__ZEUS_VAR__\${t}\`;
    }
    if (isArray && !blockArrays) {
        return \`[\${value
        .map((v) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]\`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return \`{\${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => \`\${ak}:\${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}\`
            )}}\`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value);
    }
    return reslovedScalar;
};
`,
};
