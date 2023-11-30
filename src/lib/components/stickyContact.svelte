<script>
	import WhatsAppIcon from '$lib/assets/WhatsAppIcon.svelte';
	import MailIcon from '$lib/assets/MailIcon.svelte';
	import InstagramIcon from '$lib/assets/InstagramIcon.svelte';

	export let contactInformation;
</script>

<div class="fixed top-1/3 right-2">
	<ul class="grid gap-2">
		{#if contactInformation?.email}
			<li>
				<a
					href={contactInformation?.email}
					class="block bg-white text-secondary hover:text-primary p-4 lg:p-6 rounded-md shadow-md"
				>
					<MailIcon />
				</a>
			</li>
		{/if}
		{#if contactInformation?.whatsapp}
			<li>
				<a
					href={contactInformation?.whatsapp}
					class="block bg-white text-secondary hover:text-primary p-4 lg:p-6 rounded-md shadow-md"
				>
					<WhatsAppIcon />
				</a>
			</li>
		{/if}
		{#if contactInformation?.instagram}
			<li>
				<a
					href={contactInformation?.instagram}
					class="block bg-white text-secondary hover:text-primary p-4 lg:p-6 rounded-md shadow-md"
				>
					<InstagramIcon />
				</a>
			</li>
		{/if}
	</ul>
</div>
