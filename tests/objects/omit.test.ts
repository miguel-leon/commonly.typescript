import { omit } from '@src/objects';


describe('The omit function', () => {

	const objectA = {
		prop1: 'A1',
		prop2: 'A2'
	};
	const objectB = {
		prop2: 'B2',
		prop3: 'B3'
	};

	test('omits one property from an object', () => {
		const result = omit('prop1')(objectA);

		expect(result).toEqual({
			prop2: 'A2'
		});
	});

	test('omits one property from multiple objects', () => {
		const omitter = omit('prop2');

		expect(omitter(objectA)).toEqual({
			prop1: 'A1'
		});
		expect(omitter(objectB)).toEqual({
			prop3: 'B3'
		});
	});

	test('omits multiple properties from multiple objects', () => {
		const omitter = omit('prop2', 'prop3');

		expect(omitter(objectA)).toEqual({
			prop1: 'A1',
		});
		expect(omitter(objectB)).toEqual({});
	});

	test('returns full object if none of the properties omitted exist', () => {
		const result = omit('prop4', 'prop5')(objectA);

		expect(result).toEqual(objectA);
	});
});
