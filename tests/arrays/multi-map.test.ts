import { multiMap } from '@src/arrays';


describe('The multiMap function', () => {
	test('maps a single input to a single output', () => {
		const result = multiMap(
			[1, 2, 3, 4, 5, 6],
			i => i * 2
		);

		expect(result).toEqual([2, 4, 6, 8, 10, 12]);
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

	test('sparse positions in output tuples are not appended and the resulting arrays are not sparse', () => {
		const results = multiMap(
			[1, 2, 3, 4],
			(i, index) => {
				const result = [];
				result[index] = i;
				return result;
			}
		);

		expect(results).toEqual([
			[1],
			[2],
			[3],
			[4]
		]);
	});

	test('fill tuple positions with undefined when a result similar to a sparse array is desired', () => {
		const results = multiMap(
			[1, 2, 3, 4],
			(i, index) => {
				const result = new Array(4).fill(undefined);
				result[index] = i;
				return result;
			}
		);

		expect(results).toEqual([
			[1, undefined, undefined, undefined],
			[undefined, 2, undefined, undefined],
			[undefined, undefined, 3, undefined],
			[undefined, undefined, undefined, 4]
		]);
	});

	test('does not map to sparse arrays also when the output tuples differ in size', () => {
		const results = multiMap(
			[1, 2, 3, 4],
			i => new Array(i).fill(i)
		);

		expect(results).toEqual([
			[1,2,3,4],
			[2,3,4],
			[3,4],
			[4],
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

	test('can zip arrays together in tuples by double wrapping the returned tuples', () => {
		const result = multiMap(
			[1, 2, 3, 4, 5],
			['a', 'b', 'c', 'd', 'e'],
			([a, b]) => [[a, b]]
		);

		expect(result).toEqual([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e']]);
	});

	test('split an array into groups', () => {
		const [odd, even] = multiMap(
			[1, 2, 3, 4, 5, 6, 7, 8, 9],
			n => n % 2 ? [n,] : [,n]
		);

		expect(odd).toEqual([1, 3, 5, 7, 9]);
		expect(even).toEqual([2, 4, 6, 8]);
	})
});
