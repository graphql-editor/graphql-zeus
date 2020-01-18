import chalk from 'chalk';
import { Gql } from './graphql-zeus';
const printQueryResult = (name: string, result: any) =>
  console.log(`${chalk.greenBright(name)} result:\n${chalk.cyan(JSON.stringify(result, null, 4))}\n\n`);
const run = async () => {
  const result = await Gql.query({
    people: {
      name: true,
    },
  });
  printQueryResult('people', result.people || {});
};
run();
