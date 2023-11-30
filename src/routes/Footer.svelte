<script>
	import Mailicon from '$lib/assets/MailIcon.svelte';
	import WhatsAppIcon from '$lib/assets/WhatsAppIcon.svelte';
	import InstagramIcon from '$lib/assets/InstagramIcon.svelte';
	import FacebookIcon from '$lib/assets/FacebookIcon.svelte';
	import PhoneIcon from '$lib/assets/PhoneIcon.svelte';
	import Svg from '$lib/components/Svg.svelte';
	export let logo, contactInformation, footer;
	console.log('footer', footer);
	$: ({ openingHours, email, phone, whatsapp, instagram, facebook } = contactInformation);
	$: ({ aboutUs, places, services } = footer);
</script>

<footer class="grid md:gap-20 py-10 text-secondary">
	<div class="container px-2 md:px-4">
		<div class="flex justify-between">
			<a href="/">
				<Svg image={logo} loading={'eager'} />
			</a>
			<ul class="flex gap-5">
				<li>logo</li>
				<li>logo</li>
				<li>logo</li>
			</ul>
		</div>
	</div>
	<div class="container px-2 md:px-4 grid grid-cols-12">
		<div class="col-start-1 md:col-end-5 lg:col-end-6 border-2 border-secondary">
			<h3>Contact</h3>
			<ul>
				<li class="text-dark">{openingHours}</li>
				<li>
					<a href={email} class="flex gap-2 items-center hover:text-primary">
						<span class="flex w-full max-w-[20px]flex max-w-[20px]">
							<Mailicon />
						</span>
						info@vakkundig-verhuizingen-transport.nl
					</a>
				</li>
				<li>
					<a href={phone} class="flex gap-2 items-center hover:text-primary"
						><span class="flex w-full max-w-[20px]flex max-w-[20px]"><PhoneIcon /></span>085 060
						1023</a
					>
				</li>
				<li>
					<a href={whatsapp} class="flex gap-2 items-center hover:text-primary" target="_blank"
						><span class="flex w-full max-w-[20px]flex max-w-[20px]"><WhatsAppIcon /></span
						>WhatsApp</a
					>
				</li>
				<li>
					<a href={instagram} class="flex gap-2 items-center hover:text-primary" target="_blank"
						><span class="flex w-full max-w-[20px]flex max-w-[20px]"><InstagramIcon /></span
						>@vakkundigverhuizingentransport</a
					>
				</li>
				<li>
					<a href={facebook} class="flex gap-2 items-center hover:text-primary" target="_blank"
						><span class="flex w-full max-w-[20px]flex max-w-[20px]"><FacebookIcon /></span
						>Facebook</a
					>
				</li>
			</ul>
		</div>
		<div class="col-start-6 col-end-13 grid grid-cols-3 gap-5 border-2 border-primary">
			<div>
				<h3>Over ons</h3>
				<ul>
					{#each aboutUs as item}
						<li>{item?.title}</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3>Diensten</h3>
				<ul>
					{#each services as item}
						<li>{item?.title}</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3>Steden</h3>
				<ul>
					{#each places as item}
						<li>{item?.title}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="container px-2 md:px-4 flex justify-between">
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
			>
		</p>
	</div>
</footer>
