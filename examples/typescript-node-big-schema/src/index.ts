import { Chain } from "./graphql-zeus";
const run = async () => {
  const chain = Chain("https://project-api.graphqleditor.com/graphql");
  const experimentalQuery = await chain.Query({
    __alias: {
      ccc: {
        listProjects: [
          { limit: 10 },
          {
            projects: {
              name: true,
            },
          },
        ],
      },
    },
  });
  console.log(experimentalQuery.ccc.listProjects!);
};
run();
