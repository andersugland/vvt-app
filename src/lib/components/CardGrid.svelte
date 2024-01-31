<script>
	import Image from '$lib/components/Image.svelte';
	import Svg from '$lib/components/Svg.svelte';
	import Button from '$lib/components/Button.svelte';
	export let data;
	$: ({ cards, showSertificates, sertificates } = data);

	const routes = {
		page: '',
		service: '/diensten',
		place: '/steden'
	};
</script>

<section class="container px-4 xl:py-xs">
	{#if cards || showSertificates}
		<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
			{#each cards as item}
				<li class="group w-full h-full rounded-lg">
					<a href={'#'} class="grid">
						<!-- <a href={`${routes[item['_type']]}/${item?.slug?.current}`} class="grid"> -->
						<div
							class="relative z-0 row-start-1 row-end-1 col-start-1 col-end-1 before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black before:rounded-lg before:opacity-30 after:block after:w-full after:h-full after:absolute after:top-0 after:left-0 after:backdrop-blur-[3px] after:transition-all after:duration-100 after:ease-in-out after:rounded-lg group-hover:after:backdrop-blur-0"
						>
							{#if item?.image}
								<Image
									image={item?.image}
									maxWidth={500}
									maxHeight={500}
									styling="w-full h-full object-cover rounded-lg"
								/>
							{/if}
						</div>
						<div
							class="relative z-10 row-start-1 row-end-1 col-start-1 col-end-1 w-full h-full flex flex-col justify-center items-center gap-5"
						>
							{#if item?.icon}
								<Svg image={item?.icon} loading={'eager'} styling="w-12 h-12" />
							{/if}
							{#if item?.title}
								<div class="w-full flex justify-center">
									<h3 class="text-white max-w-[10ch] text-center">
										{item?.title}
									</h3>
								</div>
							{/if}
						</div>
					</a>
				</li>
			{/each}
			{#if showSertificates}
				<li
					class="w-full h-full md:col-span-2 radial-gradient-primary rounded-lg text-white flex flex-col-reverse md:flex-row gap-16 justify-between md:items-center lg:justify-normal py-16 px-12"
				>
					<div class="h-full flex flex-col gap-8 lg:gap-16 justify-center">
						{#if sertificates?.title}
							<h2 class="max-w-[18ch]">{sertificates?.title}</h2>
						{/if}
						{#if sertificates?.cta}
							<Button
								title={sertificates?.cta?.title}
								link={sertificates?.cta?.link}
								variant="secondary"
							/>
						{/if}
					</div>
					{#if sertificates?.sertificates}
						<ul class="grid grid-cols-2 gap-16 lg:gap-8 xl:gap-16 order-2 max-w-max">
							{#each sertificates.sertificates as sertificate}
								<li class="max-w-[75px] md:max-w-[100px]">
									<Svg image={sertificate.logo} loading={'eager'} styling="w-full h-full" />
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/if}
		</ul>
	{/if}
</section>
