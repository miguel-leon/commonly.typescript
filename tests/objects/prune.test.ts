import { prune } from '@src/objects';

describe('The prune function', () => {

	test('returns new object without the nullish properties', () => {
		const object: { a: false, b: undefined, c: null, d?: number } = { a: false, b: undefined, c: null };
		const result = prune(object);
		// typeof result = { a: false, d: number }
		expect(result).toEqual({ a: false });
	});

	test('returns new object equal to argument if it doesn\'t have nullish properties', () => {
		const object: { a?: false } = { a: false };
		// const object = { a: false }; // error: type has no optional or nullable properties
		const result = prune(object);
		expect(result).toEqual(object);
	});
});
