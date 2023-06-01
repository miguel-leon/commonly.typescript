export function debounce<Args extends any[]>(callback: (...args: Args) => void, delay = 500): (...args: Args) => void {
	let timeoutID: any;

	return function (this: any, ...args: Args) {
		clearTimeout(timeoutID);
		timeoutID = setTimeout(callback.bind(this), delay, ...args);
	};
}
