<script>
	export let link,
		title,
		size = 'regular',
		variant = 'primary',
		fullWidth = false;

	let sizeClass;

	if (size === 'regular') {
		sizeClass = 'py-[10px] px-8';
	} else if (size === 'lg') {
		sizeClass = 'py-4 px-12 text-md';
	} else {
		sizeClass = 'py-[10px] px-4';
	}
</script>

<a
	href={'#'}
	class="{fullWidth === true ? '' : 'max-w-max'} {sizeClass} {variant === 'secondary'
		? 'radial-gradient-secondary selection:bg-primary'
		: 'radial-gradient-primary'} relative text-white selection:bg-secondary rounded-[5px] font-heading font-semibold grid place-items-center cursor-pointer transition-all duration-300 ease-quint-out"
>
	{title}
</a>
