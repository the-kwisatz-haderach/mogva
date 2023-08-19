<script>
	import Typography from './Typography/Typography.svelte';
	import frontendImg from '$lib/assets/images/coding.png';
	import backendImg from '$lib/assets/images/database-storage.png';
	import cloudImg from '$lib/assets/images/cloud-hosting.png';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import Container from './Container/Container.svelte';

	const blocks = [
		{ label: 'Frontend', imgSrc: frontendImg },
		{ label: 'Backend', imgSrc: backendImg },
		{ label: 'Cloud', imgSrc: cloudImg }
	];
</script>

<Container id="knowledge">
	<div class="content-wrapper">
		<Typography variant="h2">Knowledge domains</Typography>
		<Typography
			>I'm profficient in the big pillars of modern web application development.</Typography
		>
		<IntersectionObserver let:isIntersecting once>
			<div class="flex">
				{#each blocks as block, index}
					{#if isIntersecting}
						<div
							class="service"
							transition:fade={{ duration: 1000, delay: 500 + index * 500, easing: sineInOut }}
						>
							<img src={block.imgSrc} alt={block.label} />
							<Typography color="contrast" weight="600">{block.label}</Typography>
						</div>
					{:else}
						<div class="service" style:visibility="hidden">
							<img src={block.imgSrc} alt={block.label} />
							<Typography color="contrast" weight="600">{block.label}</Typography>
						</div>
					{/if}
				{/each}
			</div>
		</IntersectionObserver>
	</div>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;
	img {
		width: 100px;
		height: 100px;
		filter: grayscale(1) invert(1) brightness(1.1);
	}

	.service {
		@include m.linear-gradient-black-dark;
		@include m.rounded-md;
		@include m.shadow-sm;
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 3rem 2rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}

	.content-wrapper {
		text-align: center;
	}

	.flex {
		margin-top: 2rem;
		display: flex;
		gap: 2rem;
	}
</style>
