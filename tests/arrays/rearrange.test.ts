import { rearrange } from '@src/arrays';


describe('The rearrange function', () => {
	test.each`
		from    | to       | count  | expected
		${ 0 }  | ${ 0 }   | ${ 0 } | ${ 'ABCDEF' }
		${ 0 }  | ${ 1 }   | ${ 0 } | ${ 'ABCDEF' }
		${ 84 } | ${ -1 }  | ${ 1 } | ${ 'ABCDEF' }
		${ 0 }  | ${ -84 } | ${ 1 } | ${ 'ABCDEF' }
		${ 0 }  | ${ 1 }   | ${ 1 } | ${ 'BACDEF' }
		${ -6 } | ${ 1 }   | ${ 1 } | ${ 'BACDEF' }
		${ 0 }  | ${ 2 }   | ${ 1 } | ${ 'BCADEF' }
		${ 0 }  | ${ 5 }   | ${ 1 } | ${ 'BCDEFA' }
		${ -6 } | ${ -1 }  | ${ 1 } | ${ 'BCDEFA' }
		${ 0 }  | ${ 1 }   | ${ 2 } | ${ 'BACDEF' }
		${ 0 }  | ${ 2 }   | ${ 2 } | ${ 'CABDEF' }
		${ -5 } | ${ 4 }   | ${ 3 } | ${ 'AEBCDF' }
		${ -2 } | ${ -4 }  | ${ 1 } | ${ 'ABECDF' }
		${ 4 }  | ${ 0 }   | ${ 1 } | ${ 'EABCDF' }
		${ -1 } | ${ 0 }   | ${ 1 } | ${ 'FABCDE' }
		${ -1 } | ${ 0 }   | ${ 3 } | ${ 'FABCDE' }
		${ 3 }  | ${ 0 }   | ${ 3 } | ${ 'DEFABC' }
		${ 3 }  | ${ 2 }   | ${ 3 } | ${ 'ABDEFC' }
		${ 4 }  | ${ 2 }   | ${ 3 } | ${ 'ABEFCD' }
		${ 1 }  | ${ 4 }   | ${ 1 } | ${ 'ACDEBF' }
		${ 4 }  | ${ 1 }   | ${ 1 } | ${ 'AEBCDF' }
		${ 0 }  | ${ 2 }   | ${ 4 } | ${ 'CABDEF' }
		${ -2 } | ${ -3 }  | ${ 4 } | ${ 'ABCEFD' }
	`('should rearrange ABCDEF to $expected moving $count elements from $from to $to', ({ from, to, count, expected }) => {
		const array = 'ABCDEF'.split('');
		const result = rearrange(array, from, to, count);
		expect(result.join('')).toEqual(expected);
	});
});
