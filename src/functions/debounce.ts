export function debounce<Args extends unknown[]>(
	callback: (...args: Args) => void, delay = 500
): (...args: Args) => void {
	let timeoutID: number;

	return function (this: unknown, ...args: Args) {
		clearTimeout(timeoutID);
		timeoutID = setTimeout(callback.bind(this), delay, ...args);
	};
}
