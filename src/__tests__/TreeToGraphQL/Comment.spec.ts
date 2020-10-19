import { Helpers, ParserTree } from '../../Models';
import { TreeToGraphQL } from '../../TreeToGraphQL';

describe('Comment tests on TreeToGraphQL', () => {
  it('Creates comment node and parse it back', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'comment',
          type: {
            name: 'comment',
          },
          data: {
            type: Helpers.Comment,
          },
          description: 'hello world',
        },
      ],
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`# hello world`);
  });
});
