Commonly <sup>Typescript</sup>
===

*Well typed sorted utilities commonly desired.*

From `commonly.typescript` import *modules* (*namespaces*):

- `Arrays`
- `Functions`
- `Objects`
- `Strings`
- `Templates`

Or from `commonly.typescript/*` import individual members of the *module* (*namespace*).

---

`Arrays` module
---
`commonly.typescript/arrays`

- ### `intersperse`

Returns a curried function that creates a new array interspersing `item` between every `n` element.

```typescript
function intersperse<T>(item: T, n: number): <U>(array: U[]) => (U | T)[];
```

#### Usage:

```typescript
intersperse('W', 1)([1, 2])          == [1, 'W', 2];
intersperse('X', 1)([1, 2, 3])       == [1, 'X', 2, 'X', 3];
intersperse('Y', 2)([1, 2, 3, 4])    == [1, 2, 'Y', 3, 4];
intersperse('Z', 2)([1, 2, 3, 4, 5]) == [1, 2, 'Z', 3, 4, 'Z', 5];
```


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


`Objects` module
---
`commonly.typescript/objects`

- ### `pick`

Creates a picker function with the passed properties, that extracts only those properties from an object argument and creates another object with those properties.

```typescript
function pick<Properties extends string[]>(...properties: Properties): Picker<Properties>;

interface Picker<Properties> {
	<T>(object: T): {
		[K in Extract<keyof T, Properties>]: T[K];
	};
}
```

#### Usage:

```typescript
pick('prop1')({ prop1: 1, ... }) == { prop1: 1 };

const picker = pick('prop2');
picker({ prop2: 2, ... }) == { prop2: 2 };
picker({ ... }) == {};
```

- ### `prune`

Creates a new object without the nullish properties of the passed object. It requires the type of the passed object to have at least one optional or nullable property.

```typescript
function prune<T>(object: HasOptionalProperties<T>): Prune<T>;

type Prune<T> = {
	[k in NonNullableProperties<T>]: T[k];
};
```

#### Usage:

```typescript
prune({ a: false, b: undefined, c: null }) == { a: false };
```


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


`Templates` module
---
`commonly.typescript/templates`

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
