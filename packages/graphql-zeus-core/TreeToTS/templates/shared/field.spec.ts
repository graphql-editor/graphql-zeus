import { resolveFieldType } from '@/TreeToTS/templates/shared/field';
import { Options } from 'graphql-js-tree';

describe('Test type field generation', () => {
  test('Required Field generation', () => {
    const resolvedString = resolveFieldType('Person', {
      type: Options.required,
      nest: {
        type: Options.name,
        name: 'Person',
      },
    });
    expect(resolvedString).toEqual(`Person`);
  });
  test('Optional Field generation', () => {
    const resolvedString = resolveFieldType('Person', {
      type: Options.name,
      name: 'Person',
    });
    expect(resolvedString).toEqual(`Person | undefined`);
  });
  test('Optional Array Optional Field generation', () => {
    const resolvedString = resolveFieldType('Person', {
      type: Options.array,
      nest: {
        type: Options.name,
        name: 'Person',
      },
    });
    expect(resolvedString).toEqual(`Array<Person | undefined> | undefined`);
  });
  test('Required Array Optional Field generation', () => {
    const resolvedString = resolveFieldType('Person', {
      type: Options.required,
      nest: {
        type: Options.array,
        nest: {
          type: Options.name,
          name: 'Person',
        },
      },
    });
    expect(resolvedString).toEqual(`Array<Person | undefined>`);
  });
  test('Required Array Required Field generation', () => {
    const resolvedString = resolveFieldType('Person', {
      type: Options.required,
      nest: {
        type: Options.array,
        nest: {
          type: Options.required,
          nest: {
            type: Options.name,
            name: 'Person',
          },
        },
      },
    });
    expect(resolvedString).toEqual(`Array<Person>`);
  });
  test('Required nested Array Required Field generation', () => {
    const resolvedString = resolveFieldType('Person', {
      type: Options.required,
      nest: {
        type: Options.array,
        nest: {
          type: Options.required,
          nest: {
            type: Options.array,
            nest: {
              type: Options.required,
              nest: {
                type: Options.name,
                name: 'Int',
              },
            },
          },
        },
      },
    });
    expect(resolvedString).toEqual(`Array<Array<Person>>`);
  });
});
