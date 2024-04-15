import { Gql, _SubgraphErrorPolicy_ } from './zeus';

Gql('query')({
  invoices: [
    {
      subgraphError: _SubgraphErrorPolicy_.allow,
    },
    {
      client: true,
      createdAt: true,
      disputeId: true,
      id: true,
      address: true,
      network: true,
      projectName: true,
      released: true,
      token: true,
      tokenMetadata: {
        id: true,
      },
    },
  ],
}).then((r) => {
  // correct type
});
