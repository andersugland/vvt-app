<script>
	import Hero from '$lib/components/Hero.svelte';
	import Teaser from '$lib/components/Teaser.svelte';
	import Services from '$lib/components/Services.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import Sertificates from '$lib/components/Sertificates.svelte';
	import Cta from '$lib/components/CTA.svelte';
	// import InfoSection from '$lib/components/InfoSection.svelte';
	// import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
	// import Accordion from '$lib/components/Accordion.svelte';
	// import Media from '$lib/components/Media.svelte';
	// import AboutGrid from '$lib/components/AboutGrid.svelte';
	// import Content from '$lib/components/Content.svelte';
	// import Quote from './Quote.svelte';

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
			{#if block['_type'] === 'servicesBlock'}
				<Services data={block} />
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
			{#if block['_type'] === 'aboutGrid'}
				<!-- <AboutGrid data={block} /> -->
			{/if}
			{#if block['_type'] == 'blockContent'}
				<!-- <Content data={block} /> -->
			{/if}
			{#if block['_type'] == 'quote'}
				<!-- <Quote data={block} /> -->
			{/if}
		{/key}
	{/each}
</div>
