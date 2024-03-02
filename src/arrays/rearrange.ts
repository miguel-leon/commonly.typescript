import { clamp } from '../numbers';


export function rearrange<T>(array: readonly T[], from: number, to: number, count = 1): T[] {
	from = clamp(from, -array.length, array.length - 1);
	if (from < 0) from += array.length;
	to = clamp(to, -array.length, array.length - 1);
	if (to < 0) to += array.length;

	if (from === to || count < 1) return array.slice();

	if (from < to) {
		count = Math.min(count, to - from);
		return array.slice(0, from).concat(array.slice(from + count, to + 1), array.slice(from, from + count), array.slice(to + 1));
	}
	count = Math.min(count, array.length - from);
	return array.slice(0, to).concat(array.slice(from, from + count), array.slice(to, from), array.slice(from + count));
}
