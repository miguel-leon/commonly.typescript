import { cache } from '@src/decorators';


describe('The cache decorator', () => {
	test('saves a getter result to be returned when the property is accessed again and does not affect the prototype', () => {
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
		expect(Object.getOwnPropertyDescriptor(C.prototype, 'computed')!.value).toBeUndefined();
	});

	test('saves the getter result on the class when the property is static', () => {
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

	test('saves the getter result on the sub class with static on the base class without affecting the base class', () => {
		const compute = jest.fn(() => 'computed');

		class Base {
			@cache
			static get computed() {
				return compute();
			}
		}

		class Sub extends Base {
		}

		Sub.computed;
		Sub.computed;
		expect(Sub.computed).toBe('computed');
		expect(compute).toHaveBeenCalledTimes(1);
		expect(Object.getOwnPropertyDescriptor(Base, 'computed')!.value).toBeUndefined();
	});
});
