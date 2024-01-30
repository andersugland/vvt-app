<script>
	import Button from '$lib/components/Button.svelte';
	import Image from '$lib/components/Image.svelte';
	export let data;
	$: ({ image, title, lead, cta } = data);
</script>

<section class="hero grid">
	{#if image}
		<div class="col-start-1 row-start-1 h-full min-h-screen max-h-screen">
			<Image {image} maxWidth={2560} maxHeight={1440} styling="w-full h-full object-cover" />
		</div>
	{/if}
	<div
		class="col-start-1 row-start-1 container px-2 md:px-4 grid grid-cols-12 gap-5 pt-large pb-medium"
	>
		<div class="col-start-1 col-end-6 self-end">
			{#if title}
				<h1>{title}</h1>
			{/if}
			{#if lead}
				<p class="text-md mt-4">{lead}</p>
			{/if}
			{#if cta}
				<ul class="flex gap-5 mt-8">
					{#each cta as item}
						<li>
							<Button title={item?.title} link={item?.link?.url} />
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</section>
