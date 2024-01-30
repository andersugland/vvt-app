<script>
	import Button from '$lib/components/Button.svelte';
	import BlockContent from '$lib/components/BlockContent.svelte';
	export let data;
	$: ({ content } = data);
</script>

<section class="container px-2 md:px-4 grid lg:grid-cols-12 lg:gap-5 py-small">
	<div class="content lg:col-start-2 lg:col-end-10 xl:col-start-2 xl:col-end-9">
		<BlockContent {content} />
	</div>
</section>

<style lang="postcss">
	:global(.content p:not(:first-child)) {
		@apply mt-text-spacing;
	}

	:global(
			.content h1:not(:first-child),
			.content h2:not(:first-child),
			.content h3:not(:first-child),
			.content h4:not(:first-child)
		) {
		@apply mt-8;
	}

	:global(.content h1, .content h2, .content h3, .content h4, .content h5) {
		@apply mb-6;
	}

	:global(.content h1, .content h2) {
		@apply mb-8;
	}

	:global(.content h5:not(:first-child)) {
		@apply mt-4 mb-4;
	}

	:global(.content ul li) {
		@apply list-disc list-inside;
	}

	:global(.content p strong) {
		font-weight: 700;
		font-variation-settings: 'wght' 700;
	}
</style>
