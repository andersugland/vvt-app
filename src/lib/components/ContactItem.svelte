<script>
	import MailIcon from '$lib/assets/MailIcon.svelte';
	import Svg from '$lib/components/Svg.svelte';
	export let link, icon;
</script>

<a href={link}>
	<!-- <Svg image={icon} loading={'eager'} /> -->
	<!-- <MailIcon /> -->
	{icon}
</a>
