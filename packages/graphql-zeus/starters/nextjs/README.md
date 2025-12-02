# Zeus + Next.js Starter

This project was bootstrapped with `npx graphql-zeus create`.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Generate your Zeus client:

   ```bash
   npx graphql-zeus <your-schema-url-or-file> ./lib --node
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Using Zeus

After generating your client, you can import and use it:

```typescript
import { Chain } from '@/lib/zeus';

const chain = Chain('https://your-graphql-endpoint.com/graphql');

// Example query
const result = await chain('query')({
  users: {
    id: true,
    name: true,
    email: true,
  },
});
```

## Learn More

- [Zeus Documentation](https://github.com/graphql-editor/graphql-zeus)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
