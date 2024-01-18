<script>
	import QuoteIcon from '$lib/assets/QuoteIcon.svelte';
	export let data;
	$: ({ quote, quotee } = data);
</script>

<section>
	<div class="grid gap-6 container px-2 md:px-4 text-center text-3xl max-w-[22ch]">
		{#if quote}
			<div class="-scale-x-100 justify-self-start">
				<QuoteIcon />
			</div>
			<div class="grid gap-4">
				<h2>{quote}</h2>
				{#if quotee}
					<p class="text-md flex gap-2 justify-end pr-8 before:content-['—'] mb-4">
						{quotee}
					</p>
				{/if}
			</div>
			<div class="justify-self-end">
				<QuoteIcon />
			</div>
		{/if}
	</div>
</section>
