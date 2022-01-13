import fetch from 'cross-fetch';
import { buildClientSchema, getIntrospectionQuery, GraphQLSchema, printSchema } from 'graphql';
/**
 * Class representing all graphql utils needed in Zeus
 */
export class Utils {
  /**
   * Get GraphQL Schema by doing introspection on specified URL
   */
  static getFromUrl = async (url: string, header?: string | string[]): Promise<string> => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (header) {
      const allHeaders: string[] = Array.isArray(header) ? header : [header];
      for (const h of allHeaders) {
        const [key, ...val] = h.split(':').map((k) => k.trim());
        if (!val) {
          throw new Error(`Incorrect Header ${key}`);
        }
        headers[key] = val.join(':');
      }
    }
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    });
    const { data, errors } = await response.json();
    if (errors) {
      throw new Error(JSON.stringify(errors, null, 2));
    }
    const c = buildClientSchema(data);

    return Utils.printFullSchema(c);
  };
  static printFullSchema = (schema: GraphQLSchema): string => {
    const queryType = schema.getQueryType();
    const mutationType = schema.getMutationType();
    const subscriptionType = schema.getSubscriptionType();
    let schemaClient = printSchema(schema);
    const schemaPrintedAtTheBeginning =
      (queryType && queryType.name !== 'Query') ||
      (mutationType && mutationType.name !== 'Mutation') ||
      (subscriptionType && subscriptionType.name !== 'Subscription');

    if (!schemaPrintedAtTheBeginning) {
      const addons = [];
      if (queryType) {
        addons.push(`query: ${queryType.name}`);
      }
      if (mutationType) {
        addons.push(`mutation: ${mutationType.name}`);
      }
      if (subscriptionType) {
        addons.push(`subscription: ${subscriptionType.name}`);
      }
      if (addons.length > 0) {
        schemaClient += `\nschema{\n\t${addons.join(',\n\t')}\n}`;
      }
    }
    return schemaClient;
  };
}
