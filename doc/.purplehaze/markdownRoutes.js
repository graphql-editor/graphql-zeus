// src/markdownRoutes.ts
var routes = (htmlContent) => Object.entries(htmlContent).filter(([, v]) => !!v.data.title).map(([k, v]) => ({
  ...v.data
})).sort((a, b) => ("order" in a ? a.order : 0) > ("order" in b ? b.order : 0) ? 1 : -1).reduce((a, b) => {
  if ("category" in b) {
    a[b.category] = a[b.category] || [];
    a[b.category].push(b);
  }
  return a;
}, {});
export {
  routes
};
