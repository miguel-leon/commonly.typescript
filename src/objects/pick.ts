export interface Picker<Keys extends string> {
	<T extends object>(object: T): {
		[K in Extract<keyof T, Keys>]: T[K];
	};
}

export function pick<Args extends string[]>(...properties: Args) {
	return (
		(object: object) => Object.fromEntries(
			properties
				.filter(prop => prop in object)
				.map(prop => [prop, object[prop as never]])
		)
	) as Picker<Args[number]>;
}
