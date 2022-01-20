// src/index.tsx
import React from "https://cdn.skypack.dev/react";
import {htmlContent} from "./ssg/markdown.js";
import {Layout} from "./Layout/index.js";
import {routes} from "./markdownRoutes.js";
import {renderMarkdown} from "./mdtransform.js";
var src_default = (data2) => {
  return /* @__PURE__ */ React.createElement(Layout, {
    prefix: data2.prefix,
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
    content: htmlContent["markdown/index.md"],
    routes: routes(htmlContent),
    prefix: ssg.envs.PATH_PREFIX
  };
};
var head = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "./tw.css"
  }), /* @__PURE__ */ React.createElement("title", null, "GraphQL Zeus docs"));
};
export {
  data,
  src_default as default,
  head
};
