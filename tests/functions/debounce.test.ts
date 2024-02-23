import { debounce } from '@src/functions';

jest.useFakeTimers();


describe('The debounce function', () => {

	test('makes only last call to callback after delay time', () => {
		const callback = jest.fn();
		const debounced = debounce(callback);

		debounced('one');
		debounced('two');
		debounced('three');

		expect(callback).not.toHaveBeenCalled();

		jest.runAllTimers();

		expect(callback).toHaveBeenNthCalledWith(1, 'three');
	});

	test('preserves `this` within the callback', () => {
		const obj = {
			att: 9,
			fn() {
				expect(this.att).toBe(9);
			}
		};
		obj.fn = debounce(obj.fn);

		obj.fn();
		jest.runAllTimers();
	});
});
