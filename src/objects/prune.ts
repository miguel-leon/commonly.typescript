export type HasOptionalProperties<T> =
	keyof T extends infer K extends keyof T ?
		undefined extends T[K] ?
			T :
			null extends T[K] ?
				T :
				'object with optional or nullable properties' :
		never;

export type NonNullableProperties<T> =
	keyof T extends infer K extends keyof T ?
		NonNullable<T[K]> extends never ?
			never :
			K :
		never;

export type Prune<T> = {
	[k in NonNullableProperties<T>]: NonNullable<T[k]>
};

export function prune<T>(object: HasOptionalProperties<T>) {
	return Object.fromEntries(
		Object.entries(object as object).filter(([, v]) => v !== undefined && v !== null)
	) as Prune<T>;
}
