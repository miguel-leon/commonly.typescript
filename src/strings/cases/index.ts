import { regexp } from '../../templates';

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
	const breaker = separator ?
		`(?:(^)|${ separator })` :
		'(^|[a-z](?=[A-Z]))';
	const matcher = regexp.g.m`${ breaker }(\w)`;
	const fn = (source: string) => {
		for (const k in cases) {
			source = source.replaceAll(
				(cases as any)[k].matcher,
				(_, prev, next) => `${
					prev === undefined ?
						separator :
						prev && `${ prev }${ separator }`
				}${
					next[`to${ prev === '' ? firstLetterCase : letterCase }`]()
				}`
			);
		}
		return source;
	};
	fn.matcher = matcher;
	return fn;
}


interface CaseConverterFactory {
	separator: string;
	letterCase: LetterCase;
	firstLetterCase: LetterCase;
}

type LetterCase = 'UpperCase' | 'LowerCase';

interface CaseConverter {
	(source: string): string;

	readonly matcher: RegExp;
}
