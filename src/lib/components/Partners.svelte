<script>
	import Svg from '$lib/components/Svg.svelte';
	export let data;
	$: ({ title, partners } = data);
</script>

<section class="container px-2 md:px-4 pt-small">
	{#if title}
		<div class="grid w-full justify-end">
			<h2 class="text-2xl max-w-[20ch] md:text-right">{title}</h2>
		</div>
	{/if}
	{#if partners}
		<ul class="grid grid-cols-2 md:grid-cols-3 mt-12 md:mt-24 gap-2">
			{#each partners as partner}
				<li class="grid place-items-center">
					<Svg image={partner?.logo} loading={'eager'} styling="w-32 h-32 lg:w-52 lg:h-52" />
				</li>
			{/each}
		</ul>
	{/if}
</section>
