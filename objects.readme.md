Commonly <sup>Typescript</sup>
===

[Go back](./readme.md)

`Objects` module
---
`commonly.typescript/objects`

---

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

---

- ### `omit`

Creates an omitter function with the passed properties, that extracts all but those properties from an object argument and creates another object with the extracted properties.

```typescript
function omit<Properties extends string[]>(...properties: Properties): Omitter<Properties>;

interface Omitter<Properties> {
	<T>(object: T): {
		[K in Exclude<keyof T, Properties>]: T[K];
	};
}
```

#### Usage:

```typescript
omit('prop1')({ prop1: 1, ... }) == { ... };

const omitter = omit('prop2');
omitter({ prop2: 2, ... }) == { ... };
omitter({ ... }) == { ... };
```

---

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
