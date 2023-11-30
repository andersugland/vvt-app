<script>
	import { urlFor } from '$lib/utils/image';

	export let image,
		maxWidth,
		maxHeight,
		quality = 100,
		styling,
		loading = 'lazy';

	let width = maxWidth == 'full' ? 2560 : maxWidth;
	let height = maxHeight;

	let loaded = false;

	// const imageDimensions = image?.asset?._ref.split('-')[2];
	// const [imageWidth, imageHeight] = imageDimensions.split('x').map(Number);

	const steps = [360, 414, 768, 1366, 1536, 1920];
	const baseSizes = [width, ...steps];
	const retinaSizes = Array.from(
		new Set(
			[...baseSizes],
			...baseSizes.map((size) => size * 2),
			...baseSizes.map((size) => size * 2)
		)
	)
		.sort((a, b) => a - b)
		.filter((size) => size <= width * 1.1 && size <= width * 3);

	// console.log(retinaSizes);

	const srcSet = retinaSizes.map((size) => {
		return `${urlFor(image)
			.width(size)
			.height(Math.floor(size * (height / width)))
			.quality(quality)
			.auto('format')
			.fit('max')
			.url()} ${size}w`;
	});

	// console.log(srcSet);

	console.log;
</script>

<img
	src={urlFor(image).width(width).height(height).quality(quality).auto('format').fit('max').url()}
	srcset={srcSet}
	{loading}
	alt=""
	class={`${styling} h-auto`}
	data-loaded={loaded}
	on:load={() => (loaded = true)}
	fetchPriority={loading === 'eager' ? 'high' : undefined}
	{width}
	{height}
/>
