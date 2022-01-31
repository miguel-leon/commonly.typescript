export type HasOptionalProperties<T> =
	keyof T extends infer k ?
		k extends keyof T ?
			undefined extends T[k] ?
				T :
				null extends T[k] ?
					T :
					'object with optional or nullable properties' :
			never :
		never;

export type NonNullableProperties<T> =
	keyof T extends infer k ?
		k extends keyof T ?
			NonNullable<T[k]> extends never ?
				never :
				k :
			never :
		never;

export type Prune<T> = {
	[k in NonNullableProperties<T>]: T[k]
};

export function prune<T>(object: HasOptionalProperties<T>): Prune<T> {
	return Object.fromEntries(
		Object.entries(object).filter(([, v]) => v !== undefined && v !== null)
	) as any;
}
