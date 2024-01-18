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

	const images = false,
		body = false;
</script>

<section class="mt-12">
	<div class="container px-2 md:px-4 grid lg:grid-cols-12 gap-5 pb-medium">
		<!-- {#if images}
			<div class="lg:col-start-7 lg:col-end-13 grid grid-cols-6 gap-5 -mt-8 lg:-mt-12">
				{#if data.images.portraitOne}
					<div class="relative col-start-2 col-span-2 row-start-1 row-span-3 aspect-[9/14]">
						<div
							class="absolute w-full h-full rounded-lg border-[3px] {variant === 'transparent'
								? 'border-secondary'
								: 'border-white'}"
						>
							<Image
								image={data.images.portraitOne.image}
								maxWidth={250}
								maxHeight={450}
								styling="absolute inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				{/if}
				{#if data.images.portraitTwo}
					<div class="relative col-start-4 col-span-2 row-start-2 row-span-3 w-fullaspect-[9/14]">
						<div
							class="absolute ml-8 w-full h-full rounded-lg border-[3px] {variant === 'transparent'
								? 'border-primary'
								: 'border-white'}"
						>
							<Image
								image={data.images.portraitTwo.image}
								maxWidth={250}
								maxHeight={450}
								styling="absolute -inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				{/if}
				{#if data.images.landscapeOne}
					<div class="relative col-start-1 col-span-3 row-start-4 row-span-2 w-full aspect-[16/9]">
						<div
							class="absolute w-full h-full border-[3px] {variant === 'transparent'
								? 'border-primary'
								: 'border-white'} rounded-lg"
						>
							<Image
								image={data.images.landscapeOne.image}
								maxWidth={450}
								maxHeight={250}
								styling="absolute inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				{/if}
				{#if data.images.landscapeTwo}
					<div class="relative col-start-4 col-span-3 row-start-5 row-span-2 w-full aspect-[16/9]">
						<div
							class="absolute ml-8 w-full h-full border-[3px] {variant === 'transparent'
								? 'border-secondary'
								: 'border-white'} rounded-lg"
						>
							<Image
								image={data.images.landscapeTwo.image}
								maxWidth={450}
								maxHeight={250}
								styling="absolute -inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				{/if}
			</div>
		{/if} -->
		<div class="col-start-1 lg:col-end-8 lg:row-start-1 mt-8 lg:mt-12 self-center">
			{#if title}
				<h2 class="text-2xl">{title}</h2>
			{/if}
			<div class="max-w-[50ch]">
				{#if lead}
					<p class="text-md mt-6">{lead}</p>
				{/if}
			</div>
		</div>
		{#if usps}
			<ul class="col-start-9 lg:col-end-13 grid grid-cols-2 gap-4">
				{#each usps as usp}
					<li class="grid gap-4 rounded-lg radial-gradient-primary p-3">
						<div class="flex">
							{#if usp.icon}
								<!-- <Svg image={usp?.icon} /> -->
								icon
							{/if}
							<h3>{usp.title}</h3>
						</div>
						{#if usp.text}
							<div class="">
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
					<div>
						{ctaTitle}
						<Button title={cta?.title} link={cta?.link?.url} variant={'secondary'} />
					</div>
				{/if}
			</ul>
		{/if}
	</div>
</section>
