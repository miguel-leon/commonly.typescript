import { words } from '../../strings';

import * as camelFactory from './camel';
import * as kebabFactory from './kebab';
import * as sentenceFactory from './sentence';
import * as snakeFactory from './snake';
import * as titleFactory from './title';


export namespace cases {
	export const camel = CaseConverterFactory(camelFactory);
	export const kebab = CaseConverterFactory(kebabFactory);
	export const sentence = CaseConverterFactory(sentenceFactory);
	export const snake = CaseConverterFactory(snakeFactory);
	export const title = CaseConverterFactory(titleFactory);
}


function CaseConverterFactory({ separator, letterCase, firstLetterCase }: CaseConverterFactory): CaseConverter {
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

interface CaseConverterFactory {
	separator: string;
	letterCase: LetterCase;
	firstLetterCase: LetterCase;
}

type LetterCase = 'UpperCase' | 'LowerCase';

interface CaseConverter {
	(source: string): string;
}
