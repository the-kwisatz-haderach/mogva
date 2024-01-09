<script lang="ts">
	import type { LandingPageBlok } from '$lib/storyblok/types';
	import { browser } from '$app/environment';
	import About from '$lib/components/About.svelte';
	import AngledSection from '$lib/components/AngledSection/AngledSection.svelte';
	import Clients from '$lib/components/Clients.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver/IntersectionObserver.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import Services from '$lib/components/Services.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import throttle from 'lodash.throttle';
	import Contact from '$lib/components/Contact.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import Hero from '../Hero.svelte';

	export let blok: LandingPageBlok;

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

<div use:storyblokEditable={blok} class="wrapper">
	<Hero title={blok.title} prefix={blok.prefix} />
	<IntersectionObserver threshold={[0]} top={-600} let:isIntersecting>
		<div>
			{#if isIntersecting && show}
				<div class="sticky" transition:fade={{ duration: 200 }}>
					<NavBar />
				</div>
			{/if}
			<AngledSection withTop>
				<Intro intro_text={blok.intro_text} />
				<Contact title={blok.contact_us_title} description={blok.contact_us_text} />
				<Services
					title={blok.experience_title}
					description={blok.experience_text}
					skills={blok.experience_skill_tags}
				/>
				<About title={blok.about_title} text={blok.about_text} />
				<Clients
					title={blok.clients_title}
					description={blok.clients_description}
					logos={blok.clients_logos}
				/>
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
