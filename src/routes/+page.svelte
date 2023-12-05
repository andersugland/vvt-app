<script>
	import Blocks from '$lib/components/Blocks.svelte';
	export let data;
	$: ({ blocks } = data.frontPage);
</script>

{#if blocks}
	<Blocks {blocks} />
{/if}
