// https://lea.verou.me/2018/06/easy-dynamic-regular-expressions-with-tagged-template-literals-and-proxies/


function escape(regexp: string) {
	return regexp.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function _regexp(flags: string, strings: TemplateStringsArray, ...keys: string[]) {
	return new RegExp(
		strings.reduce((result, _string, i) => result + escape(keys[i - 1]) + _string),
		flags
	);
}


const no_flags_arg = _regexp.bind(undefined, '');


export const regexp: typeof no_flags_arg & { [k: string]: typeof no_flags_arg } = new Proxy(no_flags_arg, {
	get: (target, property: string) => _regexp.bind(undefined, property)
}) as any;
