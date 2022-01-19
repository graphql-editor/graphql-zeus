import { htmlContent } from './ssg/markdown';

export const routes = <Z extends typeof htmlContent>(htmlContent: Z) =>
  Object.entries(htmlContent)
    .filter(([, v]) => !!v.data.title)
    .map(([k, v]) => ({
      ...v.data,
    }))
    .sort((a, b) => (('order' in a ? a.order : 0) > ('order' in b ? b.order : 0) ? 1 : -1));
