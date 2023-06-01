import { words } from '../words';


export function CaseConverterFactory({ separator, letterCase, firstLetterCase }: CaseConverterFactory): CaseConverter {
	return (source: string) => {
		return words(source)
			.map(
				(word, index) =>
					word.charAt(0)[`to${ index ? letterCase : firstLetterCase }`]() +
					word.substring(1)
			)
			.join(separator);
	};
}

export interface CaseConverterFactory {
	separator: string;
	letterCase: LetterCase;
	firstLetterCase: LetterCase;
}

type LetterCase = 'UpperCase' | 'LowerCase';

export interface CaseConverter {
	(source: string): string;
}
