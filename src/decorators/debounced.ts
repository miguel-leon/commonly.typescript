import { debounce } from '../functions';


export function debounced(delay = 500) {
	return <T extends (...args: any[]) => void | Promise<void>>(
		_: unknown, __: string | symbol,
		descriptor: TypedPropertyDescriptor<T>
	): TypedPropertyDescriptor<T> => {
		return {
			...descriptor as any,
			value: debounce(descriptor.value!, delay)
		};
	};
}
