import {
  buildASTSchema,
  DefinitionNode,
  DocumentNode,
  GraphQLSchema,
  isTypeSystemDefinitionNode,
  isTypeSystemExtensionNode,
  parse,
} from 'graphql';
import { AllTypes, ParserField, ParserTree, TypeDefinitionDisplayMap } from '@/Models';
import { Directive, Helpers, OperationType, TypeDefinition, TypeExtension } from '@/Models/Spec';
import { TypeResolver } from './typeResolver';
import { ParserUtils } from './ParserUtils';
export class Parser {
  static findComments(schema: string): string[] {
    const stripDocs = schema
      .split(`"""`)
      .filter((e, i) => i % 2 !== 1)
      .join('');
    return stripDocs
      .split('\n')
      .filter((s) => s.startsWith('#'))
      .map((s) => s.slice(1).trimStart());
  }
  /**
   * Parse schema from string and return ast
   *
   * @param schema
   */
  static importSchema = (schema: string): GraphQLSchema => buildASTSchema(parse(schema));
  static documentDefinitionToSerializedNodeTree = (d: DefinitionNode): ParserField | undefined => {
    if (isTypeSystemDefinitionNode(d) || isTypeSystemExtensionNode(d)) {
      if ('name' in d) {
        return {
          name: d.name.value,
          type:
            d.kind === 'DirectiveDefinition'
              ? {
                  name: TypeDefinitionDisplayMap[d.kind],
                  directiveOptions: d.locations.map((l) => l.value as Directive),
                }
              : {
                  name: TypeDefinitionDisplayMap[d.kind],
                },
          data: {
            type: d.kind as AllTypes,
          },
          description: 'description' in d && d.description ? d.description.value : '',
          interfaces: 'interfaces' in d && d.interfaces ? d.interfaces.map((i) => i.name.value) : undefined,
          directives: 'directives' in d && d.directives ? TypeResolver.iterateDirectives(d.directives) : undefined,
          args: TypeResolver.resolveFieldsFromDefinition(d),
        };
      }
    }
  };
  /**
   * Parse whole string GraphQL schema and return ParserTree
   *
   * @param schema GraphQL schema string
   * @param [excludeRoots=[]] param to exclude some node names from parsing in this schema
   * @returns
   */
  static parse = (schema: string, excludeRoots: string[] = [], libraries = ''): ParserTree => {
    let parsedSchema: DocumentNode | undefined;
    const compiledSchema = [libraries, schema].join('\n');

    try {
      parsedSchema = parse(compiledSchema);
    } catch (error) {
      /* tslint:disable */
      console.error(error);
      /* tslint:enable */
    }
    if (!parsedSchema) {
      throw new Error('Cannot parse the schema');
    }
    const operations: { Query?: string; Mutation?: string; Subscription?: string } = {};

    const schemaDefinition = parsedSchema.definitions.find((d) => d.kind === 'SchemaDefinition');
    if (schemaDefinition && 'operationTypes' in schemaDefinition) {
      schemaDefinition.operationTypes?.forEach((ot) => {
        if (ot.operation === 'query') {
          operations.Query = ot.type.name.value;
        }
        if (ot.operation === 'mutation') {
          operations.Mutation = ot.type.name.value;
        }
        if (ot.operation === 'subscription') {
          operations.Subscription = ot.type.name.value;
        }
      });
    }
    const nodes = parsedSchema.definitions
      .filter((t) => 'name' in t && t.name && !excludeRoots.includes(t.name.value))
      .map(Parser.documentDefinitionToSerializedNodeTree)
      .filter((d) => !!d) as ParserField[];
    const comments: ParserField[] = Parser.findComments(schema).map(
      (description) =>
        ({
          name: Helpers.Comment,
          type: {
            name: Helpers.Comment,
          },
          data: {
            type: Helpers.Comment,
          },
          description,
        } as ParserField),
    );
    const nodeTree: ParserTree = {
      nodes: [...comments, ...nodes],
    };
    nodeTree.nodes.forEach((n) => {
      if (n.data?.type === TypeDefinition.ObjectTypeDefinition) {
        if (operations.Query && operations.Query === n.name) {
          n.type.operations = [OperationType.query];
        }
        if (operations.Mutation && operations.Mutation === n.name) {
          n.type.operations = [OperationType.mutation];
        }
        if (operations.Subscription && operations.Subscription === n.name) {
          n.type.operations = [OperationType.subscription];
        }
      }
    });
    return nodeTree;
  };
  static parseAddExtensions = (schema: string, excludeRoots: string[] = []): ParserTree => {
    const parsed = Parser.parse(schema, excludeRoots);
    const Extensions = parsed.nodes.filter((n) => n.data.type && n.data.type in TypeExtension);
    if (!Extensions || Extensions.length === 0) {
      return parsed;
    }
    const nodes = parsed.nodes.filter((n) => !(n.data.type && n.data.type in TypeExtension));
    Extensions.forEach((e) => {
      const extendedNode = nodes.find((we) => ParserUtils.isExtensionOf(e, we));
      if (!extendedNode) {
        throw new Error(`Invalid extension node`);
      }
      if (e.directives) {
        extendedNode.directives = [...(extendedNode.directives || []), ...e.directives];
      }
      if (e.interfaces) {
        extendedNode.interfaces = [...(extendedNode.interfaces || []), ...e.interfaces];
      }
      if (e.args) {
        extendedNode.args = [...(extendedNode.args || []), ...e.args];
      }
    });

    return { nodes };
  };
}
export * from './ParserUtils';
