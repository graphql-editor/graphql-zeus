import { resolveValueFieldType } from '@/TreeToTS/templates/valueTypes/arg';
import { Options } from 'graphql-js-tree';

describe('Test type arg generation', () => {
  test('Required arg generation', () => {
    const resolvedString = resolveValueFieldType('Person', {
      type: Options.required,
      nest: {
        type: Options.name,
        name: 'Person',
      },
    });
    expect(resolvedString).toEqual(`Person`);
  });
  test('Optional arg generation', () => {
    const resolvedString = resolveValueFieldType('Person', {
      type: Options.name,
      name: 'Person',
    });
    expect(resolvedString).toEqual(`Person | undefined | null`);
  });
  test('Optional Array Optional arg generation', () => {
    const resolvedString = resolveValueFieldType('Person', {
      type: Options.array,
      nest: {
        type: Options.name,
        name: 'Person',
      },
    });
    expect(resolvedString).toEqual(`Array<Person | undefined | null> | undefined | null`);
  });
  test('Required Array Optional arg generation', () => {
    const resolvedString = resolveValueFieldType('Person', {
      type: Options.required,
      nest: {
        type: Options.array,
        nest: {
          type: Options.name,
          name: 'Person',
        },
      },
    });
    expect(resolvedString).toEqual(`Array<Person | undefined | null>`);
  });
  test('Required Array Required arg generation', () => {
    const resolvedString = resolveValueFieldType('Person', {
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
});
