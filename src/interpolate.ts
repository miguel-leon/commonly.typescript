export function interpolate(template: string, context: { [k: string]: any }): string {
	return template.replace(
		/(?<!\\)((?:\\\\)*)\${(.*?)(?<!\\)(?:\\\\)*}/g,
		(_, backslashes, key) => backslashes + (context[key.trim()] ?? (() => { throw new TypeError('Missing keys in context') })())
	);
}
