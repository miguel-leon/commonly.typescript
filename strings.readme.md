Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Strings` module
---
`commonly.typescript/strings`

---

- ### `cases`

Change from and to any of the letter cases: camel, kebab, sentence, snake and title.

```typescript
namespace cases {
    function camel(source: string): string;
    function kebab(source: string): string;
    function sentence(source: string): string;
    function snake(source: string): string;
    function title(source: string): string;
}
```

#### Usage:

```typescript
cases.camel('this_1s_it') == 'this1sIt';
cases.sentence('Hell0 It\'s Me') == 'Hell0 it\'s me';
```

---

- ### `interpolate`

Interpolate expressions on a non [Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) string.

```typescript
function interpolate(template: string, context: Record<string, string>): string;
```

The default matcher used for interpolating is exposed and can be globally changed in `interpolate.matcher`, it is type `RegExp`.

#### Usage:

```typescript
interpolate('Hello ${ who }!!!', { who: 'world' }) == 'Hello world!!!';
```

Escape with `\$` (with a non-raw string is `'\\$'`).

---

- ### `words`

Split ASCII strings into an array of words according to the following rules:
  - can start with letter or number.
  - can end with a number, but starting with a number has priority.
  - can have an apostrophe followed by a letter.
  - can't have uppercase letters in the middle; it's considered the start of a new word.

#### Usage:

```typescript
words('heLLoTherE') == ['he', 'L', 'Lo', 'Ther', 'E'];
words('1stNumber69') == ['1st', 'Number69'];
words('1stNumber69th') == ['1st', 'Number', '69th'];
```
