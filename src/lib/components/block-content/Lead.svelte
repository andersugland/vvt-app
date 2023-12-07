<script>
	export let portableText;

	// $: ({ value } = portableText);
</script>

<span>
	<slot />
</span>

<style>
	span {
		@apply text-md;
	}
</style>
