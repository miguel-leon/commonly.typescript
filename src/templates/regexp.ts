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


type Flag = 'd' | 'g' | 'i' | 'm' | 's' | 'u' | 'y';
// There are 13699 possible permutations of all sizes


type Generate<Concat extends string, Next extends Flag, Rest extends Flag> =
	Next extends never ?
		never :
		(Append<`${ Concat }${ Next }`, Exclude<Rest, Next>>);

type Append<Concat extends string, Rest extends Flag> =
	Concat | Generate<Concat, Rest, Rest>;

type AllSizesPermutations<F extends Flag> =
	F extends never ?
		never :
		Append<F, Exclude<Flag, F>>;

type Flags = AllSizesPermutations<Flag>;


const no_flags_arg = _regexp.bind(undefined, '');


export const regexp: typeof no_flags_arg & { [k in Flags]: typeof no_flags_arg } = new Proxy(no_flags_arg, {
	get: (target, property: string) => _regexp.bind(undefined, property)
}) as any;
