<script>
	import Svg from '$lib/components/Svg.svelte';
	import Image from '$lib/components/Image.svelte';
	export let data;
	$: ({ title, image, sertificates } = data);
</script>

<section class="extra-lg-spacing radial-gradient-secondary text-white pb-sm md:pb-md xl:pb-md">
	<div class="container px-4 grid grid-cols-3 lg:grid-cols-12 gap-x-5 gap-y-24">
		{#if image}
			<div class="col-start-2 col-end-4 lg:col-start-8 lg:col-end-13 2xl:col-end-12 pr-12 xl:pb-xs">
				<div
					class="relative w-full h-full min-h-[450px] max-h-[550px] md:min-h-[550px] xl:min-h-[700px] xl:max-h-[700px] -mt-24 before:block before:w-full before:h-full before:border-[3px] before:border-white before:absolute before:rounded-t-full before:top-8 before:left-8 lg:before:top-12 lg:before:left-12"
				>
					<Image
						image={image?.image}
						maxWidth={550}
						maxHeight={700}
						styling="relative z-0 w-full h-full object-cover rounded-t-full"
					/>
				</div>
			</div>
		{/if}
		<div class="col-start-1 col-end-4 lg:row-start-1 lg:col-end-6 lg:pt-md">
			{#if title}
				<div class="">
					<h2 class="max-w-[20ch]">{title}</h2>
				</div>
			{/if}
			{#if sertificates}
				<ul class="grid grid-cols-3 mt-8 md:mt-12 gap-8">
					{#each sertificates as sertificate}
						<li>
							<Svg image={sertificate?.logo} loading={'eager'} styling="w-28 h-28" />
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</section>
