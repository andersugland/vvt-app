<script>
	import BlockContent from '$lib/components/BlockContent.svelte';
	import Image from '$lib/components/Image.svelte';

	export let data;
	$: ({ blogReference } = data);
	$: ({ title, body, image } = blogReference);
</script>

<section class="extra-spacingmin-h-[450px] md:min-h-[600px] lg:min-h-[700px]">
	{#if image}
		<Image
			image={image?.image}
			maxWidth={2560}
			maxHeight={1440}
			styling="w-full h-full object-cover sm:max-h-[450px] lg:max-h-[650px] xl:max-h-[750px] 2xl:max-h-[850px]"
		/>
	{/if}
	{#if title || body}
		<div class="container px-4 grid md:grid-cols-12 mt-8 md:mt-12">
			<div class="md:col-span-8 grid gap-5">
				{#if title}
					<h2>
						{title}
					</h2>
				{/if}
				{#if body}
					<div class="content">
						<BlockContent content={body} />
					</div>
				{/if}
			</div>
		</div>
	{/if}
</section>
