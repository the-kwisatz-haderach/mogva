<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { theme } from '$lib/stores/theme';
	import NavLink from '../NavLink/NavLink.svelte';
	import Ellipsis from '$lib/assets/icons/Ellipsis.svelte';
	import Switch from '../Switch/Switch.svelte';

	const menuItems = [
		{ label: 'Expertise', href: '/#knowledge' },
		{ label: 'Contact', href: '/#contact' },
		{ label: 'About', href: '/#about' },
		{ label: 'Resume', href: '/resume' }
	];

	export let light = false;
	let isOpen = false;
	const toggleIsOpen = () => {
		isOpen = !isOpen;
	};

	const onClick = (enabled: boolean) => {
		if (enabled) {
			theme.set('dark');
		} else {
			theme.set('light');
		}
	};
</script>

<nav class="desktop">
	<a
		class:light
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
			<NavLink {light} contrast href={item.href}>{item.label}</NavLink>
		{/each}
		<Switch enabled={$theme === 'dark'} {onClick} />
	</div>
</nav>
<nav class="mobile" class:isOpen>
	<div class="menu-container">
		<a
			class:light
			class="logo"
			role="button"
			tabindex={0}
			href="/"
			on:click={$page.url.pathname === '/'
				? (e) => {
						e.preventDefault();
						document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
				  }
				: () => {
						isOpen = false;
				  }}
		>
			M
		</a>
		<button on:click={toggleIsOpen} class:isOpen>
			<Ellipsis width={25} height={25} style="fill: white;" />
		</button>
	</div>
	{#if isOpen}
		<div class="mobile-link-container" transition:fade={{ duration: 300 }}>
			{#each menuItems as item}
				<li
					class="mobile-link"
					on:click={() => {
						isOpen = false;
					}}
				>
					<NavLink contrast href={item.href}>{item.label}</NavLink>
				</li>
			{/each}
			<div class="switch-wrapper">
				<Switch enabled={$theme === 'dark'} {onClick} />
			</div>
		</div>
	{/if}
</nav>

<style lang="scss">
	@use '$styles/mixins' as m;

	.switch-wrapper {
		margin: 2rem auto;
	}

	a.light {
		color: white;
	}

	.desktop {
		display: none;
	}

	.mobile {
		padding: 1rem;
		height: 100vh;
		position: relative;
		&.isOpen {
			position: fixed;
			inset: 0;
			overflow: hidden;
		}
	}

	.mobile-link {
		text-align: center;
		width: 100%;
		margin: 0;
		&:not(:last-child) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		}
	}

	button {
		height: 50px;
		width: 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border: none;
		background-color: transparent;
		transform: rotate(0deg);
		transition: transform 0.2s ease-in-out;
		&.isOpen {
			transform: rotate(90deg);
		}
	}

	.menu-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 100;
		position: relative;
	}

	.mobile-link-container {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		inset: 0;
		height: 100vh;
		background-color: var(--color-bg-menu);
		width: 100vw;
		z-index: 99;
	}

	.logo {
		position: relative;
		font-size: 3rem;
		line-height: 3rem;
		color: var(--color-text-contrast);
		font-family: var(--font-secondary);
		cursor: pointer;
	}

	@include m.md {
		.mobile {
			display: none;
		}

		.logo {
			font-size: 72px;
			line-height: 72px;
		}

		.link-container {
			display: flex;
			align-items: center;
			gap: 2rem;
		}
		.desktop {
			@include m.padded;
			margin-top: 2rem;
			justify-content: space-between;
			align-items: center;
			color: var(--color-text-contrast);
			display: flex;
		}
	}

	@media print {
		nav {
			display: none;
		}
	}
</style>
