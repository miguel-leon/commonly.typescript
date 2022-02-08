export function intersperse<T>(item: T, every = 1) {
	return function <U>(array: U[]): (U | T)[] {
		const result = new Array(Math.max(array.length + Math.floor((array.length - 1) / every), 0));
		for (let i = 0, shift = 0; i < result.length; i++) {
			result[i] = (i + 1) % (every + 1) ?
				array[i - shift] :
				(shift++, item);
		}
		return result;
	}
}
