import { Callable } from '../types';


export function multiMap<Array extends readonly unknown[], R extends readonly [unknown?, unknown?, unknown?, unknown?, unknown?], T>(array: Array, callbackFn: (this: T, element: Array[number], index: number, array: Array) => R, thisArg?: T): TupleItemsToArray<R>;
export function multiMap<Array extends readonly unknown[], R, T>(array: Array, callbackFn: (this: T, element: Array[number], index: number, array: Array) => R, thisArg?: T): R[];
export function multiMap<A extends readonly unknown[], B extends readonly unknown[], R extends readonly [unknown?, unknown?, unknown?, unknown?, unknown?], T>(a: A, b: B, callbackFn: (this: T, element_a: A[number], element_b: B[number], index: number, a: A, b: B) => R, thisArg?: T): TupleItemsToArray<R>;
export function multiMap<A extends readonly unknown[], B extends readonly unknown[], R, T>(a: A, b: B, callbackFn: (this: T, element_a: A[number], element_b: B[number], index: number, a: A, b: B) => R, thisArg?: T): R[];
export function multiMap<A extends readonly unknown[], B extends readonly unknown[], C extends readonly unknown[], R extends readonly [unknown?, unknown?, unknown?, unknown?, unknown?], T>(a: A, b: B, c: C, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], index: number, a: A, b: B, c: C) => R, thisArg?: T): TupleItemsToArray<R>;
export function multiMap<A extends readonly unknown[], B extends readonly unknown[], C extends readonly unknown[], R, T>(a: A, b: B, c: C, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], index: number, a: A, b: B, c: C) => R, thisArg?: T): R[];
export function multiMap<A extends readonly unknown[], B extends readonly unknown[], C extends readonly unknown[], D extends readonly unknown[], R extends readonly [unknown?, unknown?, unknown?, unknown?, unknown?], T>(a: A, b: B, c: C, d: D, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], element_d: D[number], index: number, a: A, b: B, c: C, d: D) => R, thisArg?: T): TupleItemsToArray<R>;
export function multiMap<A extends readonly unknown[], B extends readonly unknown[], C extends readonly unknown[], D extends readonly unknown[], R, T>(a: A, b: B, c: C, d: D, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], element_d: D[number], index: number, a: A, b: B, c: C, d: D) => R, thisArg?: T): R[];
export function multiMap<A extends readonly unknown[], B extends readonly unknown[], C extends readonly unknown[], D extends readonly unknown[], E extends readonly unknown[], R extends readonly [unknown?, unknown?, unknown?, unknown?, unknown?], T>(a: A, b: B, c: C, d: D, e: E, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], element_d: D[number], element_e: E[number], index: number, a: A, b: B, c: C, d: D, e: E) => R, thisArg?: T): TupleItemsToArray<R>;
export function multiMap<A extends readonly unknown[], B extends readonly unknown[], C extends readonly unknown[], D extends readonly unknown[], E extends readonly unknown[], R, T>(a: A, b: B, c: C, d: D, e: E, callbackFn: (this: T, element_a: A[number], element_b: B[number], element_c: C[number], element_d: D[number], element_e: E[number], index: number, a: A, b: B, c: C, d: D, e: E) => R, thisArg?: T): R[];
export function multiMap(...args: unknown[]) {
	const [arrays, mapper, thisArg] = (
		Array.isArray(args.at(-2)) ?
			[args.slice(0, -1), args.at(-1), null] :
			[args.slice(0, -2), args.at(-2), args.at(-1)]
	) as [unknown[][], Callable, unknown];
	const length = Math.min(...arrays.map(a => a.length));
	let longestTuple = 0;

	const results: unknown[] = [];
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
				((results[j] ??= []) as unknown[]).push(r);
			});
		} else {
			results.push(result);
		}
	}

	for (let j = 0; j < longestTuple; j++) {
		results[j] ??= [];
	}

	return results;
}


type TupleItemsToArray<R> =
	[R] extends [readonly [(infer A)?]] ?
		[A[]?] :
		[R] extends [readonly [(infer A)?, (infer B)?]] ?
			[A[]?, B[]?] :
			[R] extends [readonly [(infer A)?, (infer B)?, (infer C)?]] ?
				[A[]?, B[]?, C[]?] :
				[R] extends [readonly [(infer A)?, (infer B)?, (infer C)?, (infer D)?]] ?
					[A[]?, B[]?, C[]?, D[]?] :
					[R] extends [readonly [(infer A)?, (infer B)?, (infer C)?, (infer D)?, (infer E)?]] ?
						[A[]?, B[]?, C[]?, D[]?, E[]?] :
						never;
