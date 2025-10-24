import { SubscriptionSSE } from './zeus/index.js';

const main = async () => {
  const subscriptionSSE = SubscriptionSSE('http://localhost:4003/graphql');
  const sub = subscriptionSSE('subscription');
  const { on, error, open, off, close } = sub({
    countdown: [{ from: 10 }, true],
  });
  open(() => {
    console.log('✓ SSE connection established');
  });
  on((data) => {
    console.log('📊 Countdown:', data.countdown);
    if (data.countdown === 0) {
      console.log('\n✓ Countdown complete, closing connection...');
      close();
    }
  });
  error((err) => {
    console.error('❌ SSE error:', err);
  });
  off((event) => {
    console.log('🔌 SSE connection closed:', event.reason || 'Unknown reason');
    process.exit(0);
  });
};

main().catch(console.error);
