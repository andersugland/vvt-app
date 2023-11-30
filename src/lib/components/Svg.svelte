<script>
	import { urlFor } from '$lib/utils/image';

	export let image,
		loading = 'lazy';

	let loaded = false;

	const imageDimensions = image?.asset?._ref.split('-')[2];
	const [imageWidth, imageHeight] = imageDimensions.split('x').map(Number);

	const aspectRatio = imageWidth / imageHeight;
</script>

<img
	src={urlFor(image).auto('format').url()}
	{loading}
	alt=""
	data-loaded={loaded}
	on:load={() => (loaded = true)}
	fetchPriority={loading === 'eager' ? 'high' : undefined}
	width={imageWidth}
	height={imageHeight}
/>
