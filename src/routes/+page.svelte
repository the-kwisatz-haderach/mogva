<script>
	import About from '$lib/components/About.svelte';
	import Clients from '$lib/components/Clients.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<div class="wrapper">
	<div class="inner-wrapper">
		<NavBar />
		<Hero />
		<Clients />
	</div>
	<Skills />
	<About />
	<Contact />
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.wrapper {
		position: relative;
		background-color: rgba(0, 0, 0, 0.98);
	}
	.inner-wrapper {
		@include m.linear-gradient-black;
	}
</style>
