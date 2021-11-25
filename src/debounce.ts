export function debounce<Args extends any[]>(callback: (...args: Args) => void, delay = 500): (...args: Args) => void {
	let timeoutID: any;

	return (...args: Args) => {
		clearTimeout(timeoutID);
		timeoutID = setTimeout(callback, delay, ...args);
	};
}
