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
			<div class="header" transition:blur={transitionOptions}>
				<div class="content-container">
					<Typography size="lg" class="ingress" color="contrast">
						No-nonsense fullstack web development
					</Typography>
					<Typography class="heading" variant="h1" size="xxxl" color="contrast">
						Specialised in building safe, scalable, reliable & user friendly applications for the
						web.
					</Typography>
				</div>
				<img src="https://www.freeiconspng.com/thumbs/batman-png/batman-png-32.png" alt="" />
			</div>
		{:else}
			<div class="header" style:visibility="hidden">
				<div class="content-container">
					<Typography size="lg" class="ingress" color="contrast">
						No-nonsense fullstack web development
					</Typography>
					<Typography class="heading" variant="h1" size="xxxl" color="contrast">
						Specialised in building safe, scalable, reliable & user friendly applications for the
						web.
					</Typography>
				</div>
				<img src="https://www.freeiconspng.com/thumbs/batman-png/batman-png-32.png" alt="" />
			</div>
		{/if}
	</IntersectionObserver>
</header>

<style lang="scss">
	@use '$styles/mixins' as m;
	:global(.ingress) {
		text-transform: uppercase;
		opacity: 0.4;
		letter-spacing: 2px;
	}
	:global(.heading) {
		margin-top: 1rem;
		line-height: 1.2;
	}
	:global(.header) {
		@include m.padded;
		min-height: calc(100vh - 120px);
		gap: 4rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-evenly;
	}

	img {
		position: relative;
		width: 350px;
		top: 20px;
		display: block;
	}

	.content-container {
		max-width: 640px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 6rem;
	}
</style>
