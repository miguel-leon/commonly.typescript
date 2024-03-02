Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Arrays` module
---
`commonly.typescript/arrays`

---

- ### `difference`

Filters the first array argument with elements not existing in all subsequent array arguments.

```typescript
function difference<T>(from: T[], ...filters: T[][]): T[];
```

#### Usage:

```typescript
difference([1, 2, 3, 4, 5, 6, 7, 8], [1, 2], [2, 6, 7]) == [3, 4, 5, 8];
```


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


- ### `multiMap`

Maps one or multiple arrays into one or multiple arrays.
Traverses up to the shortest length among multiple array arguments.
Returning sparse tuples from the callback will not add elements, functioning as a map and filter simultaneously.

```typescript
function multiMap<A, B, ..., R, T>(...arrays: [A[], B[], ...], callbackFn: (this: T, ...elements: [A, B, ...], index: number, ...arrays: [A[], B[], ...]) => R | R[], thisArg?: T): R[] | R[][];
```

#### Usage:

```typescript
multiMap([1, 2, 3], i => i * 2) == [2, 4, 6];
multiMap([1, 2, 3], i => [i * 2, i * i]) == [[2, 4, 6], [1, 4, 9]];
multiMap([1, 2, 3], [1, 2, 3], [1, 2, 3], (a, b, c) => a + b + c) == [3, 6, 9];
multiMap([1, 2, 3], [1, 2, 3, 4, 5], (a, b) => [a + b, a * b]) == [[2, 4, 6], [1, 4, 9]];
multiMap([1, 2, 3], i => new Array(i).fill(i)) == [[1,2,3], [2,3], [3]];
multiMap([1, 2, 3, 4, 5, 6, 7, 8, 9], n => n % 2 ? [n,] : [,n]) == [[1, 3, 5, 7, 9], [2, 4, 6, 8]];
```



- ### `rearrange`

Rearranges elements from an index onto another. Clamps indices and count so that the operation is always possible.

```typescript
function rearrange<T>(array: T[], from: number, to: number, count = 1): T[];
```

#### Usage:

```typescript
rearrange([A, B, C, D, E, F], 1, 4) == [A, C, D, E, B, F];
rearrange([A, B, C, D, E, F], 4, 1) == [A, E, B, C, D, F];
rearrange([A, B, C, D, E, F], 0, 2, 4) == [C, A, B, D, E, F];
rearrange([A, B, C, D, E, F], -2, -3, 4) == [A, B, C, E, F, D];
```
