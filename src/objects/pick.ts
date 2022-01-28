export interface Picker<Keys extends string> {
	<T>(object: T): {
		[K in Extract<keyof T, Keys>]: T[K];
	};
}

export function pick<Args extends string[]>(...properties: Args): Picker<Args[number]> {
	return (object: any) => Object.fromEntries(
		properties
			.filter(prop => prop in object)
			.map(prop => [prop, object[prop]])
	) as any;
}
