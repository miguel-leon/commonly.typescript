import { difference } from '@src/arrays';


describe('The difference function', () => {
	test('filters items from the first array argument not existing in subsequent array arguments', () => {
		const result = difference(
			[1, 2, 3, 4, 5, 6, 7, 8],
			[1, 2],
			[2, 6, 7]
		);

		expect(result).toEqual([3, 4, 5, 8]);
	});

	test('difference with another array and its difference results in empty array', () => {
		const from = [1, 2, 3, 4, 5, 6, 7, 8];
		const other = [1, 2, 7, 8];
		const result = difference(from, other, difference(from, other));

		expect(result).toEqual([]);
	});
});
