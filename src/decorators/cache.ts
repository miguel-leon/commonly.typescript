/**
 * Decorated property descriptor should only have `get`. It could be specified in the parameter type, but typescript
 * doesn't allow a narrower in the decorator signature; the argument is always `TypedPropertyDescriptor`.
 */
export function cache<T>(_target: unknown, property: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> {
	return {
		...descriptor,
		get: function (this: Record<string, T>) {
			Object.defineProperty(this, property, {
				enumerable: descriptor.enumerable!,
				configurable: descriptor.configurable!,
				value: descriptor.get!.call(this)
			});
			return this[property]!;
		}
	};
}
