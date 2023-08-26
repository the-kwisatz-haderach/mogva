<script lang="ts">
	import { browser } from '$app/environment';
	import About from '$lib/components/About.svelte';
	import AngledSection from '$lib/components/AngledSection/AngledSection.svelte';
	import Clients from '$lib/components/Clients.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver/IntersectionObserver.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import Services from '$lib/components/Services.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import throttle from 'lodash.throttle';
	import Contact from '$lib/components/Contact.svelte';
	import Intro from '$lib/components/Intro.svelte';

	let show = false;
	let prevScrollPos = 0;
	const handleScroll = throttle(() => {
		const currentScrollPos = window?.scrollY || 0;
		show = prevScrollPos > currentScrollPos;
		prevScrollPos = window.scrollY;
	}, 200);

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<div class="wrapper">
	<Hero />
	<IntersectionObserver threshold={[0]} top={-600} let:isIntersecting>
		<div>
			{#if isIntersecting && show}
				<div class="sticky" transition:fade={{ duration: 200 }}>
					<NavBar />
				</div>
			{/if}
			<AngledSection withTop>
				<Intro />
				<Contact />
				<Services />
				<About />
				<Clients />
			</AngledSection>
		</div>
	</IntersectionObserver>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;

	.sticky {
		display: none;
	}
	.wrapper {
		position: relative;
	}

	@include m.md {
		.sticky {
			display: initial;
			width: 100%;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 10;
		}
	}
</style>
