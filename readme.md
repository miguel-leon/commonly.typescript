Commonly <sup>Typescript</sup>
===

*Well typed sorted utilities commonly desired.*

From `commonly.typescript` import *modules* (*namespaces*):

- `Strings`
- `Functions`
- `Templates`

Or from `commonly.typescript/*` import individual members of the *module* (*namespace*).

---

`Strings` module
---
`commonly.typescript/strings`

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


`Functions` module
---
`commonly.typescript/functions`

- ### `debounce`

Creates a debounced version of the function argument `callback`.

```typescript
function debounce<Args extends any[]>(callback: (...args: Args) => void, delay = 500): (...args: Args) => void;
```

#### Usage:

```typescript
const debounced = debounce((str: string) => console.log(str), 1000);
debounced('one');
debounced('two');
debounced('three');
// prints `three` after 1 second
```


`Templates` module
---
`commonly.typescript/templates`

- ### `regexp`

Creates a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) object from a [Tagged Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates). 

```typescript
function regexp(strings: TemplateStringsArray, ...keys: string[]): RegExp;
function regexp.<flags>(strings: TemplateStringsArray, ...keys: string[]): RegExp;
```

#### Usage:

```typescript
regexp`\/(${ 'hello' })\/(${ 'world' })?` == /\/(hello)\/(world)?/;
regexp.gi`another regexp` == /another regexp/gi;
```
