import { multiMap } from '@src/arrays';


describe('The multiMap function', () => {
	test('maps a single input to a single output', () => {
		const r = multiMap(
			[1, 2, 3, 4, 5, 6],
			i => i * 2
		);

		expect(r).toEqual([2, 4, 6, 8, 10, 12]);
	});

	test('maps a single input to multiple outputs', () => {
		const [doubles, squares] = multiMap(
			[1, 2, 3, 4, 5, 6],
			i => [i * 2, i * i]
		);

		expect(doubles).toEqual([2, 4, 6, 8, 10, 12]);
		expect(squares).toEqual([1, 4, 9, 16, 25, 36]);
	});

	test('maps multiple inputs to a single output (with or without wrapping in a single element array)', () => {
		const result = multiMap(
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 5, 6],
			([a, b, c], index) => index & 1 ? [a + b + c] as const : a + b + c
		);

		expect(result).toEqual([3, 6, 9, 12, 15, 18]);
	});

	test('maps multiple inputs to multiple outputs and traverses until the shortest length', () => {
		const [summations, multiplications] = multiMap(
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 5, 6, 7, 8, 9],
			([a, b]) => [a + b, a * b]
		);

		expect(summations).toEqual([2, 4, 6, 8, 10, 12]);
		expect(multiplications).toEqual([1, 4, 9, 16, 25, 36]);
	});

	test('maps to sparse arrays when output tuples lack an element on an iteration', () => {
		const results = multiMap(
			[1, 2, 3, 4],
			(i, index) => {
				const result = [];
				result[index] = i;
				return result;
			}
		);

		expect(results).toEqual([
			[1,,,],
			[,2,,],
			[,,3,],
			[,,,4]
		]);
	});

	test('binds callback function to `thisArg`', () => {
		const o = {
			a: 1,
			b: 2,
			c: 3
		};

		const result = multiMap(
			['a', 'b', 'c'] as (keyof typeof o)[],
			function (k) {
				return this[k];
			},
			o
		);

		expect(result).toEqual([1, 2, 3]);
	});
});
