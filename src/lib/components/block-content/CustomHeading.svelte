<script>
	export let portableText;

	// $: ({ index, blocks, value } = portableText);
	// $: ({style} = block)

	$: ({ value } = portableText);
</script>

{#if value?.style === 'h1'}
	<h1 class="text-3xl-TEST">
		<slot />
	</h1>
{:else if value?.style === 'h2'}
	<h2 class="text-2xl-TEST">
		<slot />
	</h2>
{:else if value?.style === 'h3'}
	<h3 class="text-xl-TEST">
		<slot />
	</h3>
{:else if value?.style === 'h4'}
	<h4 class="text-lg-TEST">
		<slot />
	</h4>
{:else if value?.style === 'h4'}
	<h5 class="text-md-TEST">
		<slot />
	</h5>
{/if}
