<script lang="ts">
	import Typography from './Typography/Typography.svelte';
	import frontendImg from '$lib/assets/images/coding.png';
	import backendImg from '$lib/assets/images/database-storage.png';
	import cloudImg from '$lib/assets/images/cloud-hosting.png';
	import testingImg from '$lib/assets/images/testing.png';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import { fade, fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import Container from './Container/Container.svelte';
	import Tag from './Tag.svelte';
	import Button from './Button/Button.svelte';

	export let title = '';
	export let description = '';
	export let skills: string[] = [];

	const blocks = [
		{ label: 'Frontend', imgSrc: frontendImg },
		{ label: 'Backend', imgSrc: backendImg },
		{ label: 'Cloud', imgSrc: cloudImg },
		{ label: 'Testing', imgSrc: testingImg }
	];
</script>

<Container id="knowledge">
	<div class="content-wrapper">
		<Typography color="contrast" variant="h2">{title}</Typography>
		<Typography narrow color="contrast">
			{description}
		</Typography>
		<IntersectionObserver let:isIntersecting once style="margin-bottom: 3rem;">
			<div class="flex">
				{#each blocks as block, index}
					{#if isIntersecting}
						<div
							style:visibility={isIntersecting ? 'initial' : 'hidden'}
							class="service"
							transition:fade={{ duration: 1000, delay: 500 + index * 500, easing: sineInOut }}
						>
							<img src={block.imgSrc} alt={block.label} />
							<Typography color="light" weight="600">{block.label}</Typography>
						</div>
					{/if}
				{/each}
			</div>
			<ul>
				{#each skills as skill, i (skill)}
					{#if isIntersecting}
						<li
							style:visibility={isIntersecting ? 'initial' : 'hidden'}
							in:fly|global={{
								y: 200,
								x: (i % 2 === 0 ? 1 : -1) * 400,
								duration: 500,
								delay: 3000 + i * 100
							}}
						>
							<Tag color="contrast">{skill}</Tag>
						</li>
					{/if}
				{/each}
			</ul>
		</IntersectionObserver>
		<Button href="/resume" style="align-self: center;" color="black">View qualifications</Button>
	</div>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;
	.content-wrapper {
		display: flex;
		flex-direction: column;
	}
	ul {
		display: none;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		gap: 8px 4px;
		margin-top: 2rem;
		flex-wrap: wrap;
		overflow: hidden;
		justify-content: center;
	}

	li {
		margin-bottom: 0 !important;
	}
	img {
		width: 40px;
		height: 40px;
		filter: grayscale(1) invert(1) brightness(1.1);
	}

	.service {
		@include m.rounded-md;
		@include m.shadow-sm;
		background-image: var(--linear-gradient-fixed-black);
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 1.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
	}

	.flex {
		margin-top: 3rem;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	@include m.sm {
		.service {
			padding: 2rem;
			gap: 1rem;
		}

		img {
			width: 70px;
			height: 70px;
		}
	}
	@include m.md {
		ul {
			display: inline-flex;
			max-height: unset;
			overflow: unset;
		}
		.content-wrapper {
			text-align: center;
		}

		img {
			width: 80px;
			height: 80px;
		}
	}

	@include m.lg {
		img {
			width: 100px;
			height: 100px;
		}
	}
</style>
