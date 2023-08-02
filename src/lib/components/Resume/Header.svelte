<script>
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
				<span>Stockholm, Sweden</span>
				<a class="contrast" href="tel:+46729000451">(+46) 729-00 04 51</a>
				<a class="contrast" href="mailto:gustaflundstr90@gmail.com">gustaflundstr90@gmail.com</a>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	@use '$styles/mixins' as m;

	.contact-details {
		display: flex;
		gap: 1rem;
		font-size: 0.9rem;
		margin-top: 1.5rem;
		& > * {
			opacity: 0.6;
			transition: opacity 0.2s ease-in-out;
		}
		& > a:hover {
			opacity: 1;
		}
	}

	header {
		$border-size: 0.5rem;
		color: var(--color-text-contrast);
		padding: 4rem 3rem 4rem;
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

	.header-content {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	:global(.header-text-container > p) {
		margin-top: 1rem;
	}

	img {
		width: 250px;
		height: 250px;
		border-radius: 50%;
	}

	@media print {
		header {
			padding: 2.5rem;
		}
		img {
			width: 150px;
			height: 150px;
		}
	}
</style>
