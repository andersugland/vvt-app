<script>
	import Svg from '$lib/components/Svg.svelte';
	import Button from '$lib/components/Button.svelte';
	export let logo, mainMenu, navCTA;
</script>

<header class="fixed z-50 top-0 w-full flex justify-between bg-white">
	<div class="container px-2 md:px-4 flex justify-between items-center py-6">
		<a href="/">
			<Svg image={logo} loading={'eager'} />
		</a>
		<nav>
			<button class="xl:hidden">Burger</button>
			<ul class="hidden xl:flex items-center md:gap-4 lg:gap-8">
				{#each mainMenu as item}
					<li>
						<a href="/{item?.slug?.current}">{item?.title}</a>
					</li>
				{/each}
				{#if navCTA}
					<li><Button title={navCTA?.title} link="#" size="small" /></li>
				{/if}
			</ul>
		</nav>
	</div>
</header>
