<script lang="ts">
	import NavLink from '../NavLink/NavLink.svelte';
	import ThemeSwitch from '../ThemeSwitch.svelte';

	const menuItems = [
		{ label: 'Experience', href: '' },
		{ label: 'Services', href: '' },
		{ label: 'Contact', href: '' }
	];
</script>

<nav>
	<p class="logo">M</p>
	<div class="link-container">
		{#each menuItems as item}
			<NavLink contrast href={item.href}>{item.label}</NavLink>
		{/each}
		<!-- <div class="link-wrapper">
			<span class="inner-wrapper wrapper-15">
				<ThemeSwitch class="hover-15" />
			</span>
		</div> -->
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

	.link-container {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
</style>
