<script>
	import StarIcon from '$lib/assets/StarIcon.svelte';
	import Button from '$lib/components/Button.svelte';
	export let data;
	$: ({ variant, title, lead, body, cta, testimony } = data);

	const variants = {
		primary: 'radial-gradient-primary text-white selection:bg-secondary',
		secondary: 'radial-gradient-secondary text-white'
	};
</script>

<section class={variants[variant]}>
	{#if variant === 'primary' || variant === 'secondary'}
		<div class="container px-2 md:px-4 py-small">
			<div class="grid grid-cols-12">
				<div class="row-start-1 col-start-1 col-end-8 relative z-0 grid gap-5 max-w-[750px]">
					{#if title}
						<h2 class="text-2xl">{title}</h2>
					{/if}
					{#if lead}
						<p class="text-md">
							{lead}
						</p>
					{/if}
					{#if body}
						<p>
							{body}
						</p>
					{/if}
					{#if cta}
						<ul class="flex gap-5 mt-4">
							{#each cta as item}
								<li>
									<Button
										title={item?.title}
										link={item?.link?.url}
										variant={variant === 'primary' ? 'secondary' : 'primary'}
									/>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
				{#if testimony}
					<div
						class="row-start-1 col-start-8 col-end-12 rounded-lg p-10 {variant === 'primary'
							? variants['secondary']
							: variants['primary']}"
					>
						{#if testimony?.name}
							<h3>{testimony?.name}</h3>
						{/if}
						{#if testimony?.stars}
							<ul class="flex">
								{#if testimony.stars === 5}
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
								{:else if testimony.stars === 4}
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
								{:else if testimony.stars === 3}
									<li><StarIcon /></li>
									<li><StarIcon /></li>
									<li><StarIcon /></li>
								{:else if testimony.stars === 2}
									<li><StarIcon /></li>
									<li><StarIcon /></li>
								{:else if testimony.stars === 1}
									<li><StarIcon /></li>
								{/if}
							</ul>
						{/if}
						{#if testimony?.name}
							<p class="mt-8">{testimony?.text}</p>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</section>
