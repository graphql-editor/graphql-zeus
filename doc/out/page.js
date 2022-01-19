// src/page.tsx
import React from "https://cdn.skypack.dev/react";
import {htmlContent} from "./ssg/markdown.js";
import {Layout} from "./Layout/index.js";
import {routes} from "./markdownRoutes.js";
import {renderMarkdown} from "./mdtransform.js";
var CustomPage = ({data: data2}) => {
  return /* @__PURE__ */ React.createElement(Layout, {
    prefix: data2.prefix,
    activeRoute: data2.activeRoute,
    routes: data2.routes
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose prose-lg",
    dangerouslySetInnerHTML: {
      __html: renderMarkdown.render(data2.content.content)
    }
  }));
};
var data = () => {
  return {
    htmlContent,
    routes: routes(htmlContent),
    prefix: ssg.envs.PATH_PREFIX
  };
};
var page_default = (staticData) => {
  return /* @__PURE__ */ React.createElement(CustomPage, {
    data: staticData
  });
};
var pages = async (staticData) => {
  return await Promise.all(Object.entries(staticData.htmlContent).filter(([, v]) => !!v.data.link).map(async ([k, v], i) => {
    return {
      data: {
        content: v,
        routes: routes(staticData.htmlContent),
        activeRoute: v.data.link,
        prefix: staticData.prefix
      },
      slug: v.data.link,
      head: `
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/github-dark.min.css"
            />
            <link rel="stylesheet" href="/tw.css" />
            <title>GraphQL Zeus docs</title>
          `
    };
  }));
};
export {
  data,
  page_default as default,
  pages
};
