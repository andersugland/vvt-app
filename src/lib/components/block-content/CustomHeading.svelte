<script>
	export let portableText;

	// $: ({ index, blocks, value } = portableText);
	// $: ({style} = block)

	$: ({ value } = portableText);
</script>

{#if value?.style === 'h2'}
	<h2 class="text-heading md:text-2xl">
		<slot />
	</h2>
{:else if value?.style === 'h3'}
	<h3 class="text-heading md:text-xl">
		<slot />
	</h3>
{:else if value?.style === 'h4'}
	<h4 class="text-heading md:text-lg">
		<slot />
	</h4>
{:else if value?.style === 'h4'}
	<h5 class="text-heading md:text-md">
		<slot />
	</h5>
{/if}
