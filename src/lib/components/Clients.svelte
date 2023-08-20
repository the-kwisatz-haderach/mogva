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
	import Container from './Container/Container.svelte';

	const images: Array<{ src: string; alt: string }> = [
		{ src: ikeaLogo, alt: 'IKEA logo' },
		{ src: qlikLogo, alt: 'Qlik logo' },
		{ src: electroluxLogo, alt: 'Electrolux logo' },
		{ src: heliospectraLogo, alt: 'Heliospectra logo' },
		{ src: systeconLogo, alt: 'Systecon logo' }
	];
</script>

<Container>
	<div class="main">
		<Typography color="contrast" variant="h2">Past assignments</Typography>
		<Typography color="contrast"
			>I've had the privilege to work with a lot of different companies over the years. These are
			some of the more recent ones.</Typography
		>
		<span class="cta">
			<Button color="black" href="/resume">View resume</Button>
		</span>
		<IntersectionObserver top={-250} let:isIntersecting once>
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
		</IntersectionObserver>
	</div>
</Container>

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
		margin-top: 4rem;
		max-width: 1200px;
		filter: saturate(0) invert(1) brightness(0.8);
		transition: filter 0.3s ease-in-out;
	}

	.cta {
		order: 1;
	}
	:global(.cta:hover + * > ul) {
		filter: saturate(0) invert(1) brightness(1.5);
	}

	.main {
		position: relative;
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
