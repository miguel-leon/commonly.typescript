import { CaseConverterFactory } from './converter';

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
