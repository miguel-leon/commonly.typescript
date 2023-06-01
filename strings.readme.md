Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Strings` module
---
`commonly.typescript/strings`

---

- ### `interpolate`

Interpolate expressions on a non [Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) string.

```typescript
function interpolate(template: string, context: { [k: string]: any }): string;
```

#### Usage:

```typescript
interpolate('Hello ${ who }!!!', { who: 'world' }) == 'Hello world!!!';
```

Escape with `\$` (with a non-raw string is `'\\$'`).
