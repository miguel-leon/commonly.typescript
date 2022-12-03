export function interpolate(template: string, context: { [k: string]: any }): string {
	return template.replace(
		interpolate.matcher,
		(_, start, key) => {
			const value = context[key];
			if (value === undefined) {
				throw new TypeError(`Missing key \`${ key }\` in context`);
			}
			return start + value;
		}
	);
}

export namespace interpolate {
	export const matcher = /((?:[^\\]|^)(?:\\\\)*)\${\s*((?:\\.|[^\\])*?)\s*}/gm;
}
