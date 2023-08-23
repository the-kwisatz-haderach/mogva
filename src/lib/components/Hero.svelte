<script lang="ts">
	import { blur, type BlurParams } from 'svelte/transition';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import Typography from './Typography/Typography.svelte';
	import { cubicInOut } from 'svelte/easing';

	const transitionOptions: BlurParams = {
		easing: cubicInOut,
		duration: 1000,
		delay: 500,
		amount: '1rem',
		opacity: 1
	};
</script>

<header>
	<IntersectionObserver let:isIntersecting once>
		{#if isIntersecting}
			<div
				style:visibility={isIntersecting ? 'initial' : 'hidden'}
				class="content-wrapper"
				transition:blur={transitionOptions}
			>
				<div class="text-container">
					<Typography styled="ingress" size="lg" color="contrast"
						>No-nonsense fullstack web development</Typography
					>
					<Typography noMargin variant="h1" size="xxxl" color="contrast">
						Specialised in building safe, scalable, reliable & user friendly applications for the
						web.
					</Typography>
				</div>
				<div class="image-container">
					<img src="https://www.freeiconspng.com/thumbs/batman-png/batman-png-32.png" alt="" />
				</div>
			</div>
		{/if}
	</IntersectionObserver>
</header>

<style lang="scss">
	@use '$styles/mixins' as m;
	header {
		min-height: calc(100vh + 3rem);
		height: 100%;
		margin-bottom: -3rem;
		padding-bottom: 3rem;
		@include m.linear-gradient-black-dark;
	}

	.content-wrapper {
		@include m.padded;
		height: 100%;
		padding-top: 2rem;
		gap: 2rem;
		flex-direction: column;
		display: flex;
		align-items: flex-end;
		justify-content: space-evenly;
	}

	.image-container {
		width: 100%;
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
		.content-wrapper {
			flex-direction: row;
		}
		.text-container {
			max-width: 640px;
		}
	}
</style>
