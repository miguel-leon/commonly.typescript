import { interpolate } from '@src/strings';


describe('The interpolate function', () => {

	test('interpolate all keys correctly', () => {
		const result = interpolate('${ a } ${ b }${ c }', {
			a: 'Hello',
			b: 'world',
			c: '!!!'
		});

		expect(result).toBe('Hello world!!!');
	});

	test('respects escaped symbols', () => {
		const backslash = '\\';
		const template = backslash + '${ escaped }, '
			+ '${ end_escaped' + backslash + '} }, '
			+ backslash.repeat(4) + '${ not_escaped }, '
			+ backslash.repeat(7) + '${ escaped }';

		const result = interpolate(template, {
			not_escaped: 'INTERPOLATED',
			'end_escaped\\}': 'INTERPOLATED'
		});

		expect(result).toBe(backslash + '${ escaped }, '
			+ 'INTERPOLATED, '
			+ backslash.repeat(4) + 'INTERPOLATED, '
			+ backslash.repeat(7) + '${ escaped }');
	});

	test('throws error if key is missing in context', () => {
		expect(() => {
			interpolate('${ missing 1 } ${ missing 2 }', {});
		}).toThrow();
	});

	test('allows custom matchers to have multiple capturing groups', () => {
		const defaultMatcher = interpolate.matcher;

		interpolate.matcher = /\\.|{{\s*([^]*?)\s*}}|\[\[\s*([^]*?)\s*]]/gm;

		const result = interpolate('{{ a }} [[ b ]]', {
			a: 'Hello',
			b: 'world'
		});

		expect(result).toBe('Hello world');

		interpolate.matcher = defaultMatcher;
	});
});
