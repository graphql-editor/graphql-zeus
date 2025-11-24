import React from 'react';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';
import 'nextra-theme-docs/style.css';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - GraphQL Zeus',
    default: 'GraphQL Zeus - TypeScript-first GraphQL Client',
  },
  description: 'The ultimate TypeScript-first GraphQL client with complete type safety and intuitive API',
  openGraph: {
    title: 'GraphQL Zeus',
    description: 'The ultimate TypeScript-first GraphQL client with complete type safety',
    siteName: 'GraphQL Zeus',
  },
};

const logo = (
  <div className="flex items-center gap-2">
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
    <span className="font-bold text-lg">GraphQL Zeus</span>
  </div>
);

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/graphql-editor/graphql-zeus"
    chatLink="https://discord.gg/graphql-editor"
  />
);

const footer = (
  <Footer>
    <span>
      MIT {new Date().getFullYear()} ©{' '}
      <a href="https://github.com/graphql-editor" target="_blank" rel="noopener noreferrer">
        GraphQL Editor
      </a>
    </span>
  </Footer>
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`}
    >
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body className={inter.className}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/graphql-editor/graphql-zeus/tree/master/docs"
          footer={footer}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
          editLink="Edit this page on GitHub"
          feedback={{
            content: 'Question? Give us feedback',
            labels: 'feedback',
            link: 'https://github.com/graphql-editor/graphql-zeus/issues/new',
          }}
          toc={{
            backToTop: true,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
