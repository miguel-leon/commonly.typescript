export function debounce<Args extends any[]>(callback: (...args: Args) => any, delay = 500): (...args: Args) => Promise<void> {
	let timeoutID: any;

	return async function (this: any, ...args: Args) {
		clearTimeout(timeoutID);
		timeoutID = setTimeout(callback.bind(this), delay, ...args);
	};
}
