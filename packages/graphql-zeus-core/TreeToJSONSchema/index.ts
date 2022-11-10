import {
  getTypeName,
  Options,
  ParserField,
  ParserTree,
  ScalarTypes,
  TypeDefinition,
  ValueDefinition,
} from 'graphql-js-tree';
import { JSONSchema7 } from 'json-schema';

export type JSONSchemaOverrideProperties<T> = Omit<JSONSchema7, 'properties'> & {
  properties: T extends {
    [P in keyof T]: T[P];
  }
    ? {
        [P in keyof T]: JSONSchema7;
      }
    : never;
};

type ExtractPayLoad<T> = T extends [infer PayLoad, any] ? PayLoad : T;

export type OverrideFormSchema<Y = any> = {
  [P in keyof Y]?: {
    [R in keyof Y[P]]?: (
      generated: JSONSchemaOverrideProperties<ExtractPayLoad<Y[P][R]>>,
    ) => JSONSchemaOverrideProperties<Partial<ExtractPayLoad<Y[P][R]>>> | undefined;
  };
};

type ConvertField = {
  f: ParserField;
  tree: ParserTree;
  parent?: ParserField;
  override?: OverrideFormSchema;
};

const getDataType = ({ f, tree, override }: ConvertField): JSONSchema7 => {
  if (f.data.type === ValueDefinition.InputValueDefinition) {
    const typeName = getTypeName(f.type.fieldType);
    if (typeName === ScalarTypes.Boolean) {
      return { type: 'boolean' };
    }
    if (typeName === ScalarTypes.Float) {
      return { type: 'number' };
    }
    if (typeName === ScalarTypes.Int) {
      return { type: 'integer' };
    }
    if (typeName === ScalarTypes.ID) {
      return { type: 'string' };
    }
    if (typeName === ScalarTypes.String) {
      return { type: 'string' };
    }

    const lookForField = tree.nodes.find((r) => r.name === typeName);
    if (lookForField?.data.type === TypeDefinition.ScalarTypeDefinition) {
      return {
        type: 'string',
      };
    }
    if (lookForField?.data.type === TypeDefinition.EnumTypeDefinition) {
      return {
        type: 'string',
        enum: lookForField.args?.map((a) => a.name),
      };
    }
    return {
      $ref: `#/inputs/${lookForField?.name}`,
    };
  }
  // It must be a field then
  return {
    type: 'object',
    required: f?.args?.filter((a) => a.type.fieldType.type === Options.required).map((n) => n.name),
    properties: f.args?.reduce((a, b) => {
      a[b.name] = convertField({ f: b, tree, override });
      return a;
    }, {} as Required<JSONSchema7>['properties']),
  };
};

const convertType = (props: ConvertField): JSONSchema7 => {
  const { override, parent, f } = props;
  const type = getDataType(props);
  if (override && parent) {
    const fieldOverride = override[parent.name]?.[f.name];
    if (fieldOverride) {
      return fieldOverride(type as JSONSchemaOverrideProperties<any>) || {};
    }
  }
  return type;
};
const convertField = (props: ConvertField): JSONSchema7 => {
  if (props.f.type.fieldType.type === Options.array) {
    return {
      type: 'array',
      items: convertType(props),
    };
  }
  return convertType(props);
};
export class TreeToJSONSchema {
  static parse(parserTree: ParserTree) {
    const inputs = parserTree.nodes
      .filter((n) => n.data.type === TypeDefinition.InputObjectTypeDefinition)
      .reduce<Record<string, JSONSchema7>>((a, b) => {
        a[b.name] = convertField({ f: b, tree: parserTree });
        return a;
      }, {});
    const types = parserTree.nodes
      .filter(
        (n) => n.data.type === TypeDefinition.ObjectTypeDefinition && n.args?.some((a) => a.args && a.args.length > 0),
      )
      .reduce<Record<string, Record<string, JSONSchema7>>>((a, b) => {
        if (b.args && b.args.length) {
          a[b.name] = b.args?.reduce<Record<string, JSONSchema7>>((c, d) => {
            c[d.name] = convertField({ f: d, tree: parserTree });
            return c;
          }, {});
        }
        return a;
      }, {});
    return {
      inputs,
      types,
    };
  }
}
