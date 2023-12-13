<script>
	export let portableText;

	$: ({ value } = portableText);
	$: newWindow = value.newWindow || false;
</script>

{#if value.href}
	<a href={value.href} target={newWindow ? '_blank' : undefined} class="link-underline--secondary">
		<slot />
	</a>
{:else}
	<slot />
{/if}

<style>
</style>
