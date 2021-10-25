/* eslint-disable */
import { fullSubscriptionConstructor, chainOptions, apiSubscription } from './index';

export const stuccoSubscriptions = (extractPayload: (result: unknown) => chainOptions, ...options: chainOptions) =>
  fullSubscriptionConstructor(
    async (query) => {
      const result = await fetch(options[0], {
        body: JSON.stringify({ query }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        ...options[1],
      }).then((r) => r.json());
      const sub = apiSubscription(extractPayload(result))(query);
      return {
        ...sub,
        on: (fn: (args: any) => void) => {
          sub.on(async (subscriptionPayload) => {
            const headers = options.length > 1 ? options[1]?.headers : {};
            const response = await fetch(options[0], {
              method: 'POST',
              headers,
              body: JSON.stringify({ query, rawSubscription: true, subscriptionPayload }),
            }).then((r) => r.json());
            fn(response.data);
          });
        },
      };
    },
    'subscription',
    'Subscription',
  );