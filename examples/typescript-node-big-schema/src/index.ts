import { Chain } from "./graphql-zeus";
const run = async () => {
  const chain = Chain("https://project-api.graphqleditor.com/graphql");
  const experimentalQuery = await chain.Query({
    listProjects: [
      { owned: true },
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
  console.log(experimentalQuery.ccc.listProjects!);
};
run();
