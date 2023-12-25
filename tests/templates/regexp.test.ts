import { regexp } from '@src/templates';


describe('The regexp function', () => {
	test('creates a RegExp from a string pattern', () => {
		const result = regexp('<.+>');

		expect(result).toEqual(/<.+>/);
	});

	test('creates a RegExp from a tagged template literal', () => {
		const result = regexp`\b(${ ['hello', 'world'].join('|') })\b|\d{3}`;

		expect(result).toEqual(/\b(hello|world)\b|\d{3}/);
	});

	test('discarded: creates a RegExp from a tagged template literal interpolating other RegExp (consumer calls `.source`)', () => {
		const re1 = /\\./;
		const re2 = /{{[^}]}}/;

		const result = regexp`${ re1.source }|${ re2.source }`;

		expect(result).toEqual(/\\.|{{[^}]}}/);
	});

	test('adds flags to the RegExp using proxy properties on the tag', () => {
		expect(regexp.ig` `).toEqual(/ /gi);
		expect(regexp.i.g` `).toEqual(/ /gi);
		expect(regexp.i(true).g` `).toEqual(/ /gi);
		expect(regexp.i(false).g` `).toEqual(/ /g);
		expect(regexp.i.g(false)` `).toEqual(/ /i);
		expect(regexp.i(false).g(false)` `).toEqual(/ /);
		expect(regexp.im(true).g` `).toEqual(/ /gim);
		expect(regexp.im(false).g` `).toEqual(/ /g);
	});

	test('copies another RegExp flags by property access', () => {
		const other = /unused/gim;
		expect(regexp[other.flags]` `).toEqual(/ /gim);
	});
});
