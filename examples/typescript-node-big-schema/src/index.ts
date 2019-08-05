import { Chain } from "./graphql-zeus";
const run = async () => {
  const chain = Chain("https://project-api.graphqleditor.com/graphql");
  const experimentalQuery = await chain.Mutation({
    createTeam: [
      {
        name: "DS",
        namespace: "SDS",
      },
      {
        name: true,
        id: true,
        namespace: {
          slug: true,
        },
      },
    ],
  });
};
run();
