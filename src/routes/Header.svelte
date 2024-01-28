<script>
	import Svg from '$lib/components/Svg.svelte';
	import Button from '$lib/components/Button.svelte';
	import { afterNavigate } from '$app/navigation';
	export let logo, mainMenu, navCTA;

	const routes = {
		page: '',
		service: '/diensten',
		place: '/steden'
	};

	$: active = false;

	const toggleMainMenu = () => {
		active = !active;
	};

	afterNavigate(() => {
		active = false;
	});
</script>

<header
	class="fixed z-50 top-0 w-full flex justify-between bg-white group {active ? 'active' : ''}"
>
	<div class="container px-2 md:px-4 flex justify-between items-center py-6">
		<a href="/" class="relative z-50">
			<Svg image={logo} loading={'eager'} />
		</a>
		<nav>
			<button
				class="relative z-50 flex flex-col gap-2 justify-between w-8 h-6 xl:hidden"
				on:click={toggleMainMenu}
			>
				<span class="w-full h-[3px] {active ? 'bg-white' : 'bg-secondary'}" />
				<span class="w-full h-[3px] {active ? 'bg-white' : 'bg-secondary'}" />
				<span class="w-full h-[3px] {active ? 'bg-white' : 'bg-secondary'}" />
			</button>
			<div
				class="{active
					? 'block max-xl:absolute max-xl:z-40 max-xl:top-0 max-xl:left-0 max-xl:w-screen max-xl:h-screen max-xl:radial-gradient-secondary max-xl:text-white max-xl:grid max-xl:items-start'
					: 'hidden'} xl:block"
			>
				<ul
					class="{active
						? 'max-xl:container max-xl:px-2 max-xl:md:px-4 max-xl:grid max-xl:gap-8 max-xl:pt-medium'
						: ''} xl:flex xl:items-center xl:gap-8"
				>
					{#each mainMenu as item}
						<li>
							<a
								href={`${routes[item['_type']]}/${item?.slug?.current}`}
								class="{active
									? 'max-xl:text-lg max-xl:font-heading max-xl:font-bold'
									: ''}link-underline-inverted">{item?.title}</a
							>
						</li>
					{/each}
					{#if navCTA}
						<li><Button title={navCTA?.title} link="#" size={active ? 'large' : ''} /></li>
					{/if}
				</ul>
			</div>
		</nav>
	</div>
</header>
