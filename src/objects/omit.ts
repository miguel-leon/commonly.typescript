export interface Omitter<Keys extends string> {
	<T>(object: T): {
		[K in Exclude<keyof T, Keys>]: T[K];
	};
}

export function omit<Args extends string[]>(...properties: Args): Omitter<Args[number]> {
	const set = new Set(properties);
	return (object: any) => Object.fromEntries(
		Object
			.entries(object)
			.filter(([prop]) => !set.has(prop))
	) as any;
}
