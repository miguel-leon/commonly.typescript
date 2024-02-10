import { Function_ } from '../types';


export function multiMap<Array extends any[], R, T>(array: Array, callbackFn: (this: T, element: Array[number], index: number, array: Array) => R, thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], R, T>(a: A, b: B, callbackFn: (this: T, element_a: A[number], element_b: B[number], index: number, a: A, b: B) => R, thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], R, T>(a: A, b: B, c: C, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], index: number, a: A, b: B, c: C) => R, thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], R, T>(a: A, b: B, c: C, d: D, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], element_d: D[number], index: number, a: A, b: B, c: C, d: D) => R, thisArg?: T): R[];
export function multiMap<A extends any[], B extends any[], C extends any[], D extends any[], E extends any[], R, T>(a: A, b: B, c: C, d: D, e: E, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], element_d: D[number], element_e: E[number], index: number, a: A, b: B, c: C, d: D, e: E) => R, thisArg?: T): R[];
export function multiMap(...args: any) {
	const [arrays, mapper, thisArg]: [unknown[][], Function_, unknown] = Array.isArray(args.at(-2)) ? [args.slice(0, -1), args.at(-1), null] : [args.slice(0, -2), args.at(-2), args.at(-1)];
	const length = Math.min(...arrays.map(a => a.length));
	let longestTuple = 0;

	const results: any[] = [];
	for (let i = 0; i < length; i++) {
		const result = mapper.call(
			thisArg,
			...arrays.map(a => a[i]),
			i,
			...arrays
		);

		if (Array.isArray(result)) {
			longestTuple = Math.max(longestTuple, result.length);
			result.forEach((r, j) => {
				(results[j] ??= []).push(r);
			})
		} else {
			results.push(result);
		}
	}

	for (let j = 0; j < longestTuple; j++) {
		results[j] ??= [];
	}

	return results;
}
