<script>
	import Github from '$lib/assets/icons/Github.svelte';
	import LinkedinIn from '$lib/assets/icons/LinkedinIn.svelte';
	import Container from './Container/Container.svelte';
	import Typography from './Typography/Typography.svelte';
	import Exercism from '$lib/assets/icons/Exercism.svelte';
	import Email from '$lib/assets/icons/Email.svelte';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import { fly } from 'svelte/transition';

	export let title = '';
	export let description = '';

	const links = [
		{
			label: 'LinkedIn',
			icon: LinkedinIn,
			href: 'https://www.linkedin.com/in/gustaf-lundstr%C3%B6m/'
		},
		{
			label: 'Email',
			icon: Email,
			href: 'mailto:gustaf.lundstrom@mogva.dev'
		},
		{
			label: 'Github',
			icon: Github,
			href: 'https://github.com/the-kwisatz-haderach'
		},
		{
			label: 'Exercism',
			icon: Exercism,
			href: 'https://exercism.org/profiles/KwisatzHaderach'
		}
	];
</script>

<Container id="contact" color="silver" maxWidth={1000}>
	<IntersectionObserver let:isIntersecting once>
		<div class="content-wrapper">
			<div class="text-container">
				<Typography variant="h2">{title}</Typography>
				<Typography weight="400">
					{description}
				</Typography>
			</div>
			<div class="options-container">
				{#if isIntersecting}
					{#each links as link, i}
						<a
							transition:fly|global={{ duration: 800, delay: 1000 + i * 100, x: '80%', y: '100%' }}
							href={link.href}
							style:visibility={isIntersecting ? 'initial' : 'hidden'}
							class="link-block"
							target="_blank"
						>
							<div class="icon-wrapper">
								<svelte:component this={link.icon} class="icon" />
							</div>
							<p class="link-label">{link.label}</p>
						</a>
					{/each}
				{/if}
			</div>
		</div>
	</IntersectionObserver>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;
	.content-wrapper {
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.options-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		flex: 1;
		align-items: flex-end;
		gap: 0.5rem;
	}

	:global(.icon-wrapper > *) {
		fill: var(--color-text-primary);
		z-index: 2;
		opacity: 0.8;
		width: 25px;
		height: 25px;
	}

	:global(.icon-wrapper:hover > *) {
		z-index: 2;
		opacity: 0.8;
	}

	.icon-wrapper {
		@include m.rounded-md;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		cursor: pointer;
		border: 1px solid transparent;
		position: relative;
		overflow: hidden;
		border-color: rgba(255, 255, 255, 0.4);
		@include m.shadow-md;
		background-size: 200% 200%;
		background-image: linear-gradient(145deg, transparent 65%, white, transparent 80%),
			linear-gradient(145deg, transparent 35%, white, transparent 70%),
			linear-gradient(145deg, transparent 0%, white, transparent 30%);
		&::before {
			@include m.rounded-md;
			background-color: rgba(255, 255, 255, 0.5);
			content: '';
			position: absolute;
			inset: 0;
			opacity: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			transition: opacity 0.3s ease-in-out;
		}
		&:hover {
			&::before {
				opacity: 1;
			}

			& + .link-label {
				opacity: 1;
			}
		}
	}

	.link-block {
		flex: 15% 1 1;
		position: relative;
	}

	.link-label {
		position: absolute;
		left: 0;
		bottom: -2rem;
		display: block;
		width: 100%;
		pointer-events: none;
		transition: opacity 0.2s ease-in-out;
		color: rgba(0, 0, 0, 0.8);
		text-align: center;
		font-weight: 500;
		opacity: 1;
		font-size: 0.8rem;
	}

	@include m.sm {
		.icon-wrapper {
			padding: 1.5rem;
		}
	}

	@include m.md {
		.link-label {
			opacity: 0;
			font-size: 0.9rem;
		}
		:global(.icon-wrapper > *) {
			width: 45px;
			height: 45px;
		}
		.options-container {
			gap: 1rem;
		}
		.icon-wrapper {
			padding: 2rem;
		}
	}
	@include m.lg {
		.text-container {
			text-align: left;
			width: 40%;
		}
		:global(.icon-wrapper > *) {
			width: 40px;
			height: 40px;
		}
		.options-container {
			gap: 1rem;
			position: relative;
			top: 0.5rem;
		}
		.icon-wrapper {
			padding: 1.5rem;
		}
	}
	@include m.xl {
		.content-wrapper {
			gap: 4rem;
		}
	}
</style>
