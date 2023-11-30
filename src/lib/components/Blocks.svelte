<script>
	import Hero from '$lib/components/Hero.svelte';
	// import Teaser from '$lib/components/Teaser.svelte';
	// import InfoSection from '$lib/components/InfoSection.svelte';
	// import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
	// import Accordion from '$lib/components/Accordion.svelte';
	// import Media from '$lib/components/Media.svelte';
	// import AboutGrid from '$lib/components/AboutGrid.svelte';
	// import Content from '$lib/components/Content.svelte';
	// import Quote from './Quote.svelte';

	export let blocks;
	console.log('blocks1', blocks);
</script>

<div class="flex flex-col gap-12">
	{#each blocks as block}
		{#key block}
			{#if block['_type'] === 'hero'}
				<Hero data={block} />
			{/if}
			{#if block['_type'] === 'teaser'}
				<Teaser data={block} />
			{/if}
			{#if block['_type'] === 'infoSection'}
				<InfoSection data={block} />
			{/if}
			{#if block['_type'] === 'projectShowcase'}
				<ProjectShowcase data={block} />
			{/if}
			{#if block['_type'] === 'accordion'}
				<Accordion data={block} />
			{/if}
			{#if block['_type'] === 'media'}
				<Media data={block} />
			{/if}
			{#if block['_type'] === 'aboutGrid'}
				<AboutGrid data={block} />
			{/if}
			{#if block['_type'] == 'blockContent'}
				<Content data={block} />
			{/if}
			{#if block['_type'] == 'quote'}
				<Quote data={block} />
			{/if}
		{/key}
	{/each}
</div>
