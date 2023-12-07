<script>
	export let portableText;

	// $: ({ value } = portableText);
</script>

<span class="lead">
	<slot />
</span>

<style>
	span {
		@apply text-md;
	}
</style>
