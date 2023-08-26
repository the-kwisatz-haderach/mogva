<script>
	import Link from '../Link/Link.svelte';
	import Typography from '../Typography/Typography.svelte';
</script>

<header>
	<div class="header-content">
		<img src="/cv-photo.png" alt="Gustaf Lundström" />
		<div class="header-text-container">
			<Typography variant="h1" color="contrast" size="xxxl">Gustaf Lundström</Typography>
			<Typography size="lg" weight="500" color="contrast">
				Passionate fullstack developer with management sensibilities.
			</Typography>
			<Typography weight="300" color="contrast" size="sm">
				I'm an engineer with a knack for developing well-tested, scalable solutions using
				Typescript, NodeJS, Go, React, Svelte, AWS and GCP. With a background in management and
				leadership, I'm quick to see the bigger picture, identifying ways to improve both the code
				and the way it is delivered while ensuring everybody is on the same page.
			</Typography>
			<div class="contact-details">
				<Typography class="location" color="contrast" weight="500" size="sm"
					>Stockholm, Sweden</Typography
				>
				<Link href="tel:+46729000451">(+46) 729-00 04 51</Link>
				<Link href="mailto:gustaf.lundstrom@mogva.dev">gustaf.lundstrom@mogva.dev</Link>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	@use '$styles/mixins' as m;

	:global(.location) {
		position: relative;
		bottom: 2px;
	}

	.contact-details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.9rem;
		margin-top: 1.5rem;
	}

	header {
		$border-size: 0.5rem;
		color: var(--color-text-contrast);
		@include m.linear-gradient-black;
		position: relative;
		margin-bottom: $border-size;
		&::after {
			content: '';
			position: absolute;
			bottom: -$border-size;
			left: 0;
			height: $border-size;
			width: 100%;
			@include m.linear-gradient-silver;
		}
	}

	.header-text-container {
		@include m.padded;
	}

	.header-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-top: 4rem;
		padding-bottom: 4rem;
	}

	:global(.header-text-container > p) {
		margin-top: 1rem;
	}

	img {
		width: 250px;
		height: 250px;
		border-radius: 50%;
	}

	@include m.md {
		.header-content {
			padding-top: 0;
			padding-bottom: 0;
		}
		header {
			padding: 4rem 3rem 4rem;
		}

		.contact-details {
			flex-direction: row;
			gap: 1rem;
			font-size: 0.9rem;
			margin-top: 1.5rem;
		}
		.header-content {
			display: flex;
			gap: 3rem;
		}
	}

	@include m.lg {
		.header-content {
			align-items: flex-end;
			flex-direction: row;
		}
		.header-text-container {
			padding: 0;
		}
	}

	@media print {
		header {
			padding: 2.5rem;
		}
		img {
			width: 150px;
			height: 150px;
			margin-bottom: 1rem;
		}
	}
</style>
