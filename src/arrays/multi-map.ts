export function multiMap<A extends any[], R, T>(array: A, callbackFn: (this: T, element: A[number], index: number, array: A) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], R, T>(array: A, callbackFn: (this: T, element: A[number], index: number, array: A) => R, thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], R, T>(a: A, b: B, callbackFn: (this: T, elements: [A[number], B[number]], index: number, a: A, b: B) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], B extends any[], R, T>(a: A, b: B, callbackFn: (this: T, elements: [A[number], B[number]], index: number, a: A, b: B) => R, thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], R, T>(a: A, b: B, c: C, callbackFn: (this: T, elements: [A[number], B[number], C[number]], index: number, a: A, b: B, c: C) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], B extends any[], C extends any[], R, T>(a: A, b: B, c: C, callbackFn: (this: T, elements: [A[number], B[number], C[number]], index: number, a: A, b: B, c: C) => R, thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], R, T>(a: A, b: B, c: C, d: D, callbackFn: (this: T, elements: [A[number], B[number], C[number], D[number]], index: number, a: A, b: B, c: C, d: D) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], R, T>(a: A, b: B, c: C, d: D, callbackFn: (this: T, elements: [A[number], B[number], C[number], D[number]], index: number, a: A, b: B, c: C, d: D) => R, thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], E extends any[], R, T>(a: A, b: B, c: C, d: D, e: E, callbackFn: (this: T, elements: [A[number], B[number], C[number], D[number], E[number]], index: number, a: A, b: B, c: C, d: D, e: E) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], E extends any[], R, T>(a: A, b: B, c: C, d: D, e: E, callbackFn: (this: T, elements: [A[number], B[number], C[number], D[number], E[number]], index: number, a: A, b: B, c: C, d: D, e: E) => R, thisArg?: T): R[];
export function multiMap(...args: any[]) {
	return null as any;
}
