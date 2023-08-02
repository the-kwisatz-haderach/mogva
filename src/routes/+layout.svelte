<script>
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/stores/theme';
	import '$styles/app.scss';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>
<slot />
<Footer />
