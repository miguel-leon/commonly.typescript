import { cases } from '@src/strings';


describe('The case conversion functions', () => {
	describe('The camel case function', () => {
		test('from kebab case', () => {
			const result = cases.camel('this-is-it');

			expect(result).toBe('thisIsIt');
		});

		test('from sentence case', () => {
			const result = cases.camel('Hello it\'s me');

			expect(result).toBe('helloIt\'sMe');
		});

		test('from snake case', () => {
			const result = cases.camel('this_is_it');

			expect(result).toBe('thisIsIt');
		});

		test('from title case', () => {
			const result = cases.camel('Hello It\'s Me');

			expect(result).toBe('helloIt\'sMe');
		});
	});

	describe('The kebab case function', () => {
		test('from camel case', () => {
			const result = cases.kebab('thisIsIt');

			expect(result).toBe('this-is-it');
		});

		test('from sentence case', () => {
			const result = cases.kebab('Hello it\'s me');

			expect(result).toBe('hello-it\'s-me');
		});

		test('from snake case', () => {
			const result = cases.kebab('this_is_it');

			expect(result).toBe('this-is-it');
		});

		test('from title case', () => {
			const result = cases.kebab('Hello It\'s Me');

			expect(result).toBe('hello-it\'s-me');
		});
	});

	describe('The sentence case function', () => {
		test('from camel case', () => {
			const result = cases.sentence('thisIsIt');

			expect(result).toBe('This is it');
		});

		test('from kebab case', () => {
			const result = cases.sentence('this-is-it');

			expect(result).toBe('This is it');
		});

		test('from snake case', () => {
			const result = cases.sentence('this_is_it');

			expect(result).toBe('This is it');
		});

		test('from title case', () => {
			const result = cases.sentence('Hello It\'s Me');

			expect(result).toBe('Hello it\'s me');
		});
	});

	describe('The snake case function', () => {
		test('from camel case', () => {
			const result = cases.snake('thisIsIt');

			expect(result).toBe('this_is_it');
		});

		test('from kebab case', () => {
			const result = cases.snake('this-is-it');

			expect(result).toBe('this_is_it');
		});

		test('from sentence case', () => {
			const result = cases.snake('Hello it\'s me');

			expect(result).toBe('hello_it\'s_me');
		});

		test('from title case', () => {
			const result = cases.snake('Hello It\'s Me');

			expect(result).toBe('hello_it\'s_me');
		});
	});

	describe('The title case function', () => {
		test('from camel case', () => {
			const result = cases.title('thisIsIt');

			expect(result).toBe('This Is It');
		});

		test('from kebab case', () => {
			const result = cases.title('this-is-it');

			expect(result).toBe('This Is It');
		});

		test('from sentence case', () => {
			const result = cases.title('Hello it\'s me');

			expect(result).toBe('Hello It\'s Me');
		});

		test('from snake case', () => {
			const result = cases.title('this_is_it');

			expect(result).toBe('This Is It');
		});
	});
});
