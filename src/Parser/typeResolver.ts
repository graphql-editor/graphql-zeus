import {
  ArgumentNode,
  DirectiveNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  ObjectFieldNode,
  TypeDefinitionNode,
  TypeNode,
  TypeSystemDefinitionNode,
  TypeSystemExtensionNode,
  ValueNode,
} from 'graphql';
import { AllTypes, Options, ParserField } from '@/Models';
import { Instances, TypeSystemDefinition, Value, ValueDefinition } from '@/Models/Spec';

/**
 * Class for resolving Types to ParserFields
 */
export class TypeResolver {
  /**
   * Resolve absolute parent type
   *
   * @param n
   * @param [options=[]]
   */
  static resolveSingleField(n: TypeNode, options: Options[] = []): ParserField['type'] {
    if (n.kind === 'ListType') {
      const opts = [...options, Options.array];
      return {
        options: opts,
        ...TypeResolver.resolveSingleField(n.type, opts),
      };
    }
    if (n.kind === 'NonNullType') {
      const opts = [...options];
      if (opts.indexOf(Options.required) >= 0 && opts.indexOf(Options.array) >= 0) {
        opts.push(Options.arrayRequired);
      } else {
        opts.push(Options.required);
      }
      return {
        options: opts,
        ...TypeResolver.resolveSingleField(n.type, opts),
      };
    }
    return {
      name: n.name.value,
    };
  }

  /**
   * Iterate fields and return them as ParserFields
   *
   * @param fields
   */
  static iterateObjectTypeFields(fields: ReadonlyArray<FieldDefinitionNode>): ParserField[] {
    return fields.map(
      (n) =>
        ({
          name: n.name.value,
          description: n.description && n.description.value,
          args: n.arguments && TypeResolver.iterateInputValueFields(n.arguments),
          type: TypeResolver.resolveSingleField(n.type),
          directives: n.directives && TypeResolver.iterateDirectives(n.directives),
          data: {
            type: TypeSystemDefinition.FieldDefinition,
          },
        } as ParserField),
    );
  }

  /**
   * Resolve default ValueNode options
   *
   * @param value
   */
  static resolveInputValueOptions = (value: ValueNode): Options[] => {
    const options: Options[] = [];
    if (value.kind === 'ListValue') {
      options.push(Options.array);
    }
    return options;
  };

  /**
   * Resolve object field
   *
   * @param f
   */
  static resolveObjectField(f: ObjectFieldNode): ParserField[] {
    return [
      {
        name: f.name.value,
        type: {
          name: f.name.value,
          options: TypeResolver.resolveInputValueOptions(f.value),
        },
        data: {
          type: Instances.Argument,
        },
        args: TypeResolver.resolveValue(f.value),
      },
    ];
  }

  /**
   * Resolve GraphQL ValueNode
   *
   * @param value
   */
  static resolveValue(value: ValueNode): ParserField[] | undefined {
    if (value.kind === 'ListValue') {
      return value.values.map(TypeResolver.resolveValue).reduce((a, b) => [...(a || []), ...(b || [])], []);
    }
    if (value.kind === 'ObjectValue') {
      return [
        {
          name: value.kind,
          args: value.fields.map((f) => TypeResolver.resolveObjectField(f)).reduce((a, b) => [...a, ...b], []),
          data: {
            type: value.kind as AllTypes,
          },
          type: {
            name: value.kind as AllTypes,
          },
        },
      ];
    }
    if (value.kind === 'EnumValue') {
      return [
        {
          name: value.value,
          data: {
            type: value.kind as AllTypes,
          },
          type: {
            name: value.value,
          },
        },
      ];
    }
    if (value.kind in Value) {
      return [
        {
          name: 'value' in value ? value.value.toString() : 'name' in value ? value.name.value : '',
          type: {
            name: value.kind,
          },
          data: {
            type: value.kind as AllTypes,
          },
        },
      ];
    }
    return undefined;
  }

  /**
   * Iterate directives
   * @param directives GraphQL Directive nodes
   */
  static iterateDirectives(directives: ReadonlyArray<DirectiveNode>): ParserField[] {
    return directives.map(
      (n) =>
        ({
          name: n.name.value,
          type: {
            name: n.name.value,
          },
          data: {
            type: Instances.Directive,
          },
          args: n.arguments ? TypeResolver.iterateArgumentFields(n.arguments) : [],
        } as ParserField),
    );
  }

  /**
   * Iterate argument fields
   *
   * @param fields Argument Nodes
   * @returns
   */
  static iterateArgumentFields(fields: ReadonlyArray<ArgumentNode>): ParserField[] {
    return fields.map(
      (n) =>
        ({
          name: n.name.value,
          type: {
            name: n.name.value,
            options: TypeResolver.resolveInputValueOptions(n.value),
          },
          data: {
            type: Instances.Argument,
          },
          args: TypeResolver.resolveValue(n.value),
        } as ParserField),
    );
  }

  /**
   * Iterate fields of input
   *
   * @param fields Input Value Definitions
   */
  static iterateInputValueFields(fields: ReadonlyArray<InputValueDefinitionNode>): ParserField[] {
    return fields.map(
      (n) =>
        ({
          name: n.name.value,
          description: n.description && n.description.value,
          directives: n.directives && TypeResolver.iterateDirectives(n.directives),
          type: TypeResolver.resolveSingleField(n.type),
          data: {
            type: ValueDefinition.InputValueDefinition,
          },
          args: n.defaultValue ? TypeResolver.resolveValue(n.defaultValue) : undefined,
        } as ParserField),
    );
  }

  /**
   * Resolve interfaces on Object Type
   *
   * @param n Type node
   */
  static resolveInterfaces(n: TypeDefinitionNode): string[] | undefined {
    if (n.kind !== 'ObjectTypeDefinition' || !n.interfaces) {
      return;
    }
    return n.interfaces.map((i) => i.name.value);
  }

  /**
   * Resolve fields of Type Defintiion node
   *
   * @param n Type Defintiion node
   */
  static resolveFields(n: TypeDefinitionNode): ParserField[] | undefined {
    if (n.kind === 'EnumTypeDefinition') {
      if (!n.values) {
        return;
      }
      return n.values.map(
        (v) =>
          ({
            name: v.name.value,
            description: v.description && v.description.value,
            directives: v.directives && TypeResolver.iterateDirectives(v.directives),
            type: { name: ValueDefinition.EnumValueDefinition },
            data: {
              type: ValueDefinition.EnumValueDefinition,
            },
          } as ParserField),
      );
    }
    if (n.kind === 'ScalarTypeDefinition') {
      return;
    }
    if (n.kind === 'UnionTypeDefinition') {
      if (!n.types) {
        return;
      }
      return n.types.map(
        (t) =>
          ({
            name: t.name.value,
            type: { name: t.name.value },
            data: {
              type: TypeSystemDefinition.UnionMemberDefinition,
            },
          } as ParserField),
      );
    }
    if (n.kind === 'InputObjectTypeDefinition') {
      if (!n.fields) {
        return;
      }
      const fields = TypeResolver.iterateInputValueFields(n.fields);
      return fields;
    }
    if (!n.fields) {
      return;
    }
    const fields = TypeResolver.iterateObjectTypeFields(n.fields);
    return fields;
  }

  static resolveFieldsFromDefinition(n: TypeSystemDefinitionNode | TypeSystemExtensionNode): ParserField[] | undefined {
    if ('values' in n && n.values) {
      return n.values.map(
        (v) =>
          ({
            name: v.name.value,
            description: v.description && v.description.value,
            directives: v.directives && TypeResolver.iterateDirectives(v.directives),
            type: { name: ValueDefinition.EnumValueDefinition },
            data: {
              type: ValueDefinition.EnumValueDefinition,
            },
          } as ParserField),
      );
    }
    if ('types' in n && n.types) {
      return n.types.map(
        (t) =>
          ({
            name: t.name.value,
            type: { name: t.name.value },
            data: {
              type: TypeSystemDefinition.UnionMemberDefinition,
            },
          } as ParserField),
      );
    }
    if ((n.kind === 'InputObjectTypeDefinition' || n.kind === 'InputObjectTypeExtension') && n.fields) {
      return TypeResolver.iterateInputValueFields(n.fields);
    }
    if ('arguments' in n && n.arguments) {
      return TypeResolver.iterateInputValueFields(n.arguments);
    }
    if (
      n.kind === 'ObjectTypeDefinition' ||
      n.kind === 'ObjectTypeExtension' ||
      n.kind === 'InterfaceTypeDefinition' ||
      n.kind === 'InterfaceTypeExtension'
    ) {
      if (!n.fields) {
        throw new Error('Type object should have fields');
      }

      return TypeResolver.iterateObjectTypeFields(n.fields);
    }
  }
}
