<script>
	export let portableText;

	$: ({ value } = portableText);
	$: newWindow = value.newWindow || false;
</script>

{#if value.href}
	<a href={value.href} target={newWindow ? '_blank' : undefined} class="text-blue-500">
		<slot />
	</a>
{:else}
	<slot />
{/if}

<style>
</style>
