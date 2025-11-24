import nextra from 'nextra';

const withNextra = nextra({
  // Optional: Configure MDX options
});

/** @type {import('next').NextConfig} */
export default withNextra({
  reactStrictMode: true,
  // Handle .well-known and other browser tool requests
  async headers() {
    return [
      {
        source: '/.well-known/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
});
