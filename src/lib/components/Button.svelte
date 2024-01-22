<script>
	export let link,
		title,
		size = 'regular',
		variant = 'primary',
		fullWidth = false;

	let sizeClass;

	if (size === 'regular') {
		sizeClass = 'py-[10px] px-8';
	} else if (size === 'large') {
		sizeClass = 'py-[10px] px-8 text-xl';
	} else {
		sizeClass = 'py-3 px-6';
	}
</script>

<a
	href={link}
	class="{fullWidth === true ? '' : 'max-w-max'} {sizeClass} {variant === 'secondary'
		? 'radial-gradient-secondary selection:bg-primary'
		: 'radial-gradient-primary'} relative text-white selection:bg-secondary rounded-[5px] font-heading font-semibold text-sm grid place-items-center cursor-pointer transition-all duration-300 ease-quint-out hover:bg-blue"
>
	{title}
</a>
