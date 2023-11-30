<script>
	export let data;
	import '../app.css';
	import './Header.svelte';
	import './Footer.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import StickyContact from '../lib/components/stickyContact.svelte';
	$: ({ mainMenu, logo, navCTA } = data.header[0]);
	$: ({ contactInformation } = data.contactInformation[0]);
	$: ({ footer } = data.footer[0]);
	console.log(data);
</script>

<div class="min-h-screen">
	<Header {logo} {mainMenu} {navCTA} />
	<StickyContact {contactInformation} />
	<slot />
	<Footer {logo} {contactInformation} {footer} />
</div>
