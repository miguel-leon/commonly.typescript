import { debounce } from '@src/functions';

jest.useFakeTimers();


describe('The debounce function', () => {

	test('makes only last call to callback after delay time', () => {
		const callback = jest.fn();
		const debounced = debounce(callback);

		debounced('one');
		debounced('two');
		debounced('three');

		expect(callback).not.toBeCalled();

		jest.runAllTimers();

		expect(callback).toHaveBeenNthCalledWith(1, 'three');
	});
});
