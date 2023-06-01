import { debounce } from '../functions';


export function debounced(delay = 500) {
	return <T extends (...args: any[]) => any>(_: unknown, property: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<(...args: Parameters<T>) => void> => {
		return {
			...descriptor as any,
			value: debounce(descriptor.value!, delay)
		};
	};
}
