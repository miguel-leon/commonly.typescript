export interface Omitter<Keys extends string> {
	<T extends object>(object: T): {
		[K in Exclude<keyof T, Keys>]: T[K];
	};
}

export function omit<Args extends readonly string[]>(...properties: Args) {
	const set = new Set(properties);
	return (
		(object: object) => Object.fromEntries(
			Object
				.entries(object)
				.filter(([prop]) => !set.has(prop))
		)
	) as Omitter<Args[number]>;
}
