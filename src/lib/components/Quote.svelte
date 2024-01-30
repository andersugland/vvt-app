<script>
	import QuoteIcon from '$lib/assets/QuoteIcon.svelte';
	export let data;
	$: ({ quote, quotee } = data);
</script>

<section class="grid grid-cols-12">
	<div
		class="col-span-full md:col-start-2 md:col-end-12 grid container px-2 md:px-4 text-center text-3xl max-w-[22ch]"
	>
		{#if quote}
			<div class="-scale-x-100 justify-self-start ml-4 md:ml-0">
				<QuoteIcon />
			</div>
			<div class="grid gap-4 mt-5 mb-10 lg:mb-12">
				<h2>{quote}</h2>
				{#if quotee}
					<p class="text-md flex gap-2 justify-end pr-8 lg:pr-16 before:content-['—']">
						{quotee}
					</p>
				{/if}
			</div>
			<div class="justify-self-end mr-4 md:mr-0">
				<QuoteIcon />
			</div>
		{/if}
	</div>
</section>
