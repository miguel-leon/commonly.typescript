import { clamp } from '@src/numbers';


describe('The clamp function', () => {
	test.each`
		value    | min     | max    | expected
		${ 0 }   | ${ 0 }  | ${ 0 } | ${ 0 }
		${ 0 }   | ${ -1 } | ${ 1 } | ${ 0 }
		${ -84 } | ${ -1 } | ${ 1 } | ${ -1 }
		${ 84 }  | ${ -1 } | ${ 1 } | ${ 1 }
	`('should clamp $value to $expected on range [$min, $max]', ({ value, min, max, expected }) => {
		const result = clamp(value, min, max);
		expect(result).toEqual(expected);
	});
});
