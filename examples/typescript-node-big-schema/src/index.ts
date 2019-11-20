import { Chain, Selectors } from "./graphql-zeus";
const run = async () => {
  const chain = Chain("https://project-api.graphqleditor.com/graphql");
  const projectPayload = Selectors.Query({
    getProject: [
      {
        project: ""
      },
      {
        id: true,
        name: true,
        public: true,
        slug: true,
        description: true,
        tags: true,
        mocked: true,
        endpoint: {
          uri: true
        },
        sources: [
          {},
          {
            sources: {
              getUrl: true,
              filename: true
            }
          }
        ]
      }
    ]
  }).getProject[1];
  const experimentalQuery = await chain.Query({
    getUser: [
      {
        username: "a"
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
                username: true
              }
            },
            status: true,
            updateURL: true
          }
        },
        namespace: {
          slug: true,
          public: true,
          projects: [
            {},
            {
              projects: projectPayload
            }
          ]
        }
      }
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
            uri: true
          },
          sources: [
            {},
            {
              sources: {
                getUrl: true,
                filename: true
              }
            }
          ]
        }
      }
    ]
  });
  experimentalQuery.getUser.subscriptions.subscriptions.map((s) =>
    s.seats.users.map((d) => d.username)
  );
  experimentalQuery.getUser.namespace.projects.projects.map((p) =>
    p.sources.sources.map((s) => s.filename)
  );
};
run();
