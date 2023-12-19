<script>
	export let content;
	import { PortableText } from '@portabletext/svelte';
	import CustomHeading from '$lib/components/block-content/CustomHeading.svelte';
	import UrlAnnotation from '$lib/components/block-content/UrlAnnotation.svelte';
	import Lead from '$lib/components/block-content/Lead.svelte';
	import List from '$lib/components/block-content/List.svelte';
	import ListItem from '$lib/components/block-content/ListItem.svelte';
</script>

<PortableText
	value={content}
	onMissingComponent={false}
	components={{
		block: {
			h1: CustomHeading,
			h2: CustomHeading,
			h3: CustomHeading,
			h4: CustomHeading,
			h5: CustomHeading
		},
		marks: {
			link: UrlAnnotation,
			lead: Lead
		},
		list: {
			bullet: List
		}
		// listItem: {
		// 	bullet: ListItem
		// }
	}}
/>
