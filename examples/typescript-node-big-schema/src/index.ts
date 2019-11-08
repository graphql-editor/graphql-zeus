import { Chain } from "./graphql-zeus";
const run = async () => {
  const chain = Chain("https://project-api.graphqleditor.com/graphql");
  const experimentalQuery = await chain.Query({
    listProjects: [
      { limit: 100 },
      {
        projects: {
          __alias: {
            aaa: {
              name: true,
            },
          },
        },
      },
    ],
  });
  console.log(experimentalQuery.listProjects.projects);
};
run();
