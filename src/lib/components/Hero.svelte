<script>
	import Button from './Button.svelte';
	import Typography from './Typography/Typography.svelte';
</script>

<div class="wrapper">
	<header>
		<div class="content-container">
			<Typography size="lg" class="ingress" color="contrast"
				>No-nonsense fullstack web development</Typography
			>
			<Typography class="heading" variant="h1" size="xxxl" color="contrast">
				Specialised in building safe, scalable, reliable & user friendly applications for the web.
			</Typography>
		</div>
		<img src="https://picsum.photos/350/500" alt="" />
	</header>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.wrapper {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	:global(.ingress) {
		text-transform: uppercase;
		opacity: 0.4;
		letter-spacing: 2px;
	}
	:global(.heading) {
		margin-top: 1rem;
		line-height: 1.2;
	}
	header {
		@include m.padded;
		min-height: calc(100vh - 120px);
		gap: 4rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-evenly;
	}

	h1 {
		font-family: var(--font-secondary);
		color: var(--color-text-contrast);
		font-size: 8rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
		position: relative;
		left: -2px;
	}

	img {
		filter: grayscale(1);
	}

	.content-container {
		max-width: 640px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 4rem;
	}
</style>
