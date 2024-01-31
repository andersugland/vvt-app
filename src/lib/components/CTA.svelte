<script>
	import Image from '$lib/components/Image.svelte';
	import Button from '$lib/components/Button.svelte';
	export let data;
	$: ({ variant, image, title, lead, body, cta } = data);

	const variants = {
		sideImage: 'bg-transparent text-dark',
		fullWidthImage: 'bg-transparent text-dark',
		primary: 'radial-gradient-primary text-white selection:bg-secondary',
		secondary: 'radial-gradient-secondary text-white'
	};
</script>

<section
	class="{variants[
		variant
	]} extra-spacing min-h-[450px] md:min-h-[600px] lg:min-h-[700px] grid place-items-center"
>
	{#if variant === 'sideImage'}
		<div class="grid md:grid-cols-6 gap-8 lg:gap-12 xl:gap-20 items-center md:mb-14">
			{#if image}
				<div
					class="sm:container px-4 md:px-0 md:col-start-1 md:col-end-3 w-full h-full max-h-[450px] md:min-h-[120%]"
				>
					<Image
						{image}
						maxWidth={500}
						maxHeight={750}
						styling="w-full h-full object-cover rounded-lg md:rounded-r-lg"
					/>
				</div>
			{/if}
			<div class="md:col-start-3 md:col-end-7 container px-4 md:pr-4 md:py-12">
				<div class="grid gap-5 items-center max-w-[750px]">
					{#if title}
						<h2>{title}</h2>
					{/if}
					{#if lead}
						<p class="text-md">
							{lead}
						</p>
					{/if}
					{#if body}
						<p>
							{body}
						</p>
					{/if}
					{#if cta}
						<ul class="flex flex-col lg:flex-row gap-3 lg:gap-5 mt-4">
							{#each cta as item}
								<li>
									<Button title={item?.title} link={item?.link?.url} />
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		</div>
	{/if}
	{#if variant === 'fullWidthImage'}
		<div class="grid gap-8">
			<div
				class="sm:container md:max-w-none px-4 md:px-0 md:row-start-1 md:col-start-1 w-full h-full md:max-h-[750px] xl:max-h-[900px]"
			>
				{#if image}
					<Image
						{image}
						maxWidth={1440}
						maxHeight={1024}
						styling="w-full h-full object-cover rounded-lg md:rounded-none sm:max-h-[450px] md:max-h-none"
					/>
				{/if}
			</div>
			<div
				class="invisible pointer-events-none w-full h-full bg-gradient-to-b from-transparent via-secondary via-80% to-secondary opacity-80 md:visible md:row-start-1 md:col-start-1"
			/>
			<div
				class="md:row-start-1 md:col-start-1 container px-4 md:py-sm grid items-end md:text-white"
			>
				<div class="relative z-0 grid gap-5 max-w-[750px]">
					{#if title}
						<h2>{title}</h2>
					{/if}
					{#if lead}
						<p class="text-md">
							{lead}
						</p>
					{/if}
					{#if body}
						<p>
							{body}
						</p>
					{/if}
					{#if cta}
						<ul class="flex flex-col md:flex-row gap-3 md:gap-5 mt-4">
							{#each cta as item}
								<li>
									<Button title={item?.title} link={item?.link?.url} />
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		</div>
	{/if}
	{#if variant === 'primary' || variant === 'secondary'}
		<div class="container px-4 py-sm">
			<div class="relative z-0 grid gap-5 max-w-[750px]">
				{#if title}
					<h2>{title}</h2>
				{/if}
				{#if lead}
					<p class="text-md">
						{lead}
					</p>
				{/if}
				{#if body}
					<p>
						{body}
					</p>
				{/if}
				{#if cta}
					<ul class="flex flex-col md:flex-row gap-3 md:gap-5 mt-4">
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
	{/if}
</section>
