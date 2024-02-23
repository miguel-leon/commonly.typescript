import { debounced } from '@src/decorators';


jest.useFakeTimers();

describe('The debounced decorator', () => {
	test('makes only last call to method after delay time', () => {
		const impl = jest.fn();

		class C {
			@debounced()
			static debounced(arg: any) {
				impl(arg);
			}
		}

		C.debounced('one');
		C.debounced('two');
		C.debounced('three');

		expect(impl).not.toHaveBeenCalled();

		jest.runAllTimers();

		expect(impl).toHaveBeenNthCalledWith(1, 'three');
	});

	test('preserves `this` within the member and allows async void functions', () => {
		const impl = jest.fn();

		class C {
			att = 9;

			@debounced()
			async debounced(arg: string) {
				expect(this.att).toBe(9);
				expect(arg).toBe('three');

				impl();
			}
		}

		const obj = new C();

		obj.debounced('one');
		obj.debounced('two');
		obj.debounced('three');

		expect(impl).not.toHaveBeenCalled();

		jest.runAllTimers();

		expect(impl).toHaveBeenCalledTimes(1);
	});
});
