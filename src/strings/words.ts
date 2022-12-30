export function words(source: string): string[] {
	return source.match(words.matcher) ?? [];
}

export namespace words {
	const LOWERCASE = 'a-z';
	const UPPERCASE = 'A-Z';
	const DIGIT = '\\d';

	const ALTERNATIVES = (...alternatives: string[]) => `(?:${ alternatives.join('|') })`;
	const A = (...sets: string[]) => `[${ sets.join('') }]`;
	const FOLLOWED_BY = (content: string) => `(?=${ content })`;
	const NOT_FOLLOWED_BY = (content: string) => `(?!${ content })`;
	const ONE_OR_MORE = '+';
	const NONE_OR_MORE = '*';

	const APOSTROPHE = `'${ FOLLOWED_BY(A(LOWERCASE)) }`;


	export const matcher = new RegExp(
		ALTERNATIVES(
			// starts with letter
			A(LOWERCASE, UPPERCASE) +
			ALTERNATIVES(
				A(LOWERCASE),
				DIGIT + ONE_OR_MORE + NOT_FOLLOWED_BY(A(LOWERCASE, DIGIT)),
				APOSTROPHE
			) + NONE_OR_MORE,
			// starts with number
			DIGIT + ONE_OR_MORE +
			ALTERNATIVES(
				A(LOWERCASE),
				APOSTROPHE
			) + NONE_OR_MORE
		),
		'gm'
	);
}
