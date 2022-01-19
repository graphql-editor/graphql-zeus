import hljs from 'https://cdn.skypack.dev/highlight.js';
import { Remarkable } from 'https://cdn.skypack.dev/remarkable';
export const renderMarkdown = new Remarkable({
  highlight: function(str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}

    return ''; // use external default escaping
  },
});
