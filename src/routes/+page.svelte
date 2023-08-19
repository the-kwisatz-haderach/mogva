<script lang="ts">
	import { browser } from '$app/environment';
	import About from '$lib/components/About.svelte';
	import AngledSection from '$lib/components/AngledSection/AngledSection.svelte';
	import Clients from '$lib/components/Clients.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver/IntersectionObserver.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import Services from '$lib/components/Services.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import throttle from 'lodash.throttle';

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
	<div class="nav-wrapper">
		<NavBar />
	</div>
	<Hero />
	<IntersectionObserver top={-600} let:isIntersecting>
		<div>
			{#if isIntersecting && show}
				<div class="sticky" transition:fade={{ duration: 200 }}>
					<NavBar />
				</div>
			{/if}
			<AngledSection withTop>
				<Services />
				<Skills />
				<About />
				<Clients />
			</AngledSection>
		</div>
	</IntersectionObserver>
	<Footer />
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.sticky {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
	}
	.nav-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 150px;
	}
	.wrapper {
		position: relative;
		background-color: rgba(0, 0, 0, 0.95);
	}
</style>
