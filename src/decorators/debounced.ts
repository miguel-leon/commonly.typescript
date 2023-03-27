import { debounce } from '../functions';


export function debounced(delay = 500) {
	return (_: unknown, property: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> => {
		return {
			...descriptor,
			value: debounce(descriptor.value, delay)
		};
	};
}
