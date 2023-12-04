<script>
	export let link,
		title,
		size = 'regular',
		variant = 'primary';

	let sizeClass;

	if (size === 'regular') {
		sizeClass = 'py-[10px] px-8';
	} else if (size === 'large') {
		sizeClass = 'py-[10px] px-8 text-body';
	} else {
		sizeClass = 'py-3 px-6';
	}
</script>

<a
	href={link}
	class="{sizeClass} {variant === 'secondary'
		? 'radial-gradient-secondary'
		: 'radial-gradient-primary'} relative text-white rounded-[5px] font-heading font-semibold text-sm grid place-items-center max-w-max cursor-pointer transition-all duration-300 ease-quint-out hover:bg-blue"
>
	{title}
</a>
