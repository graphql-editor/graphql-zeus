import { Chain, Selector } from './zeus';

const run = async () => {
  const s = Selector('query_root')({
    __typename: true,
    aggregateBookings: [
      { limit: 5 },
      { __typename: true, nodes: { bookedAt: true, bookerName: true, checkOut: true } },
    ],
  });
  const result = await Chain('http://example.com')('query')({
    __typename: true,
    aggregateBookings: [
      { limit: 5 },
      { __typename: true, nodes: { bookedAt: true, bookerName: true, checkOut: true } },
    ],
  });
  const resultSelector = await Chain('http://example.com')('query')(s);
};
run();
