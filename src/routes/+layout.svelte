<script>
	export let data;
	import '@fontsource/ubuntu/700.css';
	import '@fontsource-variable/rubik';
	import '../app.css';
	import './Header.svelte';
	import './Footer.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import StickyContact from '../lib/components/stickyContact.svelte';
	$: ({ mainMenu, logo, navCTA } = data.header[0]);
	$: ({ contactInformation } = data.contactInformation[0]);
	$: ({ footer } = data.footer[0]);
</script>

<div class="min-h-screen">
	<Header {logo} {mainMenu} {navCTA} />
	<StickyContact {contactInformation} />
	<slot />
	<Footer {logo} {contactInformation} {footer} />
</div>

<style>
	:global(h1, .h1) {
		@apply text-3xl;
	}

	:global(h2, .h2) {
		@apply text-2xl;
	}

	:global(h3, .h3) {
		@apply text-xl;
	}

	:global(h4, .h4) {
		@apply text-lg;
	}

	:global(h5, .h5) {
		@apply text-md;
	}
</style>
