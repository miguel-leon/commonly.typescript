import { regexp } from '@src/templates';


describe('The regexp function', () => {

	test('creates a RegExp from a string pattern', () => {
		const result = regexp('<.+>');

		expect(result).toEqual(/<.+>/);
	});

	test('creates a RegExp from a tagged template literal', () => {
		const result = regexp`\b(${ ['hello', 'world'].join('|') })\b`

		expect(result).toEqual(/\b(hello|world)\b/);
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
});
