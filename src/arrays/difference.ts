export function difference<T>(from: T[], ...filters: T[][]): T[] {
	const filter = new Set(filters.flat());
	return from.filter(item => !filter.has(item));
}
