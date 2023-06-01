Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Arrays` module
---
`commonly.typescript/arrays`

---

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
