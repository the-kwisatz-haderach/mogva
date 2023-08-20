<script>
	import Footer from '$lib/components/Footer.svelte';
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
<div id="top" />
<slot />
<Footer />
