---
link: javascript
title: Javascript
order: 6
category: Basics
---

### JavaScript

To use with Javascript as an autocomplete tool you need to install Typescript, run the Zeus CLI, and then transform the result to JS using `tsc`

```sh
$ npm i -D typescript
# OR
# yarn add -D typescript
```

Generate Zeus:

```sh
$ zeus schema.graphql ./
```

And transform it using Typescript:

```sh
$ npx tsc ./zeus/*.ts --declaration --target es5 --skipLibCheck
# OR
# yarn tsc ./zeus/*.ts --declaration --target es5 --skipLibCheck
```

This will generate an `out.d.ts` file so that you can have autocompletion.
