<script>
	import Button from '$lib/components/Button.svelte';
	import Image from '$lib/components/Image.svelte';
	export let data;
	$: ({ variant, title, lead, cta, images } = data);
	$: ({ portraitOne, portraitTwo, landscapeOne, landscapeTwo } = data.images);
	console.log('teaser', data);

	const variants = {
		transparent: 'bg-transparent text-dark',
		primary: 'radial-gradient-primary text-white',
		secondary: 'radial-gradient-secondary text-white'
	};
</script>

<section class={variants[variant]}>
	<div class="container px-2 md:px-4 grid lg:grid-cols-12 gap-5 pb-medium">
		{#if images}
			<div class="lg:col-start-7 lg:col-end-13 grid grid-cols-6 gap-5 -mt-8 lg:-mt-12">
				{#if portraitOne}
					<div class="relative col-start-2 col-span-2 row-start-1 row-span-3 aspect-[9/14]">
						<div
							class="absolute w-full h-full rounded-lg border-[3px] {variant === 'transparent'
								? 'border-secondary'
								: 'border-white'}"
						>
							<Image
								image={portraitOne.image}
								maxWidth={250}
								maxHeight={450}
								styling="absolute inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				{/if}
				{#if portraitTwo}
					<div class="relative col-start-4 col-span-2 row-start-2 row-span-3 w-fullaspect-[9/14]">
						<div
							class="absolute ml-8 w-full h-full rounded-lg border-[3px] {variant === 'transparent'
								? 'border-primary'
								: 'border-white'}"
						>
							<Image
								image={portraitTwo.image}
								maxWidth={250}
								maxHeight={450}
								styling="absolute -inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				{/if}
				{#if landscapeOne}
					<div class="relative col-start-1 col-span-3 row-start-4 row-span-2 w-full aspect-[16/9]">
						<div
							class="absolute w-full h-full border-[3px] {variant === 'transparent'
								? 'border-primary'
								: 'border-white'} rounded-lg"
						>
							<Image
								image={landscapeOne.image}
								maxWidth={450}
								maxHeight={250}
								styling="absolute inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				{/if}
				{#if landscapeTwo}
					<div class="relative col-start-4 col-span-3 row-start-5 row-span-2 w-full aspect-[16/9]">
						<div
							class="absolute ml-8 w-full h-full border-[3px] {variant === 'transparent'
								? 'border-secondary'
								: 'border-white'} rounded-lg"
						>
							<Image
								image={landscapeTwo.image}
								maxWidth={450}
								maxHeight={250}
								styling="absolute -inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				{/if}
			</div>
		{/if}
		<div class="col-start-1 lg:col-end-6 lg:row-start-1 mt-8 lg:mt-12 self-center">
			{#if title}
				<h2 class="text-2xl max-w-[16ch]">{title}</h2>
			{/if}
			{#if lead}
				<p class="text-lead mt-4 max-w-[38ch]">{lead}</p>
			{/if}
			{#if cta}
				<ul class="flex gap-5 mt-8">
					{#each cta as item}
						<li>
							<Button
								title={item?.title}
								link={item?.link?.url}
								variant={variant === 'primary' ? 'secondary' : 'primary'}
							/>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</section>
