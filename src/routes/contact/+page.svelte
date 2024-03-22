<script>
	import Hero from '../../lib/components/Hero.svelte';

	export let form;

	const customHero = {
		title: 'Contact Us',
		lead: 'We are here to help you. Please fill out the form below and we will get back to you as soon as possible.'
	};
</script>

<Hero data={customHero} />

<!-- <section class="radial-gradient-primary selection:bg-secondary py-sm">
	<div class="container px-4">
		<form method="POST" class="">
			<div class="grid md:grid-cols-2 gap-4">
				<input
					name="subject"
					type="text"
					placeholder="test_subject"
					class="rounded-lg bg-light px-4 py-2"
				/>
				<input
					name="email"
					type="text"
					placeholder="test_email"
					class="rounded-lg bg-light px-4 py-2"
				/>
				<input
					name="phone"
					type="phone"
					placeholder="test_phone"
					class="rounded-lg bg-light px-4 py-2"
				/>
				<textarea
					name="body"
					rows="6"
					placeholder="test_body"
					class="rounded-lg bg-light px-4 py-2"
				/>
			</div>
			<button
				type="submit"
				class="radial-gradient-secondary selection:bg-primary py-[10px] px-8 relative text-white selection:bg-secondary rounded-[5px] font-heading font-semibold grid place-items-center cursor-pointer transition-all duration-300 ease-quint-out mt-tiny"
				>Send</button
			>
		</form>
		<p class="success">{form?.success || ''}</p>
	</div>

	<form method="POST" />
</section> -->
