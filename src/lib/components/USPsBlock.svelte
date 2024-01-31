<script>
	import Button from '$lib/components/Button.svelte';
	import Svg from '$lib/components/Svg.svelte';
	import StarIcon from '$lib/assets/StarIcon.svelte';
	export let data;
	$: ({ title, lead, usps, googleRating, ctaTitle, cta } = data);

	const variants = {
		transparent: 'bg-transparent text-dark',
		primary: 'radial-gradient-primary text-white selection:bg-secondary',
		secondary: 'radial-gradient-secondary text-white'
	};
</script>

<section class="mt-12">
	<div class="container px-2 md:px-4 grid lg:grid-cols-12 gap-10 xl:gap-5 pb-md">
		<div class="col-start-1 lg:col-end-13 xl:col-end-6 mt-8 lg:mt-12 self-center">
			{#if title}
				<h2 class="max-w-[20ch]">{title}</h2>
			{/if}
			<div class="max-w-[50ch]">
				{#if lead}
					<p class="text-md mt-6">{lead}</p>
				{/if}
			</div>
		</div>
		{#if usps}
			<ul
				class="row-start-2 col-span-full lg:col-start-1 lg:col-end-10 xl:row-start-1 xl:col-start-7 xl:col-end-13 2xl:col-start-8 grid grid-cols-2 gap-4"
			>
				{#each usps as usp, index}
					<li
						class="grid gap-4 rounded-lg p-6 {index % 3 === 0
							? variants.primary
							: variants.secondary}"
					>
						<div class="flex justify-between">
							{#if usp.icon.logo}
								<Svg image={usp?.icon.logo} loading={'eager'} styling="w-6 h-6" />
							{/if}
							<h3 class="text-md">{usp.title}</h3>
						</div>
						{#if usp.text}
							<div class="text-s max-w-[17ch]">
								<p>{usp.text}</p>
							</div>
						{/if}
					</li>
				{/each}
				{#if googleRating}
					<div class="grid text-center">
						{#if googleRating?.score}
							<p class="text-3xl font-heading">
								{googleRating.score}
							</p>
						{/if}
						{#if googleRating?.stars}
							<p>
								{googleRating.title}
							</p>
						{/if}
						{#if googleRating?.stars}
							<ul class="flex justify-center">
								{#if googleRating.stars === 5}
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
								{:else if googleRating.stars === 4}
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
								{:else if googleRating.stars === 3}
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
								{:else if googleRating.stars === 2}
									<li><StarIcon /></li>
									<li><StarIcon /></li>
								{:else if googleRating.stars === 1}
									<li><StarIcon /></li>
								{/if}
							</ul>
						{/if}
					</div>
				{/if}
				{#if ctaTitle && cta}
					<div class="flex flex-col text-center">
						<h4 class="h-full flex items-center">{ctaTitle}</h4>
						<Button
							title={cta?.title}
							link={cta?.link?.url}
							variant={'secondary'}
							fullWidth={true}
						/>
					</div>
				{/if}
			</ul>
		{/if}
	</div>
</section>
