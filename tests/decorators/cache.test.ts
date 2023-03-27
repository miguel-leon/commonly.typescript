import { cache } from '@src/decorators';


describe('The cache decorator', () => {
	test('saves a getter result to be returned when the property is accessed again', () => {
		const compute = jest.fn(() => 'computed');

		class C {
			@cache
			get computed() {
				return compute();
			}
		}

		const o = new C();

		o.computed;
		o.computed;
		expect(o.computed).toBe('computed');
		expect(compute).toHaveBeenCalledTimes(1);
	});

	test('also with static properties', () => {
		const compute = jest.fn(() => 'computed');

		class C {
			@cache
			static get computed() {
				return compute();
			}
		}

		C.computed;
		C.computed;
		expect(C.computed).toBe('computed');
		expect(compute).toHaveBeenCalledTimes(1);
	});
});
