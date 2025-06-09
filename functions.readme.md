Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Functions` module
---
`commonly.typescript/functions`

---

- ### `debounce`

Creates a debounced version of the function argument `callback`.

```typescript
function debounce<Args extends unknown[]>(callback: (...args: Args) => void, delay = 500): (...args: Args) => void;
```

#### Usage:

```typescript
const debounced = debounce((str: string) => console.log(str), 1000);
debounced('one');
debounced('two');
debounced('three');
// prints `three` after 1 second
```
