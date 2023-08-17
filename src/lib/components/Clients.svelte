<script lang="ts">
	import qlikLogo from '$lib/assets/images/qlik_logo.png';
	import ikeaLogo from '$lib/assets/images/ikea_logo.png';
	import heliospectraLogo from '$lib/assets/images/heliospectra_logo.webp';
	import electroluxLogo from '$lib/assets/images/electrolux_logo.png';
	import systeconLogo from '$lib/assets/images/systecon_logo.png';
	import Typography from './Typography/Typography.svelte';
	import Button from './Button/Button.svelte';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';

	const images: Array<{ src: string; alt: string }> = [
		{ src: ikeaLogo, alt: 'IKEA logo' },
		{ src: qlikLogo, alt: 'Qlik logo' },
		{ src: electroluxLogo, alt: 'Electrolux logo' },
		{ src: heliospectraLogo, alt: 'Heliospectra logo' },
		{ src: systeconLogo, alt: 'Systecon logo' }
	];
</script>

<IntersectionObserver let:isIntersecting once>
	<div class="main">
		<Typography variant="h3" class="leading" weight="700"
			>Here are some companies I've worked with</Typography
		>
		<span class="cta">
			<Button href="/resume">View resume</Button>
		</span>
		<ul>
			{#each images as image, index}
				{#if isIntersecting}
					<li transition:fade|global={{ duration: 2000, delay: 500 + index * 400 }}>
						<img src={image.src} alt={image.alt} />
					</li>
				{:else}
					<li style:visibility="hidden">
						<img src={image.src} alt={image.alt} />
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</IntersectionObserver>

<style lang="scss">
	@use '$styles/mixins' as m;
	:global(.leading) {
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 4rem;
	}
	:global(.heading) {
		margin-bottom: 3rem;
	}

	ul {
		padding: 0 2rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 4rem;
		margin-bottom: 4rem;
		opacity: 0.6;
		max-width: 1200px;
		filter: saturate(0);
		transition: opacity 0.3s ease-in-out;
	}

	.cta {
		order: 1;
	}
	.cta:hover + ul {
		opacity: 1;
		filter: saturate(0.9);
	}

	.main {
		position: relative;
		padding-top: 4rem;
		padding-bottom: 4rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	li {
		flex-basis: 20%;
		height: 4rem;
		max-height: 60px;
	}

	li > img {
		width: inherit;
		height: inherit;
		object-fit: contain;
	}
</style>
