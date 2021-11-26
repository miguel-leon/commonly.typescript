import { regexp } from '@src/templates';


describe('The regexp function', () => {

	test('creates a RegExp from a tagged template correctly', () => {
		const result = regexp`\/(${ 'hello' })\/(${ 'world' })?`

		expect(result).toEqual(/\/(hello)\/(world)?/);
	});

	test('adds flags to the RegExp using proxy properties on the tag', () => {
		const result = regexp.ig` `;

		expect(result).toEqual(/ /gi);
	});
});
