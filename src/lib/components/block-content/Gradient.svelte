<script>
	export let portableText;

	// $: ({ value } = portableText);
</script>

<span>
	<slot />
</span>

<style>
	span {
		@apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-heading font-bold text-lg;
	}
</style>
