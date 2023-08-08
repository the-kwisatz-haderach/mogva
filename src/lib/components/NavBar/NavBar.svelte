<script lang="ts">
	import Typography from '../Typography/Typography.svelte';

	const menuItems = [
		{ label: 'About', href: '' },
		{ label: 'Services', href: '' },
		{ label: 'Contact', href: '' }
	];
</script>

<nav>
	<p class="logo">M</p>
	<div class="link-container">
		{#each menuItems as item}
			<a href={item.href}>{item.label}</a>
		{/each}
	</div>
</nav>

<style lang="scss">
	@use '$styles/mixins' as m;

	.logo {
		position: relative;
		font-size: 72px;
		line-height: 72px;
		font-family: var(--font-secondary);
		color: var(--color-text-contrast);
	}

	nav {
		@include m.padded;
		padding-top: 60px;
		display: flex;
		justify-content: space-between;
	}

	a {
		transition: color 0.5s ease-in-out;
		position: relative;
		height: fit-content;
		padding: 4px 8px;
		z-index: 1;
		&::before {
			transition: clip-path 0.1s ease-in;
			z-index: -1;
			clip-path: polygon(100% 0%, 100% 0%, 75% 100%, 75% 100%);
			display: inline;
			content: '';
			position: absolute;
			top: -10%;
			left: -30%;
			height: 120%;
			width: 160%;
			@include m.linear-gradient-silver;
		}
		&:hover {
			color: black;
			text-decoration: none;
		}
		&:hover::before {
			clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
		}
	}

	.link-container {
		display: flex;
		gap: 2rem;
	}
</style>
