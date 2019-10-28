import fetch from 'cross-fetch';
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';
/**
 * Class representing all graphql utils needed in Zeus
 */
export class Utils {
  /**
   * Get GraphQL Schema by doing introspection on specified URL
   */
  static getFromUrl = async (url: string, header?: string | string[]): Promise<string> => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    if (header) {
      const allHeaders: string[] = Array.isArray(header) ? header : [header];
      for (const h of allHeaders) {
        const [key, val] = h.split(':').map((k) => k.trim());
        if (!val) {
          throw new Error(`Incorrect Header ${key}`);
        }
        headers[key] = val;
      }
    }
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: getIntrospectionQuery() })
    });
    const { data, errors } = await response.json();
    if (errors) {
      throw new Error(JSON.stringify(errors, null, 2));
    }
    const c = buildClientSchema(data);
    return printSchema(c);
  }
}
