<script>
	import BlockContent from '$lib/components/BlockContent.svelte';
	import Button from '$lib/components/Button.svelte';
	import Image from '$lib/components/Image.svelte';
	export let data;
	$: ({ variant, title, lead, body, cta, images } = data);

	const variants = {
		transparent: 'bg-transparent text-dark',
		primary: 'radial-gradient-primary text-white selection:bg-secondary pb-sm',
		secondary: 'radial-gradient-secondary text-white pb-sm'
	};
</script>

<section class="{variants[variant]} extra-spacing">
	<div class="relative container px-4 grid xl:grid-cols-12 gap-5">
		{#if images}
			<div class="xl:col-start-7 xl:col-end-13 pr-4 md:pr-8">
				<div class="grid grid-cols-6 gap-2 md:gap-5 -mt-8 lg:-mt-12">
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
									styling="absolute inset-x-2 md:inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>
					{/if}
					{#if data.images.portraitTwo}
						<div
							class="relative col-start-4 col-span-2 row-start-2 row-span-3 w-full aspect-[9/14]"
						>
							<div
								class="absolute ml-4 md:ml-8 w-full h-full rounded-lg border-[3px] {variant ===
								'transparent'
									? 'border-primary'
									: 'border-white'}"
							>
								<Image
									image={data.images.portraitTwo.image}
									maxWidth={250}
									maxHeight={450}
									styling="absolute -inset-x-2 md:-inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>
					{/if}
					{#if data.images.landscapeOne}
						<div
							class="relative col-start-1 col-span-3 row-start-5 row-span-2 w-full aspect-[16/9]"
						>
							<div
								class="absolute w-full h-full border-[3px] {variant === 'transparent'
									? 'border-primary'
									: 'border-white'} rounded-lg"
							>
								<Image
									image={data.images.landscapeOne.image}
									maxWidth={450}
									maxHeight={250}
									styling="absolute inset-x-2 md:inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>
					{/if}
					{#if data.images.landscapeTwo}
						<div
							class="relative col-start-4 col-span-3 row-start-6 row-span-2 w-full aspect-[16/9]"
						>
							<div
								class="absolute ml-4 md:ml-8 w-full h-full border-[3px] {variant === 'transparent'
									? 'border-secondary'
									: 'border-white'} rounded-lg"
							>
								<Image
									image={data.images.landscapeTwo.image}
									maxWidth={450}
									maxHeight={250}
									styling="absolute -inset-x-2 md:-inset-x-4 -inset-y-4 w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/if}
		<div class="col-start-1 xl:col-end-6 xl:row-start-1 mt-8 lg:mt-12 self-center">
			{#if title}
				<h2 class="max-w-[16ch]">{title}</h2>
			{/if}
			<div class="max-w-[50ch]">
				{#if lead}
					<p class="text-md mt-6">{lead}</p>
				{/if}
				{#if body}
					<p class="mt-4">{body}</p>
				{/if}
			</div>
			{#if cta}
				<ul class="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-8">
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
