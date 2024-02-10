export function filterValue<T>(array: T[], value: T) {
	return array.filter(item => item !== value);
}
