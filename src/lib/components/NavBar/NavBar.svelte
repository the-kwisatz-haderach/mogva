<script lang="ts">
	import { page } from '$app/stores';
	import NavLink from '../NavLink/NavLink.svelte';
	import ThemeSwitch from '../ThemeSwitch.svelte';

	const menuItems = [
		{ label: 'Expertise', href: '/#knowledge' },
		{ label: 'Contact', href: '/#contact' },
		{ label: 'About', href: '/#about' },
		{ label: 'Resume', href: '/resume' }
	];
</script>

<nav>
	<a
		class="logo"
		role="button"
		tabindex={0}
		href="/"
		on:click={$page.url.pathname === '/'
			? (e) => {
					e.preventDefault();
					document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
			  }
			: undefined}
	>
		M
	</a>
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
		color: var(--color-text-contrast);
		font-family: var(--font-secondary);
		cursor: pointer;
	}

	nav {
		@include m.padded;
		padding-top: 2rem;
		display: none;
		justify-content: space-between;
		align-items: center;
		color: var(--color-text-contrast);
	}

	.link-container {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	@include m.md {
		nav {
			display: flex;
		}
	}
</style>
