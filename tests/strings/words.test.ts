import { words } from '@src/strings';

describe('The word function', () => {
	test(
		`should split words in the following manner:
			- can start with letter or number.
			- can end with a number, but starting with a number has priority.
			- can have an apostrophe followed by a letter.
			- can't have uppercase letters in the middle; it's considered the start of a new word.`,
		() => {
			expect(words('this1sIt')).toEqual(['this', '1s', 'It']);

			expect(words('Hell0 It\'s Me')).toEqual(['Hell0', 'It\'s', 'Me']);

			expect(words('heLLoTherE')).toEqual(['he', 'L', 'Lo', 'Ther', 'E']);

			expect(words('1stNumber69')).toEqual(['1st', 'Number69']);

			expect(words('1stNumber69th')).toEqual(['1st', 'Number', '69th']);
		}
	);
});
