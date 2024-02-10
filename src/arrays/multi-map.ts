import { Function_ } from '../types';


export function multiMap<Array extends any[], R, T>(array: Array, callbackFn: (this: T, element: Array[number], index: number, array: Array) => R[], thisArg?: T): R[][];
export function multiMap<Array extends any[], R, T>(array: Array, callbackFn: (this: T, element: Array[number], index: number, array: Array) => R | [R], thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], R, T>(a: A, b: B, callbackFn: (this: T, elements: [A[number], B[number]], index: number, a: A, b: B) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], B extends any[], R, T>(a: A, b: B, callbackFn: (this: T, elements: [A[number], B[number]], index: number, a: A, b: B) => R | [R], thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], R, T>(a: A, b: B, c: C, callbackFn: (this: T, elements: [A[number], B[number], C[number]], index: number, a: A, b: B, c: C) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], B extends any[], C extends any[], R, T>(a: A, b: B, c: C, callbackFn: (this: T, elements: [A[number], B[number], C[number]], index: number, a: A, b: B, c: C) => R | [R], thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], R, T>(a: A, b: B, c: C, d: D, callbackFn: (this: T, elements: [A[number], B[number], C[number], D[number]], index: number, a: A, b: B, c: C, d: D) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], R, T>(a: A, b: B, c: C, d: D, callbackFn: (this: T, elements: [A[number], B[number], C[number], D[number]], index: number, a: A, b: B, c: C, d: D) => R | [R], thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], E extends any[], R, T>(a: A, b: B, c: C, d: D, e: E, callbackFn: (this: T, elements: [A[number], B[number], C[number], D[number], E[number]], index: number, a: A, b: B, c: C, d: D, e: E) => R[], thisArg?: T): R[][];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], E extends any[], R, T>(a: A, b: B, c: C, d: D, e: E, callbackFn: (this: T, elements: [A[number], B[number], C[number], D[number], E[number]], index: number, a: A, b: B, c: C, d: D, e: E) => R | [R], thisArg?: T): R[];
export function multiMap(...args: any) {
	const [arrays, mapper, thisArg]: [unknown[][], Function_, unknown] = Array.isArray(args.at(-2)) ? [args.slice(0, -1), args.at(-1), null] : [args.slice(0, -2), args.at(-2), args.at(-1)];
	const length = Math.min(...arrays.map(a => a.length));

	const results: any[][] = [];
	for (let i = 0; i < length; i++) {
		const result = mapper.call(
			thisArg,
			arrays.length === 1 ? arrays[0][i] : arrays.map(a => a[i]),
			i,
			...arrays
		);

		(Array.isArray(result) ? result : [result]).forEach((r, j) => {
			(results[j] ??= []).push(r);
		});
	}

	return results.length === 1 ? results[0] : results;
}
