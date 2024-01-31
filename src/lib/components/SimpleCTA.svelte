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

<section class="extra-spacing pb-xs">
	<div class="grid gap-12 container px-2 md:px-4 text-center text-3xl max-w-[22ch]">
		{#if title}
			<h2>{title}</h2>
		{/if}
		{#if cta}
			<ul class="flex gap-5 justify-center items-center">
				{#each cta as item, index}
					<li>
						<Button
							title={item?.title}
							link={item?.link?.url}
							variant={index % 2 === 0 ? 'primary' : 'secondary'}
							size="lg"
						/>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
