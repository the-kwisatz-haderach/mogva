<script lang="ts">
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import Typography from './Typography/Typography.svelte';
	import { cubicInOut } from 'svelte/easing';
	import Container from './Container/Container.svelte';
</script>

<header>
	<Container>
		<IntersectionObserver let:isIntersecting once>
			<div class="content-wrapper">
				<div class="text-container transition-before" class:transition-after={isIntersecting}>
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
		</IntersectionObserver>
	</Container>
</header>

<style lang="scss">
	@use '$styles/mixins' as m;

	header {
		height: calc(100vh - 3rem);
		display: flex;
		align-items: flex-end;
		margin-bottom: -3rem;
		padding-bottom: 3rem;
		padding-top: 6rem;
		@include m.linear-gradient-black-dark;
	}

	.content-wrapper {
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
		.transition-before {
			filter: blur(1rem);
			transition: filter 1s 0.5s ease-in-out;
		}
		.transition-after {
			filter: blur(0);
		}
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
