<script lang="ts">
	import NavLink from '../NavLink/NavLink.svelte';
	import ThemeSwitch from '../ThemeSwitch.svelte';

	const menuItems = [
		{ label: 'Experience', href: '#knowledge' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#contact' },
		{ label: 'Resume', href: '/resume' }
	];
</script>

<nav>
	<p
		class="logo"
		role="button"
		tabindex={0}
		on:click={() => {
			document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
		}}
	>
		M
	</p>
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
		cursor: pointer;
	}

	nav {
		@include m.padded;
		padding-top: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--color-text-contrast);
	}

	.link-container {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
</style>
