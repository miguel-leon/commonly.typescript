export function interpolate(template: string, context: { [k: string]: any }): string {
	return template.replaceAll(
		interpolate.matcher,
		(match, ...captures) => {
			const key = captures.slice(0, -2).find(Boolean);
			if (!key) return match;

			const value = context[key];
			if (value === undefined) {
				throw new TypeError(`Missing key \`${ key }\` in context`);
			}
			return value;
		}
	);
}

export namespace interpolate {
	// eslint-disable-next-line prefer-const
	export let matcher = /\${\s*((?:\\.|[^])*?)\s*}|\\./gm;
}
