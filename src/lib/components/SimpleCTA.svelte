<script>
	import Button from '$lib/components/Button.svelte';
	export let data;
	$: ({ title, cta } = data);

	const variants = {
		sideImage: 'bg-transparent text-dark',
		fullWidthImage: 'bg-transparent text-dark',
		primary: 'radial-gradient-primary text-white selection:bg-secondary',
		secondary: 'radial-gradient-secondary text-white'
	};
</script>

<section class="extra-spacing container px-4 pb-xs">
	<div class="grid gap-6 md:gap-8 text-center mx-auto">
		{#if title}
			<h2 class="max-w-[22ch] mx-auto">{title}</h2>
		{/if}
		{#if cta}
			<ul class="flex gap-5 justify-center items-center">
				{#each cta as item, index}
					<li>
						<Button
							title={item?.title}
							link={item?.link?.url}
							variant={index % 2 === 0 ? 'primary' : 'secondary'}
						/>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
