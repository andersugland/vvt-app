<script>
	export let portableText;

	// $: ({ index, blocks, value } = portableText);
	// $: ({style} = block)

	$: ({ value } = portableText);
</script>

{#if value?.style === 'h1'}
	<h1 class="text-3xl">
		<slot />
	</h1>
{:else if value?.style === 'h2'}
	<h3 class="text-2xl">
		<slot />
	</h3>
{:else if value?.style === 'h3'}
	<h3 class="text-xl">
		<slot />
	</h3>
{:else if value?.style === 'h4'}
	<h4 class="text-lg">
		<slot />
	</h4>
{:else if value?.style === 'h4'}
	<h5 class="text-md">
		<slot />
	</h5>
{/if}
