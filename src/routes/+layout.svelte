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

<style lang="postcss">
	:global(h1, .h1) {
		@apply text-2xl md:text-3xl;
	}

	:global(h2, .h2) {
		@apply text-xl md:text-2xl;
	}

	:global(h3, .h3) {
		@apply text-lg md:text-xl;
	}

	:global(h4, .h4) {
		@apply text-md md:text-lg;
	}

	:global(h5, .h5) {
		@apply text-body md:text-md;
	}

	/* :global(section) {
		@apply min-h-[450px] md:min-h-[750px];
	} */

	:global(section:not(.hero), footer) {
		@apply mt-small md:mt-medium;
	}

	:global(section.extra-spacing) {
		@apply mt-medium md:mt-large;
	}

	/* :global(section + section:not(.overlap)) {
		@apply mt-small md:mt-medium;
	} */

	:global(section:first-child:not(.hero)) {
		@apply mt-medium md:mt-large;
	}
</style>
