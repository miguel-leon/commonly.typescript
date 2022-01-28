import { pick } from '@src/objects';


describe('The pick function', () => {

	const objectA = {
		prop1: 'A1',
		prop2: 'A2'
	};
	const objectB = {
		prop2: 'B2',
		prop3: 'B3'
	};

	test('picks one property from an object', () => {
		const result = pick('prop1')(objectA);

		expect(result).toEqual({
			prop1: 'A1'
		});
	});

	test('picks one property from multiple objects', () => {
		const picker = pick('prop2');

		expect(picker(objectA)).toEqual({
			prop2: 'A2'
		});
		expect(picker(objectB)).toEqual({
			prop2: 'B2'
		});
	});

	test('picks multiple properties from multiple objects', () => {
		const picker = pick('prop2', 'prop3');

		expect(picker(objectA)).toEqual({
			prop2: 'A2',
		});
		expect(picker(objectB)).toEqual({
			prop2: 'B2',
			prop3: 'B3'
		});
	});

	test('returns empty object if none of the properties picked exist', () => {
		const result = pick('prop4', 'prop5')(objectA);

		expect(result).toEqual({});
	});
});
