Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Collections` module
---
`commonly.typescript/collections`

---

- ### `getOrSet`

Gets a key from a Map, or sets it by calling a factory if the key does not exist; then returns the value.
The factory receives the original Map as argument if needed.

```typescript
function getOrSet<K, V>(map: Map<K, V>, key: K, factory: (map: Map<K, V>) => V): V;
```

#### Usage:

```typescript
const map = new Map([['a', 'hello']]);
getOrSet(map, 'a', () => 'not called') == 'hello';
getOrSet(map, 'b', () => 'bye') == 'bye';
map.size == 2;
```
