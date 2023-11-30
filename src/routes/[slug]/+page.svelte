<script>
	import Blocks from '$lib/components/Blocks.svelte';
	export let data;
	console.log('slugpage', data);
	$: ({ title, blocks } = data.page);
</script>

{#if blocks}
	<Blocks {blocks} />
{/if}
