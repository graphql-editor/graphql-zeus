/* eslint-disable */
import { fullSubscriptionConstructor, chainOptions, apiFetch, apiSubscription } from './index';
export const stuccoSubscriptions = (extractPayload, ...options) =>
fullSubscriptionConstructor(
  async (query) => {
    const result = await apiFetch(options)(query);
    const sub = apiSubscription(extractPayload(result))(query);
    return {
      ...sub,
      on: (fn) => {
        sub.on(async (subscriptionPayload) => {
          const headers = options.length > 1 ? options[1]?.headers : {};
          const response = await fetch(options[0], {
            method: 'POST',
            headers,
            body: JSON.stringify({ query, rawSubscription: true, subscriptionPayload }),
          }).then((r) => r.json());
          fn(response);
        });
      },
    };
  },
  'subscription',
  'Subscription',
);