export const trimGraphQL = (s: string) => s.replace(/\s\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, '');
