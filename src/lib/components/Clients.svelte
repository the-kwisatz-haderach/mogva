<script lang="ts">
	import Typography from './Typography/Typography.svelte';
	import Button from './Button/Button.svelte';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';
	import Container from './Container/Container.svelte';
	import type { Asset } from '$lib/storyblok/types';

	export let title = '';
	export let description = '';
	export let logos: Asset[] = [];
</script>

<Container>
	<div class="main">
		<Typography color="contrast" variant="h2">{title}</Typography>
		<Typography narrow color="contrast">{description}</Typography>
		<span class="cta">
			<Button color="black" href="/resume">View resume</Button>
		</span>
		<IntersectionObserver let:isIntersecting once>
			{#if isIntersecting}
				<ul>
					{#each logos as logo, index}
						<li
							style:visibility={isIntersecting ? 'initial' : 'hidden'}
							transition:fade|global={{ duration: 2000, delay: 500 + index * 400 }}
						>
							<img src={logo.filename} alt={logo.alt} />
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
		filter: var(--filter-logo);
		transition: filter 0.3s ease-in-out;
	}

	.cta {
		order: 1;
		align-self: center;
	}
	:global(.cta:hover + * > ul) {
		filter: var(--filter-logo-hover);
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
