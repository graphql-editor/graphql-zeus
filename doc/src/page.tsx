import React from 'https://cdn.skypack.dev/react';
import { htmlContent } from './ssg/markdown';
import { Layout } from './Layout/index';
import { routes } from './markdownRoutes';
import { renderMarkdown } from './mdtransform';

const CustomPage: React.FC<{
  data: {
    content: DataType['htmlContent'][keyof DataType['htmlContent']];
    routes: DataType['routes'];
    activeRoute?: string;
    prefix?: string;
  };
}> = ({ data }) => {
  return (
    <Layout prefix={data.prefix} activeRoute={data.activeRoute} routes={data.routes}>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{
          __html: renderMarkdown.render(data.content.content),
        }}
      ></div>
    </Layout>
  );
};

export const data = () => {
  return {
    htmlContent,
    routes: routes(htmlContent),
    prefix: ssg.envs.PATH_PREFIX,
  };
};

type DataType = ReturnType<typeof data>;

export default (staticData: {
  content: DataType['htmlContent'][keyof DataType['htmlContent']];
  routes: DataType['routes'];
  activeRoute?: string;
  prefix?: string;
}) => {
  return <CustomPage data={staticData} />;
};

export const pages = async (staticData: DataType) => {
  return await Promise.all(
    Object.entries(staticData.htmlContent)
      .filter(([, v]) => !!v.data.link)
      .map(async ([k, v], i) => {
        return {
          data: {
            content: v,
            routes: routes(staticData.htmlContent),
            activeRoute: v.data.link,
            prefix: staticData.prefix,
          },
          slug: v.data.link,
          head: `
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/github-dark.min.css"
            />
            <link rel="stylesheet" href="/tw.css" />
            <title>GraphQL Zeus docs</title>
          `,
        };
      }),
  );
};
