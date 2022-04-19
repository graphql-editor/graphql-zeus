import { plusDescription } from '@/TreeToTS/templates/shared/description';

test('It creates correct TypeScript doc', () => {
  const desc = plusDescription('Hello world', '');
  expect(desc).toEqual(`/** Hello world */\n`);
});
