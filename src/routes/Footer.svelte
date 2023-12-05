<script>
	import Mailicon from '$lib/assets/MailIcon.svelte';
	import WhatsAppIcon from '$lib/assets/WhatsAppIcon.svelte';
	import InstagramIcon from '$lib/assets/InstagramIcon.svelte';
	import FacebookIcon from '$lib/assets/FacebookIcon.svelte';
	import PhoneIcon from '$lib/assets/PhoneIcon.svelte';
	import Svg from '$lib/components/Svg.svelte';
	export let logo, contactInformation, footer;
	console.log('footer', footer);
	console.log('contactInformation', contactInformation);
	$: ({ openingHours, email, phoneNumber, whatsapp, instagram, facebook } = contactInformation);
	$: ({ aboutUs, places, services, logos } = footer);
</script>

<footer class="grid gap-8 py-2 text-secondary pt-small md:pt-medium">
	<div class="container px-2 md:px-4">
		<div class="flex justify-between">
			<a href="/">
				<Svg image={logo} loading={'eager'} />
			</a>
			<ul class="flex gap-5">
				{#if logos}
					{#each logos as logo}
						<li>
							<Svg image={logo.logo} loading={'eager'} styling="w-10 h-10 md:w-12 md:h-12" />
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	</div>
	<div class="container px-2 md:px-4 grid lg:grid-cols-12 gap-5">
		<div class="col-start-1 col-end-2 lg:col-start-7 lg:col-end-13 grid grid-cols-3 gap-5">
			<div>
				<h3>Over ons</h3>
				<ul class="max-w-[18ch]">
					{#each aboutUs as item}
						<li>{item?.title}</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3>Diensten</h3>
				<ul class="max-w-[18ch]">
					{#each services as item}
						<li>{item?.title}</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3>Steden</h3>
				<ul class="max-w-[18ch]">
					{#each places as item}
						<li>{item?.title}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="col-start-1 col-end-2 lg:row-start-1 lg:col-start-1 lg:col-end-6">
			<h3>Contact</h3>
			<ul>
				{#if openingHours}
					<li class="text-dark">{openingHours}</li>
				{/if}
				{#if email}
					<li>
						<a href={email} class="flex gap-2 items-center hover:text-primary">
							<span class="flex w-full max-w-[20px]flex max-w-[20px]">
								<Mailicon />
							</span>
							info@vakkundig-verhuizingen-transport.nl
						</a>
					</li>
				{/if}
				{#if phoneNumber}
					<li>
						<a href={phoneNumber} class="flex gap-2 items-center hover:text-primary"
							><span class="flex w-full max-w-[20px]flex max-w-[20px]"><PhoneIcon /></span>085 060
							1023</a
						>
					</li>
				{/if}
				{#if whatsapp}
					<li>
						<a href={whatsapp} class="flex gap-2 items-center hover:text-primary" target="_blank"
							><span class="flex w-full max-w-[20px]flex max-w-[20px]"><WhatsAppIcon /></span
							>WhatsApp</a
						>
					</li>
				{/if}
				{#if instagram}
					<li>
						<a href={instagram} class="flex gap-2 items-center hover:text-primary" target="_blank"
							><span class="flex w-full max-w-[20px]flex max-w-[20px]"><InstagramIcon /></span
							>@vakkundigverhuizingentransport</a
						>
					</li>
				{/if}
				{#if facebook}
					<li>
						<a href={facebook} class="flex gap-2 items-center hover:text-primary" target="_blank"
							><span class="flex w-full max-w-[20px]flex max-w-[20px]"><FacebookIcon /></span
							>Facebook</a
						>
					</li>
				{/if}
			</ul>
		</div>
	</div>
	<div
		class="container px-2 md:px-4 flex flex-col md:flex-row md:justify-between gap-4 text-sm text-gray"
	>
		<ul class="flex gap-5">
			<li>1</li>
			<li>Particuliere verhuizing</li>
			<li>3</li>
		</ul>
		<p>
			© Copyright 2024 - Made by <a
				href="https://codekompaan.nl"
				class="underline hover:no-underline"
				target="_blank">CodeKompaan.nl</a
			> <span class="text-[11px]">♥</span>
		</p>
	</div>
</footer>
