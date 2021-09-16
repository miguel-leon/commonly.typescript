import { interpolate } from '../src';


describe('The interpolate function', () => {

	test('interpolate all keys correctly', () => {
		const result = interpolate('${ a } ${ b }!!!', {
			a: 'Hello',
			b: 'world'
		});

		expect(result).toBe('Hello world!!!');
	});

	test('respects escaped symbols', () => {
		const backslash = '\\';
		const template = backslash + '${ escaped }, '
			+ backslash.repeat(4) + '${ not_escaped }, '
			+ backslash.repeat(7) + '${ escaped }';

		const result = interpolate(template, {
			not_escaped: 'INTERPOLATED'
		});

		expect(result).toBe(backslash + '${ escaped }, '
			+ backslash.repeat(4) + 'INTERPOLATED, '
			+ backslash.repeat(7) + '${ escaped }');
	});

	test('throws error if key is missing in context', () => {
		expect(() => {
			interpolate('${ missing 1 } ${ missing 2 }', {});
		}).toThrow();
	});
});
