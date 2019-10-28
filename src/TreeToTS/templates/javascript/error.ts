/* tslint:disable */
export const graphqlErrorJavascript = `
export class GraphQLError extends Error {
    constructor(response) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }
`;
