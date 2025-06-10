/** @type {import('jest').Config} */

import { createDefaultPreset, pathsToModuleNameMapper } from 'ts-jest';


const tsJestPreset = createDefaultPreset();
const [[, options]] = Object.values(tsJestPreset.transform);
options.tsconfig = './tsconfig.test.json';
const { default: { compilerOptions } } = await import(options.tsconfig, { with: { type: 'json' } });

export default {
	testEnvironment: 'node',
	...tsJestPreset,
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
};
