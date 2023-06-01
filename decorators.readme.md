Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Decorators` module
---
`commonly.typescript/decorators`

Requires `tsconfig.json` option `"experimentalDecorators": true`.

---

- ### `cache`

Decorator that turns a property getter into a property value after it is invoked and calculated for the first time.
Use only on getter fields either static or instance.

```typescript
function cache(...);
```

#### Usage:

```typescript
class A {
    @cache
    get computed() {
        return compute(); // will only be called once.
    }
}
```

---

- ### `debounced`

Decorator factory that applies `debouce` from `Functions` to a method either static or instance (preserves this).
The method must return `void` since `debounce` changes returns a function that returns `void`.

```typescript
function debounced(delay: number)(...);
```

#### Usage:

```typescript
class A {
    @debounced(500)
    foo() {}
}
```
