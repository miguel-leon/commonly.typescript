import { intersperse } from '@src/arrays';

describe('The intersperse function', () => {

	test.each`
		initial		| every		| expected
		${ 0 }		| ${ 1 }	| ${ 0 }
		${ 1 }		| ${ 1 }	| ${ 1 }
		${ 2 }		| ${ 1 }	| ${ 3 }
		${ 4 }		| ${ 1 }	| ${ 7 }
		${ 1 }		| ${ 2 }	| ${ 1 }
		${ 2 }		| ${ 2 }	| ${ 2 }
		${ 3 }		| ${ 2 }	| ${ 4 }
		${ 8 }		| ${ 4 }	| ${ 9 }
		${ 10 }		| ${ 4 }	| ${ 12 }
	`('from initial length $initial, every $every results in final length $expected', ({ initial, every, expected }) => {
		const result = intersperse(null, every)(new Array(initial));
		expect(result.length).toBe(expected);
	});

	test.each`
		array						| every		| expected
		${ [1, 2] }					| ${ 1 }	| ${ [1, 'X', 2] }
		${ [1, 2, 3] }				| ${ 1 }	| ${ [1, 'X', 2, 'X', 3] }
		${ [1, 2, 3, 4] }			| ${ 2 }	| ${ [1, 2, 'X', 3, 4] }
		${ [1, 2, 3, 4, 5] }		| ${ 2 }	| ${ [1, 2, 'X', 3, 4, 'X', 5] }
	`('from $array, every $every results in $expected', ({ array, every, expected }) => {
		const result = intersperse('X', every)(array as number[]);
		expect(result).toEqual(expected);
	});
});
