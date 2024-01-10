<script lang="ts">
	import type { Asset } from '$lib/storyblok/types';

	import Link from '../Link/Link.svelte';
	import Typography from '../Typography/Typography.svelte';

	export let name = '';
	export let subtitle = '';
	export let description = '';
	export let city = '';
	export let phone = '';
	export let email = '';
	export let photo: Asset | null;
</script>

<header>
	<div class="header-content">
		<img src={photo?.filename} alt={photo?.alt} />
		<div class="header-text-container">
			<Typography variant="h1" color="light" size="xxxl">{name}</Typography>
			<Typography size="lg" weight="500" color="light">
				{subtitle}
			</Typography>
			<Typography weight="400" color="light" size="sm">
				{description}
			</Typography>
			<div class="contact-details">
				<Typography class="location" color="light" weight="500" size="sm">{city}</Typography>
				<Link light href={`tel:${phone.replace(/([-()]|\s+)/g, '')}`}>{phone}</Link>
				<Link light href={`mailto:${email}`}>{email}</Link>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	@use '$styles/mixins' as m;

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
		background-image: linear-gradient(160deg, #020202, #303030);
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
		.header-content {
			gap: 1rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
			flex-direction: row;
		}
		header {
			padding: 1.5rem;
		}
		img {
			width: 200px;
			height: 200px;
			margin-bottom: 1rem;
		}
	}
</style>
