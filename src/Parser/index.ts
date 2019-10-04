import {
  buildASTSchema,
  DefinitionNode,
  DocumentNode,
  GraphQLSchema,
  isTypeSystemDefinitionNode,
  isTypeSystemExtensionNode,
  parse
} from 'graphql';
import { AllTypes, ParserField, ParserTree, TypeDefinitionDisplayMap } from '../Models';
import { Directive, OperationType, TypeDefinition } from '../Models/Spec';
import { TypeResolver } from './typeResolver';
export class Parser {
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
          name: d.name!.value,
          type:
            d.kind === 'DirectiveDefinition'
              ? {
                  name: TypeDefinitionDisplayMap[d.kind],
                  directiveOptions: d.locations.map((l) => l.value as Directive)
                }
              : {
                  name: TypeDefinitionDisplayMap[d.kind]
                },
          data: {
            type: d.kind as AllTypes
          },
          description: 'description' in d && d.description ? d.description!.value : '',
          interfaces:
            'interfaces' in d && d.interfaces ? d.interfaces!.map((i) => i.name.value) : undefined,
          directives:
            'directives' in d && d.directives
              ? TypeResolver.iterateDirectives(d.directives!)
              : undefined,
          args: TypeResolver.resolveFieldsFromDefinition(d)
        };
      }
    }
  }
  /**
   * Parse whole string GraphQL schema and return ParserTree
   *
   * @param schema GraphQL schema string
   * @param [excludeRoots=[]] param to exclude some node names from parsing in this schema
   * @returns
   */
  static parse = (schema: string, excludeRoots: string[] = []): ParserTree => {
    let parsedSchema: DocumentNode;
    let astSchema: GraphQLSchema;
    try {
      parsedSchema = parse(schema);
      astSchema = buildASTSchema(parsedSchema);
    } catch (error) {
      /* tslint:disable */ console.log(schema); /* tslint:disable */
    }
    const operations = {
      Query: astSchema!.getQueryType(),
      Mutation: astSchema!.getMutationType(),
      Subscription: astSchema!.getSubscriptionType()
    };
    const nodes = parsedSchema!.definitions
      .filter((t) => 'name' in t && t.name && !excludeRoots.includes(t.name.value))
      .map(Parser.documentDefinitionToSerializedNodeTree)
      .filter((d) => !!d) as ParserField[];

    const nodeTree: ParserTree = {
      nodes
    };
    nodeTree.nodes.forEach((n) => {
      if (n.data!.type! === TypeDefinition.ObjectTypeDefinition) {
        if (operations.Query && operations.Query.name === n.name) {
          n.type.operations = [OperationType.query];
        }
        if (operations.Mutation && operations.Mutation.name === n.name) {
          n.type.operations = [OperationType.mutation];
        }
        if (operations.Subscription && operations.Subscription.name === n.name) {
          n.type.operations = [OperationType.subscription];
        }
      }
    });
    return nodeTree;
  };
}
export * from './ParserUtils';
