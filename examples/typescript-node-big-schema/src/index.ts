import { Chain, ValueTypes, ZeusSelect } from './graphql-zeus';

const projectPayload = ZeusSelect<ValueTypes['Project']>()({
  id: true,
  name: true,
  public: true,
  slug: true,
  description: true,
  tags: true,
  mocked: true,
  team: {
    name: true,
  },
  endpoint: {
    uri: true,
  },
  sources: [
    {},
    {
      sources: {
        getUrl: true,
        filename: true,
      },
    },
  ],
});
const run = async () => {
  const chain = Chain('https://project-api.graphqleditor.com/graphql');
  const exQuery2 = async () =>
    chain.query({
      getNamespace: [
        { slug: 'namespace' },
        {
          project: [
            {
              name: 'project',
            },
            projectPayload,
          ],
        },
      ],
    });
  const ex = await exQuery2();
  ex.getNamespace?.project?.sources?.sources?.map((s) => s.filename);
  const experimentalQuery = await chain.query({
    getNamespace: [
      {
        slug: 'a-team',
      },
      {
        projects: [
          {},
          {
            projects: {
              sources: [
                {},
                {
                  sources: {
                    filename: true,
                    getUrl: true,
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    getUser: [
      {
        username: 'a',
      },
      {
        id: true,
        username: true,
        subscriptions: {
          subscriptions: {
            subscriptionPlanID: true,
            subscriptionID: true,
            cancelURL: true,
            quantity: true,
            expiration: true,
            seats: {
              users: {
                username: true,
              },
            },
            status: true,
            updateURL: true,
          },
        },
        namespace: {
          slug: true,
          public: true,
          projects: [
            {},
            {
              projects: projectPayload,
            },
          ],
        },
      },
    ],
    listProjects: [
      { limit: 100 },
      {
        projects: {
          id: true,
          name: true,
          public: true,
          slug: true,
          description: true,
          tags: true,
          mocked: true,
          endpoint: {
            uri: true,
          },
          sources: [
            {},
            {
              sources: {
                getUrl: true,
                filename: true,
              },
            },
          ],
        },
      },
    ],
  });
  experimentalQuery.getUser?.namespace?.projects?.projects?.map((p) => p.sources?.sources?.map((s) => s.filename));
  experimentalQuery.getUser?.subscriptions?.subscriptions?.map((s) => s.seats?.users?.map((d) => d.username));
  experimentalQuery.getUser?.namespace?.projects?.projects?.map((p) => p.sources?.sources?.map((s) => s.filename));
  const experimentalMutation = await chain.mutation({
    updateSources: [
      {
        project: 'projectId',
        sources: [
          {
            checksum: '',
          },
        ],
      },
      {
        filename: true,
        headers: {
          key: true,
          value: true,
        },
        putUrl: true,
      },
    ],
  });
  experimentalMutation.updateSources?.map((s) => s?.headers?.map((h) => h?.key));
};
run();
