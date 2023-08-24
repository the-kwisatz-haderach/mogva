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
		{ src: qlikLogo, alt: 'Qlik logo' },
		{ src: ikeaLogo, alt: 'IKEA logo' },
		{ src: electroluxLogo, alt: 'Electrolux logo' },
		{ src: heliospectraLogo, alt: 'Heliospectra logo' },
		{ src: systeconLogo, alt: 'Systecon logo' }
	];
</script>

<Container>
	<div class="main">
		<Typography color="contrast" variant="h2">Past assignments</Typography>
		<Typography narrow color="contrast"
			>I've had the privilege to work with a lot of different companies over the years. These are
			some of the more recent ones.</Typography
		>
		<span class="cta">
			<Button color="black" href="/resume">View resume</Button>
		</span>
		<IntersectionObserver let:isIntersecting once>
			{#if isIntersecting}
				<ul>
					{#each images as image, index}
						<li
							style:visibility={isIntersecting ? 'initial' : 'hidden'}
							transition:fade|global={{ duration: 2000, delay: 500 + index * 400 }}
						>
							<img src={image.src} alt={image.alt} />
						</li>
					{/each}
				</ul>
			{/if}
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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1.5rem;
		margin-bottom: 2rem;
		margin-top: 2rem;
		filter: saturate(0) invert(1) brightness(0.8);
		transition: filter 0.3s ease-in-out;
	}

	.cta {
		order: 1;
		align-self: center;
	}
	:global(.cta:hover + * > ul) {
		filter: saturate(0) invert(1) brightness(1.5);
	}

	.main {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	li {
		flex-basis: 20%;
		height: 1.5rem;
		max-height: 20px;
	}

	li > img {
		width: inherit;
		height: inherit;
		object-fit: contain;
	}

	@include m.md {
		.main {
			text-align: center;
		}
		ul {
			gap: 3rem;
			margin-bottom: 4rem;
			margin-top: 4rem;
		}
		li {
			flex-basis: 20%;
			height: 3rem;
			max-height: 60px;
		}
	}
	@include m.lg {
		.main {
			text-align: center;
		}
		ul {
			gap: 3rem;
			margin-bottom: 4rem;
			margin-top: 4rem;
		}
		li {
			flex-basis: 20%;
			height: 4rem;
			max-height: 60px;
		}
	}
</style>
