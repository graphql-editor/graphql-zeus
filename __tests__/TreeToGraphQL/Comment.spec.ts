import {
  Helpers,
  ParserTree,
} from '../../src/Models';
import { TreeToGraphQL } from '../../src/TreeToGraphQL';

describe('Comment tests on TreeToGraphQL', () => {
  it('Creates comment node and parse it back', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'comment',
          type: {
            name: 'comment'
          },
          data: {
            type: Helpers.Comment
          },
          description: 'hello world'
        }
      ]
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`# hello world`);
  });
});
