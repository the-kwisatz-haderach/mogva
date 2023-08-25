<script lang="ts">
	import { blur, type BlurParams } from 'svelte/transition';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import Typography from './Typography/Typography.svelte';
	import { cubicInOut } from 'svelte/easing';
	import Container from './Container/Container.svelte';

	const transitionOptions: BlurParams = {
		easing: cubicInOut,
		duration: 1000,
		delay: 500,
		amount: '1rem',
		opacity: 1
	};
</script>

<header>
	<Container>
		<IntersectionObserver let:isIntersecting once>
			{#if isIntersecting}
				<div class="content-wrapper" transition:blur={transitionOptions}>
					<div class="text-container">
						<Typography styled="ingress" size="lg" color="contrast"
							>No-nonsense fullstack web development</Typography
						>
						<Typography noMargin variant="h1" size="xxxl" color="contrast">
							Specialised in building safe, scalable, reliable & user friendly applications for the
							web.
						</Typography>
					</div>
					<!-- <div class="image-container">
					<img src="https://www.freeiconspng.com/thumbs/batman-png/batman-png-32.png" alt="" />
				</div> -->
				</div>
			{:else}
				<div style:opacity={0.2} class="content-wrapper">
					<div class="text-container">
						<Typography styled="ingress" size="lg" color="contrast"
							>No-nonsense fullstack web development</Typography
						>
						<Typography noMargin variant="h1" size="xxxl" color="contrast">
							Specialised in building safe, scalable, reliable & user friendly applications for the
							web.
						</Typography>
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</Container>
</header>

<style lang="scss">
	@use '$styles/mixins' as m;
	header {
		min-height: 100vh;
		height: 100vh;
		display: flex;
		align-items: flex-end;
		margin-bottom: -3rem;
		padding-bottom: 3rem;
		padding-top: 6rem;
		@include m.linear-gradient-black-dark;
	}

	.content-wrapper {
		z-index: 10;
		gap: 2rem;
		flex-direction: column;
		display: flex;
		align-items: center;
	}

	.image-container {
		display: block;
	}

	img {
		width: 100%;
		height: auto;
		max-width: 320px;
		max-height: 452px;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
	}

	@include m.md {
		header {
			padding-top: 0;
			min-height: calc(100vh + 3rem);
		}
		.content-wrapper {
			padding-top: 8rem;
			flex-direction: row;
		}
		.text-container {
			max-width: 750px;
		}
	}
</style>
