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

		expect(impl).not.toBeCalled();

		jest.runAllTimers();

		expect(impl).toHaveBeenNthCalledWith(1, 'three');
	});

	test('preserves `this` within the member', () => {
		const impl = jest.fn();

		class C {
			att = 9;

			@debounced()
			debounced() {
				expect(this.att).toBe(9);
				impl();
			}
		}

		const obj = new C();

		obj.debounced();
		obj.debounced();
		obj.debounced();

		expect(impl).not.toBeCalled();

		jest.runAllTimers();

		expect(impl).toHaveBeenCalledTimes(1);
	});
});
