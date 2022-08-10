export function interpolate(template: string, context: { [k: string]: any }): string {
	return template.replace(
		interpolate.matcher,
		(_, backslashes, key) => backslashes + (context[key.trim()] ?? (() => { throw new TypeError('Missing keys in context') })())
	);
}

export namespace interpolate {
	export const matcher = /(?<!\\)((?:\\\\)*)\${(.*?)(?<!\\)(?:\\\\)*}/g;
}
