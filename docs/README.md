# GraphQL Zeus Documentation

Modern, comprehensive documentation for GraphQL Zeus built with Nextra 4.6.0 and Next.js 15.

## Features

- 📚 Comprehensive documentation covering all Zeus features
- 🎨 Greek mythology-inspired design with Tailwind CSS
- ⚡ Fast and responsive with Next.js 15
- 🔍 Full-text search
- 🌙 Dark mode support
- 📱 Mobile-friendly
- ✨ Interactive code examples
- 🎯 Type-safe throughout

## Getting Started

### Installation

```bash
cd docs
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
docs/
├── pages/              # Documentation pages (MDX)
│   ├── getting-started/
│   ├── core-concepts/
│   ├── queries-mutations/
│   ├── advanced/
│   ├── integrations/
│   ├── recipes/
│   ├── api-reference/
│   ├── cli/
│   ├── examples/
│   ├── migration/
│   └── community/
├── components/         # React components
├── styles/            # Global styles
├── public/            # Static assets
├── theme.config.tsx   # Nextra theme configuration
├── tailwind.config.js # Tailwind CSS configuration
└── next.config.js     # Next.js configuration
```

## Writing Documentation

### Creating a New Page

1. Create a new `.mdx` file in the appropriate directory
2. Add frontmatter if needed
3. Update the `_meta.json` file for navigation

Example:

```mdx
---
title: My New Feature
description: Learn about my new feature
---

# My New Feature

Your content here...
```

### Code Blocks

Use syntax highlighting:

\`\`\`typescript
import { Chain } from './zeus';

const chain = Chain('https://api.com/graphql');
\`\`\`

### Callouts

Use Nextra's built-in callouts:

```mdx
<Callout type="warning">This is a warning message</Callout>
```

### Cards

Use cards for feature highlights:

```mdx
import { Cards, Card } from 'nextra/components';

<Cards>
  <Card icon="⚡" title="Feature 1" href="/link">
    Description
  </Card>
</Cards>
```

## Theme Customization

The documentation uses a custom Greek mythology-inspired theme defined in:

- `theme.config.tsx` - Nextra theme configuration
- `tailwind.config.js` - Custom colors and utilities
- `styles/globals.css` - Global styles and custom classes

### Colors

```css
--zeus-primary: #1e40af /* Deep olympian blue */ --zeus-secondary: #3b82f6 /* Sky blue */ --lightning-gold: #fbbf24
  /* Golden lightning */ --thunder-purple: #8b5cf6 /* Thunder purple */ --storm-cyan: #06b6d4 /* Storm cyan */;
```

## Components

### Custom Components (To be created)

- `CodePlayground` - Interactive code editor
- `FeatureCard` - Feature highlight cards
- `LightningBolt` - Animated lightning effect
- `TypeVisualization` - Type flow diagrams

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Static Export

```bash
# Add to next.config.js:
# output: 'export'

npm run build
# Deploy the out/ folder
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-docs`)
3. Commit your changes (`git commit -m 'Add amazing documentation'`)
4. Push to the branch (`git push origin feature/amazing-docs`)
5. Open a Pull Request

## License

MIT © GraphQL Editor

## Links

- [GraphQL Zeus Repository](https://github.com/graphql-editor/graphql-zeus)
- [Nextra Documentation](https://nextra.site)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
