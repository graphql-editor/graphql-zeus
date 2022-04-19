export const trimGraphQL = (s: string) => s.replace(/\s\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, '');

export const replSpace = (baseString: string) => (s: string) =>
  expect(baseString.replace(/\s+/g, '')).toContain(s.replace(/\s+/g, ''));
