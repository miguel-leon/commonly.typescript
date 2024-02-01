import { getOrSet } from '@src/collections';


describe('The get or set function', () => {
	it('should not call factory if element does exist and return existing value', () => {
		const map = new Map([
			['a', 1],
			['b', 2]
		]);

		const factory = jest.fn();

		const value = getOrSet(map, 'b', factory);

		expect(value).toBe(2);
		expect(map).toEqual(new Map([
			['a', 1],
			['b', 2]
		]));
		expect(factory).not.toHaveBeenCalled();
	});

	it('should call factory, set and return the value provided by the factory', () => {
		const map = new Map([
			['a', 1],
			['b', 2]
		]);

		const factory = jest.fn(() => 3);

		const value = getOrSet(map, 'c', factory);

		expect(value).toBe(3);
		expect(map).toEqual(new Map([
			['a', 1],
			['b', 2],
			['c', 3]
		]));
		expect(factory).toHaveBeenCalledWith(map);
	});
});
