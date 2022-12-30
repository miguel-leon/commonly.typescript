import { cases } from '@src/strings';


describe('The case conversion functions', () => {
	describe('The camel case function', () => {
		test('from kebab case', () => {
			const result = cases.camel('this-1s-it');

			expect(result).toBe('this1sIt');
		});

		test('from sentence case', () => {
			const result = cases.camel('Hell0 it\'s me');

			expect(result).toBe('hell0It\'sMe');
		});

		test('from snake case', () => {
			const result = cases.camel('this_1s_it');

			expect(result).toBe('this1sIt');
		});

		test('from title case', () => {
			const result = cases.camel('Hell0 It\'s Me');

			expect(result).toBe('hell0It\'sMe');
		});
	});

	describe('The kebab case function', () => {
		test('from camel case', () => {
			const result = cases.kebab('this1sIt');

			expect(result).toBe('this-1s-it');
		});

		test('from sentence case', () => {
			const result = cases.kebab('Hell0 it\'s me');

			expect(result).toBe('hell0-it\'s-me');
		});

		test('from snake case', () => {
			const result = cases.kebab('this_1s_it');

			expect(result).toBe('this-1s-it');
		});

		test('from title case', () => {
			const result = cases.kebab('Hell0 It\'s Me');

			expect(result).toBe('hell0-it\'s-me');
		});
	});

	describe('The sentence case function', () => {
		test('from camel case', () => {
			const result = cases.sentence('this1sIt');

			expect(result).toBe('This 1s it');
		});

		test('from kebab case', () => {
			const result = cases.sentence('this-1s-it');

			expect(result).toBe('This 1s it');
		});

		test('from snake case', () => {
			const result = cases.sentence('this_1s_it');

			expect(result).toBe('This 1s it');
		});

		test('from title case', () => {
			const result = cases.sentence('Hell0 It\'s Me');

			expect(result).toBe('Hell0 it\'s me');
		});
	});

	describe('The snake case function', () => {
		test('from camel case', () => {
			const result = cases.snake('this1sIt');

			expect(result).toBe('this_1s_it');
		});

		test('from kebab case', () => {
			const result = cases.snake('this-1s-it');

			expect(result).toBe('this_1s_it');
		});

		test('from sentence case', () => {
			const result = cases.snake('Hell0 it\'s me');

			expect(result).toBe('hell0_it\'s_me');
		});

		test('from title case', () => {
			const result = cases.snake('Hell0 It\'s Me');

			expect(result).toBe('hell0_it\'s_me');
		});
	});

	describe('The title case function', () => {
		test('from camel case', () => {
			const result = cases.title('this1sIt');

			expect(result).toBe('This 1s It');
		});

		test('from kebab case', () => {
			const result = cases.title('this-1s-it');

			expect(result).toBe('This 1s It');
		});

		test('from sentence case', () => {
			const result = cases.title('Hell0 it\'s me');

			expect(result).toBe('Hell0 It\'s Me');
		});

		test('from snake case', () => {
			const result = cases.title('this_1s_it');

			expect(result).toBe('This 1s It');
		});
	});

	describe('Some edge cases', () => {
		test('Non camel case input with uppercase', () => {
			const value = 'HeLLo TherE';

			expect(cases.kebab(value)).toBe('he-l-lo-ther-e');
			expect(cases.sentence(value)).toBe('He l lo ther e');
			expect(cases.title(value)).toBe('He L Lo Ther E');
			expect(cases.camel(value)).toBe('heLLoTherE');

			expect(
				cases.camel(
					cases.sentence(
						cases.title(
							cases.kebab(value)
						)
					)
				)
			).toBe('heLLoTherE');
		});

		test('Camel case input with numbers', () => {
			const value = '1stNumber69th';

			expect(cases.sentence(value)).toBe('1st number 69th');
			expect(cases.kebab(value)).toBe('1st-number-69th');
		});
	});
});
