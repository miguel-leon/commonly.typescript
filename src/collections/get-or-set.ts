export function getOrSet<K, V>(map: Map<K, V>, key: K, factory: (map: Map<K, V>) => V): V {
	let value = map.get(key);
	if (value === undefined) {
		value = factory(map);
		map.set(key, value);
	}
	return value;
}
