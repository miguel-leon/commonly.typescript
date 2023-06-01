Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Templates` module
---
`commonly.typescript/templates`

---

- ### `regexp`

Creates a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) object from a [Tagged Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) or a string pattern.

Flags are passed as a property or chain of properties of the `regexp` tag. Each flags property can be called as a function with a boolean condition argument to ascertain such flags.

```typescript
interface regexp {
	(strings: TemplateStringsArray, ...keys: string[]): RegExp;

	(pattern: string): RegExp;

	[flags]: regexp;

	[flags]: (condition: boolean) => regexp;
}
```

#### Usage:

```typescript
regexp('<.+>') == /<.+>/;
regexp`\b(${ ['hello', 'world'].join('|') })\b` == /\b(hello|world)\b/;
regexp.gi`another regexp` == /another regexp/gi;
regexp.g.m(true)`conditional m flag` == /conditional m flag/gm;
```
