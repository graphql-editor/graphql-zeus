import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';
import fetch from 'node-fetch';
export class Utils {
  static getFromUrl = async (url: string, header?: string): Promise<string> => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    if (header) {
      const [key, val] = header.split(':').map((k) => k.trim());
      if (!val) {
        throw new Error('Incorrect Header');
      }
      headers[key] = val;
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
