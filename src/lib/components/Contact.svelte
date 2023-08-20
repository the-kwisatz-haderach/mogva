<script>
	import Github from '$lib/assets/icons/Github.svelte';
	import LinkedinIn from '$lib/assets/icons/LinkedinIn.svelte';
	import Container from './Container/Container.svelte';
	import Typography from './Typography/Typography.svelte';
	import Exercism from '$lib/assets/icons/Exercism.svelte';
	import Email from '$lib/assets/icons/Email.svelte';

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

<Container id="contact" color="silver" maxWidth={800}>
	<div class="content-wrapper">
		<div class="text-container">
			<Typography variant="h2">Get in touch</Typography>
			<Typography weight="400">
				Do you need help tackling a challenging problem or project? Drop me a line on LinkedIn, or
				send me an email.
			</Typography>
		</div>
		<div class="options-container">
			{#each links as link}
				<a href={link.href} class="link-block" target="_blank">
					<div class="icon-wrapper">
						<svelte:component this={link.icon} width={45} height={45} />
					</div>
					<p class="link-label">{link.label}</p>
				</a>
			{/each}
		</div>
	</div>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;
	.content-wrapper {
		display: flex;
		align-items: flex-end;
		gap: 3rem;
	}

	.text-container {
		margin-bottom: 8px;
	}

	.options-container {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		gap: 1rem;
	}

	:global(.icon-wrapper > *) {
		fill: var(--color-text-primary);
		z-index: 2;
		opacity: 0.8;
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
		padding: 1.5rem;
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
		opacity: 0;
		font-size: 0.9rem;
	}
</style>
