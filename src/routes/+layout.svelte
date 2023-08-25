<script>
	import 'intersection-observer-polyfill';
	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import { theme } from '$lib/stores/theme';
	import '$styles/app.scss';
</script>

<svelte:head>
	<title>Mogva AB | No-nonsense Fullstack Web Development</title>
	<meta
		name="description"
		content="Specialised in building safe, scalable, reliable & user friendly applications for the web."
	/>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<div class="wrapper">
	<div id="top" />
	<div class="nav-wrapper">
		<NavBar />
	</div>
	<slot />
	<Footer />
</div>

<style>
	.wrapper {
		position: relative;
	}
	.nav-wrapper {
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 150px;
	}
</style>
