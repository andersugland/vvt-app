<script>
	import Hero from '$lib/components/Hero.svelte';
	import Teaser from '$lib/components/Teaser.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import Sertificates from '$lib/components/Sertificates.svelte';
	import Cta from '$lib/components/CTA.svelte';
	import Content from '$lib/components/Content.svelte';
	import CardGrid from '$lib/components/CardGrid.svelte';
	import SimpleCta from './SimpleCTA.svelte';
	import Quote from './Quote.svelte';
	import USPsBlock from './USPsBlock.svelte';
	import Testimonial from './Testimonial.svelte';

	export let blocks;
</script>

<div>
	{#each blocks as block}
		{#key block}
			{#if block['_type'] === 'hero'}
				<Hero data={block} />
			{/if}
			{#if block['_type'] === 'teaser'}
				<Teaser data={block} />
			{/if}
			{#if block['_type'] === 'partners'}
				<Partners data={block} />
			{/if}
			{#if block['_type'] === 'sertificates'}
				<Sertificates data={block} />
			{/if}
			{#if block['_type'] === 'ctaBlock'}
				<Cta data={block} />
			{/if}
			{#if block['_type'] === 'simpleCTA'}
				<SimpleCta data={block} />
			{/if}
			{#if block['_type'] === 'content'}
				<Content data={block} />
			{/if}
			{#if block['_type'] == 'cardGrid'}
				<CardGrid data={block} />
			{/if}
			{#if block['_type'] == 'quote'}
				<Quote data={block} />
			{/if}
			{#if block['_type'] == 'uspsBlock'}
				<USPsBlock data={block} />
			{/if}
			{#if block['_type'] == 'testimonial'}
				<Testimonial data={block} />
			{/if}
		{/key}
	{/each}
</div>
