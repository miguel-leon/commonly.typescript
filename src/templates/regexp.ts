function _regexp(flags: string, arg: string | TemplateStringsArray, ...rest: string[]) {
	return new RegExp(
		typeof arg === 'string' ? arg : String.raw(arg, ...rest),
		flags
	);
}


const no_flags_regexp = _regexp.bind(null, '');


export const regexp = new Proxy(no_flags_regexp, {
	get: (_, property: string) => make_transit_proxy([property])
}) as regexp;


export interface regexp {
	(pattern: string): RegExp;

	(strings: TemplateStringsArray, ...keys: string[]): RegExp;

	[k: string]: regexp & { (condition: boolean): regexp };
}


function make_transit_proxy(flags: string[]) {
	const handler = {
		get: (_: unknown, property: string) => {
			flags.push(property);
			return assertable_flag_proxy;
		}
	};
	const assertable_flag_proxy = new Proxy(
		(...args: unknown[]) => {
			if (typeof args[0] === 'boolean') {
				if (!args[0]) flags.pop();
				return asserted_flags_proxy;
			}
			return _regexp(flags.join(''), ...args as Parameters<typeof no_flags_regexp>);
		},
		handler
	);
	const asserted_flags_proxy = new Proxy(
		(...args: unknown[]) => _regexp(flags.join(''), ...args as Parameters<typeof no_flags_regexp>),
		handler
	);
	return assertable_flag_proxy;
}
